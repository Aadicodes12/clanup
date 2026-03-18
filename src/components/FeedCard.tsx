"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  MessageSquare, 
  Share2, 
  ArrowBigUp, 
  ArrowBigDown, 
  ExternalLink, 
  Users, 
  Calendar,
  MapPin
} from 'lucide-react';

interface FeedCardProps {
  type: 'hackathon' | 'teammate-ask';
  title: string;
  author: string;
  authorAvatar?: string;
  content: string;
  tags: string[];
  timestamp: string;
  image?: string;
  stats: {
    votes: number;
    comments: number;
  };
  metadata?: {
    organization?: string;
    date?: string;
    location?: string;
    roleNeeded?: string;
  };
}

const FeedCard: React.FC<FeedCardProps> = ({
  type,
  title,
  author,
  authorAvatar,
  content,
  tags,
  timestamp,
  image,
  stats,
  metadata
}) => {
  return (
    <Card className="bg-[#1A1A1B] border-[#343536] hover:border-[#818384] transition-colors duration-200 rounded-md overflow-hidden flex font-arial font-bold">
      {/* Voting Sidebar */}
      <div className="w-10 bg-[#151516] flex flex-col items-center py-2 gap-1 flex-shrink-0">
        <button className="text-[#D7DADC] hover:bg-white/10 p-1 rounded">
          <ArrowBigUp className="w-6 h-6" />
        </button>
        <span className="text-xs text-[#D7DADC]">{stats.votes}</span>
        <button className="text-[#D7DADC] hover:bg-white/10 p-1 rounded">
          <ArrowBigDown className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnail Box (Left Side) */}
      {image && (
        <div className="w-24 h-24 m-3 flex-shrink-0 rounded-xl overflow-hidden border border-[#343536]">
          <img src={image} alt="Thumbnail" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow p-3">
        <div className="flex items-center gap-2 mb-2">
          <Avatar className="w-5 h-5">
            <AvatarImage src={authorAvatar} />
            <AvatarFallback className="bg-neutral-800 text-[8px]">{author[0]}</AvatarFallback>
          </Avatar>
          <span className="text-[11px] text-[#D7DADC]">cu-{author}</span>
          <span className="text-[11px] text-[#818384]">• {timestamp}</span>
          {type === 'hackathon' && (
            <Badge className="bg-orange-500/10 text-orange-500 border-none text-[9px] h-4 px-1.5">HACKATHON</Badge>
          )}
          {type === 'teammate-ask' && (
            <Badge className="bg-[#7be382]/10 text-[#7be382] border-none text-[9px] h-4 px-1.5">TEAMMATE NEEDED</Badge>
          )}
        </div>

        <h3 className="text-base text-[#D7DADC] mb-1 leading-tight">{title}</h3>
        
        <div className="space-y-2">
          <p className="text-xs text-[#D7DADC] font-normal leading-snug line-clamp-2">
            {content}
          </p>

          {metadata && (
            <div className="flex flex-wrap gap-x-4 gap-y-1 py-1 border-t border-[#343536]">
              {metadata.organization && (
                <div className="flex items-center gap-1 text-[10px] text-[#818384]">
                  <Users className="w-3 h-3" /> {metadata.organization}
                </div>
              )}
              {metadata.date && (
                <div className="flex items-center gap-1 text-[10px] text-[#818384]">
                  <Calendar className="w-3 h-3" /> {metadata.date}
                </div>
              )}
              {metadata.location && (
                <div className="flex items-center gap-1 text-[10px] text-[#818384]">
                  <MapPin className="w-3 h-3" /> {metadata.location}
                </div>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-1">
            {tags.map(tag => (
              <span key={tag} className="text-[9px] text-[#4FBCFF] hover:underline cursor-pointer">#{tag}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <button className="flex items-center gap-1.5 text-[10px] text-[#818384] hover:bg-white/5 p-1 rounded transition-colors">
            <MessageSquare className="w-3.5 h-3.5" />
            {stats.comments}
          </button>
          <button className="flex items-center gap-1.5 text-[10px] text-[#818384] hover:bg-white/5 p-1 rounded transition-colors">
            <Share2 className="w-3.5 h-3.5" />
            Share
          </button>
          <Button variant="ghost" size="sm" className="ml-auto text-[#D7DADC] hover:text-white gap-1.5 h-7 text-[10px] px-2">
            {type === 'hackathon' ? 'Register' : 'Connect'} <ExternalLink className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default FeedCard;