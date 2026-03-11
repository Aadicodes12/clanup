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
          <p className="text-sm md:text-base font-sora font-bold text-orange-300 mt-6 mb-12"> {/* Increased mb-8 to mb-12 */}
            Build your hackathon team in minutes
          </p>
          <div className="flex flex-col space-y-4 max-w-sm mx-auto"> {/* Added max-w-sm and mx-auto */}
            <Button className="bg-white hover:bg-gray-100 text-black font-sora font-bold py-2 px-6 rounded-lg text-lg w-full"> {/* Changed to w-full */}
              Explore Hackathons
            </Button>
            <Button className="bg-white hover:bg-gray-100 text-black font-sora font-bold py-2 px-6 rounded-lg text-lg w-full"> {/* Changed to w-full */}
              Meet Teammates
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;