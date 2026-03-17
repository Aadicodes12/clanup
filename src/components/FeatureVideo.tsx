"use client";

import React from 'react';

const FeatureVideo = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-card aspect-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/untitled.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default FeatureVideo;