import React, { useState } from 'react';
import { X, Mail, Chrome, Loader2, ArrowLeft, AlertCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

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
  const [view, setView] = useState<'main' | 'email'>('main');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      // Use window.location.origin to get the base URL (e.g., https://your-app.vercel.app)
      const redirectUrl = window.location.origin;
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl,
        },
      });
      
      if (error) {
        if (error.message.includes("provider_not_enabled") || error.message.includes("not enabled")) {
          toast.error("Google login isn't enabled in Supabase yet. Go to Auth > Providers > Google to enable it!", {
            duration: 6000,
            icon: <AlertCircle className="text-amber-500" />
          });
        } else {
          throw error;
        }
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to sign in with Google");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });
      if (error) throw error;
      toast.success("Magic link sent! Check your inbox.");
      onClose();
    } catch (error: any) {
      toast.error(error.message || "Failed to send magic link");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      />

      <div className="relative w-full max-w-md bg-[#0F0F0F] border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 transform scale-100">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 pt-12 space-y-8">
          <div className="space-y-2 text-center">
            {view === 'email' && (
              <button 
                onClick={() => setView('main')}
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="w-3 h-3" /> Back
              </button>
            )}
            <h2 className="text-3xl font-bold tracking-tighter font-sora">
              Save Your Team <br />
              <span className="text-[#7be382]">Before You Lose It</span>
            </h2>
            <p className="text-gray-400 text-sm font-sora">
              {view === 'main' 
                ? "You're one step away. Save your team and unlock full matches."
                : "Enter your email to receive a magic login link."}
            </p>
          </div>

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

          {view === 'main' ? (
            <div className="space-y-3">
              <Button 
                className="w-full bg-white hover:bg-gray-200 text-black font-bold py-6 rounded-xl flex items-center justify-center gap-3"
                onClick={handleGoogleLogin}
                disabled={loading}
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Chrome className="w-5 h-5" />}
                Continue with Google
              </Button>
              <Button 
                variant="outline"
                className="w-full border-white/10 hover:bg-white/5 text-white font-bold py-6 rounded-xl flex items-center justify-center gap-3"
                onClick={() => setView('email')}
                disabled={loading}
              >
                <Mail className="w-5 h-5" />
                Continue with Email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <Input 
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:ring-[#7be382]"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-[#7be382] hover:bg-[#6ad071] text-black font-bold py-6 rounded-xl flex items-center justify-center gap-3"
                disabled={loading}
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5 fill-current" />}
                Send Magic Link
              </Button>
            </form>
          )}

          <div className="text-center space-y-1">
            <p className="text-[10px] text-gray-500 font-sora uppercase tracking-widest">
              No passwords. Just continue.
            </p>
            <p className="text-[10px] text-gray-400 font-sora">
              Takes 10 seconds.
            </p>
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#7be382] to-transparent opacity-50" />
      </div>
    </div>
  );
};

export default SignupModal;