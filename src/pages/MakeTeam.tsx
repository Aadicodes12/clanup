"use client";

import React, { useState, useMemo } from 'react';
import { 
  ChevronLeft,
  Code,
  Palette,
  Cpu,
  Sparkles,
  LayoutGrid,
  ArrowRight,
  Lock,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import SignupModal from '@/components/SignupModal';
import MatchCard from '@/components/MatchCard';
import { useAuth } from '@/components/AuthProvider';
import { cn } from '@/lib/utils';

const ROLES = [
  { id: 'builder', title: 'Builder', icon: <Code className="w-5 h-5" />, skills: ['React', 'Node.js', 'Python', 'Solidity', 'Swift'] },
  { id: 'designer', title: 'Designer', icon: <Palette className="w-5 h-5" />, skills: ['Figma', 'UI/UX', 'Motion', '3D', 'Branding'] },
  { id: 'pm', title: 'Product', icon: <LayoutGrid className="w-5 h-5" />, skills: ['Strategy', 'Pitching', 'User Research', 'Agile'] },
  { id: 'ai', title: 'AI/ML', icon: <Sparkles className="w-5 h-5" />, skills: ['PyTorch', 'LLMs', 'OpenCV', 'Data Sci', 'NLP'] },
];

const HACKATHONS = [
  { id: 'ethindia', name: 'EthIndia 2024', location: 'Bengaluru' },
  { id: 'ai_genesis', name: 'AI Genesis', location: 'Online' },
  { id: 'google_sol', name: 'Google Solution', location: 'Global' },
];

const MOCK_MATCHES = [
  { name: "Aryan K.", role: "Builder", skills: ["Node.js", "PostgreSQL", "Redis"], matchScore: 98, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aryan" },
  { name: "Sanya M.", role: "Designer", skills: ["Figma", "Prototyping", "Motion"], matchScore: 94, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanya" },
  { name: "Rohan V.", role: "AI/ML", skills: ["PyTorch", "LLMs", "Python"], matchScore: 89, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan" },
  { name: "Isha P.", role: "Product", skills: ["Strategy", "Pitching", "Research"], matchScore: 87, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isha" },
];

const MakeTeam = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [step, setStep] = useState<'role' | 'skills' | 'hackathon' | 'feed'>('role');
  const [selection, setSelection] = useState<{ role?: string; skills: string[]; hackathon?: string }>({
    skills: []
  });
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [lockedTeam, setLockedTeam] = useState<string[]>([]);

  const handleRoleSelect = (roleId: string) => {
    setSelection(prev => ({ ...prev, role: roleId, skills: [] }));
    setStep('skills');
  };

  const handleSkillToggle = (skill: string) => {
    setSelection(prev => {
      const exists = prev.skills.includes(skill);
      if (exists) return { ...prev, skills: prev.skills.filter(s => s !== skill) };
      if (prev.skills.length >= 3) return prev;
      return { ...prev, skills: [...prev.skills, skill] };
    });
  };

  const handleHackathonSelect = (id: string) => {
    setSelection(prev => ({ ...prev, hackathon: id }));
    if (!user) {
      setIsSignupOpen(true);
    } else {
      setStep('feed');
    }
  };

  const handlePing = (name: string) => {
    toast.success(`Ping sent to cu-${name.toLowerCase().replace(' ', '_')}!`);
    // Simulate a mutual match for demo purposes
    if (Math.random() > 0.5) {
      setTimeout(() => {
        toast.success("It's a mutual match! Chat is now open.", {
          description: `You and cu-${name.toLowerCase().replace(' ', '_')} both want to team up.`,
          duration: 5000,
        });
      }, 2000);
    }
  };

  const toggleLock = (name: string) => {
    setLockedTeam(prev => 
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
    if (!lockedTeam.includes(name)) {
      toast.info(`cu-${name.toLowerCase().replace(' ', '_')} added to your squad.`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sora selection:bg-[#7be382] selection:text-black">
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
        onSuccess={() => setStep('feed')}
      />

      <nav className="p-6 flex items-center justify-between border-b border-white/5 sticky top-0 bg-[#0A0A0A]/80 backdrop-blur-md z-40">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="text-xl font-bold font-mono tracking-tighter">CLANUP</div>
        <div className="w-20" /> {/* Spacer */}
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-12">
        {step === 'role' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">What's your <br /><span className="text-[#7be382]">main craft?</span></h1>
              <p className="text-gray-500">Pick one to start matching.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {ROLES.map(role => (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role.id)}
                  className="flex items-center justify-between p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-[#7be382]/50 hover:bg-[#7be382]/5 transition-all group text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-white/5 text-white group-hover:bg-[#7be382] group-hover:text-black transition-all">
                      {role.icon}
                    </div>
                    <span className="text-2xl font-bold">{role.title}</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-700 group-hover:text-[#7be382] transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'skills' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Top <span className="text-[#7be382]">3 skills?</span></h1>
              <p className="text-gray-500">Select up to 3 that define you.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {ROLES.find(r => r.id === selection.role)?.skills.map(skill => (
                <button
                  key={skill}
                  onClick={() => handleSkillToggle(skill)}
                  className={cn(
                    "px-6 py-4 rounded-2xl font-bold transition-all border-2",
                    selection.skills.includes(skill)
                      ? "bg-[#7be382] border-[#7be382] text-black"
                      : "bg-white/5 border-white/5 text-gray-400 hover:border-white/20"
                  )}
                >
                  {skill}
                </button>
              ))}
            </div>
            <Button 
              disabled={selection.skills.length === 0}
              onClick={() => setStep('hackathon')}
              className="w-full py-8 rounded-2xl bg-white text-black font-bold text-xl hover:bg-gray-200 transition-all"
            >
              Next Step
            </Button>
          </div>
        )}

        {step === 'hackathon' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Target <span className="text-[#7be382]">Hackathon?</span></h1>
              <p className="text-gray-500">Where do you want to build?</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {HACKATHONS.map(h => (
                <button
                  key={h.id}
                  onClick={() => handleHackathonSelect(h.id)}
                  className="flex items-center justify-between p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-[#7be382]/50 hover:bg-[#7be382]/5 transition-all group text-left"
                >
                  <div>
                    <h3 className="text-2xl font-bold">{h.name}</h3>
                    <p className="text-gray-500 text-sm">{h.location}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-700 group-hover:text-[#7be382] transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'feed' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <header className="flex items-center justify-between">
              <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tighter">Your Matches</h1>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Based on your {selection.role} skills</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {lockedTeam.map((name, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-[#7be382] flex items-center justify-center text-[10px] font-bold text-black">
                      {name[0]}
                    </div>
                  ))}
                </div>
                {lockedTeam.length > 0 && (
                  <Button size="sm" className="bg-[#7be382] text-black font-bold rounded-full h-8 px-4 text-xs">
                    <Lock className="w-3 h-3 mr-1" /> Lock Squad
                  </Button>
                )}
              </div>
            </header>

            <div className="space-y-6">
              {MOCK_MATCHES.map((match, i) => (
                <div key={i} className="relative">
                  <MatchCard 
                    {...match} 
                    onPing={() => handlePing(match.name)} 
                  />
                  <button 
                    onClick={() => toggleLock(match.name)}
                    className={cn(
                      "absolute top-4 right-4 p-2 rounded-full transition-all",
                      lockedTeam.includes(match.name) ? "bg-[#7be382] text-black" : "bg-white/5 text-gray-600 hover:text-white"
                    )}
                  >
                    <Users className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center py-12">
              <p className="text-gray-600 text-sm italic">No more matches for now. Check back soon!</p>
              <Button 
                variant="ghost" 
                className="mt-4 text-[#7be382] hover:bg-[#7be382]/5"
                onClick={() => setStep('role')}
              >
                Refine your profile
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MakeTeam;