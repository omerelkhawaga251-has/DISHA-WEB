import React from 'react';
import { DISHA_INFO } from '@/data/portfolioData';
import { Heart, Instagram, Linkedin, Youtube, MessageCircle, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          {/* Brand & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-right">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-indigo-500/40">
                <img
                  src={DISHA_INFO.photo}
                  alt={DISHA_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-white">
                  DISHA <span className="text-indigo-400">ELMASRY</span>
                </span>
                <span className="text-[11px] text-slate-400">
                  {DISHA_INFO.arabicTitle}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2 max-w-sm">
              طالب بـ {DISHA_INFO.arabicUniversity} • صانع ومحرر محتوى إبداعي لقنوات اليوتيوب ومنصات التواصل الاجتماعي.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={DISHA_INFO.socials.whatsapp.link}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-900 hover:bg-emerald-600 hover:text-white rounded-xl text-slate-300 transition"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <a
              href={DISHA_INFO.socials.instagram.link}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-900 hover:bg-pink-600 hover:text-white rounded-xl text-slate-300 transition"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={DISHA_INFO.socials.linkedin.link}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-900 hover:bg-blue-600 hover:text-white rounded-xl text-slate-300 transition"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 fill-current" />
            </a>
            <a
              href={DISHA_INFO.socials.youtube.link}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-900 hover:bg-red-600 hover:text-white rounded-xl text-slate-300 transition"
              title="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} — {DISHA_INFO.name} ({DISHA_INFO.arabicName})
          </div>

          <div className="flex items-center gap-2">
            <span>تم التطوير باستخدام Next.js & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
