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
      { threshold: 0.2 }
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
      icon: <Sparkles className="w-8 h-8 text-[#7be382]" />,
      title: "Set up your profile",
      description: "Showcase your skills, interests, and past projects to attract potential teammates and opportunities on Clanup."
    },
    {
      icon: <Users className="w-8 h-8 text-[#7be382]" />,
      title: "Find a team or hackathon",
      description: "Browse active hackathons and competitions, then join an existing team or create your own to collaborate with others."
    },
    {
      icon: <Code className="w-8 h-8 text-[#7be382]" />,
      title: "Build something awesome",
      description: "Work together with your new team to develop innovative solutions and bring your creative ideas to life."
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-black text-white relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center mb-16">
          <div className="flex-grow border-t-2 border-white max-w-[10%] md:max-w-[20%]"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-sora text-center mx-4 tracking-tight whitespace-nowrap">
            How It Works
          </h2>
          <div className="flex-grow border-t-2 border-white max-w-[10%] md:max-w-[20%]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line - Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#7be382]/30 -translate-x-1/2 hidden md:block"></div>
          <div
            className={cn(
              "absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#7be382] -translate-x-1/2 hidden md:block transition-all duration-1000 ease-out",
              isVisible ? "h-full" : "h-0"
            )}
          ></div>

          {/* Vertical Line - Mobile (Left aligned) */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-[#7be382]/30 md:hidden"></div>
          <div
            className={cn(
              "absolute left-[19px] top-0 bottom-0 w-[2px] bg-[#7be382] md:hidden transition-all duration-1000 ease-out",
              isVisible ? "h-full" : "h-0"
            )}
          ></div>

          <div className="flex flex-col gap-y-12 md:gap-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative flex flex-col md:flex-row items-center w-full md:min-h-[200px]",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Content Side */}
                <div className={cn(
                  "w-full md:w-1/2 flex px-4 md:px-12 mb-4 md:mb-0",
                  index % 2 === 0 ? "justify-start md:justify-end" : "justify-start md:justify-start"
                )}>
                  <Card
                    className={cn(
                      "w-full max-w-md bg-neutral-900 border-neutral-800 p-6 transition-all duration-500 hover:scale-105 hover:border-[#7be382] text-left",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="mb-4 flex justify-start">{step.icon}</div>
                    <CardTitle className="text-xl font-bold font-sora mb-3 text-white">
                      {step.title}
                    </CardTitle>
                    <CardContent className="p-0 text-gray-400 font-sora text-sm leading-relaxed">
                      {step.description}
                    </CardContent>
                  </Card>
                </div>

                {/* Center Circle */}
                <div className="absolute left-[19px] md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 z-10">
                  <div className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#7be382] flex items-center justify-center text-black font-bold text-lg md:text-xl shadow-[0_0_20px_rgba(123,227,130,0.3)] transition-all duration-500",
                    isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  )}
                  style={{ transitionDelay: `${index * 200 + 100}ms` }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Empty Side for Desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;