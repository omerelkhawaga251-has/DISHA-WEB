'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { DESIGN_PROJECTS, ProjectItem } from '@/data/portfolioData';
import { Maximize2, ArrowRight, Palette, Sparkles, MessageCircle } from 'lucide-react';
import ImageLightboxModal from '@/components/ImageLightboxModal';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';

export default function DesignsPage() {
  const [activeLightbox, setActiveLightbox] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 font-sans selection:bg-orange-500 selection:text-white p-4 sm:p-8">
      <CustomCursor />
      <ScrollProgress />

      {/* Header Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 border-b border-stone-200 mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-stone-200 text-xs font-bold hover:border-orange-600 hover:text-orange-600 transition shadow-sm"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للرئيسية</span>
        </Link>

        <div className="text-xl sm:text-2xl font-black tracking-tighter">
          <span>DISHA</span>
          <span className="text-orange-600">.</span>
        </div>

        <Link
          href="/videos"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition shadow-md shadow-orange-600/30"
        >
          <span>معرض الفيديوهات والريلز ←</span>
        </Link>
      </div>

      {/* Page Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Palette className="w-3.5 h-3.5 text-amber-600" />
          <span>THUMBNAILS & DESIGNS ({DESIGN_PROJECTS.length} ARTWORKS)</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
          معرض الصور والثمبنيلات وتصاميم ديشا
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mt-2">
          تصاميم صور مصغرة ذات نسبة نقر مرتفعة CTR وبوسترات عالية الدقة متاحة للتكبير بدقة 4K
        </p>
      </div>

      {/* Designs Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {DESIGN_PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06, duration: 0.4 }}
            onClick={() => setActiveLightbox(project)}
            data-cursor="image"
            className="group bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-orange-500 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between transform hover:-translate-y-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20">
                {project.categoryLabel}
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition">
                  <Maximize2 className="w-7 h-7" />
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-bold text-stone-900 text-base group-hover:text-orange-600 transition leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-stone-500 line-clamp-2 mt-2 leading-relaxed font-arabic" dir="rtl">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between text-xs font-bold text-orange-600">
                <span>تكبير الصورة بالدقة الكاملة 🔍</span>
                <span>←</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {activeLightbox && (
        <ImageLightboxModal
          project={activeLightbox}
          projects={DESIGN_PROJECTS}
          onClose={() => setActiveLightbox(null)}
          onSelectProject={(p) => setActiveLightbox(p)}
        />
      )}
    </div>
  );
}
