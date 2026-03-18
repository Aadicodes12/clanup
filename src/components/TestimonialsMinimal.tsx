"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Clanup helped me find a team for my first hackathon in just 10 minutes. We ended up winning!",
    author: "Alex Chen",
    role: "Full-stack Developer",
  },
  {
    quote: "The smart matching algorithm is incredible. I found teammates with exactly the skills I was missing.",
    author: "Sarah Miller",
    role: "UI/UX Designer",
  },
  {
    quote: "Managing a team has never been easier. The dashboard keeps everything organized and transparent.",
    author: "Michael Ross",
    role: "Product Manager",
  },
];

const TestimonialsMinimal = () => {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const testimonialRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && !visibleIndices.includes(index)) {
            setVisibleIndices((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 },
    );

    testimonialRefs.current.forEach((ref, index) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      testimonialRefs.current.forEach((ref) => observer.unobserve(ref));
    };
  }, [visibleIndices]);

  return (
    <section className="w-full py-16 md:py-24 bg-[#000] text-foreground relative">
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold font-sora mb-2">
          Still in doubt?
        </h2>
        <p className="text-lg md:text-xl text-[#888] font-sora">
          Have a look at what our users say
        </p>
      </div>

      {/* Subtle divider with soft green glow */}
      <div className="w-full h-px bg-[#2A2A2A] shadow-[#00FF88]/10 mt-8 md:mt-16"></div>

      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            ref={testimonialRefs.current[i]}
            className={cn(
              "flex items-start gap-3 md:gap-4",
              i % 2 === 0 ? "flex-row" : "flex-row-reverse",
              visibleIndices.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              "transition-all duration-600 ease-out"
            )}
          >
            {/* Avatar placeholder */}
            <div className="flex-shrink-0 mb-1">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Test${i}`}
                alt={t.author}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#333] border-2 border-[#444]"
              />
            </div>

            <div className="flex-1">
              <blockquote className="text-white font-medium text-base md:text-lg leading-relaxed mb-2">
                "{t.quote}"
              </blockquote>
              <div className="flex flex-col">
                <span className="text-[#888] text-xs md:text-sm font-light">{t.author}</span>
                <span className="text-[#666] text-[10px] md:text-xs font-light">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsMinimal;