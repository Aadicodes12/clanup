"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Github, Chrome, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamSnapshot: {
    filledRoles: number;
    totalRoles: number;
    strength: number;
  };
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose, teamSnapshot }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-[#0F0F0F] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 pt-12 space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter font-sora">
                  Save Your Team <br />
                  <span className="text-[#7be382]">Before You Lose It</span>
                </h2>
                <p className="text-gray-400 text-sm font-sora">
                  You're one step away. Save your team and unlock full matches.
                </p>
              </div>

              {/* Team Snapshot */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Current Squad</span>
                  <span className="text-white font-bold">{teamSnapshot.filledRoles}/{teamSnapshot.totalRoles} Roles Filled</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Strength</span>
                  <div className="text-[#7be382] font-bold">{teamSnapshot.strength}%</div>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full bg-white hover:bg-gray-200 text-black font-bold py-6 rounded-xl flex items-center justify-center gap-3"
                  onClick={() => {
                    // In a real app, this would trigger Google Auth
                    console.log("Google Auth triggered");
                  }}
                >
                  <Chrome className="w-5 h-5" />
                  Continue with Google
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-white/10 hover:bg-white/5 text-white font-bold py-6 rounded-xl flex items-center justify-center gap-3"
                  onClick={() => {
                    // In a real app, this would trigger Magic Link
                    console.log("Email Magic Link triggered");
                  }}
                >
                  <Mail className="w-5 h-5" />
                  Continue with Email
                </Button>
              </div>

              <div className="text-center space-y-1">
                <p className="text-[10px] text-gray-500 font-sora uppercase tracking-widest">
                  No passwords. Just continue.
                </p>
                <p className="text-[10px] text-gray-400 font-sora">
                  Takes 10 seconds.
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#7be382] to-transparent opacity-50" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SignupModal;