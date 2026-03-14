import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import HackathonCard from '@/components/HackathonCard';
import { Loader2, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hackathons = () => {
  const { data: hackathons, isLoading, error } = useQuery({
    queryKey: ['hackathons'],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('fetch-hackathons');
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </Link>
            <h1 className="text-4xl font-bold font-sans tracking-tight">Explore Hackathons</h1>
          </div>
          <div className="text-sm font-sora text-gray-500">
            Powered by Unstop
          </div>
        </header>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-[#7be382] animate-spin mb-4" />
            <p className="text-gray-400 font-sora">Scraping latest hackathons...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-400 font-sora mb-4">Failed to load hackathons.</p>
            <p className="text-sm text-gray-500">Make sure APIFY_API_TOKEN is set in Supabase secrets.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons?.map((hackathon: any, index: number) => (
              <HackathonCard
                key={index}
                title={hackathon.title || 'Untitled Hackathon'}
                organization={hackathon.organization || 'Unknown Org'}
                location={hackathon.location || 'Online'}
                date={hackathon.date || 'TBD'}
                link={hackathon.link || '#'}
                image={hackathon.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hackathons;