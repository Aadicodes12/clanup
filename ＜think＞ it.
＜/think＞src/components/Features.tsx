"use client";

import React, { useRef, useEffect, useState } from "react";
import { Card, Button } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const Features = () => {
  const navigate = useNavigate();

  // Track which feature cards have entered the viewport
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const featureRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && !visibleIndices.includes(index)) {
            setVisibleIndices((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    featureRefs.current.forEach((ref, index) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => observer.unobserve(ref));
    };
  }, [visibleIndices]);

  const features = [
    {
      title: "Smart Matching",
      description: "Our algorithm connects you with teammates based on complementary skills and shared interests.",
      action: () => {
        toast.success("Opening Smart Matching...");
        navigate("/teams");
      },
    },
    {
      title: "Team Management",
      description: "Easily create, join, and manage your hackathon teams all in one centralized dashboard.",
      action: () => toast.info("Team Management dashboard is coming soon!"),
    },
    {
      title: "Real-time Collaboration",
      description: "Communicate instantly with potential teammates and coordinate your project ideas effectively.",
      action: () => toast.info("Real-time collaboration tools are being integrated."),
    },
    {
      title: "Verified Profiles",
      description: "Connect with confidence knowing that every member's skills and background are verified.",
      action: () => toast.info("Profile verification system is active for new members."),
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white text-black relative z-30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4 uppercase">
            Features
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-sora">
            Everything you need, nothing you don't
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={featureRefs.current[index]}
              className={cn(
                "group relative bg-white border border-gray-200 rounded-3xl p-6 transition-all duration-500 hover:shadow-xl hover:border-[#7be382]",
                visibleIndices.includes(index) ? "opacity-100 scale-100" : "opacity-0 translate-y-10"
              )}
            >
              {/* Icon indicator */}
              <div className="flex items-start">
                <div className="flex justify-start w-8 h-8">
                  <div className="w-6 h-6 rounded-full bg-[#7be382] flex items-center justify-center text-black text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-3 flex flex-col">
                  <h3 className="text-2xl font-bold font-sora mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>

              {/* Action button (small, top‑right) */}
              <button
                onClick={feature.action}
                className="absolute top-3 right-3 flex items-center justify-center p-2 rounded-full bg-white border border-gray-200 text-black transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:scale-110"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;