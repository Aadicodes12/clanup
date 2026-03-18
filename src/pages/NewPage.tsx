import React from 'react';
import { Home, Search, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NewPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex relative overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center p-4 pr-20">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold font-sans tracking-tighter uppercase">Demo Page</h1>
          <p className="text-xl text-gray-400 font-sora max-w-md mx-auto">
            This is a standalone page for testing new components and layouts without affecting the main site.
          </p>
          <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
            <p className="text-[#7be382] font-mono">Ready for experimentation...</p>
          </div>
        </div>
      </div>

      {/* Right Side Navbar */}
      <nav className="fixed right-0 top-0 bottom-0 w-16 bg-neutral-900/50 backdrop-blur-md border-l border-white/10 flex flex-col items-center py-8 gap-8 z-50">
        <Link to="/">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#7be382] hover:bg-white/5 rounded-xl">
            <Home className="w-6 h-6" />
          </Button>
        </Link>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#7be382] hover:bg-white/5 rounded-xl">
          <Search className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#7be382] hover:bg-white/5 rounded-xl">
          <Calendar className="w-6 h-6" />
        </Button>
        <Link to="/profile">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#7be382] hover:bg-white/5 rounded-xl">
            <User className="w-6 h-6" />
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default NewPage;