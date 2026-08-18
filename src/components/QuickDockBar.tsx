'use client';

import React from 'react';
import { Sparkles, Film, Layers, Compass, Youtube, MessageCircle } from 'lucide-react';
import { DISHA_INFO } from '@/data/portfolioData';

export default function QuickDockBar() {
  const scrollToStation = (progressFraction: number) => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetY = progressFraction * totalHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'البداية', icon: Sparkles, at: 0.0 },
    { label: 'الأدوات', icon: Layers, at: 0.28 },
    { label: 'المشاريع', icon: Compass, at: 0.56 },
    { label: 'يوتيوب', icon: Youtube, at: 0.72 },
  ];

  return (
    <div className="fixed bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none px-4">
      <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 bg-slate-950/85 border border-slate-800/90 p-2 rounded-2xl backdrop-blur-2xl shadow-2xl shadow-black/80">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => scrollToStation(item.at)}
              className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800/80 active:scale-95 transition min-h-[44px]"
            >
              <Icon className="w-4 h-4 text-indigo-400" />
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          );
        })}

        <div className="w-[1px] h-6 bg-slate-800 mx-1" />

        {/* WhatsApp Fast CTA */}
        <a
          href={DISHA_INFO.socials.whatsapp.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black shadow-lg shadow-emerald-600/30 active:scale-95 transition min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>تواصل الآن</span>
        </a>
      </div>
    </div>
  );
}
