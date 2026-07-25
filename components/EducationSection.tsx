'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '@/data/portfolioData';
import { GraduationCap, Calendar, Award, CheckCircle2, BookOpen } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative z-10 bg-slate-900/20 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Rigorous undergraduate computer science engineering education and academic accomplishments.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl border border-slate-200/10 dark:border-white/10 shadow-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-all"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/10 dark:border-white/10">
                <div className="space-y-1">
                  <span className="px-3 py-1 text-[11px] font-mono rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    Bachelor Degree
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white pt-2">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-purple-400">{edu.field}</p>
                </div>

                <div className="flex flex-col md:items-end space-y-1">
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-cyan-400">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-sm font-bold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-xl border border-pink-500/30">
                    <Award className="w-4 h-4" />
                    <span>CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              </div>

              {/* Institution Details */}
              <div className="pt-6 space-y-4">
                <div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
                    {edu.institution}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Affiliated to {edu.university}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Academic Highlights & Achievements</span>
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
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
