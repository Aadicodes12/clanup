"use client";

import React from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Clanup helped me find a team for my first hackathon in just 10 minutes. We ended up winning!",
    author: "Alex Chen",
    role: "Full-stack Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    quote: "The smart matching algorithm is incredible. I found teammates with exactly the skills I was missing.",
    author: "Sarah Miller",
    role: "UI/UX Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    quote: "Managing a team has never been easier. The dashboard keeps everything organized and transparent.",
    author: "Michael Ross",
    role: "Product Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  }
];

const Testimonials = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-sora tracking-tight mb-4">
            Still in doubt?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sora">
            Have a look at what our users say
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={cn(
                "flex items-end gap-3 md:gap-4",
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              )}
            >
              {/* Avatar */}
              <div className="flex-shrink-0 mb-1">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-muted border-2 border-border" 
                />
              </div>

              {/* Chat Bubble */}
              <div className={cn(
                "relative max-w-[85%] md:max-w-[70%] p-4 md:p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md",
                i % 2 === 0 
                  ? "bg-card border border-border rounded-bl-none" 
                  : "bg-[#7be382]/10 border border-[#7be382]/20 rounded-br-none"
              )}>
                <p className="text-foreground font-sora text-sm md:text-base leading-relaxed mb-3">
                  "{t.quote}"
                </p>
                <div className={cn(
                  "flex flex-col",
                  i % 2 === 0 ? "items-start" : "items-end"
                )}>
                  <span className="font-bold font-sora text-xs md:text-sm text-foreground">{t.author}</span>
                  <span className="text-[10px] md:text-xs text-muted-foreground font-sora">{t.role}</span>
                </div>
                
                {/* Bubble Tail */}
                <div className={cn(
                  "absolute bottom-0 w-4 h-4",
                  i % 2 === 0 
                    ? "-left-2 bg-card border-l border-b border-border rotate-45" 
                    : "-right-2 bg-[#7be382]/10 border-r border-b border-[#7be382]/20 -rotate-45"
                )} style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;