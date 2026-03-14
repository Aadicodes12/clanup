import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import TiledImageReveal from '@/components/TiledImageReveal'; // Import the new component

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
          {/* Tiled image reveal component */}
          <TiledImageReveal
            src="/www.beatsnoop.com-WrzvQ.jpg"
            alt="Team collaboration illustration"
            rows={5}
            cols={8}
            className="mx-auto max-w-full h-auto mt-8 md:mt-12 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg shadow-lg aspect-video"
            tileClassName="bg-neutral-800" // Optional: add a background to tiles before image appears
          />
        </div>
      </div>
    </div>
  );
};

export default Index;