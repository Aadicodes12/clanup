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
        "inline-block bg-gradient-to-r from-white via-neutral-400 to-neutral-600 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient-flow",
        className
      )}
    >
      {children}
    </span>
  );
};

export default AnimatedText;