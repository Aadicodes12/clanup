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
        "flex w-full mb-6 transition-all duration-700 ease-out",
        side === 'left' ? "justify-start" : "justify-end",
        isVisible ? "opacity-100 translate-x-0" : cn("opacity-0", side === 'left' ? "-translate-x-12" : "translate-x-12")
      )}
    >
      <div 
        className={cn(
          "max-w-[75%] md:max-w-[45%] p-4 md:p-5 rounded-2xl shadow-lg bg-white/95 text-black border border-gray-200",
          side === 'left' ? "rounded-bl-none" : "rounded-br-none"
        )}
      >
        <p className="text-sm md:text-base font-sora mb-2 leading-relaxed">"{text}"</p>
        <p className="text-[10px] md:text-xs font-bold font-sora uppercase tracking-widest text-gray-500">
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
      delay: 200
    },
    {
      text: "The best platform for students to network and build real-world projects outside of the classroom.",
      author: "Arjun K., NIT Trichy",
      side: 'left' as const,
      delay: 400
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold font-sora text-center mb-12 text-white tracking-tight">
        What our members say
      </h2>
      <div className="flex flex-col space-y-2">
        {testimonials.map((t, i) => (
          <ChatBubble key={i} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;