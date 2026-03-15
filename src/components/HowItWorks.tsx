"use client";

import React, { useRef, useEffect, useState } from 'react';
import iitDelhiLogo from '@/assets/iit_delhi.png';
import iitMadrasLogo from '@/assets/iit-madras-logo-png_seeklogo-310945.png';
import iitKanpurLogo from '@/assets/iit_kanpur.png';
import whiteBackground from '@/assets/white-background.jpg';
import LogoMarquee from './LogoMarquee';

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

  const logos = [
    { src: iitDelhiLogo, alt: "IIT Delhi Logo" },
    { src: iitMadrasLogo, alt: "IIT Madras Logo" },
    { src: iitKanpurLogo, alt: "IIT Kanpur Logo" },
    { src: iitDelhiLogo, alt: "IIT Delhi Logo" }, // Duplicate to ensure continuous loop
    { src: iitMadrasLogo, alt: "IIT Madras Logo" },
    { src: iitKanpurLogo, alt: "IIT Kanpur Logo" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 relative" // Reduced vertical padding to shift it upwards
    >
      {/* Header text, centered within its own container */}
      <div 
        className={`transition-opacity duration-700 ${headerVisible ? 'opacity-100' : 'opacity-0'} max-w-4xl mx-auto text-center relative z-20 px-4 mb-8`} // Reduced margin-bottom
      >
        <h2 className="text-3xl md:text-4xl font-bold font-roboto mb-4 text-white">
          Trusted by users <br/> from
        </h2>
        {/* Paragraph removed */}
      </div>

      {/* Full width background and logos */}
      <div 
        className="w-full py-6 relative z-10 overflow-hidden" 
        style={{ 
          backgroundImage: `url(${whiteBackground})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          minHeight: '120px'
        }}
      >
        {/* Overlay to reduce intensity of white background and make logos pop */}
        <div className="absolute inset-0 bg-white opacity-90"></div> 
        <LogoMarquee logos={logos} className="relative z-10" duration="30s" />
      </div>
    </section>
  );
};

export default HowItWorks;