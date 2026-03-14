"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface TextMarqueeProps {
  messages: string[];
  className?: string;
  duration?: string;
}

const TextMarquee: React.FC<TextMarqueeProps> = ({ messages, className, duration = "20s" }) => {
  const MessageGroup = () => (
    <div className="flex items-center py-2">
      {messages.map((message, index) => (
        <span key={index} className="inline-block mx-8 whitespace-nowrap">
          {message}
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("relative w-full overflow-hidden select-none flex items-center justify-center", className)}>
      <div
        className="flex w-max animate-slide-continuous"
        style={{ '--marquee-duration': duration } as React.CSSProperties}
      >
        <MessageGroup />
        <MessageGroup />
      </div>
    </div>
  );
};

export default TextMarquee;