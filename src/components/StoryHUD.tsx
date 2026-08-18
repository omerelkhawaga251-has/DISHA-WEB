'use client';

import React, { useEffect, useState } from 'react';
import { Compass, Sparkles, Film, Layers, Youtube, Send, User } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
   StoryHUD — A futuristic side HUD that tracks the user's
   position inside the 3D space trip using pure scroll %.
   ────────────────────────────────────────────────────────────── */
export default function StoryHUD() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);

  const chapters = [
    { label: '01 // البداية', labelEn: 'The Creator', icon: Sparkles, at: 0.0 },
    { label: '02 // العقلية', labelEn: 'The Mindset', icon: User, at: 0.14 },
    { label: '03 // الترسانة', labelEn: 'The Arsenal', icon: Layers, at: 0.28 },
    { label: '04 // خط الإنتاج', labelEn: 'The Pipeline', icon: Film, at: 0.42 },
    { label: '05 // المعرض', labelEn: 'The Gallery', icon: Compass, at: 0.56 },
    { label: '06 // يوتيوب', labelEn: 'YouTube Arenas', icon: Youtube, at: 0.72 },
    { label: '07 // التواصل', labelEn: 'Launchpad', icon: Send, at: 0.86 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = window.scrollY / totalHeight;
      setScrollPct(Math.min(100, Math.round(progress * 100)));

      // Determine which station is active
      let idx = 0;
      for (let i = chapters.length - 1; i >= 0; i--) {
        if (progress >= chapters[i].at) { idx = i; break; }
      }
      setActiveIndex(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStation = (stationAt: number) => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetY = stationAt * totalHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-end gap-3 pointer-events-none select-none">
      {/* Top HUD Tag */}
      <div className="px-3 py-1 rounded-full bg-slate-950/80 border border-indigo-500/30 text-[10px] font-mono font-bold text-indigo-400 backdrop-blur-md shadow-2xl mb-2 flex items-center gap-1.5 pointer-events-auto">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
        <span>3D TRIP // {scrollPct}%</span>
      </div>

      {/* Chapters Node List */}
      <div className="flex flex-col gap-2.5 pointer-events-auto bg-slate-950/70 border border-slate-800/80 p-2.5 rounded-2xl backdrop-blur-xl shadow-2xl">
        {chapters.map((ch, i) => {
          const isActive = activeIndex === i;
          const Icon = ch.icon;
          return (
            <button
              key={i}
              onClick={() => scrollToStation(ch.at)}
              className={`group flex items-center gap-3 px-3 py-1.5 rounded-xl transition-all duration-300 text-right ${
                isActive
                  ? 'bg-indigo-600/90 text-white shadow-lg shadow-indigo-600/30'
                  : 'hover:bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex flex-col items-end">
                <span className="text-[11px] font-mono font-black leading-tight">{ch.label}</span>
                <span className="text-[9px] text-slate-400 group-hover:text-slate-300 font-mono">{ch.labelEn}</span>
              </div>
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${isActive ? 'bg-white text-indigo-600 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
