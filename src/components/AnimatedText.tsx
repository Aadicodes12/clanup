"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, className }) => {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text bg-200% animate-gradient-flow", // Added inline-block, bg-200%, and animate-gradient-flow
        className
      )}
      style={{ backgroundSize: '200% 200%' }} // Ensure background size for the animation
    >
      {children}
    </span>
  );
};

export default AnimatedText;