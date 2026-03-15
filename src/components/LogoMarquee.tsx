"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface LogoMarqueeProps {
  logos: { src: string; alt: string; sizeClass?: string }[]; // Added sizeClass
  className?: string;
  duration?: string;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos, className, duration = "30s" }) => {
  const LogoGroup = () => (
    <div className="flex items-center py-2">
      {logos.map((logo, index) => (
        <div 
          key={index} 
          className={cn(
            "flex items-center justify-center mx-6 flex-shrink-0", // Common classes
            logo.sizeClass || "h-20 w-36" // Apply sizeClass or default size
          )} 
        >
          <img 
            src={logo.src} 
            alt={logo.alt} 
            className="h-full w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" 
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("relative w-full overflow-hidden select-none flex items-center", className)}>
      <div
        className="flex w-max animate-slide-rtl-continuous"
        style={{ '--marquee-duration-rtl': duration } as React.CSSProperties}
      >
        <LogoGroup />
        <LogoGroup />
        <LogoGroup />
      </div>
    </div>
  );
};

export default LogoMarquee;