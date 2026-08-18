'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'pointer' | 'video' | 'image' | 'reel'>('default');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useSpring(-100, { stiffness: 600, damping: 35 });
  const mouseY = useSpring(-100, { stiffness: 600, damping: 35 });

  const haloX = useSpring(-100, { stiffness: 250, damping: 25 });
  const haloY = useSpring(-100, { stiffness: 250, damping: 25 });

  useEffect(() => {
    // Only enable on desktop fine pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const mouseMoveHandler = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      haloX.set(e.clientX);
      haloY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const reelCard = target.closest('#reel, [data-cursor="reel"]');
      const videoCard = target.closest('[data-cursor="video"], .cursor-pointer:has(iframe), .cursor-pointer:has(video)');
      const imageCard = target.closest('[data-cursor="image"]');
      const clickable = target.closest('a, button, [role="button"], input, select, textarea');

      if (reelCard && !clickable) {
        setCursorVariant('reel');
        setCursorText('تدوير ⚙️');
      } else if (videoCard) {
        setCursorVariant('video');
        setCursorText('تشغيل 🎬');
      } else if (imageCard) {
        setCursorVariant('image');
        setCursorText('تكبير 🔍');
      } else if (clickable) {
        setCursorVariant('pointer');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const mouseLeaveHandler = () => setIsVisible(false);
    const mouseEnterHandler = () => setIsVisible(true);

    window.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseleave', mouseLeaveHandler);
    document.addEventListener('mouseenter', mouseEnterHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseleave', mouseLeaveHandler);
      document.removeEventListener('mouseenter', mouseEnterHandler);
    };
  }, [isVisible, mouseX, mouseY, haloX, haloY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Trailing Spring Halo */}
      <motion.div
        style={{
          x: haloX,
          y: haloY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorVariant === 'pointer' ? 1.6 : cursorVariant === 'video' || cursorVariant === 'image' || cursorVariant === 'reel' ? 2.8 : 1,
          backgroundColor:
            cursorVariant === 'video'
              ? 'rgba(234, 88, 12, 0.9)'
              : cursorVariant === 'image'
              ? 'rgba(245, 158, 11, 0.9)'
              : cursorVariant === 'reel'
              ? 'rgba(249, 115, 22, 0.95)'
              : cursorVariant === 'pointer'
              ? 'rgba(234, 88, 12, 0.15)'
              : 'rgba(234, 88, 12, 0.25)',
          borderColor:
            cursorVariant === 'video' || cursorVariant === 'image' || cursorVariant === 'reel'
              ? 'rgba(255, 255, 255, 0.95)'
              : 'rgba(234, 88, 12, 0.6)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="w-10 h-10 rounded-full border border-orange-500/60 backdrop-blur-[1px] flex items-center justify-center shadow-lg"
      >
        {cursorText && (
          <span className="text-[9px] font-black text-white px-1 tracking-tight drop-shadow-md">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Tiny Sharp Center Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-2 h-2 rounded-full bg-orange-600 shadow-md shadow-orange-600/50"
      />
    </div>
  );
}
