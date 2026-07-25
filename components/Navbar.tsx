'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X, Code2, Sparkles, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-slate-950/80 dark:bg-[#050811]/85 backdrop-blur-md border-b border-slate-200/10 dark:border-white/10 shadow-lg shadow-cyan-950/10'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center space-x-2 text-lg font-bold tracking-tight text-slate-900 dark:text-white"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 p-0.5 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Divya Lanka
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 dark:text-slate-400 uppercase font-mono">
                Software & AI Eng
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 glass-card px-4 py-1.5 rounded-full border border-slate-200/10 dark:border-white/10 shadow-sm">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-300'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-full border border-cyan-500/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle Theme"
                className="p-2.5 rounded-xl glass-card hover:bg-slate-200/50 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-purple-600" />
                )}
              </button>
            )}

            {/* CTA Resume Download */}
            <a
              href="/resume.pdf"
              download="Divya_Lanka_Resume.pdf"
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold rounded-xl text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-95 shadow-md shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center space-x-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle Theme"
                className="p-2 rounded-lg glass-card text-slate-700 dark:text-slate-200"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-600" />}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg glass-card text-slate-700 dark:text-slate-200 focus:outline-none"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden glass-card border-t border-slate-200/10 dark:border-white/10 overflow-hidden bg-slate-950/95 dark:bg-[#080c14]/95 backdrop-blur-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {NAV_LINKS.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3">
                <a
                  href="/resume.pdf"
                  download="Divya_Lanka_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
