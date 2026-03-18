"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Check, 
  User, 
  Code, 
  Palette, 
  Cpu, 
  AlertCircle, 
  Zap, 
  ArrowRight,
  ChevronLeft,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

interface Role {
  id: string;
  title: string;
  icon: React.ReactNode;
  status: 'empty' | 'filled' | 'you';
  suggestion?: string;
  skills?: string[];
}

const INITIAL_ROLES: Role[] = [
  { 
    id: 'frontend', 
    title: 'Frontend', 
    icon: <Code className="w-5 h-5" />, 
    status: 'you',
    skills: ['React', 'Tailwind', 'TypeScript']
  },
  { 
    id: 'backend', 
    title: 'Backend', 
    icon: <Cpu className="w-5 h-5" />, 
    status: 'empty',
    suggestion: 'you need this'
  },
  { 
    id: 'designer', 
    title: 'Designer', 
    icon: <Palette className="w-5 h-5" />, 
    status: 'empty',
    suggestion: "don't make it ugly"
  },
  { 
    id: 'ai', 
    title: 'AI/ML', 
    icon: <Sparkles className="w-5 h-5" />, 
    status: 'empty',
    suggestion: "if you're serious"
  },
];

const SUGGESTED_TEAMMATES = [
  {
    name: "Aryan K.",
    role: "Backend Wizard",
    skills: ["Node.js", "PostgreSQL", "Redis"],
    match: 98,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aryan"
  },
  {
    name: "Sanya M.",
    role: "UI/UX God",
    skills: ["Figma", "Prototyping", "Motion"],
    match: 94,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanya"
  }
];

const MakeTeam = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState<Role[]>(INITIAL_ROLES);
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);

  const teamStrength = useMemo(() => {
    const filledCount = roles.filter(r => r.status !== 'empty').length;
    return Math.round((filledCount / roles.length) * 100);
  }, [roles]);

  const insights = useMemo(() => {
    const list = [];
    if (roles.find(r => r.id === 'backend' && r.status === 'empty')) {
      list.push({ text: "Missing backend (big problem)", type: "error" });
    }
    if (roles.find(r => r.id === 'designer' && r.status === 'empty')) {
      list.push({ text: "No designer (it'll look mid)", type: "warning" });
    }
    if (teamStrength < 50) {
      list.push({ text: "Team is looking thin", type: "info" });
    } else {
      list.push({ text: "Squad is coming together", type: "success" });
    }
    return list;
  }, [roles, teamStrength]);

  const handleAddRole = (id: string) => {
    setRoles(prev => prev.map(r => 
      r.id === id ? { ...r, status: 'filled' } : r
    ));
    toast.success(`${roles.find(r => r.id === id)?.title} added to squad!`);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sora selection:bg-[#7be382] selection:text-black">
      {/* Header */}
      <nav className="p-6 flex items-center justify-between border-b border-white/5">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="text-xl font-bold font-mono tracking-tighter">CLANUP</div>
        <div className="w-20" /> {/* Spacer */}
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Top Section */}
          <header className="space-y-4">
            <Badge variant="outline" className="border-[#7be382] text-[#7be382] px-3 py-1 rounded-full">
              Step 2 — Build Your Squad
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">
              Build a Team <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                That Doesn't Suck
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-md">
              Pick roles. Fill gaps. Start building.
            </p>
          </header>

          {/* Role Builder */}
          <section className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Role Builder</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roles.map((role) => (
                <motion.div
                  key={role.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  className={`relative group cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300 ${
                    role.status === 'you' 
                      ? 'border-[#7be382] bg-[#7be382]/5' 
                      : role.status === 'filled'
                      ? 'border-white/20 bg-white/5'
                      : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                  }`}
                  onClick={() => role.status === 'empty' && handleAddRole(role.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${
                      role.status === 'you' ? 'bg-[#7be382] text-black' : 'bg-white/10 text-white'
                    }`}>
                      {role.icon}
                    </div>
                    {role.status === 'you' ? (
                      <Badge className="bg-[#7be382] text-black">YOU</Badge>
                    ) : role.status === 'filled' ? (
                      <Check className="text-[#7be382] w-6 h-6" />
                    ) : (
                      <Plus className="text-gray-600 group-hover:text-white transition-colors" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{role.title}</h3>
                  <p className="text-sm text-gray-500">
                    {role.status === 'empty' ? (
                      <span className="italic">({role.suggestion})</span>
                    ) : (
                      role.skills?.join(' • ') || 'Ready to build'
                    )}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Suggested Teammates */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">
                People you should probably team up with
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SUGGESTED_TEAMMATES.map((person, i) => (
                <Card key={i} className="bg-white/[0.03] border-white/5 hover:border-white/10 transition-all overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img src={person.avatar} alt={person.name} className="w-12 h-12 rounded-full bg-white/10" />
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-lg text-white">{person.name}</h4>
                          <span className="text-[#7be382] text-xs font-bold">{person.match}% Match</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">{person.role}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {person.skills.map(skill => (
                            <Badge key={skill} variant="secondary" className="bg-white/5 text-gray-400 text-[10px]">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          variant="outline" 
                          className="w-full border-white/10 hover:bg-[#7be382] hover:text-black hover:border-[#7be382] transition-all group-hover:translate-y-0"
                          onClick={() => toast.info(`Request sent to ${person.name}`)}
                        >
                          Add to Squad
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Side Panel (Sticky) */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <Card className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <CardContent className="p-8 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">Team Strength</h3>
                    <span className="text-3xl font-bold text-[#7be382]">{teamStrength}%</span>
                  </div>
                  <Progress value={teamStrength} className="h-2 bg-white/10" />
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Insights</h4>
                  <div className="space-y-3">
                    {insights.map((insight, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <div className={`mt-1 w-1.5 h-1.5 rounded-full ${
                          insight.type === 'error' ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' :
                          insight.type === 'warning' ? 'bg-amber-500' :
                          insight.type === 'success' ? 'bg-[#7be382] shadow-[0_0_10px_rgba(123,227,130,0.5)]' :
                          'bg-blue-500'
                        }`} />
                        <span className={insight.type === 'error' ? 'text-red-400' : 'text-gray-300'}>
                          {insight.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Button 
                    className="w-full bg-[#7be382] hover:bg-[#6ad071] text-black font-bold py-6 rounded-xl text-lg group"
                    onClick={() => {
                      if (teamStrength < 50) {
                        toast.error("Your team is too weak. Add more roles.");
                      } else {
                        toast.success("Team locked in! Redirecting to dashboard...");
                      }
                    }}
                  >
                    Lock This Team In
                    <Zap className="w-5 h-5 ml-2 fill-current" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full text-gray-500 hover:text-white hover:bg-white/5"
                  >
                    Still fixing stuff
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hackathon Fit */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#7be382]/10 to-transparent border border-[#7be382]/20">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#7be382]" />
                <span className="text-xs font-bold text-[#7be382] uppercase tracking-tighter">Hackathon Fit</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Based on your current stack, you're a perfect match for <span className="text-white font-bold">EthIndia 2024</span>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MakeTeam;