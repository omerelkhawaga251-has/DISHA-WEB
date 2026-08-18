'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Maximize2, Palette, Flame, TrendingUp, Star, Award, Layers } from 'lucide-react';
import { DISHA_CREATIVITY_PROJECTS, ProjectItem } from '@/data/portfolioData';
import TiltCard from '@/components/TiltCard';

interface DishaCreativitySectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function DishaCreativitySection({
  onSelectProject,
}: DishaCreativitySectionProps) {
  return (
    <section id="creativity" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase tracking-widest mb-4 border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
          <span>FEATURED ARTWORK & THUMBNAILS</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase font-display bg-gradient-to-r from-white via-orange-100 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(249,115,22,0.3)]">
          DISHA CREATIVITY
        </h2>
        <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-arabic" dir="rtl">
          مختارات من أفضل وأقوى التصاميم والثمبنيلات التي صممتها بعناية فائقة لتصنع فارقاً حقيقياً في معدل النقر CTR والانتشار.
        </p>
      </div>

      {/* Luxury 3D Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DISHA_CREATIVITY_PROJECTS.map((project, idx) => {
          const isLarge = idx === 0 || idx === 5;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className={isLarge ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <TiltCard
                maxTilt={12}
                scaleOnHover={1.03}
                cursorType="image"
                onClick={() => onSelectProject(project)}
                className="h-full group bg-stone-950/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-stone-800 hover:border-orange-500/80 shadow-xl hover:shadow-[0_0_35px_rgba(249,115,22,0.3)] transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-amber-300 border border-amber-500/40 flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    <span>MASTERPIECE</span>
                  </div>

                  {/* CTR High Impact Pill */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-600 to-rose-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Flame className="w-3 h-3" />
                    <span>HIGH CTR</span>
                  </div>

                  {/* Overlay Hover Action */}
                  <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 flex flex-col justify-between flex-1 bg-stone-950/90 border-t border-stone-800/80">
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-orange-400 transition leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-stone-400 line-clamp-2 mt-1.5 leading-relaxed font-arabic" dir="rtl">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-800/80 mt-4 flex items-center justify-between text-xs font-bold text-orange-400">
                    <span className="flex items-center gap-1.5 text-stone-400">
                      <Palette className="w-3.5 h-3.5 text-orange-500" />
                      <span>Adobe Photoshop</span>
                    </span>
                    <span className="font-mono text-[11px] text-orange-400">معاينة 4K 🔍</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
