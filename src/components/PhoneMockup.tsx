import React from 'react';
import { cn } from '@/lib/utils';

interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative w-64 h-128 md:w-80 md:h-[40rem] bg-gray-800 rounded-[2.5rem] shadow-2xl border-[10px] border-white flex items-center justify-center overflow-hidden", // Changed border-gray-700 to border-white
        "transform rotate-3 translate-x-4", // Slight rotation and translation to the right
        className
      )}
    >
      {/* Screen area */}
      <div className="absolute inset-[10px] bg-black rounded-[2rem] overflow-hidden">
        {children}
      </div>
      {/* Speaker/Camera notch (optional, for realism) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl"></div>
      {/* Home button (optional, for realism) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-700 rounded-full border-2 border-gray-600"></div>
    </div>
  );
};

export default PhoneMockup;