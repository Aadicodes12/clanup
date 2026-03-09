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
        "inline-block bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text animate-gradient-flow",
        className
      )}
    >
      {children}
    </span>
  );
};

export default AnimatedText;