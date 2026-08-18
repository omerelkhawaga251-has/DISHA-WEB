'use client';

import React, { useState, useMemo } from 'react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '@/data/portfolioData';
import {
  Film,
  Play,
  Maximize2,
  Sparkles,
  Layers,
} from 'lucide-react';
import ImageLightboxModal from '@/components/ImageLightboxModal';
import VideoModal from '@/components/VideoModal';
import TiltCard from '@/components/TiltCard';

export default function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxProject, setActiveLightboxProject] = useState<ProjectItem | null>(null);
  const [activeVideoProject, setActiveVideoProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'الكل (جميع الأعمال الـ 21)' },
    { id: 'videos', label: 'فيديوهات قابلة للتشغيل 🎬' },
    { id: 'thumbnail', label: 'الصور المصغرة (Thumbnails)' },
    { id: 'youtube', label: 'مشاريع اليوتيوب' },
    { id: 'brand', label: 'مشاريع القنوات والشركات' },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PORTFOLIO_PROJECTS;
    if (selectedCategory === 'videos') return PORTFOLIO_PROJECTS.filter((p) => !!p.videoUrl);
    return PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleCardClick = (project: ProjectItem) => {
    if (project.videoUrl) {
      setActiveVideoProject(project);
    } else {
      setActiveLightboxProject(project);
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>معرض الأعمال والمشاريع • Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            أعمال ومشاريع مختارة
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            تصفح نماذج الفيديوهات والصور المصغرة التي قمت بإنتاجها وإخراجها (اضغط على أي عنصر للمعاينة الفورية).
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-14 select-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-600/40 scale-105 border border-indigo-400/40'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3D Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const hasVideo = !!project.videoUrl;

            return (
              <TiltCard
                key={project.id}
                maxTilt={10}
                scaleOnHover={1.03}
                cursorType={hasVideo ? 'video' : 'image'}
                onClick={() => handleCardClick(project)}
                className="cursor-pointer h-full"
              >
                <div className="group relative bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-indigo-500/60 rounded-3xl overflow-hidden transition-all shadow-2xl flex flex-col h-full backdrop-blur-md">
                  {/* Thumbnail Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Top Right: Category Tag */}
                    <div className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-slate-700/80 shadow-lg">
                      {project.categoryLabel}
                    </div>

                    {/* Top Left: Video Playable Indicator */}
                    {hasVideo && (
                      <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-xl animate-pulse">
                        <Play className="w-3 h-3 fill-current" />
                        <span>فيديو قابل للتشغيل</span>
                      </div>
                    )}

                    {/* Center Hover Action Icon */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      {hasVideo ? (
                        <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                          <Play className="w-8 h-8 fill-current ml-0.5" />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-slate-900/90 text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform border border-white/30">
                          <Maximize2 className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-base leading-snug group-hover:text-indigo-400 transition-colors line-clamp-2 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed font-medium">
                        {project.description}
                      </p>
                    </div>

                    {/* Software Badges */}
                    {project.software && (
                      <div className="flex items-center gap-1.5 flex-wrap pt-3 border-t border-slate-800/80">
                        {project.software.map((sw) => (
                          <span
                            key={sw}
                            className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700"
                          >
                            {sw}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxProject && (
        <ImageLightboxModal
          project={activeLightboxProject}
          projects={filteredProjects}
          onClose={() => setActiveLightboxProject(null)}
          onSelectProject={(p) => setActiveLightboxProject(p)}
        />
      )}

      {/* Video Modal */}
      {activeVideoProject && (
        <VideoModal
          project={activeVideoProject}
          onClose={() => setActiveVideoProject(null)}
        />
      )}
    </section>
  );
}
