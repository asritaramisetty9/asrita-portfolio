'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, Cpu, Database, Code } from 'lucide-react';

const TYPING_WORDS = [
  'Python Developer',
  'Software Engineer Aspirant',
  'AI Enthusiast',
  'Problem Solver'
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullWord = TYPING_WORDS[currentWordIndex];
    
    const tick = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(currentFullWord.substring(0, currentText.length + 1));
        if (currentText === currentFullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(currentFullWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
          return;
        }
      }
      
      const speed = isDeleting ? 40 : 100;
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  const handleScrollTo = (id: string) => {
    const targetEl = document.getElementById(id);
    if (targetEl) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Floating technology icon items
  const floatingIcons = [
    { icon: <Code className="text-cyan-400" size={24} />, x: '-30%', y: '-20%', delay: 0 },
    { icon: <Terminal className="text-purple-400" size={24} />, x: '35%', y: '-30%', delay: 0.8 },
    { icon: <Cpu className="text-emerald-400" size={24} />, x: '-40%', y: '30%', delay: 1.5 },
    { icon: <Database className="text-blue-400" size={24} />, x: '30%', y: '25%', delay: 2.2 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6 z-10"
    >
      {/* Visual background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Headline details */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-400 text-xs font-semibold tracking-wider mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            OPEN FOR SOFTWARE ENGINEERING ROLES (2025 GRADUATE)
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4"
          >
            <span className="block text-white">Software Engineer</span>
            <span className="gradient-text font-black block mt-2">&amp; Problem Solver</span>
          </motion.h1>

          {/* Dynamic typing indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-8 text-xl md:text-2xl font-mono text-cyan-400 mb-6 flex items-center"
          >
            <span>&gt; {currentText}</span>
            <span className="w-1.5 h-6 bg-cyan-400 ml-1.5 animate-pulse" />
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-neutral-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-normal"
          >
            Electronics and Communication Engineering graduate passionate about building scalable software solutions, AI-powered applications, and modern digital experiences.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-medium shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              View Projects
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50 text-neutral-300 hover:text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Me
              <Mail size={16} />
            </button>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Downloading Asrita's Resume... (Resume placeholder)");
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-900 hover:border-neutral-800 text-neutral-400 hover:text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Resume
              <Download size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Visual avatar/profile and floating icons */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-64 h-64 sm:w-80 sm:h-80"
          >
            {/* Background glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 opacity-20 blur-xl animate-pulse" />

            {/* Profile Avatar Frame */}
            <div className="absolute inset-4 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center overflow-hidden group shadow-2xl">
              {/* Spinning subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/40 via-neutral-950 to-cyan-950/40 opacity-80" />
              
              {/* CSS stylized glowing developer silhouette */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 select-none">
                <Code className="text-purple-500 w-16 h-16 mb-4 animate-bounce" style={{ animationDuration: '4s' }} />
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">&lt; coder /&gt;</span>
                <span className="text-lg font-bold text-white mt-1">Asrita Ramisetty</span>
                <span className="text-xs text-neutral-500 mt-0.5">ECE &amp; Software</span>
              </div>

              {/* Glowing hover accent border */}
              <div className="absolute inset-0 border border-purple-500/10 group-hover:border-purple-500/30 rounded-full transition-colors duration-500" />
            </div>

            {/* Orbiting / Floating Tech Badges */}
            {floatingIcons.map((item, idx) => (
              <motion.div
                key={idx}
                className="absolute w-12 h-12 rounded-xl bg-neutral-950/90 border border-neutral-800 flex items-center justify-center shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%)`,
                }}
                animate={{
                  x: [
                    `calc(${item.x} - 0px)`,
                    `calc(${item.x} - 0px)`,
                    `calc(${item.x} - 0px)`,
                  ],
                  y: [
                    `calc(${item.y} - 8px)`,
                    `calc(${item.y} + 8px)`,
                    `calc(${item.y} - 8px)`,
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: item.delay,
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
