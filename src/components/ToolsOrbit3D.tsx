'use client';

import React, { useState } from 'react';
import { SOFTWARE_TOOLS } from '@/data/portfolioData';
import {
  Film,
  Video,
  Sparkles,
  Image as ImageIcon,
  Scissors,
  Cpu,
  Layers,
  CheckCircle2,
  Wand2,
  Zap,
} from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function ToolsOrbit3D() {
  const [activeTool, setActiveTool] = useState(0);

  const getToolIcon = (name: string) => {
    switch (name) {
      case 'DaVinci Resolve':
        return <Film className="w-8 h-8 text-amber-400" />;
      case 'Adobe Premiere Pro':
        return <Video className="w-8 h-8 text-indigo-400" />;
      case 'Adobe After Effects':
        return <Sparkles className="w-8 h-8 text-violet-400" />;
      case 'Adobe Photoshop':
        return <ImageIcon className="w-8 h-8 text-cyan-400" />;
      case 'CapCut Pro':
        return <Scissors className="w-8 h-8 text-rose-400" />;
      default:
        return <Cpu className="w-8 h-8 text-emerald-400" />;
    }
  };

  return (
    <section id="tools" className="py-20 md:py-32 border-t border-slate-800/80 bg-slate-950/60 relative overflow-hidden">
      {/* Background 3D Ambient Aura */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 text-xs font-black mb-4 shadow-xl">
            <Zap className="w-4 h-4 text-purple-400" />
            <span>المحطة 03 // ترسانة الأدوات ثلاثية الأبعاد • 3D Creative Arsenal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            أقوى البرمجيات والتقنيات لصناعة الإبهار
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed font-medium">
            تكامل هندسي بين برامج التلوين الاحترافية، المؤثرات البصرية، المونتاج السريع، وأدوات الذكاء الاصطناعي.
          </p>
        </div>

        {/* 3D Interactive Tool Orbit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SOFTWARE_TOOLS.map((tool, idx) => {
            const isSelected = activeTool === idx;

            return (
              <TiltCard
                key={idx}
                maxTilt={12}
                scaleOnHover={1.04}
                onClick={() => setActiveTool(idx)}
                className="h-full cursor-pointer"
              >
                <div
                  className={`relative p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between h-full backdrop-blur-xl border ${
                    isSelected
                      ? 'bg-slate-900 border-indigo-500 shadow-2xl shadow-indigo-500/20 ring-1 ring-indigo-500/50'
                      : 'bg-slate-900/60 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/80 shadow-xl'
                  }`}
                >
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-2xl">
                        {getToolIcon(tool.name)}
                      </div>

                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-950 text-indigo-300 border border-slate-800">
                        {tool.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white mb-2 group-hover:text-indigo-400 transition">
                      {tool.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                      {tool.description}
                    </p>
                  </div>

                  {/* Footer Tag */}
                  <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-indigo-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>احتراف كامل 100%</span>
                    </span>
                    <span className="text-slate-500 font-mono">STATION // 03</span>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
