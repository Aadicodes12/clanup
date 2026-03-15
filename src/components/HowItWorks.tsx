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
  <div className="flex items-start space-x-4 relative z-20">
    <div
      className={cn(
        "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
        "step-animated-icon"
      )}
      style={{ animationDelay: `${index * 0.5}s` }}
    >
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h3 className="text-lg font-bold font-sans text-white">{title}</h3>
      <p className="text-sm text-white/60 font-sora leading-relaxed">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 relative overflow-hidden">
      <div className="animate-scan-line-overlay"></div>
      <h2 className="text-3xl md:text-4xl font-bold font- Roboto text-center mb-12 text-white relative z-20">
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