"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface DynamicTextRotatorProps {
  texts: string[];
  className?: string;
  speed?: number; // pixels per second
}

const DynamicTextRotator: React.FC<DynamicTextRotatorProps> = ({
  texts,
  className,
  speed = 50, // default speed in pixels per second
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [marqueeDuration, setMarqueeDuration] = useState('0s');

  const joinedText = texts.join(" • "); // Join texts with a separator

  useEffect(() => {
    if (contentRef.current) {
      // The contentRef.current is the div that contains the two spans.
      // We want to scroll one full cycle of `joinedText` (plus its padding).
      // So, the distance to scroll is half of the `scrollWidth` of the inner div.
      const distanceToScroll = contentRef.current.scrollWidth / 2;
      const calculatedDuration = distanceToScroll / speed; // seconds
      setMarqueeDuration(`${calculatedDuration}s`);
    }
  }, [texts, speed]);

  return (
    <div className={cn("overflow-hidden h-8 flex items-center", className)}>
      <div
        ref={contentRef}
        className="flex flex-row whitespace-nowrap" // Use flex to keep spans inline, whitespace-nowrap to prevent wrapping
        style={{ '--marquee-duration': marqueeDuration, animation: `marquee var(--marquee-duration) linear infinite` } as React.CSSProperties}
      >
        <span className="text-funkyGreen font-sora text-lg md:text-xl pr-8"> {/* Add some padding to the right of each segment */}
          {joinedText}
        </span>
        <span className="text-funkyGreen font-sora text-lg md:text-xl pr-8">
          {joinedText}
        </span>
      </div>
    </div>
  );
};

export default DynamicTextRotator;