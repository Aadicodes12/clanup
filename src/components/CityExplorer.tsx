"use client";

import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const cities = [
  { 
    name: "Mumbai", 
    count: "120+ Teams",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400&q=80"
  },
  { 
    name: "Delhi", 
    count: "95+ Teams",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80"
  },
  { 
    name: "Bengaluru", 
    count: "150+ Teams",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&q=80"
  },
  { 
    name: "Hyderabad", 
    count: "80+ Teams",
    image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=400&q=80"
  },
  { 
    name: "Pune", 
    count: "65+ Teams",
    image: "https://images.unsplash.com/photo-1562673005-7693bd6d6e54?w=400&q=80"
  },
  { 
    name: "Kolkata", 
    count: "45+ Teams",
    image: "https://images.unsplash.com/photo-1558431382-bb7b68c4b5d7?w=400&q=80"
  },
];

const CityExplorer = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold font-sora tracking-tight mb-3 uppercase">
            Explore teams in your city
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-sora">
            Connect with local innovators and build together
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-12 md:gap-x-6 md:gap-y-16">
          {cities.map((city, index) => (
            <div key={index} className="relative group">
              {/* Popup Image */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border-2 border-[#7be382] shadow-xl opacity-0 group-hover:opacity-100 group-hover:-top-20 transition-all duration-300 z-20 pointer-events-none">
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-1">
                  <span className="text-[8px] md:text-[10px] text-white font-bold uppercase">{city.name}</span>
                </div>
              </div>

              <Card 
                className="cursor-pointer border-border hover:border-[#7be382] transition-all duration-300 hover:shadow-lg bg-card overflow-hidden relative z-10"
              >
                <CardContent className="p-3 md:p-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="p-2 md:p-3 rounded-full bg-[#7be382]/10 text-[#7be382] group-hover:bg-[#7be382] group-hover:text-black transition-colors duration-300">
                      <MapPin className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-xl font-bold font-sora text-foreground truncate max-w-[80px] md:max-w-none">{city.name}</h3>
                      <p className="text-[10px] md:text-sm text-muted-foreground font-sora">{city.count}</p>
                    </div>
                  </div>
                  <ArrowRight className="hidden sm:block w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-[#7be382] group-hover:translate-x-1 transition-all duration-300" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityExplorer;