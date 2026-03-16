"use client";

import React from 'react';
import { Search, Users, Zap, Shield, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: <Search className="w-6 h-6 text-[#7be382]" />,
      title: "Smart Matching",
      description: "Our algorithm connects you with teammates based on complementary skills and shared interests.",
      action: () => navigate('/teams')
    },
    {
      icon: <Users className="w-6 h-6 text-[#7be382]" />,
      title: "Team Management",
      description: "Easily create, join, and manage your hackathon teams all in one centralized dashboard.",
      action: () => console.log('Team Management clicked')
    },
    {
      icon: <Zap className="w-6 h-6 text-[#7be382]" />,
      title: "Real-time Collab",
      description: "Communicate instantly with potential teammates and coordinate your project ideas effectively.",
      action: () => console.log('Real-time Collab clicked')
    },
    {
      icon: <Shield className="w-6 h-6 text-[#7be382]" />,
      title: "Verified Profiles",
      description: "Connect with confidence knowing that every member's skills and background are verified.",
      action: () => console.log('Verified Profiles clicked')
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white text-black relative z-30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4 uppercase">
            Features
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-sora">
            Everything you need, nothing you don't
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-50 border border-gray-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:border-gray-300"
            >
              <button 
                onClick={feature.action}
                className="absolute top-6 right-6 p-2 rounded-full bg-white border border-gray-200 text-black transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:scale-110"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
              
              <div className="bg-white p-3 rounded-2xl flex-shrink-0 w-fit mb-6 shadow-sm">
                {feature.icon}
              </div>
              
              <div>
                <h3 className="text-2xl font-bold font-sora mb-3">{feature.title}</h3>
                <p className="text-gray-500 font-sora text-base leading-relaxed max-w-[85%]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;