"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const Features = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    "Smart Matching Algorithm",
    "Team Management Dashboard",
    "Real-time Collaboration Tools",
    "Verified Member Profiles",
    "Hackathon Discovery Engine",
    "Project Showcase Gallery"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress: 0 when section starts entering, 1 when it's fully scrolled
      // We want the animation to happen while the section is sticky
      const start = rect.top;
      const progress = Math.max(0, Math.min(1, -start / (sectionHeight - viewportHeight)));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full min-h-[300vh] bg-background relative z-30"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0 opacity-10" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
        
        <div className="relative z-10 max-w-4xl w-full px-6">
          <h2 className="text-4xl md:text-6xl font-bold font-sans tracking-tight mb-16 text-center uppercase opacity-50">
            Features
          </h2>
          
          <div className="space-y-8 md:space-y-12">
            {features.map((feature, index) => {
              // Calculate if this specific item should be white based on total progress
              const threshold = index / features.length;
              const isActive = scrollProgress > threshold;
              
              return (
                <div 
                  key={index}
                  className={cn(
                    "text-2xl md:text-5xl font-bold font-sora transition-all duration-700 flex items-center gap-6",
                    isActive ? "text-white translate-x-4" : "text-neutral-800"
                  )}
                >
                  <div className={cn(
                    "w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-700",
                    isActive ? "bg-[#7be382] scale-125 shadow-[0_0_15px_rgba(123,227,130,0.5)]" : "bg-neutral-900"
                  )} />
                  {feature}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;