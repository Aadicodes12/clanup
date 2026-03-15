"use client";

import React from 'react';

const logos = [
  "https://via.placeholder.com/150x50?text=IIIT-Hyderabad",
  "https://via.placeholder.com/150x50?text=NIT-Trichy",
  "https://via.placeholder.com/150x50?text=IIIT-Bharti",
  "https://via.placeholder.com/150x50?text=NIT-Surathkal",
  "https://via.placeholder.com/150x50?text=IIIT-Delhi",
  "https://via.placeholder.com/150x50?text=NIT-Kurukshetra",
  // Fallback placeholders for missing images
];

const TrustedLogos = () => (
  <div className="overflow-hidden w-full relative py-8 bg-transparent">
    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-white">Trusted by hackers from</h3>
    <div className="absolute top-0 left-0 w-full h-full animate-slide-left whitespace-nowrap flex items-center">
      {logos.concat(logos).map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt="Logo"
          className="mx-4 h-12 md:h-16 object-contain"
        />
      ))}
    </div>
    <style jsx>{`
      @keyframes slide-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-slide-left {
        animation: slide-left 30s linear infinite;
      }
    `}</style>
  </div>
);

export default TrustedLogos;