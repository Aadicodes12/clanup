"use client";

import React from 'react';
import { Search, Users, Zap, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-[#7be382]" />,
      title: "Smart Matching",
      description: "Our algorithm connects you with teammates based on complementary skills and shared interests."
    },
    {
      icon: <Users className="w-6 h-6 text-[#7be382]" />,
      title: "Team Management",
      description: "Easily create, join, and manage your hackathon teams all in one centralized dashboard."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#7be382]" />,
      title: "Real-time Collab",
      description: "Communicate instantly with potential teammates and coordinate your project ideas effectively."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#7be382]" />,
      title: "Verified Profiles",
      description: "Connect with confidence knowing that every member's skills and background are verified."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background text-foreground relative z-30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4 uppercase">
            Features
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sora">
            Everything you need, nothing you don't
          </p>
        </div>

        <div className="bg-card border-2 border-border rounded-none p-8 md:p-12 shadow-xl shadow-primary/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="bg-primary/5 p-3 rounded-none flex-shrink-0 border border-border">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-sora mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground font-sora text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;