import React from 'react';
import { cn } from '@/lib/utils';

interface SwirlingOrbProps {
  className?: string;
}

const SwirlingOrb: React.FC<SwirlingOrbProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative w-64 h-64 rounded-full flex items-center justify-center overflow-hidden",
        "before:content-[''] before:absolute before:inset-0 before:rounded-full",
        "before:bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(255,255,255,0.8)_0%,_rgba(255,165,0,0.6)_90%,_rgba(255,255,255,0.8)_100%)]",
        "before:w-[150%] before:h-[150%] before:-translate-x-1/4 before:-translate-y-1/4 before:animate-orb-swirl",
        "after:content-[''] after:absolute after:inset-1 after:rounded-full after:bg-black",
        className
      )}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
    </div>
  );
};

export default SwirlingOrb;