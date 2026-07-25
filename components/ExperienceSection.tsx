'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/data/portfolioData';
import { Briefcase, Calendar, CheckCircle, Terminal } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-900/20 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Practical <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Hands-on training, industry software development practices, and project building.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-12 flex flex-col sm:flex-row items-center"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_#06b6d4] z-20">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>

              {/* Content Box */}
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pr-10 w-full">
                <div className="glass-card p-6 rounded-3xl border border-slate-200/10 dark:border-white/10 shadow-xl hover:border-cyan-500/40 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 text-[11px] font-mono rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{exp.period}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>

                  <p className="text-xs font-semibold text-purple-400 mt-0.5">
                    {exp.company}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 space-y-2">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {exp.skillsUsed.map((skill) => (
                      <span key={skill} className="px-2.5 py-0.5 text-[10px] font-mono rounded-md bg-slate-800/60 text-slate-300 border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
