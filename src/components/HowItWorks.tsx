"use client";

import React, { useRef, useEffect, useState } from 'react';
import iitDelhiLogo from '@/assets/iit_delhi.png';
import iitMadrasLogo from '@/assets/iit-madras-logo-png_seeklogo-310945.png';
import iitKanpurLogo from '@/assets/iit_kanpur.png';
import whiteBackground from '@/assets/white-background.jpg'; // Import the new white background image

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
          {/* Logos added here with white background */}
          <div 
            className="flex justify-center items-center space-x-8 mt-8 p-6 rounded-lg relative overflow-hidden"
            style={{ 
              backgroundImage: `url(${whiteBackground})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              minHeight: '120px' // Ensure enough height for the background to show
            }}
          >
            {/* Overlay to reduce intensity of white background and make logos pop */}
            <div className="absolute inset-0 bg-white opacity-90"></div> 
            <img src={iitDelhiLogo} alt="IIT Delhi Logo" className="h-16 w-auto relative z-10 opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <img src={iitMadrasLogo} alt="IIT Madras Logo" className="h-16 w-auto relative z-10 opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <img src={iitKanpurLogo} alt="IIT Kanpur Logo" className="h-16 w-auto relative z-10 opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;