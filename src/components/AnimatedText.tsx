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
        "inline-block bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 text-transparent bg-clip-text animate-gradient-flow",
        className
      )}
    >
      {children}
    </span>
  );
};

export default AnimatedText;