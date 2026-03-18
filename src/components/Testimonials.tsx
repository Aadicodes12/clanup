"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Clanup helped me find a team for my first hackathon in just 10 minutes. We ended up winning!",
    author: "Alex Chen",
    role: "Full-stack Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    quote: "The smart matching algorithm is incredible. I found teammates with exactly the skills I was missing.",
    author: "Sarah Miller",
    role: "UI/UX Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    quote: "Managing a team has never been easier. The dashboard keeps everything organized and transparent.",
    author: "Michael Ross",
    role: "Product Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  }
];

const Testimonials = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-sora tracking-tight mb-4">
            Still in doubt?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sora">
            Have a look at what our users say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-card border-border hover:border-[#7be382] transition-colors duration-300 relative overflow-hidden group">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-[#7be382]/20 absolute top-4 right-4 group-hover:text-[#7be382]/40 transition-colors" />
                <p className="text-foreground font-sora text-lg mb-8 relative z-10 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full bg-muted" />
                  <div>
                    <h4 className="font-bold font-sora text-foreground">{t.author}</h4>
                    <p className="text-sm text-muted-foreground font-sora">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;