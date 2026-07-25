'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolioData';
import {
  Download,
  Mail,
  Linkedin,
  Github,
  Code2,
  Terminal,
  Sparkles,
  ArrowRight,
  Database,
  Brain,
  Award,
  ChevronDown
} from 'lucide-react';

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Glow Orbs background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-blue-600/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status pill badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Available for Hire & Opportunites</span>
            </div>

            {/* Main Greeting */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="text-gradient">Divya Lanka</span>
              </h1>
              
              {/* Typewriter role */}
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl font-mono text-slate-700 dark:text-slate-300">
                  I am a{' '}
                  <span className="text-cyan-400 font-semibold border-b-2 border-purple-500 pb-0.5">
                    {displayText}
                  </span>
                  <span className="animate-pulse text-purple-400 font-bold ml-0.5">|</span>
                </span>
              </div>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              B.Tech Computer Science graduate specializing in <span className="text-cyan-400 font-medium">Python</span>, <span className="text-purple-400 font-medium">SQL</span>, <span className="text-pink-400 font-medium">Data Analytics</span>, and <span className="text-cyan-300 font-medium font-mono">Full Stack Engineering</span>. Dedicated to transforming complex datasets into actionable insights and robust web solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="/resume.pdf"
                download="Divya_Lanka_Resume.pdf"
                className="group relative inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] transition-all duration-300"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm glass-card text-slate-800 dark:text-slate-200 hover:text-cyan-400 dark:hover:text-cyan-300 hover:border-cyan-500/40 hover:scale-[1.03] transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-4 border-t border-slate-200/10 dark:border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mr-2">
                Connect:
              </span>
              
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-400 hover:text-purple-400 dark:hover:text-purple-400 hover:border-purple-500/40 hover:scale-110 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.socials.email}
                aria-label="Send Email"
                className="p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-400 hover:text-pink-400 dark:hover:text-pink-400 hover:border-pink-500/40 hover:scale-110 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-400 hover:text-amber-400 dark:hover:text-amber-400 hover:border-amber-500/40 hover:scale-110 transition-all font-mono text-xs font-bold"
              >
                <Code2 className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.socials.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerRank Profile"
                className="p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-400 hover:text-emerald-400 dark:hover:text-emerald-400 hover:border-emerald-500/40 hover:scale-110 transition-all"
              >
                <Terminal className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Profile / Visual Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Outer Glowing Orbital Rings */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-3 rounded-full border border-dashed border-purple-500/40 animate-[spin_18s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-pink-500/20 animate-pulse" />

              {/* Profile Avatar Card */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-2xl shadow-cyan-500/30">
                <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden relative flex flex-col items-center justify-center">
                  {/* Generated Stylized AI Avatar Graphic */}
                  <svg className="w-full h-full text-slate-300" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="240" height="240" fill="#080C14"/>
                    {/* Background Grid Lines */}
                    <path d="M0 40H240M0 80H240M0 120H240M0 160H240M0 200H240" stroke="#1E293B" strokeWidth="1"/>
                    <path d="M40 0V240M80 0V240M120 0V240M160 0V240M200 0V240" stroke="#1E293B" strokeWidth="1"/>
                    {/* Glowing Backdrop Circle */}
                    <circle cx="120" cy="120" r="80" fill="url(#avatarGlow)" fillOpacity="0.4"/>
                    {/* Female Tech Avatar Illustration */}
                    <path d="M120 50C92.3858 50 70 72.3858 70 100C70 115 76.5 128.5 87 137.5C70 152.5 58 174 58 200H182C182 174 170 152.5 153 137.5C163.5 128.5 170 115 170 100C170 72.3858 147.614 50 120 50Z" fill="#1E293B" stroke="#06B6D4" strokeWidth="3"/>
                    {/* Hair outline & Tech Glasses */}
                    <path d="M70 100C70 72.3858 92.3858 50 120 50C147.614 50 170 72.3858 170 100C170 106 168.5 111.5 166 116.5C160 95 142 80 120 80C98 80 80 95 74 116.5C71.5 111.5 70 106 70 100Z" fill="#8B5CF6"/>
                    {/* Glasses */}
                    <rect x="85" y="95" width="28" height="18" rx="4" fill="#0F172A" stroke="#06B6D4" strokeWidth="2"/>
                    <rect x="127" y="95" width="28" height="18" rx="4" fill="#0F172A" stroke="#06B6D4" strokeWidth="2"/>
                    <line x1="113" y1="104" x2="127" y2="104" stroke="#06B6D4" strokeWidth="2"/>
                    <circle cx="99" cy="104" r="3" fill="#38BDF8"/>
                    <circle cx="141" cy="104" r="3" fill="#38BDF8"/>
                    {/* Gradients */}
                    <defs>
                      <radialGradient id="avatarGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(120 120) scale(80)">
                        <stop stopColor="#06B6D4"/>
                        <stop offset="1" stopColor="#8B5CF6" stopOpacity="0"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Floating Badge 1: CGPA */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-4 glass-card px-3.5 py-2 rounded-2xl border border-cyan-500/40 shadow-xl flex items-center space-x-2.5 backdrop-blur-xl"
              >
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">CGPA</div>
                  <div className="text-xs font-extrabold text-cyan-300">8.76 / 10</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Python & SQL */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -left-4 glass-card px-3.5 py-2 rounded-2xl border border-purple-500/40 shadow-xl flex items-center space-x-2.5 backdrop-blur-xl"
              >
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Specialization</div>
                  <div className="text-xs font-extrabold text-purple-300">Python & SQL</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center space-y-2 text-slate-500 dark:text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
