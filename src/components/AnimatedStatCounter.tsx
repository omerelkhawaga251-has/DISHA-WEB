'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedStatCounterProps {
  targetValue: string;
  label: string;
  labelEn?: string;
  className?: string;
}

export default function AnimatedStatCounter({
  targetValue,
  label,
  labelEn,
  className = '',
}: AnimatedStatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayCount, setDisplayCount] = useState(0);

  // Extract number and prefix/suffix (e.g. "+150" -> prefix "+", num 150)
  const isPercent = targetValue.includes('%');
  const isPlus = targetValue.startsWith('+');
  const isM = targetValue.includes('M');

  let numericTarget = 0;
  if (isM) {
    numericTarget = 2;
  } else if (isPercent) {
    numericTarget = 100;
  } else if (isPlus) {
    numericTarget = parseInt(targetValue.replace(/\D/g, ''), 10) || 150;
  } else {
    numericTarget = parseInt(targetValue.replace(/\D/g, ''), 10) || 0;
  }

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = numericTarget / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setDisplayCount(numericTarget);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  const formatDisplay = () => {
    if (!isInView) return '0';
    if (isM) return `+${displayCount}M`;
    if (isPercent) return `${displayCount}%`;
    if (isPlus) return `+${displayCount}`;
    return `${displayCount}`;
  };

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-2xl sm:text-3xl font-black text-orange-600 font-display tracking-tight">
        {formatDisplay()}
      </div>
      <div className="text-[11px] font-bold text-stone-600 mt-0.5">{label}</div>
      {labelEn && (
        <div className="text-[9px] font-mono text-stone-400">{labelEn}</div>
      )}
    </div>
  );
}
