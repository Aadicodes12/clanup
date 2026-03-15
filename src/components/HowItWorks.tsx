"use client";

import React from 'react';
import { UserPlus, Search, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepProps {
  icon: any;
  title: string;
  description: string;
  index: number;
}

const Step = ({ icon: Icon, title, description, index }: StepProps) => (
  <div className="flex flex-col items-center text-center p-6 bg-neutral-900/50 rounded-2xl relative z-20">
    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold font-sans mb-2 text-white">{title}</h3>
    <p className="text-sm text-white/60 font-sora leading-relaxed">{description}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 relative overflow-hidden">
      <div className="animate-scan-line-overlay"></div>
      <h2 className="text-3xl md:text-4xl font-bold font-inter text-center mb-12 text-white relative z-20"> {/* Changed to font-inter */}
        How Clanup Works
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-6 relative z-20">
        <Step 
          icon={UserPlus}
          title="Create Profile"
          description="Set up your profile with your tech stack and interests."
          index={0}
        />
        <Step 
          icon={Search}
          title="Discover Projects"
          description="Browse through active hackathons and projects."
          index={1}
        />
        <Step 
          icon={Users}
          title="Form Your Clan"
          description="Connect with potential teammates and build your team."
          index={2}
        />
      </div>
    </section>
  );
};

export default HowItWorks;