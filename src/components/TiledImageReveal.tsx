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

        // Calculate background position to show the correct segment of the image
        // We need to shift the background image by a negative percentage of its own size
        // relative to the tile's width/height.
        const backgroundPositionX = -col * (100 / cols);
        const backgroundPositionY = -row * (100 / rows);

        return (
          <div
            key={index}
            className={cn(
              "relative w-full h-full bg-no-repeat opacity-0 animate-tile-fade-in-up",
              tileClassName
            )}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: `${cols * 100}% ${rows * 100}%`, // Scale the background image to cover the entire grid
              backgroundPosition: `${backgroundPositionX}% ${backgroundPositionY}%`, // Position the scaled image within each tile
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