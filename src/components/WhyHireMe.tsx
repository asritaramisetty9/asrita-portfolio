'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Code2, Bug, BrainCircuit, Users, Rocket, ShieldCheck, HelpCircle, GraduationCap } from 'lucide-react';

interface Reason {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export default function WhyHireMe() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const reasons: Reason[] = [
    {
      title: 'Strong Python Skills',
      icon: <Code2 className="text-purple-400" size={20} />,
      description: 'Well-versed in Python scripting, algorithms, and modular logic. Capable of building clean APIs and high-performance backend pipelines.',
    },
    {
      title: 'Software Development Knowledge',
      icon: <ShieldCheck className="text-cyan-400" size={20} />,
      description: 'Strong foundation in Software Development Life Cycle (SDLC), clean code principles, version control, and system design structures.',
    },
    {
      title: 'Problem Solving Mindset',
      icon: <BrainCircuit className="text-blue-400" size={20} />,
      description: 'Analytical ECE background. Experienced in dissecting complex computational logic, structural bottlenecks, and data flows.',
    },
    {
      title: 'Testing & Debugging Experience',
      icon: <Bug className="text-emerald-400" size={20} />,
      description: 'Hands-on experience in manual and automated debugging, analyzing code logs, writing test suites, and resolving hardware-software bottlenecks.',
    },
    {
      title: 'Team Collaboration',
      icon: <Users className="text-amber-400" size={20} />,
      description: 'Experienced in working inside multidisciplinary project environments and code repositories using git branching and peer reviews.',
    },
    {
      title: 'Quick Learner',
      icon: <Rocket className="text-rose-400" size={20} />,
      description: 'Highly adaptable engineer. Quick to master new languages, frameworks, cloud tooling, and software protocols.',
    },
    {
      title: 'AI Enthusiast',
      icon: <HelpCircle className="text-indigo-400" size={20} />,
      description: 'Passionate about integrating AI APIs, automating manual code checks, and applying natural language query matching to software interfaces.',
    },
    {
      title: 'Engineering Background',
      icon: <GraduationCap className="text-orange-400" size={20} />,
      description: 'Strong academic pedigree. Combines hardware hardware interface concepts (IoT, VLSI) with modern web-based software protocols.',
    },
  ];

  return (
    <section id="why-hire-me" className="relative py-24 px-6 z-10 bg-[#0A0A0A] overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] rounded-full bg-cyan-900/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[300px] h-[300px] rounded-full bg-purple-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Why <span className="gradient-text font-black">Hire Me?</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:border-purple-500/20 transition-all duration-300 group relative"
            >
              {/* Top Section */}
              <div className="space-y-4">
                {/* Icon row */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-white transition-all duration-300">
                    {reason.icon}
                  </div>
                  <div className="w-6 h-6 rounded-full bg-purple-950/20 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <Check size={12} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-purple-400 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
