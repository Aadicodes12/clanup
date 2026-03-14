import React from 'react';
import { cn } from '@/lib/utils';

interface TextMarqueeProps {
  messages: string[];
  className?: string;
  duration?: string; // e.g., "20s"
}

const TextMarquee: React.FC<TextMarqueeProps> = ({ messages, className, duration = "20s" }) => {
  // Duplicate messages exactly twice for seamless continuous flow
  const repeatedMessages = [...messages, ...messages];

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className="flex whitespace-nowrap w-max animate-marquee-scroll"
        style={{ '--marquee-duration': duration } as React.CSSProperties} // Use CSS variable for duration
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