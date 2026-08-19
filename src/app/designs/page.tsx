'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { POST_DESIGNS, YOUTUBE_THUMBNAILS, ProjectItem } from '@/data/portfolioData';
import { Maximize2, ArrowRight, Palette, Sparkles, ImageIcon, Flame } from 'lucide-react';
import ImageLightboxModal from '@/components/ImageLightboxModal';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import TiltCard from '@/components/TiltCard';

export default function DesignsPage() {
  const [activeLightbox, setActiveLightbox] = useState<ProjectItem | null>(null);
  const [designTab, setDesignTab] = useState<'posts' | 'thumbnails'>('posts');

  const currentList = designTab === 'posts' ? POST_DESIGNS : YOUTUBE_THUMBNAILS;

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
          href="/#work"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-600 text-white text-xs font-bold hover:bg-orange-500 transition shadow-md shadow-orange-600/30"
        >
          <span>معرض المشاريع الرئيسي ←</span>
        </Link>
      </div>

      {/* Page Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-orange-500/30">
          <Palette className="w-3.5 h-3.5" />
          <span>CREATIVE GRAPHIC DESIGN HUB</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          معرض البوسترات وصور اليوتيوب المصغرة
        </h1>
        <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto mt-2 font-arabic" dir="rtl">
          تصاميم بوسترات تسويقية وثمبنيلات يوتيوب ذات نسبة نقر مرتفعة CTR مصممة بالفوتوشوب بدقة 4K
        </p>

        {/* Tab Switcher */}
        <div className="inline-flex items-center gap-2 p-1.5 bg-stone-900/90 rounded-2xl border border-stone-800 mt-8 shadow-xl">
          <button
            onClick={() => setDesignTab('posts')}
            className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              designTab === 'posts'
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/40'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>1. Post Designs ({POST_DESIGNS.length})</span>
          </button>

          <button
            onClick={() => setDesignTab('thumbnails')}
            className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              designTab === 'thumbnails'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/40'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>2. YouTube Thumbnails ({YOUTUBE_THUMBNAILS.length})</span>
          </button>
        </div>
      </div>

      {/* Designs Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {currentList.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 6) * 0.06, duration: 0.4 }}
            >
              <TiltCard
                maxTilt={10}
                scaleOnHover={1.02}
                cursorType="image"
                onClick={() => setActiveLightbox(project)}
                className="h-full group bg-stone-950/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-stone-800 hover:border-orange-500 shadow-xl hover:shadow-[0_0_35px_rgba(249,115,22,0.25)] transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20">
                    {project.categoryLabel}
                  </div>
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Flame className="w-3 h-3" />
                    <span>HIGH CTR</span>
                  </div>
                  <div className="absolute inset-0 bg-stone-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 bg-stone-950/90 border-t border-stone-800">
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-orange-400 transition leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-stone-300 mt-2.5 leading-relaxed font-arabic" dir="rtl">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-800 mt-4 flex items-center justify-between text-xs font-bold text-orange-400">
                    <span className="flex items-center gap-1">
                      <span>تكبير التصميم 4K</span>
                      <Maximize2 className="w-3 h-3" />
                    </span>
                    <span className="text-stone-400 font-mono text-[11px]">
                      HD Artwork
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {activeLightbox && (
        <ImageLightboxModal
          project={activeLightbox}
          projects={currentList}
          onClose={() => setActiveLightbox(null)}
          onSelectProject={(p) => setActiveLightbox(p)}
        />
      )}
    </div>
  );
}
