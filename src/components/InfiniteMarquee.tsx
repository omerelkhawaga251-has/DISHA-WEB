'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Film, Flame, Play, Star, Zap } from 'lucide-react';

export default function InfiniteMarquee() {
  const items = [
    { text: 'CINEMATIC PACING', icon: Film },
    { text: '4K COLOR GRADING', icon: Sparkles },
    { text: 'VIRAL SHORTS & REELS', icon: Flame },
    { text: '3D SOUND DESIGN', icon: Zap },
    { text: 'HIGH CTR THUMBNAILS', icon: Star },
    { text: 'YOUTUBE RETENTION MASTERY', icon: Play },
    { text: 'DAVINCI & PREMIERE PRO', icon: Film },
    { text: 'AFTER EFFECTS VFX', icon: Sparkles },
  ];

  return (
    <div className="w-full overflow-hidden py-6 bg-stone-900 text-white border-y border-stone-800 my-10 select-none">
      <div className="flex w-max">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          className="flex items-center gap-8 whitespace-nowrap"
        >
          {[...items, ...items].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-mono font-black tracking-widest text-stone-300">
                <Icon className="w-4 h-4 text-orange-500" />
                <span>{item.text}</span>
                <span className="text-stone-700">✦</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
