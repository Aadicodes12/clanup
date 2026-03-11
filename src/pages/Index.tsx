import React from 'react';
import AnimatedText from '@/components/AnimatedText';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="bg-neutral-900 p-4 flex justify-between items-center">
        <div className="text-lg font-bold font-sans">Clanup</div>
        <div className="text-lg font-sans">About</div>
      </nav>
      {/* Thicker horizontal line */}
      <div className="border-b-2 border-white w-full"></div>

      {/* Main content area */}
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <div className="mt-16 text-center">
          <AnimatedText className="text-4xl font-bold font-sans">
            Great hacks start with great teams
          </AnimatedText>
          <p className="text-sm md:text-base font-sora font-bold text-orange-300 mt-6">
            Build your hackathon team in minutes
          </p>
          {/* iPhone Mockup Image */}
          <img
            src="/Free-Floating-iPhone-13-Mockup-PSD-removebg-preview.png"
            alt="iPhone 13 Mockup"
            className="mt-8 mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;