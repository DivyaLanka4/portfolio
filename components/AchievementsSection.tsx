'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '@/data/portfolioData';
import { Award, Sparkles, Database, BarChart, Code, Cpu } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-amber-400" />,
  Code: <Code className="w-6 h-6 text-cyan-400" />,
  BarChart: <BarChart className="w-6 h-6 text-purple-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-pink-400" />,
};

export default function AchievementsSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-purple-500/30 text-purple-400 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Milestones & Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Notable technical accomplishments, project deployment successes, and continuous learning milestones.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-3xl border border-slate-200/10 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {ICON_MAP[ach.icon] || <Sparkles className="w-6 h-6 text-cyan-400" />}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                  {ach.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/10 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-cyan-400">
                <span>VERIFIED MILESTONE</span>
                <span>✓</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
