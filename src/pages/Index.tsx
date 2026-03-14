import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import { Button } from '@/components/ui/button'; // Import the Button component
import TextMarquee from '@/components/TextMarquee'; // Import the new TextMarquee component

const Index = () => {
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
      <div className="flex flex-col items-center p-4 pt-16">
        <div className="text-center">
          <AnimatedText className="text-3xl md:text-4xl font-bold font-sans">
            Great hacks start with great teams
          </AnimatedText>
          <TextMarquee
            messages={marqueeMessages}
            className="text-sm md:text-base font-sora font-bold text-orange-300 mt-6 mb-12"
            duration="120s" // Increased duration to 120s for much slower speed
          />
          <img
            src="/www.beatsnoop.com-WrzvQ-removebg-preview.png"
            alt="Team collaborating on a hackathon project"
            className="mt-8 max-w-sm h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;