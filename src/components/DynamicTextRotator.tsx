"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface DynamicTextRotatorProps {
  texts: string[];
  className?: string;
  interval?: number; // Interval in milliseconds for text change
}

const DynamicTextRotator: React.FC<DynamicTextRotatorProps> = ({
  texts,
  className,
  interval = 4000, // Default to 4 seconds, matching animation duration
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const textChangeTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(textChangeTimer);
  }, [texts, interval]);

  return (
    <div className={cn("overflow-hidden h-8 flex justify-center items-center", className)}>
      <span
        key={currentIndex} // Key change forces re-render and animation restart
        className="inline-block text-funkyGreen font-sora text-lg md:text-xl animate-slide-in-out"
      >
        {texts[currentIndex]}
      </span>
    </div>
  );
};

export default DynamicTextRotator;