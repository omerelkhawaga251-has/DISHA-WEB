'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem, PORTFOLIO_PROJECTS } from '@/data/portfolioData';
import { Play, Maximize2, ChevronUp, ChevronDown, RotateCw, Film, Sparkles, MessageCircle, Sliders } from 'lucide-react';

interface FilmReelCylinderProps {
  onSelectProject: (project: ProjectItem) => void;
  onPlayVideo: (project: ProjectItem) => void;
}

export default function FilmReelCylinder({
  onSelectProject,
  onPlayVideo,
}: FilmReelCylinderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastWheelTimeRef = useRef<number>(0);

  const total = PORTFOLIO_PROJECTS.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Non-passive native wheel listener
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onNativeWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const now = Date.now();
      if (now - lastWheelTimeRef.current < 120) return;

      if (e.deltaY > 10) {
        lastWheelTimeRef.current = now;
        nextSlide();
      } else if (e.deltaY < -10) {
        lastWheelTimeRef.current = now;
        prevSlide();
      }
    };

    el.addEventListener('wheel', onNativeWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onNativeWheel);
    };
  }, [nextSlide, prevSlide]);

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = startY - e.clientY;
    if (diff > 35) {
      nextSlide();
      setStartY(e.clientY);
    } else if (diff < -35) {
      prevSlide();
      setStartY(e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile phones (اسكرول باللمس للموبايل)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentY = e.touches[0].clientY;
    const diff = startY - currentY;
    if (diff > 25) {
      nextSlide();
      setStartY(currentY);
    } else if (diff < -25) {
      prevSlide();
      setStartY(currentY);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Keyboard arrow control
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') nextSlide();
      if (e.key === 'ArrowUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentProject = PORTFOLIO_PROJECTS[activeIndex];
  const hasVideo = !!currentProject.videoUrl;

  const visibleOffsets = [-2, -1, 0, 1, 2];

  return (
    <div className="w-full bg-stone-950 text-white rounded-[2.5rem] p-5 sm:p-10 border border-stone-800 shadow-2xl overflow-hidden relative select-none">
      
      {/* Background Cinematic Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-800/80 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-orange-500/30">
            <Film className="w-3.5 h-3.5" />
            <span>شريط المشاريع التفاعلي // PROJECTS REEL</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            شريط المشاريع السينمائي (Cinematic Projects Reel)
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm mt-1">
            حرك عجلة الماوس، أو اسحب بإصبعك على الهاتف، أو استخدم بكرة التمرير الجانبية لاستعراض المشاريع
          </p>
        </div>

        {/* Rotary Navigation Controls */}
        <div className="flex items-center gap-2.5">
          <div className="text-xs font-mono text-stone-400 bg-stone-900 px-4 py-2 rounded-xl border border-stone-800">
            <span className="text-orange-400 font-bold font-mono text-sm">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-stone-600"> / {PORTFOLIO_PROJECTS.length}</span>
          </div>

          <button
            onClick={prevSlide}
            aria-label="المشروع السابق"
            className="w-11 h-11 rounded-xl bg-stone-900 hover:bg-orange-600 text-stone-300 hover:text-white border border-stone-800 hover:border-orange-500 flex items-center justify-center transition shadow-lg active:scale-95"
          >
            <ChevronUp className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="المشروع التالي"
            className="w-11 h-11 rounded-xl bg-stone-900 hover:bg-orange-600 text-stone-300 hover:text-white border border-stone-800 hover:border-orange-500 flex items-center justify-center transition shadow-lg active:scale-95"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Side: Active Project Details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 order-2 lg:order-1">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-600/30 text-orange-300 border border-orange-500/40">
                {currentProject.categoryLabel}
              </span>
              {currentProject.views && (
                <span className="text-xs font-mono text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  👁️ {currentProject.views} مشاهدة
                </span>
              )}
            </div>

            <h4 className="text-2xl sm:text-3xl font-black text-white leading-snug">
              {currentProject.title}
            </h4>

            <p className="text-sm text-stone-300 leading-relaxed font-arabic" dir="rtl">
              {currentProject.description}
            </p>

            {currentProject.software && (
              <div className="pt-2">
                <span className="text-[11px] font-mono text-stone-400 block mb-2">برامج المونتاج والتصميم:</span>
                <div className="flex flex-wrap gap-2">
                  {currentProject.software.map((sw, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-stone-900 border border-stone-800 text-xs font-bold text-stone-300"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-800">
            {hasVideo ? (
              <button
                onClick={() => onPlayVideo(currentProject)}
                className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/40 transition transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>تشغيل الفيديو في الموقع</span>
              </button>
            ) : (
              <button
                onClick={() => onSelectProject(currentProject)}
                className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/40 transition transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Maximize2 className="w-4 h-4" />
                <span>تكبير الصورة كاملة (4K)</span>
              </button>
            )}

            <a
              href={`https://wa.me/201016345690?text=${encodeURIComponent(
                `مرحباً مصطفى، أود طلب عمل مونتاج أو تصميم مماثل لمشروع "${currentProject.title}"`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 text-xs font-bold transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>طلب عمل مماثل على WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Side: 3D CYLINDER + MOBILE INTERACTIVE SCROLLBAR TRACK */}
        <div className="lg:col-span-7 flex items-center gap-3 sm:gap-4 order-1 lg:order-2">
          
          {/* Main 3D Cylinder Container */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex-1 h-[440px] sm:h-[530px] relative flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden rounded-3xl bg-stone-900/70 border border-stone-800 backdrop-blur-xl touch-pan-y"
            style={{ perspective: '1200px' }}
          >
            {/* Film Strip Side Perforations */}
            <div className="absolute top-0 bottom-0 left-2 sm:left-3 w-3 sm:w-4 flex flex-col justify-between py-3 pointer-events-none z-30 opacity-40">
              {[...Array(14)].map((_, i) => (
                <div key={i} className="w-2.5 sm:w-3 h-3 sm:h-4 rounded-sm bg-stone-700 border border-stone-600" />
              ))}
            </div>

            <div className="absolute top-0 bottom-0 right-2 sm:right-3 w-3 sm:w-4 flex flex-col justify-between py-3 pointer-events-none z-30 opacity-40">
              {[...Array(14)].map((_, i) => (
                <div key={i} className="w-2.5 sm:w-3 h-3 sm:h-4 rounded-sm bg-stone-700 border border-stone-600" />
              ))}
            </div>

            {/* Rotary Items */}
            <div className="relative w-full max-w-lg h-full flex items-center justify-center">
              {visibleOffsets.map((offset) => {
                const itemIndex = (activeIndex + offset + total) % total;
                const item = PORTFOLIO_PROJECTS[itemIndex];
                const isCenter = offset === 0;
                const isHasVideo = !!item.videoUrl;

                const rotateX = offset * 28;
                const translateY = offset * 110;
                const translateZ = isCenter ? 60 : -Math.abs(offset) * 90;
                const scale = isCenter ? 1 : 1 - Math.abs(offset) * 0.18;
                const opacity = isCenter ? 1 : Math.max(0.2, 0.75 - Math.abs(offset) * 0.25);
                const zIndex = 20 - Math.abs(offset) * 5;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (isCenter) {
                        if (isHasVideo) onPlayVideo(item);
                        else onSelectProject(item);
                      } else {
                        setActiveIndex(itemIndex);
                      }
                    }}
                    style={{
                      transform: `translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) scale(${scale})`,
                      opacity,
                      zIndex,
                      transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    }}
                    className={`absolute w-[86%] sm:w-[82%] aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer ${
                      isCenter
                        ? 'border-4 border-orange-500 shadow-[0_0_35px_rgba(234,88,12,0.45)] ring-2 ring-orange-400'
                        : 'border-2 border-stone-700/80 hover:border-orange-400/50'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />

                    {/* Top Badge */}
                    <div className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-md text-[10px] font-bold text-white border border-white/20">
                      {item.categoryLabel}
                    </div>

                    {isHasVideo && (
                      <div className="absolute top-2.5 left-2.5 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded-md flex items-center gap-1 shadow-md">
                        <Play className="w-2.5 h-2.5 fill-current" />
                        <span>فيديو</span>
                      </div>
                    )}

                    {/* Center Overlay when active */}
                    {isCenter && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-xs sm:text-sm font-bold text-white truncate max-w-[80%]">
                            {item.title}
                          </p>
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-lg">
                            {isHasVideo ? (
                              <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                            ) : (
                              <Maximize2 className="w-3.5 h-3.5" />
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Hint */}
            <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none z-30">
              <span className="text-[10px] font-mono text-stone-300 bg-black/80 px-3.5 py-1 rounded-full border border-stone-700 backdrop-blur-md shadow-lg">
                👆 اسحب بإصبعك على الشاشة أو لف البكرة
              </span>
            </div>
          </div>

          {/* DEDICATED VERTICAL SCROLLBAR & JOG WHEEL TRACK (بكرة تمرير عمودية) */}
          <div className="w-8 sm:w-10 h-[440px] sm:h-[530px] rounded-2xl bg-stone-900 border border-stone-800 flex flex-col items-center justify-between py-3 px-1 relative shadow-inner">
            <button
              onClick={prevSlide}
              aria-label="السابق"
              className="w-6 h-6 rounded-lg bg-stone-800 hover:bg-orange-600 text-stone-300 hover:text-white flex items-center justify-center transition text-xs"
            >
              ▲
            </button>

            {/* Slider Track with Draggable Thumb */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickY = e.clientY - rect.top;
                const ratio = clickY / rect.height;
                const targetIdx = Math.min(total - 1, Math.max(0, Math.floor(ratio * total)));
                setActiveIndex(targetIdx);
              }}
              className="w-2 flex-1 my-3 bg-stone-800 rounded-full relative cursor-pointer overflow-hidden"
            >
              {/* Glowing Active Position Thumb */}
              <motion.div
                animate={{
                  top: `${(activeIndex / (total - 1)) * 85}%`,
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                className="absolute left-0 right-0 h-8 rounded-full bg-gradient-to-b from-orange-500 to-amber-400 shadow-[0_0_12px_rgba(249,115,22,0.8)]"
              />
            </div>

            <button
              onClick={nextSlide}
              aria-label="التالي"
              className="w-6 h-6 rounded-lg bg-stone-800 hover:bg-orange-600 text-stone-300 hover:text-white flex items-center justify-center transition text-xs"
            >
              ▼
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
