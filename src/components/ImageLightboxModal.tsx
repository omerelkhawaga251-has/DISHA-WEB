'use client';

import React, { useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, MessageCircle, ExternalLink } from 'lucide-react';
import { ProjectItem, DISHA_INFO } from '@/data/portfolioData';

interface ImageLightboxModalProps {
  project: ProjectItem | null;
  projects: ProjectItem[];
  onClose: () => void;
  onSelectProject: (proj: ProjectItem) => void;
}

export default function ImageLightboxModal({
  project,
  projects,
  onClose,
  onSelectProject,
}: ImageLightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!project) return;

      const currentIndex = projects.findIndex((p) => p.id === project.id);
      if (e.key === 'ArrowRight' && currentIndex > 0) {
        onSelectProject(projects[currentIndex - 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex < projects.length - 1) {
        onSelectProject(projects[currentIndex + 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, projects, onClose, onSelectProject]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);

  const whatsappInquiryUrl = `https://wa.me/201016345690?text=${encodeURIComponent(
    `مرحباً مصطفى، أود طلب عمل مونتاج أو تصميم مشابه لمشروع "${project.title}"`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 max-w-5xl w-full bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-stone-800 bg-stone-950/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-600/20 text-orange-400 border border-orange-500/30">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-stone-400">
              ({currentIndex + 1} من {projects.length})
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-800 hover:bg-orange-600 text-stone-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Body */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[350px] sm:min-h-[480px]">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[65vh] w-auto object-contain select-none"
          />

          {/* Nav buttons */}
          {currentIndex > 0 && (
            <button
              onClick={() => onSelectProject(projects[currentIndex - 1])}
              className="absolute right-4 p-3 rounded-full bg-black/60 hover:bg-orange-600 text-white transition backdrop-blur-sm transform hover:scale-110"
              title="السابق"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {currentIndex < projects.length - 1 && (
            <button
              onClick={() => onSelectProject(projects[currentIndex + 1])}
              className="absolute left-4 p-3 rounded-full bg-black/60 hover:bg-orange-600 text-white transition backdrop-blur-sm transform hover:scale-110"
              title="التالي"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Footer Info */}
        <div className="p-5 px-6 bg-stone-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-800">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-stone-400 max-w-xl leading-relaxed">
              {project.description}
            </p>
          </div>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold shadow-lg shadow-orange-600/30 transition flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>اطلب عمل مماثل</span>
          </a>
        </div>
      </div>
    </div>
  );
}
