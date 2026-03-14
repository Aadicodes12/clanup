import React from 'react';
import { cn } from '@/lib/utils';

interface TextMarqueeProps {
  messages: string[];
  className?: string;
  duration?: string; // e.g., "15s"
}

const TextMarquee: React.FC<TextMarqueeProps> = ({ messages, className, duration = "15s" }) => {
  // Duplicate messages to create a seamless loop
  const duplicatedMessages = [...messages, ...messages];

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className="flex whitespace-nowrap animate-slide-continuous"
        style={{ animationDuration: duration }}
      >
        {duplicatedMessages.map((message, index) => (
          <span key={index} className="inline-block mx-4"> {/* Add some spacing between messages */}
            {message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextMarquee;