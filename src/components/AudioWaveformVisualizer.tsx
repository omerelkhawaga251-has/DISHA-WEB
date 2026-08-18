'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Activity } from 'lucide-react';

export default function AudioWaveformVisualizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bars, setBars] = useState<number[]>([40, 70, 30, 90, 60, 80, 45, 95, 30, 60, 85, 40]);

  useEffect(() => {
    if (!isPlaying) {
      setBars([20, 30, 15, 25, 20, 35, 18, 30, 15, 22, 28, 16]);
      return;
    }
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.floor(Math.random() * 85) + 15));
    }, 120);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3 bg-slate-950/80 border border-slate-800/80 px-4 py-2.5 rounded-2xl backdrop-blur-xl shadow-2xl select-none group hover:border-indigo-500/50 transition">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        aria-label={isPlaying ? 'إيقاف المؤثرات الصوتية' : 'تشغيل محاكي الصوت'}
        className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white flex items-center justify-center border border-indigo-500/30 transition shadow-lg"
      >
        {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
      </button>

      {/* Animated Sound Wave Bars */}
      <div className="flex items-end gap-1 h-6 w-24 px-1">
        {bars.map((height, idx) => (
          <span
            key={idx}
            style={{ height: `${height}%` }}
            className={`w-1 rounded-full transition-all duration-150 ${
              isPlaying
                ? 'bg-gradient-to-t from-indigo-500 via-purple-400 to-pink-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]'
                : 'bg-slate-700/60'
            }`}
          />
        ))}
      </div>

      <div className="flex flex-col">
        <span className="text-[10px] font-mono font-bold text-white leading-tight flex items-center gap-1">
          <Activity className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
          <span>SOUND DESIGN</span>
        </span>
        <span className="text-[9px] font-mono text-slate-400">
          {isPlaying ? '48kHz // MASTERED' : 'CLICK TO PREVIEW'}
        </span>
      </div>
    </div>
  );
}
