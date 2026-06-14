'use client';

import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-neutral-900 bg-[#0A0A0A]/80 backdrop-blur-md py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-neutral-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Asrita Ramisetty. All rights reserved.
        </div>
        
        <div className="flex items-center justify-center gap-1.5 text-neutral-400 text-sm text-center">
          <span>Designed &amp; Developed with</span>
          <Heart size={14} className="text-red-500 fill-red-500 animate-pulse inline-block" />
          <span>by <span className="hover:text-purple-400 transition-colors duration-300 font-medium">Asrita Ramisetty</span></span>
        </div>
        
        <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 bg-neutral-950 px-4 py-2 rounded-full border border-neutral-900">
          <span className="hover:text-cyan-400 transition-colors duration-300">Next.js 15</span>
          <span className="text-neutral-700">&bull;</span>
          <span className="hover:text-purple-400 transition-colors duration-300">React 19</span>
          <span className="text-neutral-700">&bull;</span>
          <span className="hover:text-blue-400 transition-colors duration-300">Tailwind CSS</span>
          <span className="text-neutral-700">&bull;</span>
          <span className="hover:text-emerald-400 transition-colors duration-300">Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
