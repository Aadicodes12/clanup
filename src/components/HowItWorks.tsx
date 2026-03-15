"use client";

import React, { useRef, useEffect, useState } from 'react';
import iitDelhiLogo from '@/assets/iit_delhi.png';
import iitMadrasLogo from '@/assets/iit-madras-logo-png_seeklogo-310945.png';

const HowItWorks = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger header animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !headerVisible) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [headerVisible]);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-5xl mx-auto px-6 py-20 relative overflow-hidden"
    >
      {/* Header appears on scroll */}
      <div
        className={`transition-opacity duration-700 ${headerVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-roboto mb-4 text-white">{'Trusted by users'}</h2>
          <p className="text-white/70 text-lg md:text-xl font-calibri leading-relaxed px-4 md:px-0">
            Our process makes it easy to build your hackathon team and collaborate effectively.
          </p>
          {/* Logos added here */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <img src={iitDelhiLogo} alt="IIT Delhi Logo" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <img src={iitMadrasLogo} alt="IIT Madras Logo" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;