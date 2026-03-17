"use client";

import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const cities = [
  { name: "Mumbai", count: "120+ Teams" },
  { name: "Delhi", count: "95+ Teams" },
  { name: "Bengaluru", count: "150+ Teams" },
  { name: "Hyderabad", count: "80+ Teams" },
  { name: "Pune", count: "65+ Teams" },
  { name: "Kolkata", count: "45+ Teams" },
];

const CityExplorer = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold font-sora tracking-tight mb-3 uppercase">
            Explore teams in your city
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-sora">
            Connect with local innovators and build together
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {cities.map((city, index) => (
            <Card 
              key={index}
              className="group cursor-pointer border-border hover:border-[#7be382] transition-all duration-300 hover:shadow-lg bg-card overflow-hidden"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityExplorer;