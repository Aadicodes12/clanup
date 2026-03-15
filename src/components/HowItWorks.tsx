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
  <div
    className={cn(
      "flex flex-col items-center text-center p-6 bg-neutral-900/50 rounded-2xl relative z-20",
      "step-animated-card"
    )}
    style={{ animationDelay: `${index * 0.5}s` }}
  >
    <div
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center mb-4",
        "step-animated-icon"
      )}
      style={{ animationDelay: `${index * 0.5}s` }}
    >
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
      <h2 className="text-3xl md:text-4xl font-bold font-sans text-center mb-12 text-white relative z-20">
        How Clanup Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
        <Step 
          icon={UserPlus}
          title="Create Profile"
          description="Set up your profile with your tech stack, interests, and past projects to stand out."
          index={0}
        />
        <Step 
          icon={Search}
          title="Discover Projects"
          description="Browse through active hackathons and projects looking for specific skills like yours."
          index={1}
        />
        <Step 
          icon={Users}
          title="Form Your Clan"
          description="Connect with potential teammates, chat, and build your dream team in minutes."
          index={2}
        />
      </div>
    </section>
  );
};

export default HowItWorks;