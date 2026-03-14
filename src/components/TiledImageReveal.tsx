"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface TiledImageRevealProps {
  src: string;
  alt: string;
  rows?: number;
  cols?: number;
  className?: string;
  tileClassName?: string;
}

const TiledImageReveal: React.FC<TiledImageRevealProps> = ({
  src,
  alt,
  rows = 5,
  cols = 8,
  className,
  tileClassName,
}) => {
  const totalTiles = rows * cols;

  return (
    <div
      className={cn(
        "grid overflow-hidden",
        `grid-rows-${rows} grid-cols-${cols}`, // Dynamically set grid rows/cols
        className
      )}
      style={{
        // Ensure the grid container maintains aspect ratio if needed, or just let it flow
        // For simplicity, we'll let the parent define the overall size
      }}
    >
      {Array.from({ length: totalTiles }).map((_, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;

        // Prevent division by zero if rows or cols is 1
        const backgroundPositionX = cols > 1 ? (col / (cols - 1)) * 100 : 0;
        const backgroundPositionY = rows > 1 ? (row / (rows - 1)) * 100 : 0;

        return (
          <div
            key={index}
            className={cn(
              "relative w-full h-full bg-no-repeat opacity-0 animate-tile-fade-in-up", // Removed bg-cover
              tileClassName
            )}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: `${cols * 100}% ${rows * 100}%`,
              backgroundPosition: `${backgroundPositionX}% ${backgroundPositionY}%`,
              animationDelay: `${row * 0.08 + col * 0.03}s`, // Staggered delay
            }}
            aria-label={alt} // Accessible alternative for the image part
          />
        );
      })}
    </div>
  );
};

export default TiledImageReveal;