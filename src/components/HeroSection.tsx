'use client';

import React from 'react';
import { DISHA_INFO } from '@/data/portfolioData';
import {
  Play,
  MessageCircle,
  Sparkles,
  Youtube,
  Film,
  Award,
  CheckCircle2,
  Wand2,
  Flame,
  Volume2,
} from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-right">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-bold w-fit shadow-2xl backdrop-blur-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>متاح للمشاريع الجديدة والمونتاج الاحترافي</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-2">
              <span className="text-sm md:text-base font-bold text-indigo-400 tracking-wider">
                مرحباً بك في عالم {DISHA_INFO.arabicName}
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] tracking-tight">
                أحول أفكارك إلى <br />
                <span className="text-shimmer">
                  تجارب بصرية سينمائية
                </span>
              </h1>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
              {DISHA_INFO.bio}
            </p>

            {/* University & Age Tags */}
            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-2 rounded-xl backdrop-blur-md">
                <Award className="w-4 h-4 text-indigo-400" />
                <span>طالب بـ <strong>{DISHA_INFO.arabicUniversity}</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-2 rounded-xl backdrop-blur-md">
                <Film className="w-4 h-4 text-pink-400" />
                <span>العمر: <strong>{DISHA_INFO.age} عاماً</strong></span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={DISHA_INFO.socials.whatsapp.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm md:text-base shadow-2xl shadow-emerald-600/30 transition transform hover:scale-105 active:scale-95 border border-emerald-400/40"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>تواصل معي عبر WhatsApp</span>
              </a>

              <a
                href="#portfolio"
                className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm md:text-base shadow-2xl shadow-indigo-600/30 transition transform hover:scale-105 active:scale-95 border border-indigo-400/40"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>معرض الأعمال والمشاريع</span>
              </a>

              <a
                href="#journey"
                className="flex items-center gap-2 px-5 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm transition"
              >
                <Flame className="w-4 h-4 text-amber-400" />
                <span>رحلة المونتاج 3D</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Holographic Parallax Photo */}
          <div className="lg:col-span-5 flex justify-center relative">
            <TiltCard maxTilt={15} scaleOnHover={1.03} className="w-72 sm:w-80 md:w-96 aspect-square">
              {/* Outer Neon Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-75 animate-pulse-glow" />

              {/* Photo Card Frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-950 border-2 border-indigo-500/50 shadow-2xl p-2.5 preserve-3d">
                <img
                  src={DISHA_INFO.photo}
                  alt={DISHA_INFO.name}
                  className="w-full h-full object-cover rounded-2xl filter brightness-105 transition-transform duration-700"
                />

                {/* Bottom Overlay Tag */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 bg-slate-950/90 backdrop-blur-xl rounded-2xl border border-slate-700/80 text-center shadow-2xl translate-z-30">
                  <h3 className="font-black text-white text-base md:text-lg flex items-center justify-center gap-1.5">
                    <span>{DISHA_INFO.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 fill-indigo-400/20" />
                  </h3>
                  <p className="text-xs text-indigo-300 font-bold">
                    {DISHA_INFO.title}
                  </p>
                </div>

                {/* Floating 3D Badge: Top Right */}
                <div className="absolute -top-3 -right-3 bg-slate-900/95 backdrop-blur-md border border-indigo-500/50 text-white p-2.5 px-4 rounded-2xl shadow-2xl flex items-center gap-2 animate-float translate-z-50">
                  <Film className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-black">DaVinci & Premiere Pro</span>
                </div>

                {/* Floating 3D Badge: Bottom Left */}
                <div className="absolute -bottom-3 -left-3 bg-slate-900/95 backdrop-blur-md border border-pink-500/50 text-white p-2.5 px-4 rounded-2xl shadow-2xl flex items-center gap-2 animate-float-slow translate-z-50">
                  <Wand2 className="w-4 h-4 text-pink-400" />
                  <span className="text-xs font-black">AI Creative Workflow</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Live 3D Interactive Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-10 border-t border-slate-800/80">
          {DISHA_INFO.stats.map((stat, idx) => (
            <TiltCard key={idx} maxTilt={10} scaleOnHover={1.05}>
              <div className="bg-slate-900/70 hover:bg-slate-900 border border-slate-800/90 hover:border-indigo-500/50 rounded-2xl p-6 text-center transition-all shadow-xl backdrop-blur-md">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 font-mono">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-200 mt-2">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 font-semibold mt-0.5">
                  {stat.labelEn}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
