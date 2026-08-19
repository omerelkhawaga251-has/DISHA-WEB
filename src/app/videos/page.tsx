'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { VIDEOS_AND_REELS, ProjectItem } from '@/data/portfolioData';
import { Play, ArrowRight, Video, Sparkles, Youtube, ExternalLink } from 'lucide-react';
import VideoModal from '@/components/VideoModal';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import TiltCard from '@/components/TiltCard';

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-[#050711] text-white font-sans selection:bg-orange-500 selection:text-white p-4 sm:p-8">
      <CustomCursor />
      <ScrollProgress />

      {/* Header Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 border-b border-stone-800 mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 border border-stone-800 text-xs font-bold hover:border-orange-500 hover:text-orange-400 transition shadow-sm text-stone-300"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للرئيسية</span>
        </Link>

        <div className="text-xl sm:text-2xl font-black tracking-tighter">
          <span>DISHA</span>
          <span className="text-orange-500">.</span>
        </div>

        <Link
          href="/designs"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-600 text-white text-xs font-bold hover:bg-orange-500 transition shadow-md shadow-orange-600/30"
        >
          <span>معرض البوسترات والثمبنيلات ←</span>
        </Link>
      </div>

      {/* Page Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 text-red-400 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-red-500/30">
          <Youtube className="w-3.5 h-3.5 text-red-500" />
          <span>YOUTUBE & REELS HUB ({VIDEOS_AND_REELS.length} VIDEOS)</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          معرض فيديوهات اليوتيوب والريلز
        </h1>
        <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto mt-2 font-arabic" dir="rtl">
          جميع المقاطع مجهزة بالثمبنيلات الأصلية من YouTube ومتاحة للتشغيل الفوري داخل الموقع
        </p>
      </div>

      {/* Videos Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {VIDEOS_AND_REELS.map((project, idx) => {
          const isDrive = project.categoryLabel?.includes('Drive');

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
            >
              <TiltCard
                maxTilt={10}
                scaleOnHover={1.02}
                cursorType="video"
                onClick={() => {
                  if (isDrive && project.videoUrl) {
                    window.open(project.videoUrl, '_blank');
                  } else {
                    setActiveVideo(project);
                  }
                }}
                className="h-full group bg-stone-950/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-stone-800 hover:border-red-500/80 shadow-xl hover:shadow-[0_0_35px_rgba(239,68,68,0.25)] transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                    <span>{project.categoryLabel}</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Play className="w-2.5 h-2.5 fill-current" />
                    <span>فيديو أصلي</span>
                  </div>
                  <div className="absolute inset-0 bg-stone-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 bg-stone-950/90 border-t border-stone-800">
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-red-400 transition leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-stone-300 mt-2.5 leading-relaxed font-arabic" dir="rtl">
                      {project.description}
                    </p>

                    {project.software && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.software.map((sw, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-stone-900 border border-stone-800 text-[10px] font-mono font-bold text-stone-400"
                          >
                            {sw}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-stone-800 mt-4 flex items-center justify-between text-xs font-bold text-red-400">
                    <span className="flex items-center gap-1">
                      <span>{isDrive ? 'فتح مجلد Drive 📂' : 'مشاهدة الفيديو المباشر 🎬'}</span>
                      <Play className="w-3 h-3 fill-current" />
                    </span>
                    <span className="text-stone-400 font-mono text-[11px]">
                      {isDrive ? 'Cloud Folder' : 'Direct Play'}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>

      {activeVideo && (
        <VideoModal
          project={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </div>
  );
}
