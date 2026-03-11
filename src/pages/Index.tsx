import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import PhoneMockup from '@/components/PhoneMockup'; // Import the new component

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
      <div className="flex flex-col items-center flex-grow p-4 pt-12 space-y-12"> {/* Removed justify-center, added pt-12 and space-y-12 */}
        <div className="text-center"> {/* Removed mt-16 and mb-12, let space-y-12 handle spacing */}
          <AnimatedText className="text-4xl font-bold font-sans">
            Great hacks start with great teams
          </AnimatedText>
          <p className="text-sm md:text-base font-sora font-bold text-orange-300 mt-6">
            Build your hackathon team in minutes
          </p>
        </div>
        
        {/* Phone Mockup */}
        <PhoneMockup>
          {/* You can add content inside the phone screen here */}
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            Your app content goes here!
          </div>
        </PhoneMockup>
      </div>
    </div>
  );
};

export default Index;