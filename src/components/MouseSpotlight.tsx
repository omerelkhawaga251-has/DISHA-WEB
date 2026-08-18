'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function MouseSpotlight() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useSpring(-500, { stiffness: 120, damping: 25 });
  const mouseY = useSpring(-500, { stiffness: 120, damping: 25 });

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.06)_0%,rgba(245,158,11,0.02)_45%,transparent_70%)] z-30 blur-2xl"
    />
  );
}
