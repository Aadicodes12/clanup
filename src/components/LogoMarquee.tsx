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
        <img 
          key={index} 
          src={logo.src} 
          alt={logo.alt} 
          className="h-16 w-auto mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" 
        />
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