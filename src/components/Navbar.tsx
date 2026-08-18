'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DISHA_INFO } from '@/data/portfolioData';
import {
  Menu,
  X,
  MessageCircle,
  Instagram,
  Linkedin,
  Youtube,
  Flame,
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'نبذة عني', href: '#about' },
    { label: 'رحلة المونتاج 3D', href: '#journey' },
    { label: 'الخدمات', href: '#services' },
    { label: 'الأعمال والمشاريع', href: '#portfolio' },
    { label: 'قنوات YouTube', href: '#youtube' },
    { label: 'تواصل معي', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-2xl border-b border-slate-800/80 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="relative w-11 h-11 rounded-2xl overflow-hidden ring-2 ring-indigo-500/60 shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
            <img
              src={DISHA_INFO.photo}
              alt={DISHA_INFO.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5">
              DISHA <span className="text-indigo-400">ELMASRY</span>
            </span>
            <span className="text-[10px] text-slate-400 -mt-1 font-semibold">
              Video Editor & Content Creator
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/80 border border-slate-800/90 px-4 py-2 rounded-full backdrop-blur-xl shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions & Socials */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Social Quick Links */}
          <div className="flex items-center gap-1 text-slate-400 border-l border-slate-800 pl-3">
            <a
              href={DISHA_INFO.socials.instagram.link}
              target="_blank"
              rel="noreferrer"
              className="p-2 hover:text-pink-400 hover:bg-slate-800 rounded-xl transition"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={DISHA_INFO.socials.linkedin.link}
              target="_blank"
              rel="noreferrer"
              className="p-2 hover:text-blue-400 hover:bg-slate-800 rounded-xl transition"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={DISHA_INFO.socials.youtube.link}
              target="_blank"
              rel="noreferrer"
              className="p-2 hover:text-red-500 hover:bg-slate-800 rounded-xl transition"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* WhatsApp Action Button */}
          <a
            href={DISHA_INFO.socials.whatsapp.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-black bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 transition transform hover:scale-105 active:scale-95 border border-emerald-400/30"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>واتساب</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-800 bg-slate-950 p-4 flex flex-col gap-2.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-bold text-slate-200 hover:bg-slate-900 hover:text-indigo-400 transition"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <a
              href={DISHA_INFO.socials.whatsapp.link}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-3 rounded-xl text-xs font-black bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
            >
              تواصل معي على WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
