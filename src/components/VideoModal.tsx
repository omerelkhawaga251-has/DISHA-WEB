'use client';

import React, { useEffect } from 'react';
import { X, MessageCircle, ExternalLink, Play, Instagram, Youtube } from 'lucide-react';
import { ProjectItem } from '@/data/portfolioData';

interface VideoModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const videoUrl = project.videoUrl || '';
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  const isInstagram = videoUrl.includes('instagram.com/reel') || videoUrl.includes('instagram.com/p');

  const getYouTubeEmbedUrl = (url: string) => {
    try {
      if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1].split('?')[0];
        return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      }
      if (url.includes('shorts/')) {
        const id = url.split('shorts/')[1].split('?')[0];
        return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      }
      if (url.includes('watch?v=')) {
        const id = url.split('watch?v=')[1].split('&')[0];
        return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      }
      return url;
    } catch {
      return url;
    }
  };

  const getInstagramEmbedUrl = (url: string) => {
    try {
      const cleanUrl = url.split('?')[0].replace(/\/$/, '');
      return `${cleanUrl}/embed/captioned`;
    } catch {
      return url;
    }
  };

  const isShortOrReel = videoUrl.includes('shorts') || isInstagram;

  const whatsappInquiryUrl = `https://wa.me/201016345690?text=${encodeURIComponent(
    `مرحباً مصطفى، شاهدت فيديو "${project.title}" وأود طلب عمل مونتاج مماثل.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className={`relative z-10 w-full ${
          isShortOrReel ? 'max-w-md' : 'max-w-4xl'
        } bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-stone-800 bg-stone-950/90">
          <div className="flex items-center gap-2.5">
            {isInstagram ? (
              <span className="p-1 rounded-lg bg-pink-500/20 text-pink-400">
                <Instagram className="w-4 h-4" />
              </span>
            ) : (
              <span className="p-1 rounded-lg bg-red-500/20 text-red-500">
                <Youtube className="w-4 h-4" />
              </span>
            )}
            <h3 className="font-bold text-white text-xs sm:text-sm truncate max-w-[240px] sm:max-w-md">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-800 hover:bg-orange-600 text-stone-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div
          className={`relative w-full ${
            isShortOrReel ? 'aspect-[9/16] max-h-[68vh]' : 'aspect-video'
          } bg-black flex items-center justify-center overflow-hidden`}
        >
          {isYouTube ? (
            <iframe
              src={getYouTubeEmbedUrl(videoUrl)}
              title={project.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : isInstagram ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-stone-950 p-6 text-center">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 flex items-center justify-center text-white mb-4 shadow-xl shadow-pink-600/30 animate-pulse">
                <Instagram className="w-8 h-8" />
              </div>
              <h4 className="text-white font-bold text-base mb-1">{project.title}</h4>
              <p className="text-stone-400 text-xs mb-6 max-w-xs leading-relaxed">
                مقطع ريلز مخصص لمنصة Instagram بجودة عالية
              </p>
              <a
                href={videoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-pink-600/40 transition transform hover:scale-105 active:scale-95"
              >
                <Instagram className="w-4 h-4" />
                <span>مشاهدة الريلز على Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ) : (
            <video
              src={videoUrl || '/videos/sample.mp4'}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* Footer */}
        <div className="p-4 px-6 bg-stone-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-stone-800">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-stone-400 font-mono">
              {project.categoryLabel}
            </span>
            {project.views && (
              <span className="text-[10px] font-bold text-orange-400 bg-orange-950/60 px-2 py-0.5 rounded-full border border-orange-500/30">
                👁️ {project.views} مشاهدة
              </span>
            )}
          </div>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold shadow-lg shadow-orange-600/30 transition flex-shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>طلب مونتاج مماثل</span>
          </a>
        </div>
      </div>
    </div>
  );
}
