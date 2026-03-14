"use client";

import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import TextMarquee from '@/components/TextMarquee';
import VideoFrame from '@/components/VideoFrame';
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
      <div className="flex flex-col items-center px-4 py-10 md:py-16 flex-grow">
        <div className="text-center w-full max-w-2xl flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-bold font-sans leading-tight mb-6">
            <AnimatedText>Great hacks start with</AnimatedText>
            <br />
            <AnimatedText>Great teams</AnimatedText>
          </div>
          
          <div className="h-12 w-full flex items-center justify-center overflow-hidden mb-10">
            <TextMarquee
              messages={marqueeMessages}
              className="text-sm md:text-lg font-sora font-bold text-amber-400"
              duration="25s"
            />
          </div>

          <div className="w-full max-w-lg mx-auto mb-12 px-2">
            <VideoFrame />
          </div>

          <div className="w-full max-w-[280px] md:max-w-md mx-auto mb-12">
            <img
              src="/www.beatsnoop.com-WrzvQ-removebg-preview.png"
              alt="Team collaborating"
              className="w-full h-auto"
            />
          </div>
          
          <div className="flex flex-col w-full items-center space-y-4 px-6 pb-10">
            <Button 
              className="bg-[#7be382] hover:bg-[#6ad071] text-black font-bold py-4 px-8 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-roboto tracking-wider w-full max-w-[280px]"
              onClick={() => navigate('/hackathons')}
            >
              Browse Hackathons
            </Button>
            <Button 
              className="bg-black border border-gray-500 text-white font-bold py-4 px-8 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-roboto tracking-wider w-full max-w-[280px]"
              onClick={() => console.log('Sign Up clicked')}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;