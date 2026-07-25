'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATIONS, Certification } from '@/data/portfolioData';
import { Award, Calendar, CheckCircle2, ShieldCheck, Sparkles, X } from 'lucide-react';

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-purple-500/30 text-purple-400 text-xs font-mono tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Formal course completions and skill accreditations in programming, soft skills, and industry placement preparation.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-3xl border border-slate-200/10 dark:border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Badge Top Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-purple-400 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.date}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-cyan-400 mt-1">
                  Issued by: {cert.issuer}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="mt-6 pt-4 border-t border-slate-200/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800/60 text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveCert(cert)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 transition-colors"
                >
                  <span>Verify</span>
                  <Sparkles className="w-3 h-3" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Verification Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-lg w-full rounded-3xl p-6 border border-white/20 shadow-2xl relative bg-slate-950/95 text-white"
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass-card text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 mx-auto">
                  <ShieldCheck className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-white">{activeCert.title}</h3>
                <p className="text-xs text-cyan-400 font-mono">Issued by {activeCert.issuer} • {activeCert.date}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{activeCert.description}</p>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Recipient:</span>
                    <span className="font-semibold text-white">Divya Lanka</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Status:</span>
                    <span className="font-semibold text-emerald-400 flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5 inline" />
                      <span>Verified & Valid</span>
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
