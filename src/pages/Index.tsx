import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import TextMarquee from '@/components/TextMarquee';

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
      <div className="flex flex-col items-center p-4 pt-16 flex-grow">
        <div className="text-center w-full max-w-2xl">
          <div className="text-4xl md:text-5xl font-bold font-sans">
            <AnimatedText>Great hacks start with</AnimatedText>
            <br />
            <AnimatedText>Great teams</AnimatedText>
          </div>
          <TextMarquee
            messages={marqueeMessages}
            className="text-sm md:text-base font-sora font-bold text-orange-300 mt-6 mb-12"
            duration="240s"
          />
          <img
            src="/www.beatsnoop.com-WrzvQ-removebg-preview.png"
            alt="Team collaborating on a hackathon project"
            className="mt-8 max-w-sm h-auto mx-auto"
          />
          <div className="flex flex-col w-full items-center">
            <Button 
              className="mt-8 bg-[#7be382] hover:bg-[#6ad071] text-black font-bold py-3 px-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 font-roboto w-64 max-w-full"
              onClick={() => console.log('Browse Teams clicked')}
            >
              Browse Teams
            </Button>
            <Button 
              className="mt-4 bg-black border border-gray-400 text-white font-bold py-3 px-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 font-roboto w-64 max-w-full"
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