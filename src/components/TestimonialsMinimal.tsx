"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Clanup helped me find a team for my first hackathon in just 10 minutes. We ended up winning!",
    author: "Alex Chen",
    role: "Full-stack Developer",
  },
  {
    quote: "The smart matching algorithm is incredible. I found teammates with exactly the skills I was missing.",
    author: "Sarah Miller",
    role: "UI/UX Designer",
  },
  {
    quote: "Managing a team has never been easier. The dashboard keeps everything organized and transparent.",
    author: "Michael Ross",
    role: "Product Manager",
  },
];

const TestimonialsMinimal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-24 bg-[#000000] relative overflow-hidden">
      {/* Subtle Grain Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold font-sora text-white mb-3 tracking-tight">
            Still in doubt?
          </h2>
          <p className="text-lg text-[#888888] font-sora font-light">
            Have a look at what our users say
          </p>
        </div>

        {/* Sliding Content Container */}
        <div className="relative h-40 md:h-48 overflow-hidden mb-8">
          <div 
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center px-4"
              >
                <blockquote className="text-white font-medium text-lg md:text-2xl leading-relaxed mb-4 font-sora max-w-2xl">
                  "{t.quote}"
                </blockquote>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[#888888] text-sm md:text-base font-sora">{t.author}</span>
                  <span className="text-[#666666] text-xs md:text-sm font-sora font-light">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Permanent Floating Anchor Line */}
        <div className="w-full max-w-xs md:max-w-md mx-auto relative">
          {/* The Line (Greyish White) */}
          <div className="h-[1px] w-full bg-white/20" />
          
          {/* The Soft Green Glow */}
          <div 
            className="absolute inset-0 h-[1px] w-full bg-[#00FF88] blur-md opacity-10"
            style={{ boxShadow: '0 0 20px 4px rgba(0, 255, 136, 0.12)' }}
          />
          
          {/* Pagination Dots (Optional but helpful for context) */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <div 
                key={i}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  currentIndex === i ? "bg-[#00FF88] w-4" : "bg-white/20"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMinimal;