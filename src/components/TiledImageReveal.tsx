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
    >
      {Array.from({ length: totalTiles }).map((_, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;

        // Calculate background position to show the correct segment of the image
        // The background image is scaled to be `cols` times wider and `rows` times taller than the entire grid.
        // For each tile, we shift the background by -col * 100% and -row * 100% relative to the tile's size.
        const backgroundPositionX = `${-col * 100}%`;
        const backgroundPositionY = `${-row * 100}%`;

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
              backgroundPosition: `${backgroundPositionX} ${backgroundPositionY}`, // Position the scaled image within each tile
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