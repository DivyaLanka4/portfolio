'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { GraduationCap, Award, Target, Zap, CheckCircle2, BookOpen } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-purple-500/30 text-purple-400 text-xs font-mono tracking-widest uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Get to Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About <span className="text-gradient">Divya Lanka</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Bridging software engineering, robust database design, and intelligent data analytics to build real-world impact.
          </p>
        </div>

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/10 dark:border-white/10 shadow-xl mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>Professional Summary</span>
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed italic border-l-4 border-cyan-400 pl-4 py-1">
              &quot;{PERSONAL_INFO.bio}&quot;
            </p>
          </div>
        </motion.div>

        {/* Grid Highlights: Education, CGPA, Strengths, Career Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 rounded-2xl border border-slate-200/10 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Education</h4>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">B.Tech (CSE)</h3>
            <p className="text-xs text-cyan-400 font-semibold mt-0.5">{PERSONAL_INFO.college}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{PERSONAL_INFO.university}</p>
            <p className="text-xs font-mono text-purple-400 mt-2">Batch 2022 - 2026</p>
          </motion.div>

          {/* Card 2: CGPA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 rounded-2xl border border-slate-200/10 dark:border-white/10 hover:border-purple-500/40 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Academic Score</h4>
            <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-1">
              {PERSONAL_INFO.cgpa}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Consistent academic performer in Computer Science & Engineering curriculum.
            </p>
          </motion.div>

          {/* Card 3: Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 rounded-2xl border border-slate-200/10 dark:border-white/10 hover:border-pink-500/40 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Core Strengths</h4>
            <ul className="mt-2 space-y-1.5">
              {PERSONAL_INFO.strengths.slice(0, 3).map((strength, i) => (
                <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start space-x-1.5">
                  <span className="text-pink-400 font-bold">•</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 4: Career Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-6 rounded-2xl border border-slate-200/10 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Career Objectives</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              Seeking a software development position to apply programming skills, learn emerging AI technologies, and contribute to high-impact engineering projects.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
