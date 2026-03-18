import React from 'react';

const NewPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
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
  );
};

export default NewPage;