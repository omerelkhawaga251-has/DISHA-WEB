'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setShowTopBtn(latest > 350);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Warm Orange Gradient Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600 origin-left z-50 shadow-md shadow-orange-500/30"
        style={{ scaleX }}
      />

      {/* Floating Back To Top Button */}
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-2xl bg-orange-600/90 hover:bg-orange-500 text-white shadow-xl shadow-orange-600/40 border border-orange-400/40 backdrop-blur-xl flex items-center justify-center transition cursor-pointer"
          title="العودة للأعلى"
          aria-label="العودة للأعلى"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </>
  );
}
