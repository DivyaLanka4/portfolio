'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollWidth((winScroll / height) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-150 ease-out shadow-[0_0_10px_#06b6d4]"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
}
