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
];

const TrustedLogos = () => (
  <div className="overflow-hidden w-full py-8 bg-transparent">
    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-white">Trusted by hackers from</h3>
    <div className="flex flex-wrap justify-center items-center gap-6 px-4">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt="Logo"
          className="h-12 md:h-16 object-contain"
        />
      ))}
    </div>
  </div>
);

export default TrustedLogos;