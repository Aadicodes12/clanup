import React from 'react';
import { cn } from '@/lib/utils';

interface TextMarqueeProps {
  messages: string[];
  className?: string;
  duration?: string; // e.g., "20s"
}

const TextMarquee: React.FC<TextMarqueeProps> = ({ messages, className, duration = "20s" }) => {
  // Duplicate messages multiple times for seamless continuous flow
  const repeatedMessages = [...messages, ...messages, ...messages, ...messages]; // Duplicated 4 times

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className="flex whitespace-nowrap w-max animate-slide-continuous" // Using the correct animation class
        style={{ '--marquee-duration': duration } as React.CSSProperties} // Pass duration via CSS variable
      >
        {repeatedMessages.map((message, index) => (
          <span key={index} className="inline-block mx-4">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextMarquee;