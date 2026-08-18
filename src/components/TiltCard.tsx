'use client';

import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareEffect?: boolean;
  scaleOnHover?: number;
  onClick?: () => void;
  cursorType?: 'video' | 'image' | 'pointer' | 'reel';
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 10,
  glareEffect = true,
  scaleOnHover = 1.025,
  onClick,
  cursorType,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const springConfig = { damping: 22, stiffness: 280, mass: 0.25 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2; // -1 to 1
    const yPct = (mouseY / height - 0.5) * 2; // -1 to 1

    rotateX.set(-yPct * maxTilt);
    rotateY.set(xPct * maxTilt);

    if (glareEffect) {
      setGlarePosition({
        x: (mouseX / width) * 100,
        y: (mouseY / height) * 100,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor={cursorType}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: scaleOnHover }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`relative select-none ${className}`}
    >
      <div style={{ transformStyle: 'preserve-3d' }} className="w-full h-full">
        {children}
      </div>

      {/* Dynamic Specular Glare Reflection */}
      {glareEffect && isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden transition-opacity duration-300 opacity-50 z-30"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(249,115,22,0.25) 0%, rgba(255,255,255,0.15) 30%, transparent 65%)`,
          }}
        />
      )}
    </motion.div>
  );
}
