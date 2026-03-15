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

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 pt-12"> {/* Added pt-12 for space above circles */}
          {/* SVG line - visible only on medium screens and up */}
          <div className="absolute hidden md:block w-full h-px top-[70px] left-0"> {/* Position the line slightly above the circles' center */}
            <svg className="w-full h-full" viewBox="0 0 100 2">
              <line
                x1="0" y1="1" x2="100" y2="1"
                stroke="#7be382"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="100" // Set total length
                strokeDashoffset="100" // Start hidden
                className={cn(isVisible ? "animate-draw-line" : "transition-none")} // Apply animation conditionally
              />
            </svg>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Circle with step number */}
              <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#7be382] flex items-center justify-center text-black font-bold text-xl md:text-2xl mb-6 shadow-md">
                {index + 1}
              </div>
              <Card
                className="bg-neutral-900 border-neutral-800 flex flex-col items-center text-center p-5 transition-transform duration-300 hover:scale-105 hover:border-[#7be382] max-w-xs mx-auto"
              >
                <div className="mb-4">{step.icon}</div>
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
    </section>
  );
};

export default HowItWorksSteps;