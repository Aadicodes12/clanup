"use client";

import React from 'react';

const VideoShowcase = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#7be382] rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-orange-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-white mb-4 uppercase">
            See Clanup in Action
          </h2>
          <p className="text-lg text-gray-400 font-sora max-w-2xl mx-auto">
            Watch how easy it is to find your next dream team and start building amazing projects.
          </p>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl group">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-laptop-34440-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay for a more cinematic look */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Play button decoration (non-functional as it's autoplay) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-[#7be382]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;