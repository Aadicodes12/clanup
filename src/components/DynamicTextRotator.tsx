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
  const marqueeContentRef = useRef<HTMLDivElement>(null); // Ref for the animated content div
  const [marqueeDuration, setMarqueeDuration] = useState('0s');

  const joinedText = texts.join(" • "); // Join texts with a separator

  useEffect(() => {
    if (marqueeContentRef.current) {
      // The scrollWidth of marqueeContentRef.current will be the total width of both spans.
      // We want to scroll exactly half of that width to loop one segment.
      const totalContentWidth = marqueeContentRef.current.scrollWidth;
      const distanceToScroll = totalContentWidth / 2; // This is the width of one segment

      const calculatedDuration = distanceToScroll / speed; // seconds
      setMarqueeDuration(`${calculatedDuration}s`);
    }
  }, [texts, speed]);

  return (
    <div className={cn("overflow-hidden h-8 flex items-center", className)}>
      <div
        ref={marqueeContentRef} // Apply ref to the div that contains the duplicated content
        className="flex flex-row whitespace-nowrap" // Ensure content stays on one line and uses flex for layout
        style={{
          '--marquee-duration': marqueeDuration,
          animation: `marquee var(--marquee-duration) linear infinite`,
        } as React.CSSProperties}
      >
        <span className="text-funkyGreen font-sora text-lg md:text-xl pr-8 flex-shrink-0">
          {joinedText}
        </span>
        <span className="text-funkyGreen font-sora text-lg md:text-xl pr-8 flex-shrink-0">
          {joinedText}
        </span>
      </div>
    </div>
  );
};

export default DynamicTextRotator;