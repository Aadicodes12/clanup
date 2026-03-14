"use client";

import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import TextMarquee from '@/components/TextMarquee';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const marqueeMessages = [
    "Build your hackathon team in minutes",
    "Find skilled teammates for your next project",
    "Connect with innovators and problem-solvers",
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-neutral-900 p-4 flex justify-between items-center">
        <div className="text-lg font-bold font-sans">Clanup</div>
        <div className="text-lg font-sans">About</div>
      </nav>
      {/* Thicker horizontal line */}
      <div className="border-b-2 border-white w-full"></div>

      {/* Main content area */}
      <div className="flex flex-col items-center px-4 py-8 md:py-16 flex-grow">
        <div className="text-center w-full max-w-2xl flex flex-col items-center">
          <div className="text-3xl md:text-5xl font-bold font-sans leading-tight">
            <AnimatedText>Great hacks start with</AnimatedText>
            <br />
            <AnimatedText>Great teams</AnimatedText>
          </div>
          
          <div className="h-12 mt-4 md:mt-6 mb-6 md:mb-8 w-full flex items-center justify-center overflow-hidden">
            <TextMarquee
              messages={marqueeMessages}
              className="text-xs md:text-base font-sora font-bold text-amber-400"
              duration="20s"
            />
          </div>

          {/* Video Section */}
          <div className="w-full max-w-[320px] md:max-w-md mx-auto mb-8 rounded-2xl overflow-hidden border-2 border-neutral-800 bg-neutral-900 shadow-2xl shadow-[#7be382]/10 relative aspect-video">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
              key="hero-video"
            >
              <source src="/5530-184666657_small.mp4" type="video/mp4" />
              <p className="text-xs text-gray-500 p-4">Video not found. Please ensure the file is in the public folder.</p>
            </video>
          </div>
          
          <div className="flex flex-col w-full items-center mt-4 space-y-4">
            <Button 
              className="bg-[#7be382] hover:bg-[#6ad071] text-black font-bold py-4 px-8 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-roboto tracking-wider w-full max-w-[280px]"
              onClick={() => navigate('/teams')}
            >
              Browse Teams
            </Button>
            <Button 
              variant="outline"
              className="bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-roboto tracking-wider w-full max-w-[280px]"
              onClick={() => console.log('Sign Up clicked')}
            >
              Sign Up
            </Button>

            {/* Separator Line shifted significantly downwards */}
            <div className="w-12 h-[1px] bg-white/40 mt-24 mb-6"></div>

            {/* Description Text with increased size */}
            <p className="text-lg md:text-xl text-white/90 font-calibri max-w-md leading-relaxed px-6">
              Clanup matches you with other members who are actively looking to participate in hackathons, collab on projects and build something great together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;