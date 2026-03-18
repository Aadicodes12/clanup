"use client";

import React, { useState } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Github, 
  Twitter, 
  Globe, 
  Plus, 
  X,
  Camera,
  ChevronLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [skills, setSkills] = useState(['React', 'TypeScript', 'Tailwind', 'Node.js']);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  const handleSave = () => {
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <h1 className="text-2xl font-bold font-sora">Edit Profile</h1>
          <Button onClick={handleSave} className="bg-[#7be382] hover:bg-[#6ad071] text-black font-bold rounded-xl">
            Save Changes
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column: Avatar & Basics */}
          <div className="space-y-8">
            <div className="relative group w-32 h-32 mx-auto">
              <div className="w-full h-full rounded-3xl bg-muted flex items-center justify-center overflow-hidden border-2 border-border">
                <User className="w-12 h-12 text-muted-foreground" />
              </div>
              <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-3xl">
                <Camera className="text-white w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                <Input placeholder="Your Name" className="bg-card border-border rounded-xl" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                <Input value={user?.email || ''} disabled className="bg-muted border-border rounded-xl opacity-60" />
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Socials</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-muted-foreground" />
                  <Input placeholder="github.com/username" className="bg-card border-border rounded-xl h-9 text-sm" />
                </div>
                <div className="flex items-center gap-3">
                  <Twitter className="w-4 h-4 text-muted-foreground" />
                  <Input placeholder="@username" className="bg-card border-border rounded-xl h-9 text-sm" />
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <Input placeholder="portfolio.com" className="bg-card border-border rounded-xl h-9 text-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Skills */}
          <div className="md:col-span-2 space-y-10">
            <section className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">About You</label>
              <Textarea 
                placeholder="Tell potential teammates about your experience, what you love building, and what you're looking for in a clan..." 
                className="bg-card border-border rounded-2xl min-h-[150px] p-6 text-lg leading-relaxed"
              />
            </section>

            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Skills & Tech Stack</label>
                <span className="text-xs text-muted-foreground">{skills.length}/15 skills</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/5 text-primary border-primary/10 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                    {skill}
                    <button onClick={() => removeSkill(skill)} className="hover:text-destructive transition-colors">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>

              <form onSubmit={handleAddSkill} className="flex gap-2">
                <Input 
                  placeholder="Add a skill (e.g. Python, Figma, Solidity)" 
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="bg-card border-border rounded-xl"
                />
                <Button type="submit" variant="outline" className="rounded-xl border-border">
                  <Plus className="w-4 h-4" />
                </Button>
              </form>
            </section>

            <Card className="bg-[#7be382]/5 border-[#7be382]/20 rounded-3xl overflow-hidden">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="p-4 bg-[#7be382] rounded-2xl text-black">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Public Profile</h3>
                  <p className="text-sm text-muted-foreground">Your profile is currently visible to clans looking for members.</p>
                </div>
                <Button variant="outline" className="ml-auto border-[#7be382]/30 hover:bg-[#7be382]/10">
                  Preview
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;