"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface VideoFrameProps {
  className?: string;
}

const VideoFrame: React.FC<VideoFrameProps> = ({ className }) => {
  return (
    <div className={cn("relative w-full aspect-video rounded-xl overflow-hidden border-2 border-neutral-800 shadow-2xl shadow-[#7be382]/20 bg-neutral-900", className)}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-34429-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none"></div>
    </div>
  );
};

export default VideoFrame;