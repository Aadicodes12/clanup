"use client";

import React, { useState } from 'react';
import { X, Chrome, Loader2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/make-team',
        },
      });
      if (error) throw error;
      onSuccess?.();
    } catch (error: any) {
      toast.error(error.message || "Failed to sign in with Google");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
      />

      <div className="relative w-full max-w-md bg-[#0F0F0F] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="p-10 space-y-8">
          <div className="space-y-3 text-center">
            <div className="w-12 h-12 bg-[#7be382]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-[#7be382] fill-current" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter font-sora text-white">
              One Tap to <br />
              <span className="text-[#7be382]">Start Building</span>
            </h2>
            <p className="text-gray-400 text-sm font-sora">
              No passwords. No long forms. Just your team.
            </p>
          </div>

          <Button 
            className="w-full bg-white hover:bg-gray-200 text-black font-bold py-8 rounded-2xl flex items-center justify-center gap-3 text-lg transition-all hover:scale-[1.02]"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Chrome className="w-6 h-6" />}
            Continue with Google
          </Button>

          <p className="text-[10px] text-gray-600 text-center uppercase tracking-[0.2em] font-bold">
            Secure • Instant • No Spam
          </p>
        </div>
        <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#7be382] to-transparent opacity-50" />
      </div>
    </div>
  );
};

export default SignupModal;