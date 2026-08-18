'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  DISHA_INFO,
  SOFTWARE_TOOLS,
  SERVICES,
  YOUTUBE_CHANNELS,
  PORTFOLIO_PROJECTS,
  VIDEO_PROJECTS,
  DESIGN_PROJECTS,
  DISHA_CREATIVITY_PROJECTS,
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
  Palette,
  ArrowRight,
  Rocket,
  Radio,
  Zap,
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
import DishaCreativitySection from '@/components/DishaCreativitySection';
import SpaceStarfield3D from '@/components/SpaceStarfield3D';
import StoryHUDMission from '@/components/StoryHUDMission';
import TiltCard from '@/components/TiltCard';

export default function Home() {
  const [activeVideoProject, setActiveVideoProject] = useState<ProjectItem | null>(null);
  const [activeLightboxProject, setActiveLightboxProject] = useState<ProjectItem | null>(null);
  const [mainTab, setMainTab] = useState<'all' | 'videos' | 'designs'>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const baseProjects =
    mainTab === 'videos'
      ? VIDEO_PROJECTS
      : mainTab === 'designs'
      ? DESIGN_PROJECTS
      : PORTFOLIO_PROJECTS;

  const filteredProjects =
    filterCategory === 'all'
      ? baseProjects
      : filterCategory === 'videos'
      ? baseProjects.filter((p) => !!p.videoUrl)
      : baseProjects.filter((p) => p.category === filterCategory);

  const scrollSectionVariant: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-[#050711] text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden relative">
      
      {/* ──────────────────────────────────────────────────────────────
          1. 3D THREE.JS SPACE STARFIELD & NEBULA BACKGROUND
          ────────────────────────────────────────────────────────────── */}
      <SpaceStarfield3D />

      {/* Ambient Cosmic Radial Orbs */}
      <div className="fixed top-1/4 -left-40 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-1/3 -right-40 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Interactive Controls */}
      <CustomCursor />
      <ScrollProgress />
      <MouseSpotlight />
      <StoryHUDMission onNavigateSection={scrollToSection} />

      {/* ──────────────────────────────────────────────────────────────
          2. FLOATING SPACE GLASS NAVBAR
          ────────────────────────────────────────────────────────────── */}
      <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <header className="pointer-events-auto w-full max-w-6xl bg-stone-950/80 backdrop-blur-2xl border border-white/10 rounded-full px-6 h-16 sm:h-18 flex items-center justify-between shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all">
          {/* Logo (DISHA.) */}
          <div
            onClick={() => scrollToSection('hero')}
            className="text-xl sm:text-2xl font-black tracking-tighter cursor-pointer flex items-center group select-none"
          >
            <span className="text-white">DISHA</span>
            <span className="text-orange-500 group-hover:scale-125 transition-transform">.</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-bold tracking-normal text-stone-300 font-arabic">
            {[
              { id: 'reel', label: 'شريط المشاريع' },
              { id: 'creativity', label: 'ديشا كرياتيفيتي' },
              { id: 'grading', label: 'التلوين السينمائي' },
              { id: 'work', label: 'المعرض الشامل' },
              { id: 'about', label: 'عن مصطفى' },
              { id: 'services', label: 'الخدمات' },
              { id: 'channels', label: 'قنوات يوتيوب' },
              { id: 'contact', label: 'تواصل معي' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-orange-400 transition-colors py-1.5"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/videos"
              className="px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 text-xs font-bold transition flex items-center gap-1.5"
            >
              <Youtube className="w-3.5 h-3.5 text-red-500" />
              <span>فيديوهات</span>
            </Link>

            <a
              href={DISHA_INFO.socials.whatsapp.link}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-orange-600/40 transition transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>تواصل معي</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-stone-900 text-white border border-stone-800"
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
            className="fixed top-24 inset-x-4 z-40 bg-stone-950/95 backdrop-blur-2xl border border-stone-800 rounded-3xl p-6 shadow-2xl lg:hidden font-arabic"
          >
            <div className="flex flex-col gap-3 text-sm font-bold">
              {[
                { id: 'reel', label: 'شريط المشاريع السينمائي' },
                { id: 'creativity', label: 'ديشا كرياتيفيتي (DISHA CREATIVITY)' },
                { id: 'grading', label: 'سحر التلوين السينمائي' },
                { id: 'work', label: 'معرض الفيديوهات والتصاميم' },
                { id: 'about', label: 'عن مصطفى المصري' },
                { id: 'services', label: 'الخدمات وترسانة البرامج' },
                { id: 'channels', label: 'قنوات YouTube' },
                { id: 'contact', label: 'تواصل الآن' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-right py-2 text-stone-300 hover:text-orange-400 border-b border-stone-900"
                >
                  {item.label}
                </button>
              ))}

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  href="/videos"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 rounded-xl bg-red-950/60 text-red-300 font-bold text-center text-xs border border-red-500/30 flex items-center justify-center gap-1.5"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-500" />
                  <span>صفحة الفيديوهات</span>
                </Link>
                <Link
                  href="/designs"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 rounded-xl bg-amber-950/60 text-amber-300 font-bold text-center text-xs border border-amber-500/30 flex items-center justify-center gap-1.5"
                >
                  <Palette className="w-3.5 h-3.5 text-amber-500" />
                  <span>صفحة التصاميم</span>
                </Link>
              </div>

              <a
                href={DISHA_INFO.socials.whatsapp.link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 w-full py-3.5 rounded-2xl bg-orange-600 text-white font-bold text-center text-xs shadow-lg shadow-orange-600/40 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>تواصل مباشرة على WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ──────────────────────────────────────────────────────────────
          STAGE 01: HERO SECTION — COSMIC SPACE FLIGHT LAUNCHPAD
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pt-28 md:pt-32 pb-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.9)] bg-stone-950/70 backdrop-blur-xl">
          
          {/* LEFT HERO PANEL (Cosmic Energy Reactor) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#ea580c] via-[#c2410c] to-[#7c2d12] p-8 sm:p-12 md:p-16 text-white relative overflow-hidden flex flex-col justify-between min-h-[580px] lg:min-h-[660px]">
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-950/50 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />
            
            {/* Top Status */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping" />
                <span>MOSTAFA ELMASRY // DISHA</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-orange-200">
                <Radio className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span>TRANSMITTING 4K 60FPS</span>
              </div>
            </div>

            {/* Massive Typography */}
            <div className="relative z-10 my-auto py-8">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-[18vw] sm:text-[14vw] lg:text-[8.5rem] font-black leading-none tracking-tighter text-white uppercase font-display drop-shadow-lg select-none"
              >
                CREATE<span className="text-amber-300">.</span>
              </motion.h1>
              
              <p className="text-xl sm:text-2xl font-bold text-orange-100 mt-2 max-w-md leading-snug">
                Designs that inspire. Ideas that connect.
              </p>
              <p className="text-base sm:text-lg font-arabic font-semibold text-orange-200 mt-1 max-w-md" dir="rtl">
                تصاميم تلهم. أفكار تتصل. ومونتاج سينمائي يصنع الفارق في الفضاء الرقمي.
              </p>

              {/* View Work CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => scrollToSection('reel')}
                  className="px-7 py-4 rounded-full bg-white hover:bg-orange-50 text-stone-950 font-black text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-2"
                >
                  <Rocket className="w-4 h-4 text-orange-600" />
                  <span>بدء رحلة المشاريع</span>
                </button>

                <button
                  onClick={() => scrollToSection('creativity')}
                  className="px-6 py-4 rounded-full bg-black/35 hover:bg-black/50 text-white font-bold text-xs uppercase tracking-wider transition backdrop-blur-md border border-white/20 flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>ديشا كرياتيفيتي</span>
                </button>
              </div>
            </div>

            {/* Bottom Avatar Strip */}
            <div className="relative z-10 pt-6 border-t border-white/20 flex items-center gap-4">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                <img src="/photos/photo_5776222588236403122_y.jpg" alt="Project 1" className="w-10 h-10 rounded-full border-2 border-orange-600 object-cover" />
                <img src="/photos/photo_5776222588236403123_y.jpg" alt="Project 2" className="w-10 h-10 rounded-full border-2 border-orange-600 object-cover" />
                <img src="/photos/photo_5776222588236403124_y.jpg" alt="Project 3" className="w-10 h-10 rounded-full border-2 border-orange-600 object-cover" />
                <div className="w-10 h-10 rounded-full border-2 border-orange-600 bg-black/60 backdrop-blur-sm text-white text-xs font-black flex items-center justify-center">
                  +150
                </div>
              </div>
              <div className="text-xs text-orange-100 font-medium">
                <span className="font-bold text-white block">مشاريع وفيديوهات منجزة</span>
                <span>Trusted by top creators & YouTube channels.</span>
              </div>
            </div>
          </div>

          {/* RIGHT HERO PANEL (Floating Space Glass Cockpit) */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-stone-900/60 backdrop-blur-2xl relative">
            
            {/* Top Status */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 bg-stone-900/90 px-4 py-2 rounded-full border border-orange-500/40 shadow-inner text-xs font-bold text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-orange-400 font-black">AVAILABLE FOR •</span>
                <span>Freelance Projects</span>
              </div>
              <span className="text-xs font-mono font-bold text-stone-400">2026 EDITION</span>
            </div>

            {/* Creator Photo in Floating Frame */}
            <div className="my-6 relative group">
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border-2 border-orange-500/50 shadow-[0_0_40px_rgba(249,115,22,0.25)] bg-stone-950">
                <img
                  src={DISHA_INFO.photo}
                  alt={DISHA_INFO.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                
                <div className="absolute bottom-6 inset-x-6 text-white">
                  <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                    VIDEO EDITOR & CREATIVE DIRECTOR
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mt-0.5">{DISHA_INFO.name}</h3>
                  <p className="text-xs text-stone-400 font-arabic mt-1">{DISHA_INFO.arabicUniversity}</p>
                </div>
              </div>

              {/* Floating Testimonial Quote */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                className="absolute -bottom-6 -left-4 sm:left-4 right-4 bg-stone-950/90 backdrop-blur-xl p-4 rounded-2xl border border-stone-800 shadow-2xl flex items-start gap-3 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-orange-600/20 border border-orange-500/40 text-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Quote className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed font-medium">
                    "مونتاج احترافي ودقة في رتم الفيديو وتصميم الصوت زادت من الـ Retention والتفاعل بشكل ملحوظ."
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Animated Stats */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-stone-800 mt-6">
              {DISHA_INFO.stats.slice(0, 2).map((st, i) => (
                <div key={i} className="bg-stone-950/80 p-3.5 rounded-2xl border border-stone-800/80 shadow-inner text-center">
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
          SPACE MARQUEE BANNER
          ────────────────────────────────────────────────────────────── */}
      <InfiniteMarquee />

      {/* ──────────────────────────────────────────────────────────────
          STAGE 02: 3D CINEMATIC PROJECTS REEL (شريط المشاريع السينمائي)
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="reel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10"
      >
        <FilmReelCylinder
          onSelectProject={(p) => setActiveLightboxProject(p)}
          onPlayVideo={(p) => setActiveVideoProject(p)}
        />
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          STAGE 03: DISHA CREATIVITY NEBULA (ديشا كرياتيفيتي)
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="creativity"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="relative z-10"
      >
        <DishaCreativitySection
          onSelectProject={(p) => setActiveLightboxProject(p)}
        />
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          STAGE 04: COLOR ALCHEMY SLIDER (سحر التلوين السينمائي)
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="grading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-orange-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COLOR & VFX MASTERY // مختبر الألوان</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            سحر التلوين والمؤثرات السينمائية
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto mt-2 font-arabic">
            اسحب المقبض لترى كيف نحول لقطات الكاميرا الباهتة إلى مشهد مشبع بالحياة والدراما البصرية.
          </p>
        </div>

        <ColorGradingSlider imageSrc="/photos/photo_5776222588236403122_y.jpg" />
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          STAGE 05: MAIN GALLERY HUB (ALL PROJECTS MATRIX)
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="work"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="py-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-10"
      >
        {/* Hub Switcher Bar */}
        <div className="p-3 bg-stone-950/80 backdrop-blur-2xl text-white rounded-3xl border border-stone-800 shadow-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 p-1.5 bg-stone-900 rounded-2xl border border-stone-800 w-full md:w-auto">
            <button
              onClick={() => {
                setMainTab('all');
                setFilterCategory('all');
              }}
              className={`flex-1 md:flex-initial px-6 py-3 rounded-xl text-xs font-bold transition-all ${
                mainTab === 'all'
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/40'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              كافة الأعمال ({PORTFOLIO_PROJECTS.length})
            </button>

            <button
              onClick={() => {
                setMainTab('videos');
                setFilterCategory('all');
              }}
              className={`flex-1 md:flex-initial px-6 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                mainTab === 'videos'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/40'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Youtube className="w-4 h-4" />
              <span>فيديوهات اليوتيوب والريلز ({VIDEO_PROJECTS.length})</span>
            </button>

            <button
              onClick={() => {
                setMainTab('designs');
                setFilterCategory('all');
              }}
              className={`flex-1 md:flex-initial px-6 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                mainTab === 'designs'
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/40'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>الصور والثمبنيلات ({DESIGN_PROJECTS.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/videos"
              className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 bg-stone-900 px-4 py-2.5 rounded-xl border border-stone-800"
            >
              <span>صفحة الفيديوهات المستقلة</span>
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            </Link>
            <Link
              href="/designs"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-stone-900 px-4 py-2.5 rounded-xl border border-stone-800"
            >
              <span>صفحة التصاميم المستقلة</span>
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            </Link>
          </div>
        </div>

        {/* Header & Sub-Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {mainTab === 'videos'
                ? 'فيديوهات اليوتيوب وشورتس وريلز'
                : mainTab === 'designs'
                ? 'الصور المصغرة والبوسترات الفنية'
                : 'شبكة المعرض وكافة المشاريع'}
            </h2>
            <p className="text-stone-400 text-sm mt-1 font-arabic">
              {mainTab === 'videos'
                ? 'مجهزة بالثمبنيلات الأصلية من YouTube ومتاحة للتشغيل الفوري داخل الموقع'
                : 'اضغط على أي مشروع لتكبيره بالدقة الكاملة أو مشاهدة تفاصيل المونتاج'}
            </p>
          </div>

          {/* Sub-Filters */}
          {mainTab === 'all' && (
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { id: 'all', label: 'الكل' },
                { id: 'short', label: 'شورتس وريلز ⚡' },
                { id: 'youtube', label: 'فيديوهات يوتيوب 🎬' },
                { id: 'thumbnail', label: 'ثمبنيلات 🎨' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilterCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                    filterCategory === cat.id
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                      : 'bg-stone-900 text-stone-300 border border-stone-800 hover:border-orange-500 hover:text-orange-400'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Projects Interactive Grid */}
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
                >
                  <TiltCard
                    maxTilt={12}
                    scaleOnHover={1.03}
                    cursorType={hasVideo ? 'video' : 'image'}
                    onClick={() => {
                      if (hasVideo) setActiveVideoProject(project);
                      else setActiveLightboxProject(project);
                    }}
                    className="h-full group bg-stone-950/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-stone-800/80 hover:border-orange-500/70 shadow-xl hover:shadow-[0_0_35px_rgba(249,115,22,0.25)] transition-all duration-500 cursor-pointer flex flex-col"
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
                      <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
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
                    <div className="p-6 flex flex-col flex-1 justify-between bg-stone-950/90 border-t border-stone-800/80">
                      <div>
                        <h3 className="font-bold text-white text-base sm:text-lg group-hover:text-orange-400 transition leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-xs text-stone-400 line-clamp-2 mt-2 leading-relaxed font-arabic" dir="rtl">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-stone-800/80 mt-4 flex items-center justify-between text-xs font-bold text-orange-400">
                        <span className="flex items-center gap-1">
                          {hasVideo ? 'مشاهدة الفيديو المباشر 🎬' : 'تكبير المعاينة 🔍'}
                        </span>
                        <span>←</span>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          STAGE 06: ABOUT SECTION (من هو مصطفى المصري؟)
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-stone-950/80 backdrop-blur-2xl rounded-[2.5rem] border border-stone-800 shadow-2xl my-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-orange-500/30">
            <User className="w-3.5 h-3.5" />
            <span>MISSION BIO // القصة والإبداع</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            من هو مصطفى المصري؟
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="space-y-4 text-stone-300 leading-relaxed font-arabic" dir="rtl">
            <p className="text-base sm:text-lg font-semibold text-white">
              أنا مصطفى المصري (21 عاماً)، طالب في {DISHA_INFO.arabicUniversity}.
            </p>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              {DISHA_INFO.bio}
            </p>
            <div className="p-4 rounded-2xl bg-orange-950/40 border border-orange-500/30 text-orange-200 text-xs sm:text-sm font-medium">
              <span className="font-bold text-orange-400 block mb-1">🤖 فلسفة الذكاء الاصطناعي:</span>
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
                className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 flex items-start gap-3 transition-all"
              >
                <div className="w-7 h-7 rounded-xl bg-orange-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{item.title}</h4>
                  <p className="text-xs text-stone-400 mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          STAGE 07: SERVICES & SOFTWARE ARSENAL (ANIMATED)
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="py-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-orange-500/30">
            <Layers className="w-3.5 h-3.5" />
            <span>SOFTWARE & SERVICES // ترسانة الإبداع</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            الخدمات وترسانة البرامج المتطورة
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto mt-2 font-arabic">
            منظومة مونتاج سينمائي متكاملة مدعومة بأقوى محركات الجرافيكس وتصميم الصوت
          </p>
        </div>

        <InteractiveServicesArsenal />
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          STAGE 08: YOUTUBE CHANNELS (WITH OFFICIAL ROOYAI LOGO)
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="channels"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-stone-950/90 backdrop-blur-2xl text-white rounded-[2.5rem] my-8 border border-stone-800 shadow-2xl relative z-10"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 text-red-400 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-red-500/30">
            <Youtube className="w-3.5 h-3.5" />
            <span>BROADCAST ARENAS // منصات البث</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            قنوات يوتيوب أصنع محتواها
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {YOUTUBE_CHANNELS.map((channel, idx) => (
            <TiltCard
              key={idx}
              maxTilt={8}
              scaleOnHover={1.02}
              className="h-full bg-stone-900/90 rounded-3xl p-8 border border-stone-800 flex flex-col justify-between hover:border-red-500/60 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-black border-2 border-red-500/40 p-1 flex items-center justify-center flex-shrink-0">
                    <img
                      src={channel.avatar}
                      alt={channel.name}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
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

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-arabic" dir="rtl">
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
            </TiltCard>
          ))}
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          STAGE 09: DIRECT CONTACT TRANSMISSION (WHATSAPP MASTER)
          ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={scrollSectionVariant}
        className="py-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-emerald-500/30">
            <Send className="w-3.5 h-3.5" />
            <span>TRANSMISSION // لنبدأ العمل معاً</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            تواصل معي للبدء في مشروعك
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto mt-2 font-arabic">
            تواصل معي مباشرة وسنقوم بمناقشة تفاصيل الفيديو والبدء في الإنتاج بأسرع وقت وأعلى جودة.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main WhatsApp Master Card with Tilt */}
          <TiltCard
            maxTilt={6}
            scaleOnHover={1.015}
            className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-950 via-stone-900 to-stone-950 text-white border border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.2)] flex flex-col sm:flex-row items-center justify-between gap-6"
          >
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
          </TiltCard>

          {/* Social Links Cards with Tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <TiltCard maxTilt={10} scaleOnHover={1.03}>
              <a
                href={DISHA_INFO.socials.whatsapp.link}
                target="_blank"
                rel="noreferrer"
                className="p-6 bg-stone-900/80 rounded-3xl border border-stone-800 hover:border-[#25D366] shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center gap-2 block h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-950 text-[#25D366] border border-emerald-500/30 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <h4 className="font-bold text-white text-base">WhatsApp</h4>
                <p className="text-xs text-stone-400 font-mono" dir="ltr">{DISHA_INFO.socials.whatsapp.phone}</p>
                <span className="text-xs font-bold text-emerald-400">محادثة فورية ←</span>
              </a>
            </TiltCard>

            <TiltCard maxTilt={10} scaleOnHover={1.03}>
              <a
                href={DISHA_INFO.socials.instagram.link}
                target="_blank"
                rel="noreferrer"
                className="p-6 bg-stone-900/80 rounded-3xl border border-stone-800 hover:border-pink-500 shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center gap-2 block h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-950 text-pink-500 border border-pink-500/30 flex items-center justify-center">
                  <Instagram className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-base">Instagram</h4>
                <p className="text-xs text-stone-400">{DISHA_INFO.socials.instagram.handle}</p>
                <span className="text-xs font-bold text-pink-400">متابعة ورسائل ←</span>
              </a>
            </TiltCard>

            <TiltCard maxTilt={10} scaleOnHover={1.03}>
              <a
                href={DISHA_INFO.socials.linkedin.link}
                target="_blank"
                rel="noreferrer"
                className="p-6 bg-stone-900/80 rounded-3xl border border-stone-800 hover:border-blue-500 shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center gap-2 block h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-950 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 fill-current" />
                </div>
                <h4 className="font-bold text-white text-base">LinkedIn</h4>
                <p className="text-xs text-stone-400">{DISHA_INFO.socials.linkedin.name}</p>
                <span className="text-xs font-bold text-blue-400">الملف المهني ←</span>
              </a>
            </TiltCard>
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────────────────────────
          FOOTER
          ────────────────────────────────────────────────────────────── */}
      <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black text-white tracking-tighter">
            DISHA<span className="text-orange-500">.</span>
          </div>

          <p className="text-xs text-stone-500 text-center font-arabic">
            © {new Date().getFullYear()} {DISHA_INFO.name} ({DISHA_INFO.arabicName}). جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-6 text-xs font-bold">
            <a href={DISHA_INFO.socials.instagram.link} target="_blank" rel="noreferrer" className="hover:text-orange-400 transition">Instagram</a>
            <a href={DISHA_INFO.socials.linkedin.link} target="_blank" rel="noreferrer" className="hover:text-orange-400 transition">LinkedIn</a>
            <a href={DISHA_INFO.socials.youtube.link} target="_blank" rel="noreferrer" className="hover:text-orange-400 transition">YouTube</a>
          </div>
        </div>
      </footer>

      {/* ──────────────────────────────────────────────────────────────
          MODALS
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
