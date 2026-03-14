import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import DynamicTextRotator from '@/components/DynamicTextRotator'; // Import the new component
import { Button } from '@/components/ui/button'; // Import the Button component

const Index = () => {
  const roles = ["frontend dev", "backend dev", "pitch specialist", "case comp strategist", "ML expert"];

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
          {/* Image with reduced opacity */}
          <img
            src="/www.beatsnoop.com-WrzvQ-removebg-preview.png"
            alt="Team collaboration illustration"
            className="mx-auto max-w-full h-auto mt-8 md:mt-12 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg shadow-lg opacity-90"
          />
          {/* Dynamic text rotator */}
          <div className="mt-8">
            <DynamicTextRotator texts={roles} className="text-2xl font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;