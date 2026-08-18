'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, SlidersHorizontal, Eye } from 'lucide-react';

interface ColorGradingSliderProps {
  imageSrc: string;
  title?: string;
  subtitle?: string;
}

export default function ColorGradingSlider({
  imageSrc,
  title = 'سحر التلوين السينمائي (Cinematic Color Grading & VFX)',
  subtitle = 'اسحب المقبض لتشاهد الفارق المذهل بين اللقطات الخام الـ RAW والنتيجة السينمائية النهائية',
}: ColorGradingSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <h3 className="text-stone-900 font-black text-lg sm:text-xl">{title}</h3>
          </div>
          <p className="text-stone-500 text-xs sm:text-sm mt-1">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full">
          <Eye className="w-4 h-4" />
          <span>اسحب لليمين واليسار للتجربة</span>
        </div>
      </div>

      {/* Interactive Slider Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        className="relative w-full aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-stone-300 shadow-inner group"
      >
        {/* Layer 1: AFTER (Full Vibrant Color Graded) */}
        <div className="absolute inset-0">
          <img
            src={imageSrc}
            alt="After Color Grading"
            className="w-full h-full object-cover filter contrast-125 saturate-125 brightness-105"
            draggable={false}
          />
          <div className="absolute top-4 right-4 bg-orange-600/90 text-white text-xs font-black px-3 py-1.5 rounded-xl backdrop-blur-md flex items-center gap-1.5 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>بعد التلوين والماسترينج 🎬</span>
          </div>
        </div>

        {/* Layer 2: BEFORE (Flat Log Raw Footage) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={imageSrc}
            alt="Before Raw Footage"
            className="absolute inset-0 w-full h-full object-cover max-w-none filter grayscale contrast-75 brightness-110 opacity-90"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
            draggable={false}
          />
          <div className="absolute top-4 left-4 bg-stone-900/90 text-stone-200 text-xs font-bold px-3 py-1.5 rounded-xl backdrop-blur-md flex items-center gap-1.5 shadow-lg border border-stone-700">
            <span>RAW / Log الكاميرا الخام</span>
          </div>
        </div>

        {/* Divider Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-10 h-10 rounded-full bg-orange-600 text-white font-black shadow-2xl flex items-center justify-center border-2 border-white text-sm">
            ⇄
          </div>
        </div>
      </div>
    </div>
  );
}
