'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Rocket, Sparkles, Film, Palette, Layers, Youtube, Send, ChevronUp, ChevronDown } from 'lucide-react';

interface StoryHUDMissionProps {
  currentSection?: string;
  onNavigateSection: (id: string) => void;
}

export default function StoryHUDMission({
  onNavigateSection,
}: StoryHUDMissionProps) {
  const [activeStage, setActiveStage] = useState('hero');
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const stages = [
    { id: 'hero', code: 'STAGE 01', label: 'مدار الإطلاق', en: 'ORIGIN & BIO', icon: Rocket },
    { id: 'reel', code: 'STAGE 02', label: 'شريط المشاريع 3D', en: 'PROJECT REEL', icon: Film },
    { id: 'creativity', code: 'STAGE 03', label: 'ديشا كرياتيفيتي', en: 'CREATIVITY', icon: Sparkles },
    { id: 'grading', code: 'STAGE 04', label: 'سحر التلوين', en: 'COLOR ALCHEMY', icon: Palette },
    { id: 'work', code: 'STAGE 05', label: 'المعرض الشامل', en: 'ALL PROJECTS', icon: Film },
    { id: 'services', code: 'STAGE 06', label: 'ترسانة البرامج', en: 'ARSENAL DOCK', icon: Layers },
    { id: 'channels', code: 'STAGE 07', label: 'قنوات يوتيوب', en: 'ARENAS & ROOYAI', icon: Youtube },
    { id: 'contact', code: 'STAGE 08', label: 'محطة الاتصال', en: 'TRANSMISSION', icon: Send },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 280;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / docHeight) * 100)));
      setScrollProgress(progress);

      for (let i = stages.length - 1; i >= 0; i--) {
        const el = document.getElementById(stages[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveStage(stages[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stages]);

  const currentStageObj = stages.find((s) => s.id === activeStage) || stages[0];
  const CurrentIcon = currentStageObj.icon;

  return (
    <div className="fixed bottom-6 right-6 z-40 font-mono select-none">
      {/* Floating Mission Pill */}
      <motion.div
        layout
        className="bg-stone-950/85 backdrop-blur-2xl border border-orange-500/40 rounded-3xl shadow-[0_0_30px_rgba(249,115,22,0.25)] p-3 text-white flex flex-col items-end"
      >
        {/* Compact Header Pill */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-3 cursor-pointer group px-2 py-1"
        >
          {/* Animated Orbit Radar */}
          <div className="relative w-8 h-8 rounded-full bg-orange-950/80 border border-orange-500/60 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <CurrentIcon className="w-4 h-4 text-orange-400 absolute" />
          </div>

          <div className="text-right">
            <div className="text-[10px] font-bold text-orange-400 flex items-center gap-1.5 justify-end">
              <span>{currentStageObj.code}</span>
              <span className="text-stone-500">//</span>
              <span className="text-stone-300">{currentStageObj.en}</span>
            </div>
            <div className="text-xs font-bold text-white tracking-tight">
              {currentStageObj.label} ({scrollProgress}%)
            </div>
          </div>

          <div className="w-6 h-6 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 group-hover:text-orange-400 transition">
            {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </div>
        </div>

        {/* Expanded Navigation Matrix */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 pt-3 border-t border-stone-800/80 flex flex-col gap-1.5 w-60 overflow-hidden"
            >
              <div className="text-[9px] font-bold text-stone-500 uppercase tracking-widest px-2 mb-1 text-right">
                🪐 MAP // محطات الرحلة الفضائية
              </div>

              {stages.map((stage) => {
                const Icon = stage.icon;
                const isActive = stage.id === activeStage;

                return (
                  <button
                    key={stage.id}
                    onClick={() => {
                      onNavigateSection(stage.id);
                      setIsExpanded(false);
                    }}
                    className={`px-3 py-2 rounded-xl text-right text-xs font-bold flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-orange-600/30 text-orange-300 border border-orange-500/50 shadow-inner'
                        : 'text-stone-400 hover:text-white hover:bg-stone-900/80 border border-transparent'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-orange-400">{stage.code}</span>
                    <span className="flex items-center gap-2">
                      <span>{stage.label}</span>
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-orange-400' : 'text-stone-500'}`} />
                    </span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
