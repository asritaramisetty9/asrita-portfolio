'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Code2, Cpu, Wrench, FileText } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string; // Tailwind color class for glow accent
}

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const categories: SkillCategory[] = [
    {
      title: 'Programming',
      icon: <Terminal className="text-purple-400" size={20} />,
      color: 'rgba(168, 85, 247, 0.4)',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Verilog', level: 75 },
      ],
    },
    {
      title: 'Programming Concepts',
      icon: <Code2 className="text-cyan-400" size={20} />,
      color: 'rgba(6, 182, 212, 0.4)',
      skills: [
        { name: 'Data Structures', level: 80 },
        { name: 'Algorithms', level: 80 },
        { name: 'Object Oriented Programming', level: 85 },
        { name: 'Problem Solving', level: 85 },
      ],
    },
    {
      title: 'Software Development',
      icon: <Cpu className="text-blue-400" size={20} />,
      color: 'rgba(59, 130, 246, 0.4)',
      skills: [
        { name: 'Application Development', level: 80 },
        { name: 'Debugging', level: 85 },
        { name: 'Testing', level: 80 },
        { name: 'Code Review', level: 75 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="text-emerald-400" size={20} />,
      color: 'rgba(16, 185, 129, 0.4)',
      skills: [
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'MATLAB', level: 75 },
        { name: 'MS Office', level: 80 },
      ],
    },
    {
      title: 'Engineering Skills',
      icon: <FileText className="text-amber-400" size={20} />,
      color: 'rgba(245, 158, 11, 0.4)',
      skills: [
        { name: 'System Analysis', level: 80 },
        { name: 'Troubleshooting', level: 85 },
        { name: 'Technical Documentation', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-6 z-10 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Technical <span className="gradient-text font-black">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="glass-card p-6 rounded-2xl group flex flex-col justify-between hover:scale-[1.01]"
              style={{
                boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.4)`,
              }}
              whileHover={{
                boxShadow: `0 12px 40px 0 ${category.color.replace('0.4', '0.08')}`,
                borderColor: category.color.replace('0.4', '0.25'),
              }}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">{category.title}</h3>
                </div>

                {/* Skills list inside category */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-neutral-300 font-medium group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-neutral-500 font-mono text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.2, delay: catIdx * 0.15 + skillIdx * 0.1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                          style={{
                            boxShadow: `0 0 8px rgba(168, 85, 247, 0.4)`,
                          }}
                        />
                      </div>
                    </div>
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
