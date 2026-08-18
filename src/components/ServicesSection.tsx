'use client';

import React from 'react';
import { SERVICES } from '@/data/portfolioData';
import {
  Sparkles,
  Youtube,
  Smartphone,
  Megaphone,
  Palette,
  Headphones,
  Wand2,
} from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function ServicesSection() {
  const getServiceIcon = (title: string) => {
    if (title.includes('اليوتيوب')) return <Youtube className="w-7 h-7 text-red-500" />;
    if (title.includes('القصير')) return <Smartphone className="w-7 h-7 text-pink-500" />;
    if (title.includes('إعلانية')) return <Megaphone className="w-7 h-7 text-amber-400" />;
    if (title.includes('الصور المصغرة')) return <Palette className="w-7 h-7 text-indigo-400" />;
    if (title.includes('الصوت')) return <Headphones className="w-7 h-7 text-emerald-400" />;
    return <Wand2 className="w-7 h-7 text-violet-400" />;
  };

  return (
    <section id="services" className="py-20 md:py-28 border-t border-slate-800/80 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ما أقدمه لك • Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            خدمات إنتاج ومونتاج متكاملة
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            حلول بصرية شاملة ترتقي بمشروعك أو قناتك وتضمن وصولها للجمهور المستهدف بأعلى تأثير.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <TiltCard key={idx} maxTilt={12} scaleOnHover={1.03}>
              <div className="group relative bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-7 transition-all shadow-xl flex flex-col justify-between h-full backdrop-blur-md">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-indigo-500/40 transition">
                    {getServiceIcon(service.title)}
                  </div>

                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-indigo-400 transition">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-indigo-400">
                  <span>جودة 4K / 1080p سينمائية</span>
                  <span className="group-hover:translate-x-1 transition-transform">اطلب الخدمة ←</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
