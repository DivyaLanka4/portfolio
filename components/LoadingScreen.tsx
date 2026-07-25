'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050811] text-white"
        >
          <div className="relative flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 rounded-full border-2 border-transparent border-t-cyan-400 border-r-purple-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Cpu className="w-8 h-8 text-cyan-400 animate-pulse" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2 text-sm font-mono text-cyan-300 tracking-widest uppercase"
          >
            <Terminal className="w-4 h-4 text-purple-400" />
            <span>Initializing AI Portfolio...</span>
          </motion.div>

          <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mt-6">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
