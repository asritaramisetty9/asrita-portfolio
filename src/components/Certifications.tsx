'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ShieldCheck, Cpu, CheckCircle } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  badge: React.ReactNode;
  description: string;
  color: string;
  skills: string[];
}

export default function Certifications() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const certificates: Certification[] = [
    {
      title: 'Python Programming',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      badge: <ShieldCheck className="text-purple-400" size={28} />,
      color: 'from-purple-600/20 to-indigo-600/20 hover:border-purple-500/30',
      description: 'Advanced certification covering foundational structures, computational algorithms, and scripting logic.',
      skills: ['Data Structures', 'Search & Sort Algorithms', 'OOP Paradigm', 'Python Scripting'],
    },
    {
      title: 'Internet of Things (IoT)',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      badge: <Cpu className="text-cyan-400" size={28} />,
      color: 'from-cyan-600/20 to-blue-600/20 hover:border-cyan-500/30',
      description: 'System design certification centered around sensor integration, microcontrollers, and network gateways.',
      skills: ['Sensor Systems', 'Network Protocols', 'Edge Computing', 'MQTT & HTTP APIs'],
    },
    {
      title: 'VLSI Design',
      issuer: 'Academic Specialization',
      badge: <Award className="text-emerald-400" size={28} />,
      color: 'from-emerald-600/20 to-teal-600/20 hover:border-emerald-500/30',
      description: 'Integrated circuit design covering digital logic, hardware descriptions, synthesis, and layout analysis.',
      skills: ['Verilog HDL', 'Logic Synthesis', 'CMOS Architecture', 'System Timing Analysis'],
    },
  ];

  return (
    <section id="certifications" className="relative py-24 px-6 z-10 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Professional <span className="gradient-text font-black">Certifications</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`glass-card p-8 rounded-2xl border border-neutral-800/80 flex flex-col justify-between hover:scale-[1.02] bg-gradient-to-br ${cert.color} transition-all duration-300 group`}
            >
              <div className="space-y-6">
                {/* Header Badge */}
                <div className="flex items-start justify-between">
                  <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-900 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {cert.badge}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest font-semibold uppercase text-neutral-500 bg-neutral-950 px-2.5 py-1 rounded-full border border-neutral-900">
                    Verified
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-2.5">
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-purple-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                  <p className="text-neutral-400 text-sm leading-relaxed font-normal pt-1.5">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Skills list */}
              <div className="mt-6 pt-5 border-t border-neutral-900 space-y-3">
                <span className="text-xs font-semibold text-neutral-400">Core Concepts Mastered:</span>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-md bg-neutral-950 border border-neutral-900 text-neutral-400 flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <CheckCircle size={10} className="text-purple-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
