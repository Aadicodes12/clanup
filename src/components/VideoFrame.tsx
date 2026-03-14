"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface VideoFrameProps {
  className?: string;
}

const VideoFrame: React.FC<VideoFrameProps> = ({ className }) => {
  return (
    <div className={cn("relative w-full aspect-video rounded-xl overflow-hidden border-2 border-neutral-800 shadow-2xl shadow-[#7be382]/10", className)}>
      <iframe
        src="https://pixabay.com/videos/id-5530/"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
      {/* Overlay to prevent interaction if desired, or just for styling */}
      <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-xl"></div>
    </div>
  );
};

export default VideoFrame;