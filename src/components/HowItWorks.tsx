"use client" was removed as it's invalid in .tsx files. Updated font to Roboto and kept alignment fixes.

import React from 'react';
import { UserPlus, Search, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const HowItWorks = () => {
  const Step = ({ icon, title, description, index }) => (
    <div className="flex items-start space-x-2 relative z-20">
      <div
        className={cn(
          "flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center",
          "step-animated-icon"
        )}
        style={{ animationDelay: `${index * 0.5}s` }}
      >
        <icon className="w-3 h-3" />
      </div>
      <div>
        <h3 className="text-lg font-bold font-family: 'Roboto', sans-serif text-white">Title</h3>
        <p className="text-sm text-white/60 font-sora leading-relaxed">Description</p>
      </div>
    </div>
  );

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 relative overflow-hidden">
      <div className="animate-scan-line-overlay"></div>
      <h2 className="text-3xl md:text-4xl font-bold font-family: 'Roboto', sans-serif text-center mb-12 text-white relative z-20">
        How Clanup Works
      </h2>
      <div className="flex flex-wrap justify-center items-center space-y-8 relative z-20">
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