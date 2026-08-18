'use client';

import React from 'react';
import { DISHA_INFO, SOFTWARE_TOOLS } from '@/data/portfolioData';
import {
  User,
  GraduationCap,
  Sparkles,
  Layers,
  Film,
  Cpu,
  Scissors,
  Image as ImageIcon,
  Video,
  CheckCircle,
} from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function AboutSection() {
  const getToolIcon = (name: string) => {
    switch (name) {
      case 'DaVinci Resolve':
        return <Film className="w-6 h-6 text-amber-400" />;
      case 'Adobe Premiere Pro':
        return <Video className="w-6 h-6 text-indigo-400" />;
      case 'Adobe After Effects':
        return <Sparkles className="w-6 h-6 text-violet-400" />;
      case 'Adobe Photoshop':
        return <ImageIcon className="w-6 h-6 text-cyan-400" />;
      case 'CapCut Pro':
        return <Scissors className="w-6 h-6 text-rose-400" />;
      default:
        return <Cpu className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>نبذة عني • About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            شغف بصري وإتقان تقني في صناعة الفيديو
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            أجمع بين الإحساس الفني وسرعة التنفيذ لإنتاج محتوى يتصدر ويثبت في ذهن المشاهد.
          </p>
        </div>

        {/* 2 Column Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Story Card */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={6} scaleOnHover={1.01} className="h-full">
              <div className="h-full bg-slate-900/60 border border-slate-800/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">التعليم والبداية</h3>
                      <p className="text-xs text-indigo-300 font-semibold">{DISHA_INFO.arabicUniversity}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    أنا مصطفى المصري (21 عاماً)، أدرس في جامعة برج العرب التكنولوجية. بدأت رحلتي مع عالم الفيديو بدافع الشغف بسرد القصص البصرية، وسرعان ما تحول هذا الشغف إلى احتراف وتخصص في إنتاج وتعديل المحتوى لقنوات اليوتيوب والشركات وصناع المحتوى.
                  </p>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <span>إدارة دورة الفيديو كاملة (من الـ Footage الخام وحتى النشر).</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <span>تركيز عالٍ على بناء رتم مشوق (Pacing & Retention).</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <span>تصميم المؤثرات الصوتية والموسيقى التصويرية المخصصة.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>الإقامة: مصر 🇪🇬</span>
                  <span className="text-indigo-400 font-bold">جاهز للعمل الحر وعن بُعد (Remote Freelance)</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* AI Workflow & Philosophy Card */}
          <div className="lg:col-span-5">
            <TiltCard maxTilt={6} scaleOnHover={1.01} className="h-full">
              <div className="h-full bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-purple-950/40 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">الذكاء الاصطناعي والإبداع</h3>
                      <p className="text-xs text-purple-300 font-semibold">AI as a Creative Assistant</p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {DISHA_INFO.aiPhilosophy}
                  </p>
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-black/50 border border-purple-500/30">
                  <div className="text-xs font-bold text-purple-300 mb-1">🎯 الهدف دائماً:</div>
                  <div className="text-xs text-slate-300 leading-relaxed font-medium">
                    تقديم فيديو ممتع بصرياً، يرفع من تفاعل المتابعين ويزيد من وقت المشاهدة (Watch Time) وأرقام القناة.
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Software & Tools 3D Grid */}
        <div>
          <div className="flex items-center gap-2.5 mb-8">
            <Layers className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl sm:text-2xl font-black text-white">البرامج والأدوات التي أتقنها (Software & Tools)</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOFTWARE_TOOLS.map((tool, idx) => (
              <TiltCard key={idx} maxTilt={10} scaleOnHover={1.03}>
                <div className="group bg-slate-900/60 hover:bg-slate-800/90 border border-slate-800/90 hover:border-indigo-500/50 rounded-2xl p-6 transition-all shadow-xl backdrop-blur-md h-full flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getToolIcon(tool.name)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base group-hover:text-indigo-400 transition">
                        {tool.name}
                      </h4>
                      <span className="text-[11px] text-slate-400 font-semibold">{tool.category}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    {tool.description}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
