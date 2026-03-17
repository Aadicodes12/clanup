"use client";

import React from 'react';

const CanvaVideo = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
          <iframe
            loading="lazy"
            className="absolute inset-0 w-full h-full border-none"
            src="https://www.canva.com/design/DAHEMGusUvQ/view?embed"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CanvaVideo;