"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ChatBubbleProps {
  text: string;
  author: string;
  side: 'left' | 'right';
  delay: number;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, author, side, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (bubbleRef.current) {
      observer.observe(bubbleRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={bubbleRef}
      className={cn(
        "flex w-full mb-8 transition-all duration-700 ease-out",
        side === 'left' ? "justify-start" : "justify-end",
        isVisible ? "opacity-100 translate-x-0" : cn("opacity-0", side === 'left' ? "-translate-x-20" : "translate-x-20")
      )}
    >
      <div 
        className={cn(
          "max-w-[80%] md:max-w-[60%] p-6 rounded-2xl shadow-xl",
          side === 'left' 
            ? "bg-neutral-800 text-white rounded-bl-none border-l-4 border-[#7be382]" 
            : "bg-[#7be382] text-black rounded-br-none"
        )}
      >
        <p className="text-lg font-sora mb-3 italic">"{text}"</p>
        <p className={cn(
          "text-sm font-bold font-sora uppercase tracking-wider",
          side === 'left' ? "text-[#7be382]" : "text-black/70"
        )}>
          — {author}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "Found my dream team for the Smart India Hackathon within 2 days. The matching is spot on!",
      author: "Rahul S., IIT Delhi",
      side: 'left' as const,
      delay: 0
    },
    {
      text: "Clanup made it so easy to find developers who actually share my passion for AI. We won our first competition together!",
      author: "Priya M., BITS Pilani",
      side: 'right' as const,
      delay: 300
    },
    {
      text: "The best platform for students to network and build real-world projects outside of the classroom.",
      author: "Arjun K., NIT Trichy",
      side: 'left' as const,
      delay: 600
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold font-sora text-center mb-16 text-white">
        What our members say
      </h2>
      <div className="flex flex-col">
        {testimonials.map((t, i) => (
          <ChatBubble key={i} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;