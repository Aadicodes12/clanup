"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Sparkles, Users, Code } from 'lucide-react';
import { cn } from '@/lib/utils'; // Import cn for conditional classes

const HowItWorksSteps = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
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
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-black text-white relative z-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-sora text-center mb-12 tracking-tight">
          How It Works
        </h2>

        <div className="relative max-w-2xl mx-auto py-8"> {/* Container for steps and line */}
          {/* Vertical Line Container (static background) - visible only on medium screens and up */}
          <div className="absolute hidden md:block left-[26px] top-0 bottom-0 w-[2px] bg-[#7be382]/30"></div>
          {/* Animated Vertical Line (foreground) - visible only on medium screens and up */}
          <div
            className={cn(
              "absolute hidden md:block left-[26px] top-0 w-[2px] bg-[#7be382]",
              isVisible ? "animate-draw-line-vertical" : "h-0"
            )}
            style={{ transition: isVisible ? '' : 'none' }} // Remove transition if animation is active
          ></div>

          <div className="flex flex-col items-center md:items-start gap-y-12"> {/* Stacked steps */}
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 w-full">
                {/* Circle with step number */}
                <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#7be382] flex items-center justify-center text-black font-bold text-xl md:text-2xl flex-shrink-0 -ml-[2px] md:-ml-[28px] md:mr-0">
                  {index + 1}
                </div>
                <Card
                  className="flex-grow bg-neutral-900 border-neutral-800 p-5 transition-transform duration-300 hover:scale-105 hover:border-[#7be382] max-w-xs md:max-w-none text-center md:text-left"
                >
                  <div className="mb-4 flex justify-center md:justify-start">{step.icon}</div>
                  <CardTitle className="text-xl font-bold font-sora mb-3 text-white">
                    {step.title}
                  </CardTitle>
                  <CardContent className="p-0 text-gray-400 font-sora text-sm">
                    {step.description}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;