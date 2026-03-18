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
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = testimonialRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleIndices.includes(index)) {
              setVisibleIndices((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 },
    );

    testimonialRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      testimonialRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleIndices]);

  return (
    <section className="w-full py-24 bg-[#000000] relative overflow-hidden">
      {/* Subtle Grain Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold font-sora text-white mb-3 tracking-tight">
            Still in doubt?
          </h2>
          <p className="text-lg text-[#888888] font-sora font-light">
            Have a look at what our users say
          </p>
        </div>

        <div className="flex flex-col gap-y-16 md:gap-y-24">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={(el) => (testimonialRefs.current[i] = el)}
              className={cn(
                "relative flex flex-col items-center text-center transition-all duration-1000 ease-out",
                visibleIndices.includes(i) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4"
              )}
            >
              {/* Testimonial Content */}
              <div className="mb-4 md:mb-6 px-4">
                <blockquote className="text-white font-medium text-lg md:text-xl leading-relaxed mb-4 font-sora">
                  "{t.quote}"
                </blockquote>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[#888888] text-sm font-sora">{t.author}</span>
                  <span className="text-[#666666] text-xs font-sora font-light">{t.role}</span>
                </div>
              </div>

              {/* Floating Anchor Line */}
              <div className="w-full max-w-xs md:max-w-md mt-4 relative">
                {/* The Line */}
                <div className="h-[1px] w-full bg-[#2A2A2A]" />
                {/* The Soft Glow */}
                <div 
                  className="absolute inset-0 h-[1px] w-full bg-[#00FF88] blur-md opacity-10"
                  style={{ boxShadow: '0 0 15px 2px rgba(0, 255, 136, 0.08)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMinimal;