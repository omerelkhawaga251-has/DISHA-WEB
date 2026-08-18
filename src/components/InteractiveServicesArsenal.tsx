'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Film,
  Video,
  Sparkles,
  ImageIcon,
  Scissors,
  Cpu,
  Layers,
  Smartphone,
  Megaphone,
  Palette,
  Headphones,
  Wand2,
  TrendingUp,
  Flame,
  Activity,
  CheckCircle2,
  MessageCircle,
  ArrowUpRight,
  Zap,
} from 'lucide-react';
import { DISHA_INFO } from '@/data/portfolioData';

export default function InteractiveServicesArsenal() {
  const [activeToolIndex, setActiveToolIndex] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const softwareArsenal = [
    {
      name: 'DaVinci Resolve',
      tag: 'Color Grading & Mastery',
      arabicDesc: 'تلوين سينمائي احترافي وتصحيح متقدم لدرجات الألوان',
      color: 'from-amber-500 via-orange-500 to-rose-600',
      borderGlow: 'hover:border-amber-500/80 hover:shadow-amber-500/20',
      badge: '10-Bit Color',
      icon: Film,
      metric: 'Master Level',
    },
    {
      name: 'Adobe Premiere Pro',
      tag: 'Main Video Editing',
      arabicDesc: 'مونتاج متكامل، ضبط إيقاع القصة، وتقطيع دقيق للمشاهد',
      color: 'from-indigo-600 via-purple-600 to-pink-600',
      borderGlow: 'hover:border-indigo-500/80 hover:shadow-indigo-500/20',
      badge: 'Multi-Cam & Pacing',
      icon: Video,
      metric: 'Expert Editor',
    },
    {
      name: 'Adobe After Effects',
      tag: 'VFX & Motion Graphics',
      arabicDesc: 'مؤثرات بصرية متقدمة، أنيميشن، وتحريك احترافي للنصوص',
      color: 'from-violet-600 via-purple-600 to-indigo-700',
      borderGlow: 'hover:border-violet-500/80 hover:shadow-violet-500/20',
      badge: '3D VFX Engine',
      icon: Sparkles,
      metric: 'VFX Specialist',
    },
    {
      name: 'Adobe Photoshop',
      tag: 'Thumbnail & Poster Design',
      arabicDesc: 'تصميم صور مصغرة وبوسترات إعلانية ترفع نسبة النقر CTR',
      color: 'from-cyan-500 via-blue-600 to-indigo-600',
      borderGlow: 'hover:border-cyan-500/80 hover:shadow-cyan-500/20',
      badge: 'High CTR Design',
      icon: ImageIcon,
      metric: 'Visual Artist',
    },
    {
      name: 'CapCut Pro',
      tag: 'Viral Short-Form',
      arabicDesc: 'مونتاج سريع وسلس لفيديوهات شورتس، تيك توك، وريلز',
      color: 'from-rose-500 via-pink-600 to-purple-600',
      borderGlow: 'hover:border-rose-500/80 hover:shadow-rose-500/20',
      badge: 'Shorts & TikTok',
      icon: Scissors,
      metric: 'Viral Pacing',
    },
    {
      name: 'AI Creative Tools',
      tag: 'Workflow Acceleration',
      arabicDesc: 'أدوات الذكاء الاصطناعي لتسريع الإنتاج وتوليد الأفكار',
      color: 'from-emerald-500 via-teal-600 to-cyan-600',
      borderGlow: 'hover:border-emerald-500/80 hover:shadow-emerald-500/20',
      badge: 'Neural AI Tech',
      icon: Cpu,
      metric: 'AI Assistant',
    },
  ];

  const servicesList = [
    {
      id: 'youtube',
      arabicTitle: 'مونتاج فيديوهات اليوتيوب الطويلة',
      englishTag: 'YouTube Long-Form',
      description: 'تحرير شامل للمقاطع الطويلة مع بناء رتم تصاعدي يحافظ على تفاعل المشاهد (Retention Rate)، وتلوين وتصميم صوتي متقن.',
      icon: Video,
      accentColor: 'from-red-600 to-orange-600',
      tagBg: 'bg-red-950/60 text-red-300 border-red-500/30',
      metricBadge: 'Retention Booster',
      animationType: 'timeline',
    },
    {
      id: 'shorts',
      arabicTitle: 'المحتوى القصير السريع (Reels & Shorts)',
      englishTag: 'Viral Reels & Shorts',
      description: 'مونتاج ديناميكي سريع مع مؤثرات بصرية وتسميات توضيحية متحركة (Captions) تجذب المشاهدين من أول ثانية.',
      icon: Smartphone,
      accentColor: 'from-rose-600 to-pink-600',
      tagBg: 'bg-rose-950/60 text-rose-300 border-rose-500/30',
      metricBadge: 'Fast Pacing',
      animationType: 'shorts',
    },
    {
      id: 'thumbnails',
      arabicTitle: 'تصميم الصور المصغرة والبوسترات (High CTR)',
      englishTag: 'Thumbnails & Ads',
      description: 'تصميم بوسترات إعلانية وثمبنيلات تخطف الأنظار تزيد من معدل النقر (Click-Through Rate) وتبرز في الحملات والصفحات.',
      icon: ImageIcon,
      accentColor: 'from-amber-500 to-orange-600',
      tagBg: 'bg-amber-950/60 text-amber-300 border-amber-500/30',
      metricBadge: 'High CTR Rate',
      animationType: 'promo',
    },
    {
      id: 'grading',
      arabicTitle: 'التلوين السينمائي وتصحيح الألوان',
      englishTag: 'Color Grading',
      description: 'تصحيح ومعالجة ألوان احترافية تعطي الفيديو طابعاً سينمائياً مشبعاً وواقعياً بأعلى درجات الدقة.',
      icon: Palette,
      accentColor: 'from-purple-600 to-indigo-600',
      tagBg: 'bg-purple-950/60 text-purple-300 border-purple-500/30',
      metricBadge: 'Cinematic Look',
      animationType: 'color',
    },
    {
      id: 'sound',
      arabicTitle: 'تصميم وهندسة الصوت (Sound Design)',
      englishTag: 'Sound & Foley FX',
      description: 'إضافة مؤثرات صوتية تفاعلية، إزالة الضوضاء، وموازنة الموسيقى مع الصوت البشري لتجربة سمعية غامرة.',
      icon: Headphones,
      accentColor: 'from-blue-600 to-cyan-600',
      tagBg: 'bg-blue-950/60 text-blue-300 border-blue-500/30',
      metricBadge: 'Immersive Audio',
      animationType: 'audio',
    },
    {
      id: 'motion',
      arabicTitle: 'المؤثرات البصرية والموشن جرافيك',
      englishTag: 'VFX & Motion Graphics',
      description: 'تحريك الشعارات، النصوص، الرسوم التوضيحية، وإضافة لمسات بصرية متحركة ترفع من قيمة الإنتاج.',
      icon: Sparkles,
      accentColor: 'from-emerald-600 to-teal-600',
      tagBg: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30',
      metricBadge: 'Visual Polish',
      animationType: 'vfx',
    },
  ];

  return (
    <div className="space-y-16">
      
      {/* ──────────────────────────────────────────────────────────────
          1. SOFTWARE DOCK (DARK BLACK SPACE THEME)
          ────────────────────────────────────────────────────────────── */}
      <div className="bg-stone-950/90 backdrop-blur-2xl p-6 sm:p-10 rounded-[2.5rem] border border-stone-800 shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-orange-500/30">
              <Layers className="w-3.5 h-3.5" />
              <span>PRODUCTION DOCK</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              ترسانة البرامج وأدوات الإنتاج المتطورة
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              مزيج قوي من البرامج الرائدة لضمان أعلى جودة في كل مرحلة من مراحل العمل
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-stone-300 bg-stone-900 px-4 py-2 rounded-xl border border-stone-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>ALL APPS LICENSED & 4K READY</span>
          </div>
        </div>

        {/* 6 Dark Software Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {softwareArsenal.map((tool, idx) => {
            const Icon = tool.icon;
            const isHovered = activeToolIndex === idx;

            return (
              <motion.div
                key={tool.name}
                onMouseEnter={() => setActiveToolIndex(idx)}
                onMouseLeave={() => setActiveToolIndex(null)}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`group relative bg-stone-900/90 p-5 rounded-3xl border border-stone-800 ${tool.borderGlow} shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between`}
              >
                {/* Background Dynamic Color Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
                />

                <div>
                  {/* Icon */}
                  <div className="relative w-14 h-14 mx-auto rounded-2xl bg-stone-950 border border-stone-800 group-hover:border-orange-500/50 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${tool.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <Icon className="w-7 h-7 text-orange-400 group-hover:opacity-0 transition-opacity" />
                  </div>

                  <h4 className="font-black text-white text-xs sm:text-sm text-center group-hover:text-orange-400 transition">
                    {tool.name}
                  </h4>
                  <p className="text-[10px] text-stone-400 font-semibold text-center mt-0.5 line-clamp-1">
                    {tool.tag}
                  </p>
                </div>

                {/* Badge */}
                <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-center">
                  <span className="text-[10px] font-mono font-bold text-stone-300 group-hover:text-white bg-stone-950 px-2 py-0.5 rounded-md border border-stone-800 group-hover:border-orange-500/50 transition">
                    {tool.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          2. HIGH-CONTRAST DARK SERVICES BENTO GRID (قوالب سوداء وكتابة واضحة)
          ────────────────────────────────────────────────────────────── */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl sm:text-3xl font-black text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span>الخدمات الإبداعية والحلول البصرية (Creative Services)</span>
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm mt-1 font-arabic">
              حلول مونتاج وتصميم شاملة تضمن تصاعد المشاهدات وتفاعل الجمهور
            </p>
          </div>
        </div>

        {/* 6 Dark Black Bento Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredService === idx;

            const whatsappLink = `https://wa.me/201016345690?text=${encodeURIComponent(
              `مرحباً مصطفى، أود الاستفسار والاتفاق على خدمة: "${service.arabicTitle}"`
            )}`;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredService(idx)}
                onMouseLeave={() => setHoveredService(null)}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="group relative bg-stone-950/90 rounded-[2rem] p-7 sm:p-8 border border-stone-800 hover:border-orange-500/70 shadow-xl hover:shadow-[0_0_35px_rgba(249,115,22,0.2)] transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Background Radiant Aura on Hover */}
                <div
                  className={`absolute top-0 right-0 w-60 h-60 bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-15 rounded-full blur-3xl pointer-events-none transition-opacity duration-500`}
                />

                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accentColor} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold border ${service.tagBg}`}
                      >
                        {service.englishTag}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-orange-400 mt-1">
                        {service.metricBadge}
                      </span>
                    </div>
                  </div>

                  {/* Clean High-Contrast Arabic Title */}
                  <h4 className="text-xl font-black text-white group-hover:text-orange-400 transition leading-snug mb-3 text-right">
                    {service.arabicTitle}
                  </h4>

                  {/* High-Contrast Arabic Description */}
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed text-right mb-5 font-arabic" dir="rtl">
                    {service.description}
                  </p>

                  {/* Dark Motion Animation Box */}
                  <div className="mb-5 p-3.5 rounded-2xl bg-stone-900 border border-stone-800 group-hover:border-orange-500/40 transition-colors">
                    {/* 1. YouTube Timeline Animation */}
                    {service.animationType === 'timeline' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                          <span>TIMELINE PACING</span>
                          <span className="text-orange-400 font-bold">00:14:32:08</span>
                        </div>
                        <div className="h-2 w-full bg-stone-800 rounded-full overflow-hidden relative">
                          <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                            className="h-full w-1/3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-sm"
                          />
                        </div>
                      </div>
                    )}

                    {/* 2. Shorts Viral Animation */}
                    {service.animationType === 'shorts' && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                          <span className="text-[11px] font-bold text-stone-200">Dynamic Captions Active</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30">
                          9:16 REEL
                        </span>
                      </div>
                    )}

                    {/* 3. Promo Conversion Rocket */}
                    {service.animationType === 'promo' && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                          <TrendingUp className="w-4 h-4 text-amber-400 animate-bounce" />
                          <span>زيادة معدل النقر والتحويل CTR</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30">
                          HIGH IMPACT
                        </span>
                      </div>
                    )}

                    {/* 4. Color Wave Animation */}
                    {service.animationType === 'color' && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
                          <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse delay-75" />
                          <span className="w-3 h-3 rounded-full bg-teal-500 animate-pulse delay-150" />
                          <span className="text-[11px] font-mono font-bold text-stone-300 mr-1">3D LUTs Applied</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-500/30">
                          10-BIT LOG
                        </span>
                      </div>
                    )}

                    {/* 5. Sound Wave Equalizer */}
                    {service.animationType === 'audio' && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 h-5">
                          {[40, 80, 50, 100, 70, 30, 90, 60, 100, 45, 85].map((h, i) => (
                            <motion.div
                              key={i}
                              animate={{ height: ['25%', `${h}%`, '25%'] }}
                              transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.08 }}
                              className="w-1 bg-cyan-400 rounded-full"
                            />
                          ))}
                        </div>
                        <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                          -14 LUFS
                        </span>
                      </div>
                    )}

                    {/* 6. VFX Keyframe Node */}
                    {service.animationType === 'vfx' && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
                          <span className="text-[11px] font-bold text-stone-200">After Effects Composition</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                          60 FPS VFX
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom WhatsApp CTA Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-stone-900 hover:bg-orange-600 text-stone-300 hover:text-white border border-stone-800 hover:border-orange-500 font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 group/btn shadow-inner"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/btn:text-white transition-colors" />
                  <span>طلب هذه الخدمة على WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
