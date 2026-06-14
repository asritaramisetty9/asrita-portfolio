'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Starfield from '@/components/Starfield';
import Spotlight from '@/components/Spotlight';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Certifications from '@/components/Certifications';
import WhyHireMe from '@/components/WhyHireMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Custom cursor position state
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);

  useEffect(() => {
    // 1. Loader simulation
    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 6;
      });
    }, 80);

    // 2. Cursor follow listener
    const updateCursor = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setCursorHovered(true);
      } else {
        setCursorHovered(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* 1. Loading Screen Animation */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col items-center justify-center font-mono"
          >
            <div className="space-y-4 text-center max-w-[280px] w-full px-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-purple-400 font-extrabold text-lg tracking-widest uppercase mb-1"
              >
                &lt; AR.DEV /&gt;
              </motion.div>
              
              {/* Progress loading bar */}
              <div className="h-1 bg-neutral-900 border border-neutral-800/80 rounded-full overflow-hidden w-full relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, loadProgress)}%` }}
                  transition={{ duration: 0.08 }}
                />
              </div>

              {/* Progress counter text */}
              <div className="text-[9px] text-neutral-500 tracking-widest flex justify-between uppercase">
                <span>BOOTING PORTFOLIO</span>
                <span>{Math.min(100, loadProgress)}%</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Interactive Cursor follower (Hidden on touch devices/mobile) */}
      <div className="hidden md:block">
        <div
          className={`custom-cursor-dot ${cursorHovered ? 'scale-[1.8] bg-purple-400' : ''}`}
          style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
        />
        <div
          className={`custom-cursor ${cursorHovered ? 'scale-[1.6] border-cyan-400' : ''}`}
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transition: 'left 0.06s ease-out, top 0.06s ease-out, transform 0.25s, border-color 0.25s',
          }}
        />
      </div>

      {/* 3. Main layout */}
      {!loading && (
        <div className="relative min-h-screen text-neutral-100 bg-[#0A0A0A] select-none selection:bg-purple-600/30 selection:text-white">
          {/* Parallax Starfield Canvas */}
          <Starfield />
          
          {/* Spotlight overlay cursor spotlight */}
          <Spotlight />

          {/* Global Ambient Glow Blobs */}
          <div className="absolute top-[15%] left-[-15%] w-[500px] h-[500px] rounded-full bg-purple-900/5 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[25%] right-[-15%] w-[500px] h-[500px] rounded-full bg-cyan-900/5 blur-[150px] pointer-events-none" />

          {/* Premium Navbar */}
          <Navbar />

          {/* Sections orchestrations */}
          <main className="relative z-10 w-full">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Certifications />
            <WhyHireMe />
            <Contact />
          </main>

          {/* Footer details */}
          <Footer />
        </div>
      )}
    </>
  );
}
