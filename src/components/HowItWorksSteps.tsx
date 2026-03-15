"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Sparkles, Users, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

const HowItWorksSteps = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const steps = [
    {
      icon: <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-[#7be382]" />,
      title: "Set up your profile",
      description: "Showcase your skills and interests to attract teammates."
    },
    {
      icon: <Users className="w-5 h-5 md:w-8 md:h-8 text-[#7be382]" />,
      title: "Find a team",
      description: "Browse active hackathons and join or create a team."
    },
    {
      icon: <Code className="w-5 h-5 md:w-8 md:h-8 text-[#7be382]" />,
      title: "Build together",
      description: "Work with your team to bring creative ideas to life."
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-black text-white relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-2 md:px-4">
        <div className="flex items-center justify-center mb-12 md:mb-16">
          <div className="flex-grow border-t-2 border-white max-w-[10%] md:max-w-[20%]"></div>
          <h2 className="text-2xl md:text-4xl font-bold font-sora text-center mx-4 tracking-tight whitespace-nowrap">
            How It Works
          </h2>
          <div className="flex-grow border-t-2 border-white max-w-[10%] md:max-w-[20%]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line - Always Centered */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#7be382]/30 -translate-x-1/2"></div>
          <div
            className={cn(
              "absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#7be382] -translate-x-1/2 transition-all duration-1000 ease-out",
              isVisible ? "h-full" : "h-0"
            )}
          ></div>

          <div className="flex flex-col gap-y-8 md:gap-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative flex items-center w-full min-h-[140px] md:min-h-[200px]",
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}
              >
                {/* Content Side (Left or Right) */}
                <div className={cn(
                  "w-[45%] md:w-1/2 flex",
                  index % 2 === 0 ? "justify-end pr-4 md:pr-12" : "justify-start pl-4 md:pl-12"
                )}>
                  <Card
                    className={cn(
                      "w-full max-w-[180px] md:max-w-md bg-neutral-900 border-neutral-800 p-3 md:p-6 transition-all duration-500 hover:scale-105 hover:border-[#7be382] text-left",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="mb-2 md:mb-4 flex justify-start">{step.icon}</div>
                    <CardTitle className="text-xs md:text-xl font-bold font-sora mb-1 md:mb-3 text-white leading-tight">
                      {step.title}
                    </CardTitle>
                    <CardContent className="p-0 text-gray-400 font-sora text-[10px] md:text-sm leading-relaxed">
                      {step.description}
                    </CardContent>
                  </Card>
                </div>

                {/* Center Circle - Always Centered */}
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                  <div className={cn(
                    "w-7 h-7 md:w-12 md:h-12 rounded-full bg-[#7be382] flex items-center justify-center text-black font-bold text-xs md:text-xl shadow-[0_0_15px_rgba(123,227,130,0.3)] transition-all duration-500",
                    isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  )}
                  style={{ transitionDelay: `${index * 200 + 100}ms` }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Empty Side */}
                <div className="w-[45%] md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;