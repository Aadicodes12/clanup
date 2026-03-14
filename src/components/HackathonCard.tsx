import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface HackathonCardProps {
  title: string;
  organization: string;
  location: string;
  date: string;
  link: string;
  image?: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  title,
  organization,
  location,
  date,
  link,
  image
}) => {
  return (
    <Card className="bg-neutral-900 border-neutral-800 overflow-hidden hover:border-neutral-700 transition-all duration-300 group">
      {image && (
        <div className="h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <CardHeader className="p-4">
        <div className="text-xs text-orange-300 font-sora mb-1 uppercase tracking-wider">{organization}</div>
        <CardTitle className="text-xl font-sans text-white line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-2">
        <div className="flex items-center text-sm text-gray-400 font-sora">
          <Calendar className="w-4 h-4 mr-2 text-gray-500" />
          {date}
        </div>
        <div className="flex items-center text-sm text-gray-400 font-sora">
          <MapPin className="w-4 h-4 mr-2 text-gray-500" />
          {location}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="outline" 
          className="w-full border-neutral-700 hover:bg-neutral-800 text-white font-sora text-sm"
          onClick={() => window.open(link, '_blank')}
        >
          View Details <ExternalLink className="w-3 h-3 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HackathonCard;