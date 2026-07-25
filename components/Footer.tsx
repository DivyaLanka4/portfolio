'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Linkedin, Github, Mail, Code2, Terminal, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 relative z-10 border-t border-slate-200/10 dark:border-white/10 glass-card bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Divya Lanka
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Divya Lanka. All rights reserved.
            </p>
          </div>

          {/* Tagline */}
          <div className="text-xs text-slate-400 flex items-center space-x-1 font-mono">
            <span>Designed & Developed with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 animate-pulse inline" />
            <span>by <strong className="text-cyan-400">Divya Lanka</strong></span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl glass-card text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl glass-card text-slate-400 hover:text-purple-400 hover:scale-110 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.email}
              aria-label="Email"
              className="p-2 rounded-xl glass-card text-slate-400 hover:text-pink-400 hover:scale-110 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="p-2 rounded-xl glass-card text-slate-400 hover:text-amber-400 hover:scale-110 transition-all"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HackerRank"
              className="p-2 rounded-xl glass-card text-slate-400 hover:text-emerald-400 hover:scale-110 transition-all"
            >
              <Terminal className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
