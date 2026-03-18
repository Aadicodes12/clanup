"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Plus, 
  Check, 
  Code, 
  Palette, 
  Cpu, 
  Zap, 
  ChevronLeft,
  Sparkles,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import SignupModal from '@/components/SignupModal';
import { useAuth } from '@/components/AuthProvider';
import { supabase } from '@/integrations/supabase/client';

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
  const { user, loading: authLoading } = useAuth();
  
  const [roles, setRoles] = useState<Role[]>(() => {
    const saved = localStorage.getItem('clanup_draft_team');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((p: any) => ({
          ...p,
          icon: INITIAL_ROLES.find(r => r.id === p.id)?.icon
        }));
      } catch (e) {
        return INITIAL_ROLES;
      }
    }
    return INITIAL_ROLES;
  });

  const [isSignupOpen, setIsSignupOpen] = useState(false);

  useEffect(() => {
    const stateToSave = roles.map(({ icon, ...rest }) => rest);
    localStorage.setItem('clanup_draft_team', JSON.stringify(stateToSave));
  }, [roles]);

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

  const handleFinalize = () => {
    if (authLoading) return;
    
    if (!user) {
      setIsSignupOpen(true);
    } else {
      toast.success("Team locked in! Redirecting to dashboard...");
      localStorage.removeItem('clanup_draft_team');
      setTimeout(() => navigate('/dashboard'), 1500);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.info("Signed out.");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sora selection:bg-[#7be382] selection:text-black overflow-x-hidden">
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
        teamSnapshot={{
          filledRoles: roles.filter(r => r.status !== 'empty').length,
          totalRoles: roles.length,
          strength: teamStrength
        }}
      />

      <nav className="p-6 flex items-center justify-between border-b border-white/5 sticky top-0 bg-[#0A0A0A]/80 backdrop-blur-md z-40">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="text-xl font-bold font-mono tracking-tighter">CLANUP</div>
        <div className="flex items-center gap-4">
          {user && (
            <Button variant="ghost" size="sm" onClick={handleSignOut} className="text-gray-500 hover:text-white gap-2">
              <LogOut className="w-4 h-4" /> Sign Out
            </Button>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-16">
          <header className="space-y-6">
            <div className="space-y-2">
              <Badge variant="outline" className="border-[#7be382] text-[#7be382] px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                Step 2 — Build Your Squad
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] font-sora">
                Build a Team <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  That Doesn't Suck
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-md font-light">
                Add roles. Fill gaps. Start building.
              </p>
            </div>
          </header>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Role Builder</h2>
              <div className="h-[1px] flex-grow bg-white/5" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roles.map((role) => (
                <div
                  key={role.id}
                  className={`relative group cursor-pointer rounded-3xl border-2 p-8 transition-all duration-500 hover:scale-[1.02] ${
                    role.status === 'you' 
                      ? 'border-[#7be382] bg-[#7be382]/5 shadow-[0_0_30px_rgba(123,227,130,0.05)]' 
                      : role.status === 'filled'
                      ? 'border-white/20 bg-white/5'
                      : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                  }`}
                  onClick={() => role.status === 'empty' && handleAddRole(role.id)}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl ${
                      role.status === 'you' ? 'bg-[#7be382] text-black' : 'bg-white/10 text-white'
                    }`}>
                      {role.icon}
                    </div>
                    {role.status === 'you' ? (
                      <Badge className="bg-[#7be382] text-black font-bold">YOU</Badge>
                    ) : role.status === 'filled' ? (
                      <div className="w-8 h-8 rounded-full bg-[#7be382]/20 flex items-center justify-center">
                        <Check className="text-[#7be382] w-5 h-5" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <Plus className="text-gray-600 group-hover:text-white w-5 h-5" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{role.title}</h3>
                  <p className="text-sm text-gray-500 font-light">
                    {role.status === 'empty' ? (
                      <span className="italic opacity-60">({role.suggestion})</span>
                    ) : (
                      role.skills?.join(' • ') || 'Ready to build'
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                People you should probably team up with
              </h2>
              <div className="h-[1px] flex-grow bg-white/5" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SUGGESTED_TEAMMATES.map((person, i) => (
                <Card key={i} className="bg-white/[0.03] border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden group rounded-3xl">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <img src={person.avatar} alt={person.name} className="w-16 h-16 rounded-2xl bg-white/10 object-cover" />
                        <div className="absolute -bottom-2 -right-2 bg-[#7be382] text-black text-[10px] font-black px-2 py-0.5 rounded-md">
                          {person.match}%
                        </div>
                      </div>
                      <div className="flex-grow space-y-4">
                        <div>
                          <h4 className="font-bold text-xl text-white tracking-tight">{person.name}</h4>
                          <p className="text-sm text-gray-500 font-light">{person.role}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {person.skills.map(skill => (
                            <Badge key={skill} variant="secondary" className="bg-white/5 text-gray-400 text-[10px] border-none">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          variant="outline" 
                          className="w-full border-white/10 hover:bg-[#7be382] hover:text-black hover:border-[#7be382] transition-all duration-300 rounded-xl font-bold"
                          onClick={handleFinalize}
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

        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-6">
            <Card className="bg-white/[0.02] border-white/10 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden">
              <CardContent className="p-10 space-y-10">
                <div className="space-y-6">
                  <div className="flex items-end justify-between">
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Team Strength</h3>
                      <div className="text-5xl font-bold text-white tracking-tighter">
                        {teamStrength}<span className="text-[#7be382]">%</span>
                      </div>
                    </div>
                    <div className="text-right pb-1">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        teamStrength < 50 ? 'bg-red-500/10 text-red-400' : 'bg-[#7be382]/10 text-[#7be382]'
                      }`}>
                        {teamStrength < 50 ? 'Not winning yet' : 'Looking solid'}
                      </span>
                    </div>
                  </div>
                  <Progress value={teamStrength} className="h-1.5 bg-white/5" />
                </div>

                <div className="space-y-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">Live Insights</h4>
                  <div className="space-y-4">
                    {insights.map((insight, i) => (
                      <div key={i} className="flex items-start gap-4 text-sm group">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          insight.type === 'error' ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]' :
                          insight.type === 'warning' ? 'bg-amber-500' :
                          insight.type === 'success' ? 'bg-[#7be382] shadow-[0_0_15px_rgba(123,227,130,0.5)]' :
                          'bg-blue-500'
                        }`} />
                        <span className={`font-light leading-tight ${
                          insight.type === 'error' ? 'text-red-400/80' : 'text-gray-400'
                        }`}>
                          {insight.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  <Button 
                    className="w-full bg-[#7be382] hover:bg-[#6ad071] text-black font-bold py-8 rounded-2xl text-xl group shadow-[0_20px_40px_rgba(123,227,130,0.15)] transition-all duration-500 hover:-translate-y-1"
                    onClick={handleFinalize}
                  >
                    {user ? "Lock This Team In" : "Sign Up to Lock In"}
                    <Zap className="w-5 h-5 ml-2 fill-current" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full text-gray-600 hover:text-white hover:bg-white/5 py-6 rounded-2xl transition-colors"
                    onClick={() => {
                      localStorage.removeItem('clanup_draft_team');
                      setRoles(INITIAL_ROLES);
                      toast.info("Draft cleared.");
                    }}
                  >
                    Reset Draft
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#7be382]/10 via-transparent to-transparent border border-[#7be382]/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles className="w-12 h-12 text-[#7be382]" />
              </div>
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#7be382] animate-pulse" />
                  <span className="text-[10px] font-black text-[#7be382] uppercase tracking-[0.2em]">Hackathon Fit</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Based on your current stack, you're a perfect match for <span className="text-white font-bold">EthIndia 2024</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeTeam;