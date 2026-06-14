'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Compass, FileCode, Brain, GraduationCap, Briefcase, Calendar } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

export default function Timeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const events: TimelineEvent[] = [
    {
      year: '2021',
      title: 'Started Engineering Journey',
      icon: <Compass className="text-purple-400" size={18} />,
      description: 'Enrolled in Electronics and Communication Engineering (ECE) degree.',
      details: [
        'Developed foundational analytical and mathematical skills',
        'Acquired core problem-solving methodologies',
        'Discovered passion for algorithmic thinking and coding'
      ],
    },
    {
      year: '2023',
      title: 'Python Programming Certification',
      icon: <FileCode className="text-cyan-400" size={18} />,
      description: 'Completed advanced programming certifications, focusing heavily on Python.',
      details: [
        'Certified in Python Programming (NPTEL)',
        'Mastered Object-Oriented programming concepts and algorithms',
        'Built automated scripts and resolved database query bottlenecks'
      ],
    },
    {
      year: '2024',
      title: 'Built AI Projects & Platforms',
      icon: <Brain className="text-blue-400" size={18} />,
      description: 'Began architecting AI-powered platforms and automated hardware integrations.',
      details: [
        'Designed & built an AI Code Review & Collaboration platform',
        'Built college robot interface powered by natural language query algorithms',
        'Integrated API layers, automation scripts, and sensor controllers'
      ],
    },
    {
      year: '2025',
      title: 'Graduated with ECE Degree',
      icon: <GraduationCap className="text-emerald-400" size={18} />,
      description: 'Graduated with a strong academic standing, carrying a CGPA of 8.3.',
      details: [
        'Major: Electronics and Communication Engineering',
        'Completed major systems integration thesis',
        'Bridged ECE hardware principles with modern software architecture'
      ],
    },
    {
      year: '2025 → Present',
      title: 'Open for Software Engineering Opportunities',
      icon: <Briefcase className="text-amber-400" size={18} />,
      description: 'Actively searching for full-time Software Engineer, Backend Developer, or AI Associate roles.',
      details: [
        'Ready for deployment at leading tech firms (Google, Microsoft, Amazon, Adobe)',
        'Deep knowledge in Python, system debugging, and API architecture',
        'Highly collaborative engineer, quick learner, and AI developer enthusiast'
      ],
    },
  ];

  return (
    <section id="timeline" className="relative py-24 px-6 z-10 bg-[#0A0A0A] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-950/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto" ref={containerRef}>
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Developer <span className="gradient-text font-black">Timeline</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-neutral-800/80 md:ml-32 pl-8 md:pl-12 space-y-12 pb-4">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-[24px] h-[24px] rounded-full bg-neutral-950 border-2 border-neutral-800 flex items-center justify-center group-hover:border-purple-500 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all duration-300 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-purple-400 transition-colors" />
              </div>

              {/* Sidebar Year Tag (Desktop) */}
              <div className="hidden md:block absolute -left-44 top-1.5 w-28 text-right font-mono text-sm font-bold text-neutral-500 group-hover:text-purple-400 transition-colors duration-300">
                {event.year}
              </div>

              {/* Mobile Year Tag */}
              <div className="md:hidden flex items-center gap-1.5 text-purple-400 font-mono text-xs font-bold mb-2">
                <Calendar size={12} />
                <span>{event.year}</span>
              </div>

              {/* Event Card Content */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-neutral-800/80 hover:border-purple-500/25 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    {event.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-purple-400 transition-colors duration-300">
                    {event.title}
                  </h3>
                </div>

                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Subdetails list */}
                <ul className="space-y-2.5 pl-1.5">
                  {event.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="text-xs text-neutral-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500/60 mt-1.5 flex-shrink-0" />
                      <span className="leading-normal">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
