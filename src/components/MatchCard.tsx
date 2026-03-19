"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MatchCardProps {
  name: string;
  role: string;
  skills: string[];
  matchScore: number;
  avatar: string;
  onPing: () => void;
}

const MatchCard: React.FC<MatchCardProps> = ({ name, role, skills, matchScore, avatar, onPing }) => {
  const [isPinged, setIsPinged] = useState(false);

  const handlePing = () => {
    setIsPinged(true);
    onPing();
  };

  return (
    <Card className="bg-white/[0.03] border-white/10 rounded-[2rem] overflow-hidden group transition-all duration-500 hover:border-[#7be382]/30">
      <CardContent className="p-8 space-y-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src={avatar} alt={name} className="w-16 h-16 rounded-2xl bg-white/5 object-cover" />
              <div className="absolute -bottom-2 -right-2 bg-[#7be382] text-black text-[10px] font-black px-2 py-0.5 rounded-md shadow-lg">
                {matchScore}%
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">cu-{name.toLowerCase().replace(' ', '_')}</h3>
              <p className="text-sm text-[#7be382] font-medium">{role}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <Badge key={skill} variant="secondary" className="bg-white/5 text-gray-400 text-[10px] border-none px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>

        <Button 
          onClick={handlePing}
          disabled={isPinged}
          className={cn(
            "w-full py-7 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center gap-2",
            isPinged 
              ? "bg-white/10 text-gray-400 cursor-default" 
              : "bg-[#7be382] hover:bg-[#6ad071] text-black shadow-[0_10px_30px_rgba(123,227,130,0.2)] hover:-translate-y-1"
          )}
        >
          {isPinged ? (
            <>Ping Sent <Check className="w-5 h-5" /></>
          ) : (
            <>Let's team up <Zap className="w-5 h-5 fill-current" /></>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MatchCard;