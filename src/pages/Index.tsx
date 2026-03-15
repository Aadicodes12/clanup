"use client";

import React from 'react';
import TrustedByLogos from '../components/TrustedByLogos';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-gray-900">
      {/* Welcome header */}
      <h1 className="text-3xl font-bold text-white mb-8">Welcome to the Hackathon App</h1>
      {/* Trusted by logos component */}
      <TrustedByLogos />
      {/* Add any other main page content here */}
    </div>
  );
};

export default Index;