"use client";

import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import TextMarquee from '@/components/TextMarquee';
import HowItWorks from '@/components/HowItWorks';
import HowItWorksSteps from '@/components/HowItWorksSteps';
import Testimonials from '@/components/Testimonials';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
      <nav className="bg-card p-4 flex justify-between items-center border-b border-border">
        <div className="text-lg font-bold font-sans">Clanup</div>
        <div className="flex items-center gap-4">
          <div className="text-lg font-sans cursor-pointer hover:opacity-70">About</div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center px-4 py-8 md:py-16">
        <div className="text-center w-full max-w-2xl flex flex-col items-center">
          <div className="text-3xl md:text-5xl font-bold font-sans leading-tight">
            <AnimatedText className="dark:from-white dark:via-gray-300 dark:to-white from-black via-gray-600 to-black">
              Great hacks start with
            </AnimatedText>
            <br />
            <AnimatedText className="dark:from-white dark:via-gray-300 dark:to-white from-black via-gray-600 to-black">
              Great teams
            </AnimatedText>
          </div>
          
          <div className="h-12 mt-4 md:mt-6 mb-6 md:mb-8 w-full flex items-center justify-center overflow-hidden">
            <TextMarquee
              messages={marqueeMessages}
              className="text-xs md:text-base font-sora font-bold text-amber-500 dark:text-amber-400"
              duration="20s"
            />
          </div>

          {/* Video Section */}
          <div className="w-full max-w-[320px] md:max-w-md mx-auto mb-8 rounded-2xl overflow-hidden border-2 border-border bg-card shadow-2xl shadow-primary/10 relative aspect-video">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
              key="hero-video"
            >
              <source src="/5530-184666657_small.mp4" type="video/mp4" />
              <p className="text-xs text-muted-foreground p-4">Video not found.</p>
            </video>
          </div>
          
          <div className="flex flex-col w-full items-center mt-4 space-y-4">
            <Button 
              className="bg-[#7be382] hover:bg-[#6ad071] text-black font-bold py-4 px-8 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-roboto tracking-wider w-full max-w-[280px]"
              onClick={() => navigate('/teams')}
            >
              Browse Teams
            </Button>
            <Button 
              variant="outline"
              className="bg-transparent border-2 border-foreground/20 hover:border-foreground/40 text-foreground font-bold py-4 px-8 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-roboto tracking-wider w-full max-w-[280px]"
              onClick={() => console.log('Sign Up clicked')}
            >
              Sign Up
            </Button>

            {/* Separator Line */}
            <div className="w-12 h-[1px] bg-foreground/40 mt-16 mb-8"></div>

            {/* Description Text */}
            <p className="text-lg md:text-xl text-foreground/90 font-calibri max-w-md leading-relaxed px-6 mb-12">
              Clanup matches you with other members who are actively looking to participate in hackathons, collab on projects and build something great together.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Sections */}
      <HowItWorks />
      <HowItWorksSteps />

      {/* Explore Button Section */}
      <div className="flex flex-col items-center pb-12 pt-8">
        <Button 
          className="bg-[#FFB347] hover:bg-[#ffa526] text-black font-bold py-6 px-12 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-sora tracking-wide shadow-lg shadow-orange-500/20 flex items-center gap-2"
          onClick={() => navigate('/teams')}
        >
          Explore <ArrowRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Section Break */}
      <div className="w-full px-4 md:px-24 mb-12">
        <div className="border-t-2 border-foreground/20 w-full"></div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />
      
      <div className="h-24"></div>
    </div>
  );
};

export default Index;