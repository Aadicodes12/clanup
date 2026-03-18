"use client";

import React from 'react';
import { Home, Search, Calendar, User, TrendingUp, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FeedCard from '@/components/FeedCard';

const MOCK_POSTS = [
  {
    type: 'hackathon' as const,
    title: "AI Genesis 2024: Build the Future of Generative Agents",
    author: "unstop_official",
    content: "Join the biggest AI hackathon of the year. $50k in prizes, mentorship from top industry leaders, and a chance to get your project funded. We're looking for innovative solutions in LLM orchestration and autonomous agents.",
    tags: ["AI", "Hackathon", "GenerativeAI", "Tech"],
    timestamp: "4h ago",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    stats: { votes: 1240, comments: 86 },
    metadata: {
      organization: "Unstop",
      date: "Oct 15-17, 2024",
      location: "Online / Bengaluru"
    }
  },
  {
    type: 'teammate-ask' as const,
    title: "Looking for a Backend Wizard for EthIndia project",
    author: "crypto_dev_99",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Crypto",
    content: "We have a solid frontend and a unique DeFi protocol idea for EthIndia. We just need someone who can handle the smart contract integration and backend infrastructure. We're using Next.js, Solidity, and The Graph.",
    tags: ["Web3", "EthIndia", "Solidity", "Backend"],
    timestamp: "2h ago",
    stats: { votes: 45, comments: 12 },
    metadata: {
      roleNeeded: "Backend / Smart Contract Dev",
      location: "Bengaluru"
    }
  },
  {
    type: 'hackathon' as const,
    title: "Google Solution Challenge 2024",
    author: "google_devs",
    content: "The 2024 Solution Challenge mission is to solve for one or more of the United Nations 17 Sustainable Development Goals using Google technology. Open to students worldwide!",
    tags: ["Google", "Students", "Sustainability", "Global"],
    timestamp: "1d ago",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    stats: { votes: 3200, comments: 245 },
    metadata: {
      organization: "Google Developers",
      date: "Jan - Mar 2024",
      location: "Global"
    }
  },
  {
    type: 'teammate-ask' as const,
    title: "Designer needed for HealthTech Hackathon",
    author: "med_tech_annie",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Annie",
    content: "Building an app to help elderly patients track their medication. Need a UI/UX designer who can create an accessible and clean interface. The hackathon starts this Friday!",
    tags: ["UIUX", "HealthTech", "Design", "Accessibility"],
    timestamp: "6h ago",
    stats: { votes: 89, comments: 18 },
    metadata: {
      roleNeeded: "UI/UX Designer",
      location: "Remote"
    }
  }
];

const NewPage = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-[#D7DADC] flex relative overflow-hidden">
      {/* Left Sidebar (Reddit Style) */}
      <aside className="hidden lg:flex w-64 border-r border-[#343536] flex-col p-4 gap-6 sticky top-0 h-screen">
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-[#818384] uppercase tracking-widest px-2">Feeds</p>
          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/5 rounded-md">
            <TrendingUp className="w-4 h-4" /> Popular
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-white/5 rounded-md">
            <Plus className="w-4 h-4" /> Create Post
          </Button>
        </div>
        
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-[#818384] uppercase tracking-widest px-2">Communities</p>
          <div className="space-y-1">
            {['r/hackathons', 'r/teammates', 'r/web3', 'r/ai_devs'].map(sub => (
              <Button key={sub} variant="ghost" className="w-full justify-start text-xs text-[#D7DADC] hover:bg-white/5 h-8 rounded-md">
                {sub}
              </Button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Feed Area */}
      <main className="flex-grow flex flex-col items-center py-8 px-4 overflow-y-auto pr-20 lg:pr-24">
        <div className="w-full max-w-2xl space-y-4">
          {/* Create Post Placeholder */}
          <div className="bg-[#1A1A1B] border border-[#343536] p-3 rounded-md flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-neutral-800" />
            <input 
              type="text" 
              placeholder="Create Post" 
              className="flex-grow bg-[#272729] border border-[#343536] rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#D7DADC]"
            />
          </div>

          {/* Feed Items */}
          {MOCK_POSTS.map((post, index) => (
            <FeedCard key={index} {...post} />
          ))}
        </div>
      </main>

      {/* Right Side Navbar (Fixed) */}
      <nav className="fixed right-0 top-0 bottom-0 w-16 bg-[#1A1A1B] border-l border-[#343536] flex flex-col items-center py-8 gap-8 z-50">
        <Link to="/">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-xl">
            <Home className="w-6 h-6" />
          </Button>
        </Link>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-xl">
          <Search className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-xl">
          <Calendar className="w-6 h-6" />
        </Button>
        <Link to="/profile">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-xl">
            <User className="w-6 h-6" />
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default NewPage;