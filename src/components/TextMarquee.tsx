import React from 'react';
import { cn } from '@/lib/utils';

interface TextMarqueeProps {
  messages: string[];
  className?: string;
  duration?: string;
}

const TextMarquee: React.FC<TextMarqueeProps> = ({ messages, className, duration = "20s" }) => {
  // We create a single group of messages
  const MessageGroup = () => (
    <div className="flex items-center">
      {messages.map((message, index) => (
        <span key={index} className="inline-block mx-8 whitespace-nowrap">
          {message}
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("relative w-full overflow-hidden select-none", className)}>
      <div
        className="flex w-max animate-slide-continuous"
        style={{ '--marquee-duration': duration } as React.CSSProperties}
      >
        {/* Render the group twice for a seamless loop */}
        <MessageGroup />
        <MessageGroup />
        {/* Add a few more just in case the screen is ultra-wide */}
        <MessageGroup />
        <MessageGroup />
      </div>
    </div>
  );
};

export default TextMarquee;