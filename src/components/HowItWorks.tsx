"use client";

import React from 'react';
import { UserPlus, Search, Users } from 'lucide-react';

const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="w-full max-w-5xl mx-auto px-6 py-20 font-roboto">
    {children}
  </section>
);

const Step = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-neutral-900/50 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
    <div className="w-12 h-12 bg-[#7be382]/10 rounded-full flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-[#7be382]" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-sm text-white/60 leading-relaxed">{description}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <Section>
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white font-roboto">
        How Clanup Works
      </h2>
      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Step 
          icon={UserPlus}
          title="Create Profile"
          description="Set up your profile with your tech stack, interests, and past projects to stand out."
        />
        <Step 
          icon={Search}
          title="Discover Projects"
          description="Browse through active hackathons and projects looking for specific skills like yours."
        />
        <Step 
          icon={Users}
          title="Form Your Clan"
          description="Connect with potential teammates, chat, and build your dream team in minutes."
        />
      </div>
    </Section>
  );
};

export default HowItWorks;