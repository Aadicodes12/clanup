"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
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
      const scrollPosition = -rect.top;
      
      if (scrollPosition < 0) {
        setActiveIndex(-1);
        return;
      }

      // Calculate which feature should be active based on scroll progress through the section
      const progress = scrollPosition / (sectionHeight - window.innerHeight * 0.5);
      const index = Math.floor(progress * features.length);
      
      setActiveIndex(Math.min(index, features.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [features.length]);

  return (
    <section 
      ref={sectionRef} 
      className="w-full min-h-[150vh] bg-background relative z-30"
    >
      {/* Sticky Container for the Grid and Content */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
        
        <div className="relative z-10 max-w-4xl w-full px-6">
          <h2 className="text-4xl md:text-6xl font-bold font-sans tracking-tight mb-12 text-center uppercase">
            Features
          </h2>
          
          <div className="space-y-6 md:space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={cn(
                  "text-2xl md:text-4xl font-bold font-sora transition-all duration-500 flex items-center gap-4",
                  index <= activeIndex ? "text-white translate-x-4" : "text-neutral-700"
                )}
              >
                <div className={cn(
                  "w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-500",
                  index <= activeIndex ? "bg-[#7be382]" : "bg-neutral-800"
                )} />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;