"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Users, Code } from 'lucide-react';

const HowItWorksSteps = () => {
  const steps = [
    {
      icon: <Sparkles className="w-8 h-8 text-[#7be382]" />,
      title: "Set up your profile",
      description: "Showcase your skills, interests, and past projects to attract potential teammates and opportunities on Clanup."
    },
    {
      icon: <Users className="w-8 h-8 text-[#7be382]" />,
      title: "Find a team or hackathon",
      description: "Browse active hackathons and competitions, then join an existing team or create your own to collaborate with others."
    },
    {
      icon: <Code className="w-8 h-8 text-[#7be382]" />,
      title: "Build something awesome",
      description: "Work together with your new team to develop innovative solutions and bring your creative ideas to life."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-black text-white relative z-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-sora text-center mb-12 tracking-tight"> {/* Changed font-sans to font-sora */}
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-neutral-900 border-neutral-800 flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-105 hover:border-[#7be382]"
            >
              <div className="mb-4">{step.icon}</div>
              <CardTitle className="text-2xl font-bold font-sora mb-3 text-white"> {/* Changed font-sans to font-sora and added font-bold */}
                {step.title}
              </CardTitle>
              <CardContent className="p-0 text-gray-400 font-sora text-base">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;