import React from 'react';
import { cn } from '@/lib/utils';

interface SwirlingOrbProps {
  className?: string;
}

const SwirlingOrb: React.FC<SwirlingOrbProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative w-60 h-60 rounded-full flex items-center justify-center overflow-hidden bg-black", // Main container, black background
        "before:content-[''] before:absolute before:rounded-full",
        "before:bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0)_50%,_rgba(255,255,255,0.8)_100%)]", // Pure white to transparent swirl
        "before:w-[150%] before:h-[150%] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:animate-orb-swirl", // Centered positioning
        className
      )}
    >
      {/* Inner element for the white mist effect */}
      <div className="absolute inset-0 rounded-full bg-radial-gradient-mist opacity-70"></div>
    </div>
  );
};

export default SwirlingOrb;