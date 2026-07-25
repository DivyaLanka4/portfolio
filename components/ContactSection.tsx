'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-900/20 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Build Together</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Contact <span className="text-gradient">Divya Lanka</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Have a question, project proposal, or job opportunity? Feel free to reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Cards */}
            <div className="glass-card p-6 rounded-3xl border border-slate-200/10 dark:border-white/10 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Contact Details</span>
              </h3>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Email Address</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-purple-500/40 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Phone Number</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-purple-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl glass-card text-xs font-semibold hover:border-cyan-500/40 text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl glass-card text-xs font-semibold hover:border-purple-500/40 text-purple-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Embedded Map Widget Placeholder */}
            <div className="glass-card rounded-3xl border border-slate-200/10 dark:border-white/10 overflow-hidden shadow-xl h-56 relative group">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.316041285!2d78.26795908252119!3d17.412299801452924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.6) contrast(1.2) opacity(0.8)' }}
                allowFullScreen={false}
                loading="lazy"
              />
              <div className="absolute top-3 left-3 glass-card px-3 py-1 rounded-lg text-xs font-mono text-cyan-300 pointer-events-none">
                📍 Telangana, India
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl border border-slate-200/10 dark:border-white/10 shadow-2xl relative"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Job Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Hi Divya, I would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
                  />
                </div>

                {/* Status Message */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-xs flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Thank you! Your message has been sent successfully. Divya will get back to you shortly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
