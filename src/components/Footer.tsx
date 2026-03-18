"use client";

import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-card border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold font-mono tracking-tight mb-4">Clanup</div>
            <p className="text-muted-foreground font-sora text-sm leading-relaxed">
              Building the future of collaborative innovation, one team at a time.
            </p>
          </div>

          {/* Links Columns */}
          <div className="col-span-1">
            <h4 className="font-bold font-sora text-sm mb-4 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-sora">
              <li><a href="/teams" className="hover:text-[#7be382] transition-colors">Browse Teams</a></li>
              <li><a href="#" className="hover:text-[#7be382] transition-colors">Hackathons</a></li>
              <li><a href="#" className="hover:text-[#7be382] transition-colors">Projects</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold font-sora text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-sora">
              <li><a href="#" className="hover:text-[#7be382] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#7be382] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#7be382] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="col-span-1">
            <h4 className="font-bold font-sora text-sm mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-[#7be382] hover:text-black transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-[#7be382] hover:text-black transition-all duration-300">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-[#7be382] hover:text-black transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-[#7be382] hover:text-black transition-all duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-sora">
            © {new Date().getFullYear()} Clanup. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground font-sora">
            Made with <span className="text-red-500">♥</span> for innovators
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;