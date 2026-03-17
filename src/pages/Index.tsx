"use client";

import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import TextMarquee from '@/components/TextMarquee';
import HowItWorks from '@/components/HowItWorks';
import HowItWorksSteps from '@/components/HowItWorksSteps';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const marqueeMessages = [
    "Build your hackathon team in minutes",
    "Find skilled teammates for your next project",
    "Connect with innovators and problem-solvers",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300">
      {/* Navbar */}
      <nav className="bg-card p-4 flex justify-between items-center border-b border-border sticky top-0 z-50">
        <div className="text-xl font-bold font-sans tracking-tight h-8 flex items-center">Clanup</div>
        <div className="flex items-center gap-6">
          <div className="text-xl font-bold font-sans tracking-tight cursor-pointer hover:opacity-70 transition-opacity h-8 flex items-center">About</div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center px-4 py-12 md:py-20">
        <div className="text-center w-full max-w-3xl flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-bold font-sans leading-tight mb-2">
            <AnimatedText className="from-white via-neutral-400 to-white">
              Great hacks start with
            </AnimatedText>
            <br />
            <AnimatedText className="from-white via-neutral-400 to-white">
              Great teams
            </AnimatedText>
          </div>
          
          <div className="h-12 mt-4 mb-8 w-full flex items-center justify-center overflow-hidden">
            <TextMarquee
              messages={marqueeMessages}
              className="text-sm md:text-lg font-sora font-bold text-amber-500 dark:text-amber-400"
              duration="20s"
            />
          </div>

          {/* Video Section */}
          <div className="w-full max-w-[340px] md:max-w-lg mx-auto mb-10 rounded-2xl overflow-hidden border-2 border-border bg-card shadow-2xl shadow-primary/5 relative aspect-video">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="/5530-184666657_small.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="flex flex-col w-full items-center space-y-4">
            <Button 
              className="bg-[#7be382] hover:bg-[#6ad071] text-black font-bold py-6 px-10 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-sora tracking-tight w-full max-w-[300px]"
              onClick={() => navigate('/teams')}
            >
              Browse Teams
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-foreground/10 hover:border-foreground/30 text-foreground font-bold py-6 px-10 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-sora tracking-tight w-full max-w-[300px]"
              onClick={() => console.log('Sign Up clicked')}
            >
              Sign Up
            </Button>

            <div className="w-16 h-[2px] bg-foreground/10 mt-16 mb-8"></div>

            <p className="text-lg md:text-xl text-muted-foreground font-calibri max-w-lg leading-relaxed px-6 mb-12">
              Clanup matches you with other members who are actively looking to participate in hackathons, collab on projects and build something great together.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Sections */}
      <HowItWorks />
      <HowItWorksSteps />

      {/* Purple Semicircle Section */}
      <div className="relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-[#7be382] rounded-full" />
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center py-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sora text-black mb-4">
                Ready to find your perfect team?
              </h2>
              <p className="text-lg text-black/80 font-sora">
                Join thousands of innovators building amazing projects together
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Explore & Learn More Buttons Section */}
      <div className="flex flex-row items-center justify-center gap-3 md:gap-6 pb-12 pt-8 px-4">
        <Button 
          className="bg-[#FF7A00] hover:bg-[#FF8A00] text-black font-bold py-4 md:py-5 text-lg md:text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-sora tracking-tight flex items-center justify-center gap-2 w-[150px] md:w-[220px]"
          onClick={() => navigate('/teams')}
        >
          Explore <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
        <Button 
          className="bg-foreground text-background hover:opacity-90 font-bold py-4 md:py-5 text-lg md:text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-sora tracking-tight flex items-center justify-center gap-2 w-[150px] md:w-[220px]"
          onClick={() => console.log('Learn More clicked')}
        >
          Learn More <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
      </div>

      <div className="h-24"></div>
    </div>
  );
};

export default Index;