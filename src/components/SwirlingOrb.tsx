import React from 'react';
import { cn } from '@/lib/utils';

interface SwirlingOrbProps {
  className?: string;
}

const SwirlingOrb: React.FC<SwirlingOrbProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative w-60 h-60 rounded-full flex items-center justify-center overflow-hidden bg-white", // Changed to bg-white
        "before:content-[''] before:absolute before:rounded-full",
        "before:bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(200,200,200,0.8)_0%,_rgba(200,200,200,0)_50%,_rgba(200,200,200,0.8)_100%)]", // Subtle grey swirl
        "before:w-[150%] before:h-[150%] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:animate-orb-swirl", // Centered positioning
        className
      )}
    >
      {/* The inner mist element has been removed as the orb's background is now white */}
    </div>
  );
};

export default SwirlingOrb;