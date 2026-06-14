'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, GitFork, Code, CheckCircle2, GitPullRequest, MessageSquare, Terminal, Settings } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'ai' | 'swe' | 'both';
  description: string;
  features: string[];
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  visualizer: React.ReactNode; // High fidelity custom SVG/CSS UI visualizer
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'ai' | 'swe'>('all');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI Code Review & Collaboration Platform',
      category: 'swe',
      description: 'An advanced developer productivity tool featuring automated static and semantic code analysis integrated directly into PR review lifecycles.',
      features: [
        'GitHub Integration & Webhook handlers',
        'Pull Request Automated Commenting',
        'Security Vulnerability Analysis (SAST)',
        'Code Quality Assessment (Lints & Style)',
        'Scalable REST APIs using FastAPI/Python',
        'Performance Optimization & Cache Layers'
      ],
      tags: ['Python', 'FastAPI', 'OpenAI API', 'GitHub REST API', 'Docker', 'Redis'],
      demoUrl: '#',
      githubUrl: '#',
      visualizer: (
        <div className="w-full h-full bg-[#0E0E10] border border-neutral-800 rounded-2xl p-4 flex flex-col font-mono text-xs text-neutral-400 overflow-hidden relative group">
          {/* Mock code editor header */}
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-[10px] text-neutral-500 ml-2">code_reviewer.py</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-neutral-500">
              <GitPullRequest size={10} className="text-purple-400" />
              <span>PR #24</span>
            </div>
          </div>
          {/* Mock Code Diff & Review comments */}
          <div className="space-y-2 flex-grow overflow-hidden select-none">
            <div className="text-neutral-500">@@ -12,4 +12,8 @@</div>
            <div className="bg-red-950/20 text-red-400/90 border-l border-red-500/40 px-2 py-0.5">- def fetch_data(url):</div>
            <div className="bg-red-950/20 text-red-400/90 border-l border-red-500/40 px-2 py-0.5">-     return requests.get(url).json()</div>
            <div className="bg-green-950/20 text-green-400/90 border-l border-green-500/40 px-2 py-0.5">+ async def fetch_data(session, url):</div>
            <div className="bg-green-950/20 text-green-400/90 border-l border-green-500/40 px-2 py-0.5">+     async with session.get(url) as response:</div>
            <div className="bg-green-950/20 text-green-400/90 border-l border-green-500/40 px-2 py-0.5">+         return await response.json()</div>
            
            {/* AI suggestion overlay box */}
            <div className="mt-2.5 bg-purple-950/20 border border-purple-500/20 rounded-xl p-3 text-[11px] shadow-[0_4px_12px_rgba(168,85,247,0.1)] relative">
              <div className="flex items-center justify-between text-purple-300 font-bold mb-1.5">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                  AI Agent Review
                </span>
                <span className="text-[9px] bg-purple-500/20 px-1.5 py-0.5 rounded text-purple-400">PASSED</span>
              </div>
              <p className="text-neutral-300 leading-normal font-sans">
                Refactored function to asynchronous aiohttp requests. This improves API throughput by 4.2x under high concurrency.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'College Robot for Interactive Information System',
      category: 'ai',
      description: 'An automated physical/virtual information retrieval assistant built for educational spaces, automating query handling and navigating real-time logs.',
      features: [
        'AI-Powered Student Query Parsing & Resolution',
        'Real-time Campus Information Retrieval',
        'Python Scripting & System Automation',
        'Decisions Trees & Routing Algorithms',
        'Sensor Integration (Distance/Infrared API)',
        'High-performance processing with Raspberry Pi/ESP32'
      ],
      tags: ['Python', 'Raspberry Pi', 'OpenAI API', 'Hardware Sensors', 'MQTT Protocol', 'SQLite'],
      demoUrl: '#',
      githubUrl: '#',
      visualizer: (
        <div className="w-full h-full bg-[#0E0E10] border border-neutral-800 rounded-2xl p-4 flex flex-col font-mono text-xs text-neutral-400 overflow-hidden relative group">
          {/* Mock dashboard header */}
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[10px] text-neutral-300 uppercase tracking-widest font-bold">Robot Console</span>
            </div>
            <span className="text-[10px] text-neutral-500">SYS_OK: 98.6%</span>
          </div>

          {/* Interactive query logs and sensors */}
          <div className="grid grid-cols-2 gap-3 flex-grow overflow-hidden select-none font-sans">
            {/* Logs card */}
            <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-2.5 flex flex-col font-mono text-[10px] justify-between">
              <div className="text-neutral-500 border-b border-neutral-800/80 pb-1.5 mb-1.5 flex justify-between items-center">
                <span>QUERY LOGS</span>
                <MessageSquare size={10} className="text-cyan-400" />
              </div>
              <div className="space-y-1 text-neutral-400 leading-normal">
                <div>&gt; IN: "Where is Lab 3?"</div>
                <div className="text-cyan-400">&gt; OUT: "Block C, 2nd Floor"</div>
                <div>&gt; IN: "Next VLSI class?"</div>
                <div className="text-cyan-400">&gt; OUT: "2:00 PM, Room 102"</div>
              </div>
            </div>

            {/* Sensor card */}
            <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-2.5 flex flex-col justify-between">
              <div className="text-neutral-500 border-b border-neutral-800/80 pb-1.5 mb-1.5 flex justify-between items-center font-mono text-[10px]">
                <span>SENSOR STACK</span>
                <Settings size={10} className="text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-neutral-400">Ultrasonic</span>
                  <span className="text-emerald-400 font-mono">1.2m (Clear)</span>
                </div>
                <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[85%]" />
                </div>
                <div className="flex justify-between items-center text-[10px] mt-1">
                  <span className="text-neutral-400">Battery</span>
                  <span className="text-cyan-400 font-mono">94%</span>
                </div>
                <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 w-[94%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'ai') return project.category === 'ai' || project.category === 'both';
    if (filter === 'swe') return project.category === 'swe' || project.category === 'both';
    return true;
  });

  return (
    <section id="projects" className="relative py-24 px-6 z-10 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Major <span className="gradient-text font-black">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {(['all', 'swe', 'ai'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                filter === tab
                  ? 'bg-purple-600 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                  : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {tab === 'all' && 'All Projects'}
              {tab === 'swe' && 'Software Eng'}
              {tab === 'ai' && 'AI & Automation'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-neutral-800/80"
              >
                {/* Visualizer Area */}
                <div className="p-4 bg-neutral-950/40 aspect-[16/10] border-b border-neutral-900 overflow-hidden flex items-center justify-center relative">
                  {project.visualizer}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Code size={16} className="text-purple-400" />
                      <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 size={13} className="text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-5 pt-4 border-t border-neutral-900">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Launching demo for: ${project.title}`);
                        }}
                        className="flex-grow sm:flex-grow-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] cursor-pointer"
                      >
                        Live Demo
                        <ExternalLink size={12} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Opening GitHub repo for: ${project.title}`);
                        }}
                        className="flex-grow sm:flex-grow-0 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        GitHub Repo
                        <GitFork size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
