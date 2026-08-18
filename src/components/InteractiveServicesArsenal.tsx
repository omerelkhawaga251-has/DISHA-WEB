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
      tag: 'Thumbnail Design (CTR)',
      arabicDesc: 'تصميم صور مصغرة ذات جاذبية قصوى ترفع نسبة النقر',
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
      accentColor: 'from-orange-500 to-amber-500',
      tagBg: 'bg-orange-50 text-orange-700 border-orange-200',
      animationType: 'timeline',
      metricBadge: '⚡ +85% Retention Focus',
      features: ['تقطيع ذكي مانع للملل', 'مؤثرات بصرية ورسومية', 'ماسترينج صوتي سينمائي'],
    },
    {
      id: 'shorts',
      arabicTitle: 'المحتوى القصير السريع والريلز',
      englishTag: 'Reels & Shorts & TikTok',
      description: 'مونتاج ديناميكي سريع مع مؤثرات بصرية وتسميات توضيحية متحركة (Dynamic Captions) تخطف انتباه المشاهد من أول ثانية.',
      icon: Smartphone,
      accentColor: 'from-rose-500 to-pink-600',
      tagBg: 'bg-rose-50 text-rose-700 border-rose-200',
      animationType: 'shorts',
      metricBadge: '🔥 Viral 9:16 Format',
      features: ['كابشنز متحركة جذابة', 'انتقالات خاطفة وسلسة', 'إيقاع مواكب للتريند'],
    },
    {
      id: 'promo',
      arabicTitle: 'الفيديوهات الإعلانية والترويجية',
      englishTag: 'Promo & Commercial Ads',
      description: 'إنتاج إعلانات تجارية جذابة للشركات والمؤثرين بجودة سينمائية تسهم في رفع المبيعات وتعزيز هوية البراند.',
      icon: Megaphone,
      accentColor: 'from-blue-600 to-indigo-600',
      tagBg: 'bg-blue-50 text-blue-700 border-blue-200',
      animationType: 'promo',
      metricBadge: '📈 High Conversion Ads',
      features: ['إبراز نقاط قوة المنتج', 'دعوة لاتخاذ إجراء CTA قوية', 'ألوان وإضاءة درامية'],
    },
    {
      id: 'thumbnails',
      arabicTitle: 'تصميم الصور المصغرة عالية النقر',
      englishTag: 'High CTR Thumbnails',
      description: 'تصميم ثمبنيلات ملفتة للانتباه بألوان وإضاءات احترافية ترفع نسبة النقر إلى الظهور (Click-Through Rate) بين آلاف الفيديوهات.',
      icon: Palette,
      accentColor: 'from-amber-500 to-orange-600',
      tagBg: 'bg-amber-50 text-amber-700 border-amber-200',
      animationType: 'thumbnail',
      metricBadge: '🎯 +15% CTR Boost',
      features: ['إضاءات ثلاثية النقاط 3-Point', 'نصوص عريضة سهلة القراءة', 'عزل لوني وجاذبية قصوى'],
    },
    {
      id: 'sound',
      arabicTitle: 'تصميم وهندسة الصوت والمؤثرات',
      englishTag: 'Sound Design & SFX',
      description: 'إضافة المؤثرات الصوتية الاحترافية والموسيقى التصويرية المتناغمة مع حركة الفيديو لإعطاء تجربة سمعية محيطية غامرة.',
      icon: Headphones,
      accentColor: 'from-purple-600 to-violet-600',
      tagBg: 'bg-purple-50 text-purple-700 border-purple-200',
      animationType: 'sound',
      metricBadge: '🎧 48kHz Mastered Audio',
      features: ['تنقية وتحسين جودة الصوت', 'مؤثرات Foley & Whoosh', 'موسيقى سينمائية مرخصة'],
    },
    {
      id: 'grading',
      arabicTitle: 'التلوين السينمائي وتصحيح الألوان',
      englishTag: 'Cinematic Color Grading',
      description: 'معالجة وتصحيح ألوان الفيديو وإعطائه طابعاً سينمائياً مميزاً يعكس المزاج الدرامي والهوية البصرية للمحتوى.',
      icon: Wand2,
      accentColor: 'from-emerald-500 to-teal-600',
      tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      animationType: 'grading',
      metricBadge: '🎨 Rec.709 & DCI-P3 Master',
      features: ['تحويل Log/RAW إلى سينمائي', 'تنسيق ألوان البشرة Skin Tones', 'مظهر Teal & Orange المميز'],
    },
  ];

  return (
    <div className="w-full">
      {/* ──────────────────────────────────────────────────────────────
          1. SOFTWARE ARSENAL CAROUSEL DOCK (حيوية وموشن عالي)
          ────────────────────────────────────────────────────────────── */}
      <div className="mb-16">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-600" />
              <span>ترسانة البرامج والتقنيات (Software Arsenal)</span>
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
              أدوات المونتاج العالمية التي أعتمد عليها لتحقيق أعلى جودة بصرية وصوتية
            </p>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-mono font-bold text-stone-600">
            6 PRO ENGINES
          </span>
        </div>

        {/* 6 Software Interactive Motion Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {softwareArsenal.map((tool, idx) => {
            const Icon = tool.icon;
            const isHovered = activeToolIndex === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setActiveToolIndex(idx)}
                onMouseLeave={() => setActiveToolIndex(null)}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`group relative bg-white p-5 rounded-3xl border-2 border-stone-200/80 ${tool.borderGlow} shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between`}
              >
                {/* Background Dynamic Color Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div>
                  {/* Icon with Rotating Halo */}
                  <div className="relative w-14 h-14 mx-auto rounded-2xl bg-stone-50 border border-stone-200 group-hover:border-transparent flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${tool.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <Icon className="w-7 h-7 text-stone-800 group-hover:opacity-0 transition-opacity" />
                  </div>

                  <h4 className="font-black text-stone-900 text-xs sm:text-sm text-center group-hover:text-orange-600 transition">
                    {tool.name}
                  </h4>
                  <p className="text-[10px] text-stone-400 font-semibold text-center mt-0.5 line-clamp-1">
                    {tool.tag}
                  </p>
                </div>

                {/* Animated Badge & Metric */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-center">
                  <span className="text-[10px] font-mono font-bold text-stone-600 group-hover:text-stone-900 bg-stone-50 group-hover:bg-orange-50 px-2 py-0.5 rounded-md border border-stone-200 group-hover:border-orange-200 transition">
                    {tool.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          2. HIGH-VIBRANCY ANIMATED SERVICES BENTO GRID (موشن وإتقان)
          ────────────────────────────────────────────────────────────── */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-orange-600" />
              <span>الخدمات الإبداعية السينمائية (Creative Services)</span>
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
              حلول مونتاج شاملة تضمن تصاعد المشاهدات وتفاعل الجمهور
            </p>
          </div>
        </div>

        {/* 6 Lively Services Cards with Animated Previews */}
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
                className="group relative bg-white rounded-[2rem] p-7 sm:p-8 border-2 border-stone-200/90 hover:border-orange-500/70 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Background Radiant Aura on Hover */}
                <div
                  className={`absolute top-0 right-0 w-60 h-60 bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-10 rounded-full blur-3xl pointer-events-none transition-opacity duration-500`}
                />

                <div>
                  {/* Top Row: Icon + English Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accentColor} text-white flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold border ${service.tagBg}`}
                      >
                        {service.englishTag}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-orange-600 mt-1">
                        {service.metricBadge}
                      </span>
                    </div>
                  </div>

                  {/* Clean Arabic Title (Never breaks parentheses) */}
                  <h4 className="text-xl font-black text-stone-900 group-hover:text-orange-600 transition leading-snug mb-3 text-right">
                    {service.arabicTitle}
                  </h4>

                  {/* Arabic Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-right mb-5 font-arabic">
                    {service.description}
                  </p>

                  {/* Interactive Dynamic Motion Box per service */}
                  <div className="mb-5 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 group-hover:bg-orange-50/40 group-hover:border-orange-200/80 transition-colors">
                    {/* 1. YouTube Timeline Animation */}
                    {service.animationType === 'timeline' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono text-stone-500">
                          <span>TIMELINE PACING</span>
                          <span className="text-orange-600 font-bold">00:14:32:08</span>
                        </div>
                        <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden relative">
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
                          <span className="text-[11px] font-bold text-stone-800">Dynamic Captions Active</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-700">
                          9:16 REEL
                        </span>
                      </div>
                    )}

                    {/* 3. Promo Conversion Rocket */}
                    {service.animationType === 'promo' && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900">
                          <TrendingUp className="w-4 h-4 text-blue-600 animate-bounce" />
                          <span>زيادة معدل التحويل والمبيعات</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                          ROI +40%
                        </span>
                      </div>
                    )}

                    {/* 4. Thumbnail CTR Spotlight */}
                    {service.animationType === 'thumbnail' && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                          <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
                          <span>إضاءات وألوان مشعة للأنظار</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                          CTR 14.8%
                        </span>
                      </div>
                    )}

                    {/* 5. Sound Design Wave Equalizer */}
                    {service.animationType === 'sound' && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs font-bold text-purple-900">
                          <Activity className="w-4 h-4 text-purple-600 animate-pulse" />
                          <span>مؤثرات سمعية 48kHz</span>
                        </div>
                        {/* 6 animated sound bars */}
                        <div className="flex items-end gap-1 h-4">
                          {[40, 80, 50, 100, 70, 90].map((h, i) => (
                            <motion.span
                              key={i}
                              animate={{ height: ['20%', `${h}%`, '30%'] }}
                              transition={{ repeat: Infinity, duration: 0.8 + i * 0.1, ease: 'easeInOut' }}
                              className="w-1 bg-purple-600 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 6. Color Grading Spectrum */}
                    {service.animationType === 'grading' && (
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] font-mono text-stone-500">
                          <span>CINEMA COLOR ENGINE</span>
                          <span className="text-emerald-600 font-bold">DCI-P3 10-BIT</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gradient-to-r from-blue-500 via-amber-400 to-rose-500 shadow-inner" />
                      </div>
                    )}
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct WhatsApp CTA Button */}
                <div className="pt-4 border-t border-stone-100">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-orange-600 text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md group-hover:shadow-orange-600/30"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>طلب هذه الخدمة على WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
