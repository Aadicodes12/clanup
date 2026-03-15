"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface LogoMarqueeProps {
  logos: { src: string; alt: string }[];
  className?: string;
  duration?: string;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos, className, duration = "30s" }) => {
  const LogoGroup = () => (
    <div className="flex items-center py-2">
      {logos.map((logo, index) => (
        <div 
          key={index} 
          className="flex items-center justify-center h-20 w-36 mx-4 flex-shrink-0" // Changed mx-6 to mx-4
        >
          <img 
            src={logo.src} 
            alt={logo.alt} 
            className={cn(
              "h-full w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300",
              logo.alt === "IIT Kharagpur Logo" && "scale-[1.25]" 
            )}
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