import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import { Button } from '@/components/ui/button'; // Import the Button component

const Index = () => {
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
          <AnimatedText className="text-4xl font-bold font-sans">
            Great hacks start with great teams
          </AnimatedText>
          <p className="text-sm md:text-base font-sora font-bold text-orange-300 mt-6 mb-12">
            Build your hackathon team in minutes
          </p>
          {/* Image added below the orange text */}
          <img
            src="/wmremove-transformed.png"
            alt="Team collaboration"
            className="mx-auto max-w-full h-auto mt-8 md:mt-12 w-3/4 md:w-1/2 lg:w-1/3 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;