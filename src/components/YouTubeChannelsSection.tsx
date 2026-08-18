'use client';

import React from 'react';
import { YOUTUBE_CHANNELS } from '@/data/portfolioData';
import {
  Youtube,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Flame,
  Award,
} from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function YouTubeChannelsSection() {
  return (
    <section id="youtube" className="py-20 md:py-28 border-t border-slate-800/80 bg-slate-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold mb-3">
            <Youtube className="w-3.5 h-3.5" />
            <span>قنوات اليوتيوب • YouTube Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            قنوات ومشاريع أشارك في صناعتها على YouTube
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            إدارة دورة الفيديو بالكامل، تصميم الصور المصغرة، والمؤثرات البصرية.
          </p>
        </div>

        {/* 2 Channels 3D Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {YOUTUBE_CHANNELS.map((channel, idx) => (
            <TiltCard key={idx} maxTilt={8} scaleOnHover={1.02} className="h-full">
              <div className="relative group bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-red-500/50 rounded-3xl p-6 sm:p-8 transition-all shadow-2xl flex flex-col justify-between h-full overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/20 transition" />

                <div>
                  {/* Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    {channel.isWorkingWith ? (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-black">
                        <Flame className="w-3.5 h-3.5 text-amber-400" />
                        <span>أعمل معها حالياً (Currently Working With)</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-black">
                        <Award className="w-3.5 h-3.5 text-indigo-400" />
                        <span>القناة الرسمية الشخصية</span>
                      </span>
                    )}

                    <span className="text-xs text-slate-500 font-mono font-bold">
                      {channel.handle}
                    </span>
                  </div>

                  {/* Channel Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={channel.avatar}
                      alt={channel.name}
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-red-500/50 shadow-xl flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <span>{channel.name}</span>
                        <CheckCircle2 className="w-5 h-5 text-red-500 fill-red-500/20" />
                      </h3>
                      <div className="text-xs sm:text-sm text-indigo-400 font-bold mt-1">
                        الدور: {channel.role}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                    {channel.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    فيديوهات ومصغرات حصرية
                  </span>

                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-black text-xs sm:text-sm shadow-xl shadow-red-600/30 transition transform hover:scale-105 active:scale-95 border border-red-400/30"
                  >
                    <Youtube className="w-4 h-4 fill-current" />
                    <span>زيارة القناة على YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
