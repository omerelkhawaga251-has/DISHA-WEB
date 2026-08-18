'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DISHA_INFO,
  SOFTWARE_TOOLS,
  SERVICES,
  YOUTUBE_CHANNELS,
  PORTFOLIO_PROJECTS,
  ProjectItem,
} from '@/data/portfolioData';
import {
  Play,
  MessageCircle,
  Sparkles,
  Youtube,
  Film,
  Award,
  CheckCircle2,
  SlidersHorizontal,
  Layers,
  Cpu,
  Scissors,
  Video,
  Image as ImageIcon,
  User,
  GraduationCap,
  Compass,
  Headphones,
  Maximize2,
  TrendingUp,
  ExternalLink,
  Flame,
  ArrowUpRight,
  Menu,
  X,
  Star,
  Quote,
  Send,
  Instagram,
  Linkedin,
  Eye,
  Check,
} from 'lucide-react';
import ImageLightboxModal from '@/components/ImageLightboxModal';
import VideoModal from '@/components/VideoModal';
import ColorGradingSlider from '@/components/ColorGradingSlider';
import FilmReelCylinder from '@/components/FilmReelCylinder';
import InteractiveServicesArsenal from '@/components/InteractiveServicesArsenal';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import MouseSpotlight from '@/components/MouseSpotlight';
import AnimatedStatCounter from '@/components/AnimatedStatCounter';
import InfiniteMarquee from '@/components/InfiniteMarquee';

export default function Home() {
  const [activeVideoProject, setActiveVideoProject] = useState<ProjectItem | null>(null);
  const [activeLightboxProject, setActiveLightboxProject] = useState<ProjectItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredProjects =
    filterCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : filterCategory === 'videos'
      ? PORTFOLIO_PROJECTS.filter((p) => !!p.videoUrl)
      : PORTFOLIO_PROJECTS.filter((p) => p.category === filterCategory);

  const getToolIcon = (name: string, size = 'w-6 h-6') => {
    switch (name) {
      case 'DaVinci Resolve':
        return <Film className={`${size} text-amber-500`} />;
      case 'Adobe Premiere Pro':
        return <Video className={`${size} text-indigo-500`} />;
      case 'Adobe After Effects':
        return <Sparkles className={`${size} text-violet-500`} />;
      case 'Adobe Photoshop':
        return <ImageIcon className={`${size} text-blue-500`} />;
      case 'CapCut Pro':
        return <Scissors className={`${size} text-rose-500`} />;
      default:
        return <Cpu className={`${size} text-emerald-500`} />;
    }
  };

  // Reusable scroll animation variants
  const scrollSectionVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden relative">
      {/* Interactive Mouse Effects & Progress */}
      <CustomCursor />
      <ScrollProgress />
      <MouseSpotlight />

      {/* ──────────────────────────────────────────────────────────────
          TOP FLOATING GLASS NAVBAR
          ────────────────────────────────────────────────────────────── */}
      <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <header className="pointer-events-auto w-full max-w-5xl bg-white/85 backdrop-blur-2xl border border-stone-200/90 rounded-full px-6 h-16 sm:h-18 flex items-center justify-between shadow-xl shadow-stone-900/5 transition-all">
          {/* Logo (DISHA.) */}
          <div
            onClick={() => scrollToSection('hero')}
            className="text-xl sm:text-2xl font-black tracking-tighter cursor-pointer flex items-center group select-none"
          >
            <span>DISHA</span>
            <span className="text-orange-600 group-hover:scale-125 transition-transform">.</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-bold tracking-normal text-stone-700 font-arabic">
            {[
              { id: 'reel', label: 'بكرة العرض' },
              { id: 'work', label: 'المشاريع' },
              { id: 'grading', label: 'التلوين السينمائي' },
              { id: 'about', label: 'عن مصطفى' },
              { id: 'services', label: 'الخدمات' },
              { id: 'channels', label: 'قنوات يوتيوب' },
              { id: 'contact', label: 'تواصل معي' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-orange-600 transition-colors py-1.5"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={DISHA_INFO.socials.whatsapp.link}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-xs font-black uppercase tracking-wider shadow-md shadow-orange-600/30 transition transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>تواصل معي</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-stone-100 text-stone-900 border border-stone-200"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>
      </div>

      {/* Mobile Slide-Down Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 inset-x-4 z-40 bg-white/95 backdrop-blur-2xl border border-stone-200/90 rounded-3xl p-6 shadow-2xl md:hidden font-arabic"
          >
            <div className="flex flex-col gap-3.5 text-sm font-bold">
              {[
                { id: 'reel', label: 'بكرة العرض السينمائي' },
                { id: 'work', label: 'معرض المشاريع والأعمال' },
                { id: 'grading', label: 'سحر التلوين السينمائي' },
                { id: 'about', label: 'عن مصطفى المصري' },
                { id: 'services', label: 'الخدمات وترسانة البرامج' },
                { id: 'channels', label: 'قنوات YouTube' },
                { id: 'contact', label: 'تواصل الآن' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-right py-2 text-stone-700 hover:text-orange-600 border-b border-stone-100"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={DISHA_INFO.socials.whatsapp.link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 w-full py-3.5 rounded-2xl bg-orange-600 text-white font-bold text-center text-xs shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>تواصل مباشرة على WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ──────────────────────────────────────────────────────────────
          HERO SECTION — SUNSET ORANGE & CREAM EDITORIAL SPLIT
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pt-28 md:pt-32 pb-16 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch rounded-[2.5rem] overflow-hidden border border-stone-200/90 shadow-2xl bg-white">
          
          {/* LEFT HERO PANEL (Sunset Orange Power Station) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#f97316] via-[#ea580c] to-[#9a3412] p-8 sm:p-12 md:p-16 text-white relative overflow-hidden flex flex-col justify-between min-h-[580px] lg:min-h-[660px]">
            
            {/* Ambient Lighting Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-950/40 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />
            
            {/* Top Indicator */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest bg-black/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
                <span>MOSTAFA ELMASRY // DISHA</span>
              </div>
            </div>

            {/* Center Massive Typography */}
            <div className="relative z-10 my-auto py-8">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-[18vw] sm:text-[14vw] lg:text-[8.5rem] font-black leading-none tracking-tighter text-white uppercase font-display drop-shadow-sm select-none"
              >
                CREATE<span className="text-amber-300">.</span>
              </motion.h1>
              
              <p className="text-xl sm:text-2xl font-bold text-orange-100 mt-2 max-w-md leading-snug">
                Designs that inspire. Ideas that connect.
              </p>
              <p className="text-base sm:text-lg font-arabic font-semibold text-orange-200 mt-1 max-w-md" dir="rtl">
                تصاميم تلهم. أفكار تتصل. ومونتاج سينمائي يصنع الفارق.
              </p>

              {/* View Work CTA Buttons */}
              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={() => scrollToSection('reel')}
                  className="px-8 py-4 rounded-full bg-white hover:bg-orange-50 text-stone-950 font-black text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-2"
                >
                  <span>بكرة العرض 3D</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection('work')}
                  className="px-6 py-4 rounded-full bg-black/25 hover:bg-black/40 text-white font-bold text-xs uppercase tracking-wider transition backdrop-blur-md border border-white/20"
                >
                  <span>كافة المشاريع</span>
                </button>
              </div>
            </div>

            {/* Bottom Avatar Strip */}
            <div className="relative z-10 pt-6 border-t border-white/20 flex items-center gap-4">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                <img src="/photos/photo_5776222588236403122_y.jpg" alt="Project 1" className="w-10 h-10 rounded-full border-2 border-orange-600 object-cover" />
                <img src="/photos/photo_5776222588236403123_y.jpg" alt="Project 2" className="w-10 h-10 rounded-full border-2 border-orange-600 object-cover" />
                <img src="/photos/photo_5776222588236403124_y.jpg" alt="Project 3" className="w-10 h-10 rounded-full border-2 border-orange-600 object-cover" />
                <div className="w-10 h-10 rounded-full border-2 border-orange-600 bg-black/50 backdrop-blur-sm text-white text-xs font-black flex items-center justify-center">
                  +150
                </div>
              </div>
              <div className="text-xs text-orange-100 font-medium">
                <span className="font-bold text-white block">مشاريع وفيديوهات منجزة</span>
                <span>Trusted by content creators & brands.</span>
              </div>
            </div>
          </div>

          {/* RIGHT HERO PANEL (Cream Spotlight & Photo) */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-[#FAF7F2] relative">
            
            {/* Top Status */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-stone-200/80 shadow-sm text-xs font-bold text-stone-800">
                <span className="text-orange-600 font-black">AVAILABLE FOR •</span>
                <span>Freelance Projects</span>
              </div>
              <span className="text-xs font-mono font-bold text-stone-600">2026 EDITION</span>
            </div>

            {/* Center Creator Photo */}
            <div className="my-6 relative group">
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-orange-100">
                <img
                  src={DISHA_INFO.photo}
                  alt={DISHA_INFO.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 inset-x-6 text-white">
                  <span className="text-xs font-mono font-bold text-orange-300 uppercase tracking-widest">
                    VIDEO EDITOR & CREATOR
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mt-0.5">{DISHA_INFO.name}</h3>
                  <p className="text-xs text-stone-300 font-arabic mt-1">{DISHA_INFO.arabicUniversity}</p>
                </div>
              </div>

              {/* Floating Quote Badge */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                className="absolute -bottom-6 -left-4 sm:left-4 right-4 bg-white/95 backdrop-blur-xl p-4 rounded-2xl border border-stone-200 shadow-xl flex items-start gap-3 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Quote className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed font-medium">
                    "مونتاج احترافي ودقة في رتم الفيديو وتصميم الصوت زادت من الـ Retention والتفاعل بشكل ملحوظ."
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Animated Stats */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-stone-200/80 mt-6">
              {DISHA_INFO.stats.slice(0, 2).map((st, i) => (
                <div key={i} className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-sm text-center">
                  <AnimatedStatCounter
                    targetValue={st.number}
                    label={st.label}
                    labelEn={st.labelEn}
                  />
                </div>
              ))}
            </div>

          </div>

        </div>
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          INFINITE ANIMATED MARQUEE BANNER
          ────────────────────────────────────────────────────────────── */}
      <InfiniteMarquee />

      {/* ──────────────────────────────────────────────────────────────
          3D CINEMA ROTARY FILM REEL SECTION
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="reel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="py-16 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <FilmReelCylinder
          onSelectProject={(p) => setActiveLightboxProject(p)}
          onPlayVideo={(p) => setActiveVideoProject(p)}
        />
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          COLOR GRADING BEFORE & AFTER SLIDER
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="grading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="py-16 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COLOR & VFX MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-900">
            سحر التلوين والمؤثرات السينمائية
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mt-2">
            اسحب المقبض لترى كيف نحول لقطات الكاميرا الباهتة إلى مشهد مشبع بالحياة والدراما البصرية.
          </p>
        </div>

        <ColorGradingSlider imageSrc="/photos/photo_5776222588236403122_y.jpg" />
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          ALL 21 PROJECTS SHOWCASE GRID
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="work"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="py-20 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        {/* Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>GALLERY ({PORTFOLIO_PROJECTS.length} PROJECTS)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-900">
              شبكة المعرض والمشاريع
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              انقر على أي فيديو لتشغيله مباشرة، أو انقر على الصور المصغرة للتكبير بدقة عالية
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { id: 'all', label: 'كافة الأعمال (21)' },
              { id: 'short', label: 'شورتس وريلز ⚡' },
              { id: 'youtube', label: 'فيديوهات يوتيوب 🎬' },
              { id: 'thumbnail', label: 'ثمبنيلات 🎨' },
              { id: 'brand', label: 'قنوات وبراندات' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  filterCategory === cat.id
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                    : 'bg-white text-stone-700 border border-stone-200 hover:border-orange-600 hover:text-orange-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 21 Projects Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const hasVideo = !!project.videoUrl;
              const isReel = project.videoUrl?.includes('instagram.com') || project.videoUrl?.includes('shorts');

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: (idx % 6) * 0.06, duration: 0.45 }}
                  onClick={() => {
                    if (hasVideo) setActiveVideoProject(project);
                    else setActiveLightboxProject(project);
                  }}
                  data-cursor={hasVideo ? 'video' : 'image'}
                  className="group bg-white rounded-3xl overflow-hidden border border-stone-200/90 hover:border-orange-500/60 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col transform hover:-translate-y-2"
                >
                  {/* Image & Video Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Top Right Category Pill */}
                    <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                      <span>{project.categoryLabel}</span>
                    </div>

                    {/* Top Left Video Badge */}
                    {hasVideo && (
                      <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1 shadow-lg">
                        <Play className="w-2.5 h-2.5 fill-current" />
                        <span>{isReel ? 'ريلز / شورتس' : 'تشغيل الفيديو'}</span>
                      </div>
                    )}

                    {/* Center Hover Action */}
                    <div className="absolute inset-0 bg-stone-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition">
                        {hasVideo ? (
                          <Play className="w-6 h-6 fill-current translate-x-0.5" />
                        ) : (
                          <Maximize2 className="w-6 h-6" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Information */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-base sm:text-lg group-hover:text-orange-600 transition leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-stone-500 line-clamp-2 mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between text-xs font-bold text-orange-600">
                      <span className="flex items-center gap-1">
                        {hasVideo ? 'مشاهدة الفيديو المباشر 🎬' : 'تكبير المعاينة 🔍'}
                      </span>
                      <span>←</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          ABOUT & CREATIVE PHILOSOPHY
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-white rounded-[2.5rem] border border-stone-200/90 shadow-xl my-8"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>THE STORYTELLER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
            من هو مصطفى المصري؟
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="space-y-4 text-stone-700 leading-relaxed font-arabic" dir="rtl">
            <p className="text-base sm:text-lg font-semibold text-stone-900">
              أنا مصطفى المصري (21 عاماً)، طالب في {DISHA_INFO.arabicUniversity}.
            </p>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              {DISHA_INFO.bio}
            </p>
            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200/80 text-orange-950 text-xs sm:text-sm font-medium">
              <span className="font-bold block mb-1">🤖 فلسفة الذكاء الاصطناعي:</span>
              {DISHA_INFO.aiPhilosophy}
            </div>
          </div>

          <div className="space-y-3">
            {[
              { title: 'إدارة دورة الإنتاج كاملة', desc: 'من الفكرة والمشاهد الخام وحتى إخراج الفيديو النهائي.' },
              { title: 'زيادة وقت المشاهدة (Pacing & Retention)', desc: 'تقطيع ذكي وتغيير زوايا يمنع الملل ويزيد تفاعل الجمهور.' },
              { title: 'تصميم وهندسة الصوت (Sound Design)', desc: 'مؤثرات صوتية وموسيقى ترفع المشاعر والاندماج.' },
              { title: 'تصميم صور مصغرة (Thumbnails)', desc: 'صور ذات نسبة نقر مرتفعة CTR تلفت الأنظار بين آلاف الفيديوهات.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, x: -4 }}
                className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-3 transition-all"
              >
                <div className="w-7 h-7 rounded-xl bg-orange-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          SERVICES & SOFTWARE ARSENAL (ANIMATED)
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="py-20 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>SOFTWARE & SERVICES // موشن وإبداع</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-900">
            الخدمات وترسانة البرامج المتطورة
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mt-2">
            منظومة مونتاج سينمائي متكاملة مدعومة بأقوى محركات الجرافيكس وتصميم الصوت
          </p>
        </div>

        {/* High-Motion Interactive Component */}
        <InteractiveServicesArsenal />
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          YOUTUBE CHANNELS SECTION
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="channels"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-stone-900 text-white rounded-[2.5rem] my-8 shadow-2xl"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-3 border border-red-500/30">
            <Youtube className="w-3.5 h-3.5" />
            <span>CONTENT ARENAS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            قنوات يوتيوب أصنع محتواها
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {YOUTUBE_CHANNELS.map((channel, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.015 }}
              className="bg-stone-800/90 rounded-3xl p-8 border border-stone-700 flex flex-col justify-between hover:border-red-500/50 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={channel.avatar}
                    alt={channel.name}
                    className="w-16 h-16 rounded-2xl object-cover ring-2 ring-red-500/40"
                  />
                  <div>
                    <h3 className="text-xl font-black text-white flex items-center gap-2">
                      {channel.name}
                      <CheckCircle2 className="w-4 h-4 text-red-500" />
                    </h3>
                    <p className="text-xs text-orange-400 font-bold">{channel.role}</p>
                  </div>
                </div>

                {channel.isWorkingWith && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold mb-3">
                    <Flame className="w-3.5 h-3.5" />
                    <span>أعمل معها حالياً (Currently Working With)</span>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                  {channel.description}
                </p>
              </div>

              <a
                href={channel.url}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition"
              >
                <Youtube className="w-4 h-4 fill-current" />
                <span>زيارة القناة على YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          DIRECT CONTACT SECTION
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="py-20 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>LET'S WORK TOGETHER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-900">
            تواصل معي للبدء في مشروعك
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mt-2">
            تواصل معي مباشرة وسنقوم بمناقشة تفاصيل الفيديو والبدء في الإنتاج بأسرع وقت وأعلى جودة.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main WhatsApp Master Card */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-950 via-stone-900 to-stone-950 text-white border border-emerald-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-right flex-1" dir="rtl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mb-3 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>متاح للمشاريع الفورية</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">محادثة فورية عبر WhatsApp</h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                اضغط على الزر لبدء محادثة فورية ومناقشة تفاصيل مشروعك أو إرسال المواد الخام مباشرة.
              </p>
            </div>

            <a
              href={DISHA_INFO.socials.whatsapp.link}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5b] text-white font-black text-sm shadow-xl shadow-[#25D366]/40 transition transform hover:scale-105 active:scale-95 flex items-center gap-3 flex-shrink-0"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>محادثة WhatsApp الآن</span>
            </a>
          </div>

          {/* Social Links Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={DISHA_INFO.socials.whatsapp.link}
              target="_blank"
              rel="noreferrer"
              className="p-6 bg-white rounded-3xl border border-stone-200 hover:border-[#25D366] shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <h4 className="font-bold text-stone-900 text-base">WhatsApp</h4>
              <p className="text-xs text-stone-500 font-mono" dir="ltr">{DISHA_INFO.socials.whatsapp.phone}</p>
              <span className="text-xs font-bold text-emerald-600">محادثة فورية ←</span>
            </a>

            <a
              href={DISHA_INFO.socials.instagram.link}
              target="_blank"
              rel="noreferrer"
              className="p-6 bg-white rounded-3xl border border-stone-200 hover:border-pink-500 shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
                <Instagram className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-stone-900 text-base">Instagram</h4>
              <p className="text-xs text-stone-500">{DISHA_INFO.socials.instagram.handle}</p>
              <span className="text-xs font-bold text-pink-600">متابعة ورسائل ←</span>
            </a>

            <a
              href={DISHA_INFO.socials.linkedin.link}
              target="_blank"
              rel="noreferrer"
              className="p-6 bg-white rounded-3xl border border-stone-200 hover:border-blue-600 shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Linkedin className="w-6 h-6 fill-current" />
              </div>
              <h4 className="font-bold text-stone-900 text-base">LinkedIn</h4>
              <p className="text-xs text-stone-500">{DISHA_INFO.socials.linkedin.name}</p>
              <span className="text-xs font-bold text-blue-600">الملف المهني ←</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          FOOTER
          ────────────────────────────────────────────────────────────── */}
      <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black text-white tracking-tighter">
            DISHA<span className="text-orange-600">.</span>
          </div>

          <p className="text-xs text-stone-500 text-center font-arabic">
            © {new Date().getFullYear()} {DISHA_INFO.name} ({DISHA_INFO.arabicName}). جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-6 text-xs font-bold">
            <a href={DISHA_INFO.socials.instagram.link} target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">Instagram</a>
            <a href={DISHA_INFO.socials.linkedin.link} target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">LinkedIn</a>
            <a href={DISHA_INFO.socials.youtube.link} target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">YouTube</a>
          </div>
        </div>
      </footer>

      {/* ──────────────────────────────────────────────────────────────
          MODALS (IMAGE LIGHTBOX & VIDEO MODAL)
          ────────────────────────────────────────────────────────────── */}
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
    </div>
  );
}
