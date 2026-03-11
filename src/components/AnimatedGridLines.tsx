import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGridLinesProps {
  className?: string;
}

const AnimatedGridLines: React.FC<AnimatedGridLinesProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-full h-64 animated-grid-lines overflow-hidden relative", // h-64 for height, animated-grid-lines for the custom styles
        className
      )}
    />
  );
};

export default AnimatedGridLines;