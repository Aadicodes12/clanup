"use client";

import React, { useRef, useEffect, useState } from 'react';
import { UserPlus, Search, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepProps {
  icon: any;
  title: string;
  description: string;
  index: number;
  animateLine?: boolean;
}

const Step = ({ icon: Icon, title, description, index, animateLine }: StepProps) => (
  <div className="flex items-start relative z-20 flex-col md:flex-row md:items-center space-x-0 md:space-x-4">
    {/* Icon container */}
    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center mx-auto md:mx-0">
      <Icon className="w-4 h-4 md:w-5 md:h-5 text-black" />
    </div>
    {/* Animate the line from the first icon */}
    {animateLine && (
      <div className="absolute top-0 left-4 md:left-5 w-0.5 h-full bg-gray-400 origin-top scale-y-0 animate-line"></div>
    )}
    {/* Text info */}
    <div className="mt-4 md:mt-0">
      <h3 className="text-lg font-bold font-sans text-white">{title}</h3>
      <p className="text-sm text-white/60 font-sora leading-relaxed">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Trigger header and line animation when section enters viewport
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !headerVisible) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      sectionRef.current && sectionObserver.observe(sectionRef.current);
    }
    if (headerRef.current) {
      headerRef.current && headerObserver.observe(headerRef.current);
    }
    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
    };
  }, [hasAnimated, headerVisible]);

  return (
    <section ref={sectionRef} className="w-full max-w-5xl mx-auto px-6 py-20 relative overflow-hidden">
      {/* Header appears on scroll */}
      <div
        ref={headerRef}
        className={`transition-opacity duration-700 opacity-0 ${headerVisible ? 'opacity-100' : ''}`}
      >
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-roboto mb-4 text-white">{'How Clanup Works'}</h2>
          <p className="text-white/70 text-lg md:text-xl font-calibri leading-relaxed px-4 md:px-0">
            Our process makes it easy to build your hackathon team and collaborate effectively.
          </p>
        </div>
      </div>
      
      {/* Icons with animated line */}
      <div className="relative flex flex-col items-center space-y-8 md:space-y-20">
        <Step
          icon={UserPlus}
          title="Create Profile"
          description="Set up your profile with your tech stack and interests."
          index={0}
          animateLine={hasAnimated}
        />
        <Step
          icon={Search}
          title="Discover Projects"
          description="Browse through active hackathons and projects."
          index={1}
        />
        <Step
          icon={Users}
          title="Form Your Clan"
          description="Connect with potential teammates and build your team."
          index={2}
        />
      </div>
    </section>
  );
};

export default HowItWorks;