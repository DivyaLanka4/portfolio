'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, Project } from '@/data/portfolioData';
import {
  ExternalLink,
  Github,
  FolderGit2,
  Check,
  Layers,
  Sparkles,
  X,
  Database,
  BarChart2,
  Code
} from 'lucide-react';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Data Analytics', 'Database'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-purple-500/30 text-purple-400 text-xs font-mono tracking-widest uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Practical <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            End-to-end full stack web platforms, database systems, and interactive analytical BI dashboards.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                  : 'glass-card text-slate-600 dark:text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/10 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-2"
            >
              <div>
                {/* Visual Header / Mockup Banner */}
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden flex items-center justify-center border-b border-slate-800">
                  {/* Glowing background gradient inside mockup */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-600/20 to-pink-500/10 group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Mockup Display */}
                  <div className="relative z-10 p-4 text-center space-y-2">
                    <div className="mx-auto w-14 h-14 rounded-2xl bg-slate-950/80 border border-cyan-500/30 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                      {project.category === 'Full Stack' ? (
                        <Code className="w-7 h-7 text-cyan-400" />
                      ) : project.category === 'Data Analytics' ? (
                        <BarChart2 className="w-7 h-7 text-amber-400" />
                      ) : (
                        <Database className="w-7 h-7 text-purple-400" />
                      )}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30 inline-block">
                      {project.category}
                    </span>
                  </div>

                  {/* Top Badge */}
                  {project.metrics && (
                    <div className="absolute top-3 right-3 glass-card px-2.5 py-1 rounded-lg text-[10px] font-mono text-purple-300 border border-purple-500/30">
                      {project.metrics}
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Highlights list */}
                  <div className="space-y-1.5 pt-2">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-200/60 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300/40 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold glass-card text-slate-700 dark:text-slate-200 hover:text-cyan-400 dark:hover:text-cyan-300 hover:border-cyan-500/40 text-center transition-all"
                >
                  View Details
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="p-2.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-purple-400 dark:hover:text-purple-400 hover:scale-105 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90 hover:scale-105 shadow-md shadow-cyan-500/20 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative max-h-[90vh] overflow-y-auto bg-slate-950/90 text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full glass-card hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase px-3 py-1 rounded-full glass-card border border-cyan-500/30 inline-block mb-3">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-cyan-300 flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Key Features & Functional Modules</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-300 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs font-mono rounded-lg bg-purple-950/60 text-purple-300 border border-purple-500/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="flex items-center justify-end space-x-4 pt-4 border-t border-slate-800">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold glass-card hover:bg-white/10"
                    >
                      <Github className="w-4 h-4 text-purple-400" />
                      <span>GitHub Repo</span>
                    </a>
                  )}

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
