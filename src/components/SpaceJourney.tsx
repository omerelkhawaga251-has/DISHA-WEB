'use client';

import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { DISHA_INFO, SOFTWARE_TOOLS, SERVICES, YOUTUBE_CHANNELS, PORTFOLIO_PROJECTS } from '@/data/portfolioData';
import {
  Play, MessageCircle, Sparkles, Youtube, Film, Award, CheckCircle2,
  Wand2, Flame, Layers, Cpu, Scissors, Video, Image as ImageIcon,
  User, GraduationCap, Compass, Headphones, Megaphone, Palette,
  Smartphone, Send, Instagram, Linkedin, ExternalLink, Maximize2,
  TrendingUp, Zap, Music, ArrowDown, SlidersHorizontal, Eye,
} from 'lucide-react';
import ImageLightboxModal from '@/components/ImageLightboxModal';
import VideoModal from '@/components/VideoModal';
import ColorGradingSlider from '@/components/ColorGradingSlider';
import { ProjectItem } from '@/data/portfolioData';

/* ──────────────────────────────────────────────────────────────
   SCENE WRAPPER — 3D Perspective + Depth Camera Travel
   ────────────────────────────────────────────────────────────── */
function Scene({
  children,
  scrollProgress,
  enterAt,
  exitAt,
}: {
  children: React.ReactNode;
  scrollProgress: any;
  enterAt: number;
  exitAt: number;
}) {
  const fadeInEnd = enterAt + (exitAt - enterAt) * 0.25;
  const fadeOutStart = exitAt - (exitAt - enterAt) * 0.25;

  const opacity = useTransform(
    scrollProgress,
    [enterAt, fadeInEnd, fadeOutStart, exitAt],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollProgress,
    [enterAt, fadeInEnd, fadeOutStart, exitAt],
    [0.75, 1, 1, 0.75]
  );

  const y = useTransform(
    scrollProgress,
    [enterAt, fadeInEnd, fadeOutStart, exitAt],
    [90, 0, 0, -90]
  );

  const rotateX = useTransform(
    scrollProgress,
    [enterAt, fadeInEnd, fadeOutStart, exitAt],
    [14, 0, 0, -14]
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        rotateX,
        transformPerspective: 1400,
      }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   SPACE JOURNEY COMPONENT — UI/UX PRO MAX EDITION
   ────────────────────────────────────────────────────────────── */
export default function SpaceJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { damping: 28, stiffness: 90, mass: 0.4 });

  // Modal states for portfolio
  const [activeLightboxProject, setActiveLightboxProject] = React.useState<ProjectItem | null>(null);
  const [activeVideoProject, setActiveVideoProject] = React.useState<ProjectItem | null>(null);
  const [portfolioFilter, setPortfolioFilter] = React.useState('all');

  const filteredProjects = useMemo(() => {
    if (portfolioFilter === 'all') return PORTFOLIO_PROJECTS;
    if (portfolioFilter === 'videos') return PORTFOLIO_PROJECTS.filter(p => !!p.videoUrl);
    return PORTFOLIO_PROJECTS.filter(p => p.category === portfolioFilter);
  }, [portfolioFilter]);

  const handleProjectClick = (project: ProjectItem) => {
    if (project.videoUrl) setActiveVideoProject(project);
    else setActiveLightboxProject(project);
  };

  const getToolIcon = (name: string, size = 'w-6 h-6') => {
    switch (name) {
      case 'DaVinci Resolve': return <Film className={`${size} text-amber-400`} />;
      case 'Adobe Premiere Pro': return <Video className={`${size} text-indigo-400`} />;
      case 'Adobe After Effects': return <Sparkles className={`${size} text-violet-400`} />;
      case 'Adobe Photoshop': return <ImageIcon className={`${size} text-cyan-400`} />;
      case 'CapCut Pro': return <Scissors className={`${size} text-rose-400`} />;
      default: return <Cpu className={`${size} text-emerald-400`} />;
    }
  };

  return (
    <>
      <div ref={containerRef} className="relative" style={{ height: '850vh' }}>
        <div className="fixed inset-0 z-10 overflow-hidden" style={{ perspective: '1400px' }}>

          {/* ═══════════════════════════════════════════════════════════
              STATION 01 — THE CREATOR & AWAKENING (0% → 14%)
              ═══════════════════════════════════════════════════════════ */}
          <Scene scrollProgress={smoothProgress} enterAt={0} exitAt={0.14}>
            <div className="text-center flex flex-col items-center gap-6 sm:gap-8">
              
              {/* 3D Holographic Orbit Ring & Creator Portrait */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 mx-auto flex items-center justify-center">
                {/* Rotating Cyber Ring 1 */}
                <div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-[spin_12s_linear_infinite] border-dashed" />
                {/* Rotating Cyber Ring 2 */}
                <div className="absolute -inset-4 rounded-full border border-purple-500/20 animate-[spin_18s_linear_infinite_reverse]" />
                
                {/* Glow Core */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-70 animate-pulse" />
                
                {/* Photo Frame */}
                <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-indigo-400/80 shadow-[0_0_40px_rgba(99,102,241,0.5)]">
                  <img
                    src={DISHA_INFO.photo}
                    alt={DISHA_INFO.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-2 bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-xl flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>AVAILABLE FOR PROJECTS</span>
                </div>
              </div>

              {/* Title & Headline */}
              <div className="flex flex-col items-center gap-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-indigo-500/40 text-indigo-300 text-xs font-mono font-black backdrop-blur-xl shadow-2xl">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>STATION 01 // THE CREATOR</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight tracking-tight mt-1">
                  {DISHA_INFO.name}
                </h1>

                <div className="inline-block bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent text-lg sm:text-2xl font-black">
                  {DISHA_INFO.title}
                </div>

                <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mt-1">
                  {DISHA_INFO.bio}
                </p>
              </div>

              {/* High-Contrast Interactive Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl">
                {DISHA_INFO.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-slate-900/80 border border-slate-800/90 hover:border-indigo-500/50 rounded-2xl p-4 text-center backdrop-blur-xl shadow-xl transition hover:scale-105"
                  >
                    <div className="text-2xl sm:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-300 font-bold mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mt-2 animate-bounce">
                <ArrowDown className="w-4 h-4" />
                <span>مرر لأسفل لدخول المحطة التالية في الفضاء</span>
              </div>
            </div>
          </Scene>

          {/* ═══════════════════════════════════════════════════════════
              STATION 02 — THE MINDSET & COLOR GRADING (14% → 28%)
              ═══════════════════════════════════════════════════════════ */}
          <Scene scrollProgress={smoothProgress} enterAt={0.14} exitAt={0.28}>
            <div className="flex flex-col gap-6 max-h-[85vh] overflow-y-auto scrollbar-none py-4">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-purple-500/40 text-purple-300 text-xs font-mono font-black backdrop-blur-xl shadow-2xl mb-2">
                  <User className="w-3.5 h-3.5" />
                  <span>STATION 02 // MINDSET & GRADING</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white">رؤية بصرية تُحدث الفارق</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Story & Background Card */}
                <div className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">التعليم والشغف</h3>
                        <p className="text-xs text-indigo-300 font-semibold">{DISHA_INFO.arabicUniversity}</p>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      أنا مصطفى المصري (21 عاماً)، متخصص في تحويل الأفكار والفيديوهات الخام إلى قصص مشوقة تحبس الأنفاس وترفع معدل المشاهدة (Retention) بأعلى معايير الإخراج والتلوين.
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                    {['إدارة خط الإنتاج من التقطيع وحتى الماستر النهائي.', 'تطبيق هندسة الصوت والمؤثرات Sound Design الاحترافية.', 'استخدام الـ AI كمساعد إبداعي لتسريع الابتكار.'].map((t, i) => (
                      <div key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /><span>{t}</span></div>
                    ))}
                  </div>
                </div>

                {/* AI Philosophy & Workflow */}
                <div className="bg-gradient-to-br from-indigo-950/60 via-slate-900/80 to-purple-950/60 border border-indigo-500/40 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">الذكاء الاصطناعي والإبداع</h3>
                        <p className="text-xs text-purple-300 font-mono font-semibold">AI AS CREATIVE ASSISTANT</p>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{DISHA_INFO.aiPhilosophy}</p>
                  </div>

                  <div className="mt-6 p-4 rounded-2xl bg-black/60 border border-purple-500/30">
                    <div className="text-xs font-bold text-purple-300 mb-1">🎯 الهدف المحوري:</div>
                    <div className="text-xs text-slate-300 leading-relaxed font-medium">تقديم محتوى جذاب بصرياً وصوتياً يحقق أعلى معدلات التفاعل والانتشار الفيروسي.</div>
                  </div>
                </div>
              </div>

              {/* Interactive Color Grading Before/After Slider */}
              <ColorGradingSlider imageSrc="/photos/photo_5776222588236403122_y.jpg" />
            </div>
          </Scene>

          {/* ═══════════════════════════════════════════════════════════
              STATION 03 — 3D ARSENAL & SOFTWARE (28% → 42%)
              ═══════════════════════════════════════════════════════════ */}
          <Scene scrollProgress={smoothProgress} enterAt={0.28} exitAt={0.42}>
            <div className="flex flex-col gap-6">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-black backdrop-blur-xl shadow-2xl mb-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>STATION 03 // THE ARSENAL</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white">ترسانة البرامج والتقنيات</h2>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {SOFTWARE_TOOLS.map((tool, idx) => (
                  <div
                    key={idx}
                    className="group bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-indigo-500/60 rounded-3xl p-5 sm:p-6 transition-all duration-300 backdrop-blur-xl shadow-xl hover:scale-105 hover:shadow-indigo-500/20 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition">
                          {getToolIcon(tool.name)}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm sm:text-base group-hover:text-indigo-400 transition">
                            {tool.name}
                          </h4>
                          <span className="text-[11px] text-slate-400 font-semibold">{tool.category}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">{tool.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-[10px] font-mono text-indigo-400">
                      <span>MASTERY LEVEL</span>
                      <span className="text-emerald-400 font-bold">100% PRO</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Scene>

          {/* ═══════════════════════════════════════════════════════════
              STATION 04 — PRODUCTION PIPELINE & SERVICES (42% → 56%)
              ═══════════════════════════════════════════════════════════ */}
          <Scene scrollProgress={smoothProgress} enterAt={0.42} exitAt={0.56}>
            <div className="flex flex-col gap-6 max-h-[85vh] overflow-y-auto scrollbar-none py-4">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-pink-500/40 text-pink-300 text-xs font-mono font-black backdrop-blur-xl shadow-2xl mb-2">
                  <Film className="w-3.5 h-3.5" />
                  <span>STATION 04 // THE PIPELINE</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white">خط الإنتاج السينمائي</h2>
              </div>

              {/* 5-Step Production Roadmap */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4">
                {[
                  { num: '01', title: 'الرؤية والقصة', icon: Compass, color: 'from-blue-600 to-indigo-600', desc: 'تحديد الهيكل والـ Hook' },
                  { num: '02', title: 'التقطيع والرتم', icon: Scissors, color: 'from-indigo-600 to-violet-600', desc: 'ضبط الإيقاع والـ Pacing' },
                  { num: '03', title: 'المؤثرات والـ VFX', icon: Sparkles, color: 'from-violet-600 to-pink-600', desc: 'حركات وبصريات مبهرة' },
                  { num: '04', title: 'الألوان وهندسة الصوت', icon: Wand2, color: 'from-pink-600 to-amber-600', desc: 'تلوين سينمائي و Sound FX' },
                  { num: '05', title: 'المصغرة والنشر', icon: TrendingUp, color: 'from-amber-600 to-emerald-600', desc: 'Click-Through & Retention' },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 rounded-2xl p-4 sm:p-5 text-center transition-all hover:scale-105 backdrop-blur-xl shadow-xl"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 rounded-2xl group-hover:opacity-25 transition`} />
                    <div className="relative z-10">
                      <div className="w-12 h-12 mx-auto rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-2 group-hover:scale-110 transition">
                        {React.createElement(step.icon, { className: 'w-6 h-6 text-indigo-400' })}
                      </div>
                      <span className="text-xs font-mono font-black text-indigo-400">{step.num}</span>
                      <h4 className="text-sm font-bold text-white mt-1">{step.title}</h4>
                      <p className="text-[10px] text-slate-400 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {SERVICES.slice(0, 6).map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-4 backdrop-blur-xl shadow-lg hover:border-indigo-500/50 transition"
                  >
                    <h4 className="text-sm font-bold text-white mb-1">{service.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Scene>

          {/* ═══════════════════════════════════════════════════════════
              STATION 05 — 21-PROJECT SHOWCASE (56% → 72%)
              ═══════════════════════════════════════════════════════════ */}
          <Scene scrollProgress={smoothProgress} enterAt={0.56} exitAt={0.72}>
            <div className="flex flex-col gap-5 max-h-[85vh] overflow-y-auto scrollbar-none py-2">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-black backdrop-blur-xl shadow-2xl mb-2">
                  <Compass className="w-3.5 h-3.5" />
                  <span>STATION 05 // 21 SHOWCASE</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white">معرض الأعمال والمشاريع</h2>
                <p className="text-slate-400 text-xs mt-1">انقر على أي عمل لتكبيره أو تشغيل الفيديو فورياً</p>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center justify-center gap-2 flex-wrap select-none">
                {[
                  { id: 'all', label: 'كافة الأعمال (21)' },
                  { id: 'videos', label: 'فيديوهات 🎬' },
                  { id: 'thumbnail', label: 'ثمبنيلات وتصاميم' },
                  { id: 'brand', label: 'قنوات وبراندات' },
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setPortfolioFilter(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition min-h-[44px] ${
                      portfolioFilter === cat.id
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                        : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* 21-Projects Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 rounded-2xl">
                {filteredProjects.map(project => {
                  const hasVideo = !!project.videoUrl;
                  return (
                    <div
                      key={project.id}
                      data-cursor={hasVideo ? 'video' : 'image'}
                      onClick={() => handleProjectClick(project)}
                      className="group relative aspect-video rounded-2xl overflow-hidden bg-slate-950 cursor-pointer border border-slate-800 hover:border-indigo-500/70 transition-all duration-300 hover:scale-105 shadow-xl"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Video Badge */}
                      {hasVideo && (
                        <div className="absolute top-2 left-2 bg-red-600/90 text-[10px] font-black text-white px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-lg">
                          <Play className="w-2.5 h-2.5 fill-current" />
                          <span>فيديو</span>
                        </div>
                      )}

                      {/* Title Overlay */}
                      <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                        <p className="text-[11px] text-white font-bold truncate">{project.title}</p>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-indigo-950/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        {hasVideo ? (
                          <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition">
                            <Play className="w-6 h-6 fill-current translate-x-0.5" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition">
                            <Maximize2 className="w-5 h-5" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Scene>

          {/* ═══════════════════════════════════════════════════════════
              STATION 06 — YOUTUBE ARENAS (72% → 86%)
              ═══════════════════════════════════════════════════════════ */}
          <Scene scrollProgress={smoothProgress} enterAt={0.72} exitAt={0.86}>
            <div className="flex flex-col gap-6 max-h-[85vh] overflow-y-auto scrollbar-none py-4">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-red-500/40 text-red-400 text-xs font-mono font-black backdrop-blur-xl shadow-2xl mb-2">
                  <Youtube className="w-3.5 h-3.5" />
                  <span>STATION 06 // YOUTUBE ARENAS</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white">قنوات يوتيوب أصنع محتواها</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {YOUTUBE_CHANNELS.map((channel, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/80 border border-slate-800 hover:border-red-500/60 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={channel.avatar}
                          alt={channel.name}
                          className="w-16 h-16 rounded-2xl object-cover ring-2 ring-red-500/50 shadow-lg"
                        />
                        <div>
                          <h3 className="text-xl font-black text-white flex items-center gap-2">
                            {channel.name}
                            <CheckCircle2 className="w-4 h-4 text-red-500" />
                          </h3>
                          <p className="text-xs text-indigo-400 font-bold font-mono">{channel.role}</p>
                        </div>
                      </div>

                      {channel.isWorkingWith && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-black mb-3">
                          <Flame className="w-3.5 h-3.5" />
                          <span>أعمل معها حالياً (Currently Working With)</span>
                        </div>
                      )}

                      <p className="text-xs text-slate-300 leading-relaxed mb-6">{channel.description}</p>
                    </div>

                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-600/30 transition min-h-[44px]"
                    >
                      <Youtube className="w-4 h-4 fill-current" />
                      <span>زيارة ومشاهدة القناة على YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Scene>

          {/* ═══════════════════════════════════════════════════════════
              STATION 07 — LAUNCHPAD & INSTANT CONTACT (86% → 100%)
              ═══════════════════════════════════════════════════════════ */}
          <Scene scrollProgress={smoothProgress} enterAt={0.86} exitAt={1.0}>
            <div className="flex flex-col gap-6 max-h-[85vh] overflow-y-auto scrollbar-none py-4">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-black backdrop-blur-xl shadow-2xl mb-2">
                  <Send className="w-3.5 h-3.5" />
                  <span>STATION 07 // LAUNCHPAD</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white">لنبدأ صناعة النجاح معاً!</h2>
                <p className="text-slate-300 text-sm mt-1">تواصل مباشرة لبدء مونتاج فيديوهاتك القادمة بأعلى جودة.</p>
              </div>

              {/* Social Channels 3D Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* WhatsApp Primary Card */}
                <a
                  href={DISHA_INFO.socials.whatsapp.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-6 bg-gradient-to-br from-emerald-950/70 via-slate-900/80 to-slate-900/90 border border-emerald-500/50 hover:border-emerald-400 rounded-3xl flex flex-col items-center gap-3 text-center transition-all hover:scale-105 shadow-2xl backdrop-blur-xl min-h-[44px]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40 group-hover:scale-110 transition shadow-lg">
                    <MessageCircle className="w-7 h-7 fill-current" />
                  </div>
                  <h4 className="font-bold text-white text-lg">WhatsApp</h4>
                  <p className="text-xs text-slate-300 font-mono" dir="ltr">{DISHA_INFO.socials.whatsapp.phone}</p>
                  <span className="text-xs font-bold text-emerald-400">محادثة فورية مباشرة ←</span>
                </a>

                {/* Instagram Card */}
                <a
                  href={DISHA_INFO.socials.instagram.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-6 bg-slate-900/80 border border-slate-800 hover:border-pink-500/60 rounded-3xl flex flex-col items-center gap-3 text-center transition-all hover:scale-105 shadow-2xl backdrop-blur-xl min-h-[44px]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-pink-600/20 text-pink-400 flex items-center justify-center border border-pink-500/40 group-hover:scale-110 transition shadow-lg">
                    <Instagram className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Instagram</h4>
                  <p className="text-xs text-slate-300">{DISHA_INFO.socials.instagram.handle}</p>
                  <span className="text-xs font-bold text-pink-400">متابعة ورسائل ←</span>
                </a>

                {/* LinkedIn Card */}
                <a
                  href={DISHA_INFO.socials.linkedin.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-6 bg-slate-900/80 border border-slate-800 hover:border-blue-500/60 rounded-3xl flex flex-col items-center gap-3 text-center transition-all hover:scale-105 shadow-2xl backdrop-blur-xl min-h-[44px]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/40 group-hover:scale-110 transition shadow-lg">
                    <Linkedin className="w-7 h-7 fill-current" />
                  </div>
                  <h4 className="font-bold text-white text-lg">LinkedIn</h4>
                  <p className="text-xs text-slate-300">{DISHA_INFO.socials.linkedin.name}</p>
                  <span className="text-xs font-bold text-blue-400">الملف الشخصي والخبرات ←</span>
                </a>
              </div>

              {/* Master WhatsApp Action Button */}
              <div className="text-center pt-2">
                <a
                  href={DISHA_INFO.socials.whatsapp.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-base shadow-2xl shadow-emerald-600/40 transition transform hover:scale-105 active:scale-95 border border-emerald-400/40 min-h-[44px]"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span>تواصل معي الآن على WhatsApp لبدء مشروعك</span>
                </a>
              </div>
            </div>
          </Scene>

        </div>
      </div>

      {/* Lightbox & Video Player Modals */}
      {activeLightboxProject && (
        <ImageLightboxModal
          project={activeLightboxProject}
          projects={filteredProjects}
          onClose={() => setActiveLightboxProject(null)}
          onSelectProject={(p) => setActiveLightboxProject(p)}
        />
      )}
      {activeVideoProject && (
        <VideoModal
          project={activeVideoProject}
          onClose={() => setActiveVideoProject(null)}
        />
      )}
    </>
  );
}
