"use client";

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
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
import { cn } from '@/lib/utils';

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
    <Card className="bg-[#1A1A1B] border-[#343536] hover:border-[#818384] transition-colors duration-200 rounded-md overflow-hidden flex">
      {/* Voting Sidebar (Reddit Style) */}
      <div className="w-10 bg-[#151516] flex flex-col items-center py-2 gap-1">
        <button className="text-[#D7DADC] hover:bg-white/10 p-1 rounded">
          <ArrowBigUp className="w-6 h-6" />
        </button>
        <span className="text-xs font-bold text-[#D7DADC]">{stats.votes}</span>
        <button className="text-[#D7DADC] hover:bg-white/10 p-1 rounded">
          <ArrowBigDown className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-3">
        <div className="flex items-center gap-2 mb-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src={authorAvatar} />
            <AvatarFallback className="bg-neutral-800 text-[10px]">{author[0]}</AvatarFallback>
          </Avatar>
          <span className="text-xs font-bold text-[#D7DADC]">u/{author}</span>
          <span className="text-xs text-[#818384]">• {timestamp}</span>
          {type === 'hackathon' && (
            <Badge className="bg-orange-500/10 text-orange-500 border-none text-[10px] h-5">HACKATHON</Badge>
          )}
          {type === 'teammate-ask' && (
            <Badge className="bg-[#7be382]/10 text-[#7be382] border-none text-[10px] h-5">TEAMMATE NEEDED</Badge>
          )}
        </div>

        <h3 className="text-lg font-medium text-[#D7DADC] mb-2 leading-tight">{title}</h3>
        
        <div className="space-y-3">
          <p className="text-sm text-[#D7DADC] font-light leading-relaxed line-clamp-3">
            {content}
          </p>

          {metadata && (
            <div className="grid grid-cols-2 gap-2 py-2 border-y border-[#343536]">
              {metadata.organization && (
                <div className="flex items-center gap-2 text-xs text-[#818384]">
                  <Users className="w-3 h-3" /> {metadata.organization}
                </div>
              )}
              {metadata.date && (
                <div className="flex items-center gap-2 text-xs text-[#818384]">
                  <Calendar className="w-3 h-3" /> {metadata.date}
                </div>
              )}
              {metadata.location && (
                <div className="flex items-center gap-2 text-xs text-[#818384]">
                  <MapPin className="w-3 h-3" /> {metadata.location}
                </div>
              )}
              {metadata.roleNeeded && (
                <div className="flex items-center gap-2 text-xs text-[#7be382] font-bold">
                  <Badge variant="outline" className="border-[#7be382]/30 text-[#7be382] text-[10px]">
                    Looking for: {metadata.roleNeeded}
                  </Badge>
                </div>
              )}
            </div>
          )}

          {image && (
            <div className="rounded-md overflow-hidden border border-[#343536]">
              <img src={image} alt="Post content" className="w-full h-auto object-cover max-h-96" />
            </div>
          )}

          <div className="flex flex-wrap gap-1">
            {tags.map(tag => (
              <span key={tag} className="text-[10px] text-[#4FBCFF] hover:underline cursor-pointer">#{tag}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <button className="flex items-center gap-2 text-xs font-bold text-[#818384] hover:bg-white/5 p-2 rounded transition-colors">
            <MessageSquare className="w-4 h-4" />
            {stats.comments} Comments
          </button>
          <button className="flex items-center gap-2 text-xs font-bold text-[#818384] hover:bg-white/5 p-2 rounded transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <Button variant="ghost" size="sm" className="ml-auto text-[#D7DADC] hover:text-white gap-2 h-8">
            {type === 'hackathon' ? 'Register' : 'Connect'} <ExternalLink className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default FeedCard;