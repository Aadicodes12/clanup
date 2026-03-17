"use client";

import React from 'react';
import { ArrowRight, MapPin as MapPinIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Import local assets
import mumbaiImg from '@/assets/mumbai.jpg';
import delhiImg from '@/assets/delhi.jpg';
import hyderabadImg from '@/assets/hyderabad.jpg';
import puneImg from '@/assets/pune.jpg';
import kolkataImg from '@/assets/kolkata.jpg';

const cities = [
  { 
    name: "Mumbai", 
    count: "120+ Clans",
    image: mumbaiImg
  },
  { 
    name: "Delhi", 
    count: "95+ Clans",
    image: delhiImg
  },
  { 
    name: "Bengaluru", 
    count: "150+ Clans",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&q=80"
  },
  { 
    name: "Hyderabad", 
    count: "80+ Clans",
    image: hyderabadImg
  },
  { 
    name: "Pune", 
    count: "65+ Clans",
    image: puneImg
  },
  { 
    name: "Kolkata", 
    count: "45+ Clans",
    image: kolkataImg
  },
];

const CityExplorer = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold font-helvetica tracking-tight mb-3 uppercase">
            Explore <span className="font-calibri underline text-[#7be382] text-3xl md:text-5xl inline-block translate-y-[2px]">Clans</span> in your city
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-sora">
            Connect with local innovators and build together
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {cities.map((city, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer border-border hover:border-[#7be382] transition-all duration-300 hover:shadow-xl bg-card overflow-hidden flex flex-col"
            >
              {/* City Image - Always Visible */}
              <div className="h-24 md:h-40 w-full overflow-hidden relative">
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <CardContent className="p-3 md:p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="p-1.5 md:p-2 rounded-full bg-[#7be382]/10 text-[#7be382] group-hover:bg-[#7be382] group-hover:text-black transition-colors duration-300">
                      <MapPinIcon className="w-3 h-3 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-lg font-bold font-sora text-foreground">{city.name}</h3>
                      <p className="text-[10px] md:text-xs text-muted-foreground font-sora">{city.count}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[#7be382] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityExplorer;