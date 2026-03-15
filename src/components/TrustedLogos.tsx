"use client";

import React from 'react';

const logos = [
  "/images/iit-bangalore.png",
  "/images/iit-bhilai.png",
  "/images/iit-bhubaneswar.png",
  "/images/iit-bombay.png",
  "/images/iit-delhi.png",
  "/images/iit-dharwad.png",
  "/images/iit-ism-dhanbad.png",
  "/images/iit-gandhinagar.png",
  "/images/iit-goa.png",
  "/images/iit-guwahati.png",
  "/images/iit-hyderabad.png",
  "/images/iit-indore.png",
  "/images/iit-jodhpur.png",
  "/images/iit-kurukshetra.png",
  "/images/iit-kharagpur.png",
  "/images/iit-madras.png",
  "/images/iit-mandi.png",
  "/images/iit-patna.png",
  "/images/iit-roorkee.png",
  "/images/iit-ropar.png",
  "/images/iit-jammu.png",
  "/images/iit-palakkad.png",
  "/images/iit-tirupati.png",
  "https://via.placeholder.com/150", // placeholder for testing
];

export const TrustedLogos = () => (
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