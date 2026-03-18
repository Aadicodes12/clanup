"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import TextMarquee from '@/components/TextMarquee';
import HowItWorks from '@/components/HowItWorks';
import HowItWorksSteps from '@/components/HowItWorksSteps';
import FeatureVideo from '@/components/FeatureVideo';
import CityExplorer from '@/components/CityExplorer';
import Testimonials from '@/components/Testimonials';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Menu } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [isUnderlineVisible, setIsUnderlineVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsUnderlineVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const marqueeMessages = [
    "Build your hackathon team in minutes",
    "Find skilled teammates for your next project",
    "Connect with innovators and problem-solvers",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300 overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-card p-4 flex justify-between items-center border-b border-border sticky top-0 z-50">
        <div className="text-lg font-bold font-mono tracking-tight h-8 flex items-center">Clanup</div>
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="rounded-full">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center px-4 py-12 md:py-20">
        <div className="text-center w-full max-w-3xl flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-bold font-sans leading-tight mb-2 text-foreground">
            Great hacks start with
            <br />
            Great <span className="relative inline-block">
              teams
              <svg 
                className="absolute -bottom-1 left-0 w-full h-1 pointer-events-none" 
                viewBox="0 0 100 2" 
                preserveAspectRatio="none"
              >
                <path
                  d="M0,1 L100,1"
                  fill="none"
                  stroke="#7be382"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className={`transition-all duration-1000 ease-out ${isUnderlineVisible ? 'stroke-dashoffset-0' : 'stroke-dashoffset-100'}`}
                  style={{
                    strokeDasharray: 100,
                    strokeDashoffset: isUnderlineVisible ? 0 : 100
                  }}
                />
              </svg>
            </span>
          </div>

          <div className="h-12 mt-4 mb-8 w-full flex items-center justify-center overflow-hidden">
            <TextMarquee
              messages={marqueeMessages}
              className="text-sm md:text-lg font-sora font-bold text-amber-500 dark:text-amber-400"
              duration="20s"
            />
          </div>

          {/* Hero Video Section */}
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

            <p className="text-lg md:text-xl text-muted-foreground font-sora max-w-lg leading-relaxed px-6 mb-12">
              Clanup matches you with other members who are actively looking to participate in hackathons, collab on projects and build something great together.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorks />

      {/* How It Works Steps Section */}
      <HowItWorksSteps />

      {/* Explore & Learn More Buttons Section */}
      <div className="flex flex-row items-center justify-center gap-3 md:gap-6 pb-8 pt-16 px-4">
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

      {/* City Explorer Section */}
      <div className="mt-8">
        <CityExplorer />
      </div>

      {/* Features Section - Moved up to be closer to City Explorer */}
      <div className="relative overflow-hidden pb-12 mt-4">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 via-transparent to-foreground/5" />
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold font-sora tracking-tight mb-4">
                Features
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-sora">
                Everything you need, nothing you don't
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {/* Card 1 - Shifted Right */}
              <div className="col-span-1 relative group bg-card text-card-foreground rounded-2xl p-6 shadow-2xl transform transition-all duration-700 hover:scale-100 scale-90 translate-x-12 md:translate-x-8 border border-border">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#7be382] rounded-full flex items-center justify-center text-black text-lg font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold font-sora mb-3">Smart Matching</h3>
                <p className="text-muted-foreground font-sora text-xs mb-6 leading-relaxed">
                  Our algorithm connects you with teammates based on complementary skills and shared interests.
                </p>
                <button
                  onClick={() => console.log('Smart Matching clicked')}
                  className="absolute bottom-4 right-4 p-2 rounded-full bg-background border border-border text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background group-hover:scale-110"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Card 2 - Shifted Left */}
              <div className="col-span-1 relative group bg-card text-card-foreground rounded-2xl p-6 shadow-2xl transform transition-all duration-700 hover:scale-100 scale-90 -translate-x-12 md:-translate-x-8 border border-border">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#7be382] rounded-full flex items-center justify-center text-black text-lg font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold font-sora mb-3">Team Management</h3>
                <p className="text-muted-foreground font-sora text-xs mb-6 leading-relaxed">
                  Easily create, join, and manage your hackathon teams all in one centralized dashboard.
                </p>
                <button
                  onClick={() => console.log('Team Management clicked')}
                  className="absolute bottom-4 left-4 p-2 rounded-full bg-background border border-border text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background group-hover:scale-110"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Card 3 - Shifted Right */}
              <div className="col-span-1 relative group bg-card text-card-foreground rounded-2xl p-6 shadow-2xl transform transition-all duration-700 hover:scale-100 scale-90 translate-x-12 md:translate-x-8 border border-border">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#7be382] rounded-full flex items-center justify-center text-black text-lg font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold font-sora mb-3">Real-time Collaboration</h3>
                <p className="text-muted-foreground font-sora text-xs mb-6 leading-relaxed">
                  Communicate and collaborate with your team members through our integrated chat and project tools.
                </p>
                <button
                  onClick={() => console.log('Real-time Collaboration clicked')}
                  className="absolute bottom-4 right-4 p-2 rounded-full bg-background border border-border text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background group-hover:scale-110"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Feature Video Section - Moved to the end */}
      <FeatureVideo />

      <div className="h-24"></div>
    </div>
  );
};

export default Index;