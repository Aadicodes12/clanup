"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const testimonials = [
  {
    quote: "Clanup helped me find a team for my first hackathon in just 10 minutes. We ended up winning!",
    author: "Dhruv Shah",
    role: "Full-stack Developer",
  },
  {
    quote: "The smart matching algorithm is incredible. I found teammates with exactly the skills I was missing.",
    author: "Nishika Sharma",
    role: "UI/UX Designer",
  },
  {
    quote: "Managing a team has never been easier. The dashboard keeps everything organized and transparent.",
    author: "Karan Iyer",
    role: "Product Manager",
  },
];

const TestimonialsMinimal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  // Invert colors: If theme is dark, section is light. If theme is light, section is dark.
  const isInverted = resolvedTheme === "dark";
  const bgColor = isInverted ? "bg-white" : "bg-black";
  const textColor = isInverted ? "text-black" : "text-white";
  const mutedTextColor = isInverted ? "text-gray-500" : "text-[#888888]";
  const subMutedTextColor = isInverted ? "text-gray-400" : "text-[#666666]";

  return (
    <section className={cn("w-full pt-12 pb-10 relative overflow-hidden transition-colors duration-500", bgColor)}>
      {/* Subtle Grain Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className={cn("text-2xl md:text-4xl font-bold font-sora mb-2 tracking-tight", textColor)}>
            Still in doubt?
          </h2>
          <p className={cn("text-base md:text-lg font-sora font-light", mutedTextColor)}>
            Have a look at what our users say
          </p>
        </div>

        {/* Sliding Content Container */}
        <div className="relative h-36 md:h-40 overflow-hidden mb-6">
          <div 
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center px-4"
              >
                <blockquote className={cn("font-medium text-base md:text-xl italic leading-relaxed mb-3 font-sora max-w-2xl", textColor)}>
                  "{t.quote}"
                </blockquote>
                <div className="flex flex-col items-center gap-0.5">
                  <span className={cn("text-xs md:text-sm font-sora", mutedTextColor)}>{t.author}</span>
                  <span className={cn("text-[10px] md:text-xs font-sora font-light", subMutedTextColor)}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Permanent Floating Anchor Line */}
        <div className="w-full max-w-xs md:max-w-md mx-auto relative">
          {/* The Line (Greyish White) */}
          <div className="h-[1px] w-full bg-gray-400/30" />
          
          {/* Enhanced Green Glow */}
          <div 
            className="absolute inset-0 h-[1px] w-full bg-[#00FF88] blur-lg opacity-40"
            style={{ boxShadow: '0 0 25px 6px rgba(0, 255, 136, 0.5)' }}
          />
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <div 
                key={i}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  currentIndex === i ? "bg-[#00FF88] w-4" : "bg-gray-400/20"
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