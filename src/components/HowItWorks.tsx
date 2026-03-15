import React from 'react';
import { UserPlus, Search, Users, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const Step = ({ icon: Icon, title, description, index }: StepProps) => (
  <div className="flex flex-col items-center text-center space-y-4 relative z-20 max-w-[250px]">
    <div
      className={cn(
        "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-neutral-800 border border-neutral-700",
        "step-animated-icon"
      )}
      style={{ animationDelay: `${index * 0.5}s` }}
    >
      <Icon className="w-6 h-6 text-[#7be382]" />
    </div>
    <div>
      <h3 className="text-xl font-bold font-roboto text-white mb-2">{title}</h3>
      <p className="text-sm text-white/60 font-roboto leading-relaxed">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 relative overflow-hidden flex flex-col items-center">
      <div className="animate-scan-line-overlay"></div>
      <h2 className="text-3xl md:text-4xl font-bold font-roboto text-center mb-16 text-white relative z-20">
        How Clanup Works
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-16 relative z-20">
        <Step 
          icon={UserPlus}
          title="Create Profile"
          description="Set up your profile with your tech stack and interests."
          index={0}
        />
        <Step 
          icon={Search}
          title="Discover Projects"
          description="Browse through active hackathons and projects."
          index={1}
        />
        <Step 
          icon={Users}
          title="Form Your Clan"
          description="Connect with potential teammates and build your team."
          index={2}
        />
      </div>
    </section>
  );
};

export default HowItWorks;