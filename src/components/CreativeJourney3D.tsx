'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Scissors,
  Sparkles,
  Wand2,
  TrendingUp,
  Film,
  Play,
  Layers,
  Music,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function CreativeJourney3D() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'الرؤية والسيناريو وبناء الفكرة',
      titleEn: 'Vision, Script & Storyboarding',
      icon: Compass,
      color: 'from-blue-600 to-indigo-600',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      description:
        'تحليل الهدف من الفيديو، فهم الجمهور المستهدف، وتحديد نقاط الجذب (Hooks) في أول 3 إلى 5 ثوانٍ لضمان أعلى نسبة استبقاء للمشاهد (Viewer Retention).',
      tools: ['Storyboarding', 'Hook Design', 'Concept Outline'],
      highlight: 'خطة استراتيجية تمنع الملل وتزيد التفاعل من البداية',
    },
    {
      id: 2,
      number: '02',
      title: 'التقطيع السينمائي وبناء الرتم',
      titleEn: 'Cinematic Cuts & Dynamic Pacing',
      icon: Scissors,
      color: 'from-indigo-600 to-violet-600',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      description:
        'غربلة اللقطات وحذف الحشو والوقفات الزائدة (Jump Cuts / J-Cuts / L-Cuts)، وبناء إيقاع تصاعدي متناغم مع سياق الكلام والمشهد.',
      tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Multi-cam Sync'],
      highlight: 'رتم سريع وسلس يمنع المشاهد من تخطي الفيديو',
    },
    {
      id: 3,
      number: '03',
      title: 'المؤثرات البصرية والأنيميشن',
      titleEn: 'VFX, Motion Graphics & Captions',
      icon: Sparkles,
      color: 'from-violet-600 to-pink-600',
      badgeColor: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      description:
        'إضافة الرسوم التوضيحية المتحركة، والخرائط التفاعلية، والمؤثرات البصرية (Overlays / Glitches / Zooms)، ونصوص الكابشنز الحركية ثلاثية الأبعاد.',
      tools: ['Adobe After Effects', 'Dynamic Captions', '3D Motion'],
      highlight: 'عناصر بصرية ممتعة تحول المعلومات الجافة لمتعة بصرية',
    },
    {
      id: 4,
      number: '04',
      title: 'تدريج الألوان وهندسة الصوت',
      titleEn: 'Cinematic Color Grading & Sound Design',
      icon: Wand2,
      color: 'from-pink-600 to-amber-600',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      description:
        'تنقية الصوت وإزالة الضوضاء، ومزج الموسيقى التصويرية مع مؤثرات صوتية واقعية (Whooshes, Risers, Impacts, Pops)، وتعديل الألوان لإعطاء الطابع السينمائي.',
      tools: ['DaVinci Resolve Studio', 'Audio Mastering', 'Color LUTs'],
      highlight: 'تجربة سمعية وبصرية غامرة تعادل جودة الإنتاج التلفزيوني',
    },
    {
      id: 5,
      number: '05',
      title: 'تصميم المصغرة والانتشار الفيروسي',
      titleEn: 'High-CTR Thumbnails & Final Delivery',
      icon: TrendingUp,
      color: 'from-amber-600 to-emerald-600',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      description:
        'تصميم صورة مصغرة (Thumbnail) استثنائية ذات تباين عالٍ تجذب نقرات الجمهور (High CTR)، مع تصدير الفيديو بأعلى جودة (4K / 1080p 60fps) مهيأ لليوتيوب ومواقع التواصل.',
      tools: ['Adobe Photoshop', 'CTR Optimization', '4K Master Export'],
      highlight: 'ضمان تصدر الفيديو وتحقيق أعلى أرقام مشاهدات ممكنة',
    },
  ];

  return (
    <section id="journey" className="py-20 md:py-32 border-t border-slate-800/80 bg-slate-950/80 relative overflow-hidden">
      {/* 3D Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-black mb-4 shadow-lg">
            <Film className="w-4 h-4 text-indigo-400" />
            <span>رحلة الإنتاج ثلاثية الأبعاد • 3D Creative Pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            كيف نصنع فيديو استثنائي يكتسح المشاهدات؟
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            استكشف المراحل الخمس الاحترافية التي يمر بها كل مشروع لضمان أعلى معايير الجودة والتأثير البصري.
          </p>
        </div>

        {/* Interactive 3D Step Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`p-4 rounded-2xl border text-right transition-all duration-300 transform flex flex-col justify-between gap-3 ${
                  isActive
                    ? 'bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-600/20 scale-105'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-black ${isActive ? 'text-indigo-400' : 'text-slate-500'}`}>
                    {step.number}
                  </span>
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-bold text-white line-clamp-1">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main 3D Active Stage Display Card */}
        <TiltCard maxTilt={8} scaleOnHover={1.01} className="w-full">
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-700/80 p-6 sm:p-10 shadow-2xl overflow-hidden">
            {/* Ambient Background Gradient for the active step */}
            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${steps[activeStep].color} opacity-15 rounded-full blur-3xl pointer-events-none transition-all duration-700`} />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-8 flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${steps[activeStep].badgeColor}`}>
                    المرحلة {steps[activeStep].number} من 05
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {steps[activeStep].titleEn}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {steps[activeStep].title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {steps[activeStep].description}
                </p>

                {/* Highlight Callout Box */}
                <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-indigo-300">القيمة المضافة في هذه المرحلة:</div>
                    <div className="text-xs sm:text-sm text-slate-300 mt-0.5 font-medium">
                      {steps[activeStep].highlight}
                    </div>
                  </div>
                </div>

                {/* Tools Tags */}
                <div className="flex items-center gap-2 flex-wrap pt-2">
                  <span className="text-xs text-slate-400 font-semibold ml-2">الأدوات المستخدمة:</span>
                  {steps[activeStep].tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl text-xs font-bold bg-slate-800 text-slate-200 border border-slate-700 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right 3D Visual Box */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-tr from-slate-950 to-slate-900 border-2 border-indigo-500/40 shadow-2xl flex flex-col items-center justify-center p-6 text-center group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${steps[activeStep].color} opacity-20 group-hover:opacity-40 transition-opacity`} />

                  {React.createElement(steps[activeStep].icon, {
                    className: 'w-16 h-16 text-indigo-400 mb-3 transform group-hover:scale-110 transition-transform duration-500',
                  })}

                  <span className="text-3xl font-black text-white font-mono">
                    {steps[activeStep].number}
                  </span>
                  <span className="text-[11px] text-slate-400 font-bold mt-1">
                    Creative Stage
                  </span>
                </div>

                {/* Step navigation buttons */}
                <div className="flex items-center gap-3 mt-6">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white transition"
                  >
                    ← المرحلة السابقة
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition shadow-lg shadow-indigo-600/30"
                  >
                    المرحلة التالية →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
