'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Server, LayoutGrid, Award, Terminal, Code, Lightbulb, Compass } from 'lucide-react';

function Counter({ value, duration = 1.2, decimal = false }: { value: number; duration?: number; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const steps = 50;
    const stepTime = (duration * 1000) / steps;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : Math.floor(count)}
    </span>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const passions = [
    { icon: <Code className="text-purple-400" size={20} />, title: 'Software Engineering', desc: 'Designing modular, scalable, clean, and robust codebase structures.' },
    { icon: <Brain className="text-cyan-400" size={20} />, title: 'Artificial Intelligence', desc: 'Building intelligent automated scripts, reviews, and query resolution models.' },
    { icon: <Server className="text-blue-400" size={20} />, title: 'Backend Development', desc: 'Developing solid, low-latency APIs and automation logic in Python.' },
    { icon: <LayoutGrid className="text-emerald-400" size={20} />, title: 'System Design', desc: 'Structuring systems, analyzing performance, and mapping data flow.' },
    { icon: <Lightbulb className="text-amber-400" size={20} />, title: 'Problem Solving', desc: 'Analyzing algorithms and complex logic to resolve software bottlenecks.' },
  ];

  return (
    <section id="about" className="relative py-24 px-6 z-10 overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            About <span className="gradient-text font-black">Asrita Ramisetty</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Bio and Passions */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Professional Profile</h3>
              <p className="text-neutral-300 leading-relaxed font-normal">
                I am an Electronics and Communication Engineering graduate with strong programming skills in Python. 
                I have hands-on experience in software development, testing, debugging, and algorithmic problem-solving.
                My academic background has provided me with strong analytical skills, which I leverage to design high-performance, intelligent software systems.
              </p>
              <div className="absolute top-4 right-4 text-neutral-800 opacity-20 pointer-events-none">
                <Compass size={80} />
              </div>
            </motion.div>

            {/* Passions list */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white pl-2 border-l-2 border-purple-500">Core Areas of Interest</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {passions.map((passion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="glass-card p-5 rounded-xl flex items-start gap-4 hover:border-purple-500/30 transition-all duration-300 group"
                  >
                    <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:scale-110 transition-transform duration-300">
                      {passion.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{passion.title}</h4>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{passion.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Counters and Quick Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 self-center">
            {/* Stat 1: CGPA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center items-center h-40 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-purple-500/10 transition-all" />
              <span className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-baseline">
                <Counter value={8.3} decimal={true} />
              </span>
              <span className="text-xs font-semibold text-neutral-400 tracking-wider mt-3 uppercase group-hover:text-purple-400 transition-colors">CGPA (ECE)</span>
            </motion.div>

            {/* Stat 2: Projects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center items-center h-40 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-cyan-500/10 transition-all" />
              <span className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-baseline">
                <Counter value={2} />
              </span>
              <span className="text-xs font-semibold text-neutral-400 tracking-wider mt-3 uppercase group-hover:text-cyan-400 transition-colors">Major Projects</span>
            </motion.div>

            {/* Stat 3: Tech Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center items-center h-40 col-span-2 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition-all" />
              <Terminal className="text-purple-500 mb-2 w-8 h-8 group-hover:animate-bounce" />
              <span className="text-lg font-bold text-white tracking-wide">Python Specialist</span>
              <span className="text-xs font-semibold text-neutral-400 tracking-wider mt-1 uppercase group-hover:text-purple-400 transition-colors">Software Developer Profile</span>
            </motion.div>

            {/* Stat 4: Hire Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-6 rounded-2xl text-center flex flex-col justify-center items-center h-40 col-span-2 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-all" />
              <Award className="text-cyan-400 mb-2 w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-lg font-bold text-white tracking-wide">Software Engineer Aspirant</span>
              <span className="text-xs font-semibold text-neutral-400 tracking-wider mt-1 uppercase group-hover:text-cyan-400 transition-colors">Graduated in 2025</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
