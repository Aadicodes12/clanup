"use client";

import React from 'react';
import { Users, GraduationCap, MapPin } from 'lucide-react';

const Metrics = () => {
  const stats = [
    {
      label: "Members",
      value: "150+",
      icon: <Users className="w-6 h-6 text-[#7be382]" />,
    },
    {
      label: "Colleges",
      value: "20+",
      icon: <GraduationCap className="w-6 h-6 text-[#7be382]" />,
    },
    {
      label: "Cities",
      value: "6+",
      icon: <MapPin className="w-6 h-6 text-[#7be382]" />,
    },
  ];

  return (
    <section className="w-full py-12 bg-background border-y border-border/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 border border-border hover:border-[#7be382]/30 transition-all duration-300"
            >
              <div className="mb-4 p-3 rounded-full bg-[#7be382]/10">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-sora uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;