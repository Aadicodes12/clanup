import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="bg-neutral-900 p-4 flex justify-between items-center">
        <div className="text-lg font-bold font-sans">Clanup</div>
        <div className="text-lg font-sans">About</div>
      </nav>
      {/* Subtle horizontal line */}
      <div className="border-b border-neutral-700 w-full"></div>

      {/* Main content area - intentionally left empty */}
      <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)]">
        {/* This space is intentionally left empty as per your request */}
      </div>
    </div>
  );
};

export default Index;