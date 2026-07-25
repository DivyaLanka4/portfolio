'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import {
  Code2,
  Layout,
  Server,
  BarChart3,
  Wrench,
  BrainCircuit,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  Layout: <Layout className="w-5 h-5 text-purple-400" />,
  Server: <Server className="w-5 h-5 text-pink-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-amber-400" />,
  Wrench: <Wrench className="w-5 h-5 text-emerald-400" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-blue-400" />,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.category)];

  const filteredCategories = activeCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-900/20 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Comprehensive breakdown of programming languages, databases, analytics tools, and modern frameworks.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 scale-105'
                    : 'glass-card text-slate-600 dark:text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-3xl border border-slate-200/10 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-slate-200/10 dark:border-white/10">
                  <div className="p-2.5 rounded-2xl glass-card bg-slate-800/40">
                    {ICON_MAP[cat.iconName] || <Code2 className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Progress Bars for each skill */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-medium">
                        <span className="text-slate-800 dark:text-slate-200 flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{skill.name}</span>
                        </span>
                        <span className="font-mono text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_10px_#06b6d4]"
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
