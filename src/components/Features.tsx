"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const Features = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      title: "Smart Matching Algorithm",
      description: "Connect with the perfect teammates based on skills, interests, and project goals."
    },
    {
      title: "Team Management Dashboard",
      description: "Organize your squad, track progress, and manage roles all in one central hub."
    },
    {
      title: "Real-time Collaboration Tools",
      description: "Communicate seamlessly with integrated chat and shared workspace environments."
    },
    {
      title: "Verified Member Profiles",
      description: "Build trust with authenticated skill badges and past hackathon performance history."
    },
    {
      title: "Hackathon Discovery Engine",
      description: "Never miss an opportunity with our curated list of global competitions and events."
    },
    {
      title: "Project Showcase Gallery",
      description: "Display your winning solutions to the community and attract future collaborators."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress: 0 when section starts entering, 1 when it's fully scrolled
      const start = rect.top;
      const progress = Math.max(0, Math.min(1, -start / (sectionHeight - viewportHeight)));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full min-h-[400vh] bg-background relative z-30"
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
        
        <div className="relative z-10 max-w-5xl w-full px-6">
          <h2 className="text-4xl md:text-6xl font-bold font-sans tracking-tight mb-12 text-center uppercase opacity-30">
            Features
          </h2>
          
          <div className="space-y-10 md:space-y-16">
            {features.map((feature, index) => {
              const threshold = index / features.length;
              const isActive = scrollProgress > threshold;
              
              return (
                <div 
                  key={index}
                  className={cn(
                    "transition-all duration-700 flex items-start gap-6",
                    isActive ? "translate-x-4" : "translate-x-0"
                  )}
                >
                  <div className={cn(
                    "mt-2 w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-700 flex-shrink-0",
                    isActive ? "bg-[#7be382] scale-125 shadow-[0_0_15px_rgba(123,227,130,0.5)]" : "bg-neutral-800"
                  )} />
                  
                  <div className="flex flex-col">
                    <h3 className={cn(
                      "text-xl md:text-4xl font-bold font-sora transition-colors duration-700",
                      isActive ? "text-white" : "text-neutral-600"
                    )}>
                      {feature.title}
                    </h3>
                    <p className={cn(
                      "text-sm md:text-xl font-sora mt-1 transition-colors duration-700",
                      isActive ? "text-neutral-300" : "text-neutral-700"
                    )}>
                      {feature.description}
                    </p>
                  </div>
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