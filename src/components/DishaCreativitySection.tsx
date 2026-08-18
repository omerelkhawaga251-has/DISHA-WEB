'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Maximize2, Palette, Flame, TrendingUp, Star, Award, Layers } from 'lucide-react';
import { DISHA_CREATIVITY_PROJECTS, ProjectItem } from '@/data/portfolioData';

interface DishaCreativitySectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function DishaCreativitySection({
  onSelectProject,
}: DishaCreativitySectionProps) {
  return (
    <section id="creativity" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-rose-500/20 text-orange-600 text-xs font-mono font-bold uppercase tracking-widest mb-3 border border-orange-500/30">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
          <span>DISHA CREATIVITY // مساحة الإبداع الفني</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-900">
          ديشا كرياتيفيتي (DISHA CREATIVITY)
        </h2>
        <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          مختارات من أفضل وأقوى التصاميم والثمبنيلات التي صممتها بعناية فائقة لتصنع فارقاً حقيقياً في معدل النقر CTR والانتشار.
        </p>
      </div>

      {/* Luxury Showcase Grid */}
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
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => onSelectProject(project)}
              data-cursor="image"
              className={`group relative bg-white rounded-3xl overflow-hidden border-2 border-stone-200/90 hover:border-orange-500/80 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                isLarge ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Top Badge */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-amber-300 border border-amber-500/30 flex items-center gap-1">
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
              <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base group-hover:text-orange-600 transition leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2 mt-1.5 leading-relaxed font-arabic">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 mt-4 flex items-center justify-between text-xs font-bold text-orange-600">
                  <span className="flex items-center gap-1.5 text-stone-700">
                    <Palette className="w-3.5 h-3.5 text-orange-500" />
                    <span>Adobe Photoshop</span>
                  </span>
                  <span className="font-mono text-[11px] text-orange-600">معاينة 4K 🔍</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
