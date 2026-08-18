'use client';

import React, { useState } from 'react';
import { DISHA_INFO } from '@/data/portfolioData';
import {
  MessageCircle,
  Instagram,
  Linkedin,
  Send,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';
import TiltCard from '@/components/TiltCard';

export default function ContactSection() {
  const [clientName, setClientName] = useState('');
  const [projectType, setProjectType] = useState('مونتاج فيديو يوتيوب كامل');
  const [message, setMessage] = useState('');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `مرحباً مصطفى (ديشا)،\nاسمي: ${clientName || 'عميل مهتم'}\nنوع المشروع: ${projectType}\nالتفاصيل: ${message || 'أود مناقشة تفاصيل مشروع مونتاج جديد معك.'}`
    );
    window.open(`https://wa.me/201016345690?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>تواصل معي • Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            هل لديك مشروع فيديو جديد؟ لنبدأ العمل معاً!
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            متاح لاستقبال المشاريع والمونتاج لقنوات اليوتيوب، الإعلانات، وصناع المحتوى.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Social Channels 3D Cards (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* WhatsApp Card */}
            <TiltCard maxTilt={8} scaleOnHover={1.03}>
              <a
                href={DISHA_INFO.socials.whatsapp.link}
                target="_blank"
                rel="noreferrer"
                className="group p-6 bg-gradient-to-r from-emerald-950/60 to-slate-900/80 border border-emerald-500/40 hover:border-emerald-500/80 rounded-3xl flex items-center justify-between transition-all shadow-xl backdrop-blur-md block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition border border-emerald-500/30">
                    <MessageCircle className="w-7 h-7 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg group-hover:text-emerald-300 transition">
                      WhatsApp (واتساب مباشر)
                    </h4>
                    <p className="text-xs text-slate-400 font-mono mt-1 font-bold" dir="ltr">
                      {DISHA_INFO.socials.whatsapp.phone}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                  محادثة فورية ←
                </span>
              </a>
            </TiltCard>

            {/* Instagram Card */}
            <TiltCard maxTilt={8} scaleOnHover={1.03}>
              <a
                href={DISHA_INFO.socials.instagram.link}
                target="_blank"
                rel="noreferrer"
                className="group p-6 bg-slate-900/80 border border-slate-800 hover:border-pink-500/60 rounded-3xl flex items-center justify-between transition-all shadow-xl backdrop-blur-md block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-pink-600/20 text-pink-400 flex items-center justify-center group-hover:scale-110 transition border border-pink-500/30">
                    <Instagram className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg group-hover:text-pink-300 transition">
                      Instagram (إنستغرام)
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-semibold">
                      {DISHA_INFO.socials.instagram.handle}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold text-pink-400 group-hover:translate-x-1 transition-transform">
                  متابعة ورسائل ←
                </span>
              </a>
            </TiltCard>

            {/* LinkedIn Card */}
            <TiltCard maxTilt={8} scaleOnHover={1.03}>
              <a
                href={DISHA_INFO.socials.linkedin.link}
                target="_blank"
                rel="noreferrer"
                className="group p-6 bg-slate-900/80 border border-slate-800 hover:border-blue-500/60 rounded-3xl flex items-center justify-between transition-all shadow-xl backdrop-blur-md block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition border border-blue-500/30">
                    <Linkedin className="w-7 h-7 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg group-hover:text-blue-300 transition">
                      LinkedIn (لينكد إن)
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-semibold">
                      {DISHA_INFO.socials.linkedin.name}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                  الملف الشخصي ←
                </span>
              </a>
            </TiltCard>
          </div>

          {/* Direct WhatsApp Quote Form (Right) */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={5} scaleOnHover={1.01}>
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                  <span>طلب عرض سعر أو مناقشة فكرة مشروع</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-8 font-medium">
                  املأ البيانات وسيتم تحويلها لرسالة منسقة مباشرة على WhatsApp بنقرة واحدة:
                </p>

                <form onSubmit={handleSendWhatsApp} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      اسمك أو اسم القناة / الشركة:
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: أحمد - صانع محتوى"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      نوع المحتوى المطلوب:
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                    >
                      <option value="مونتاج فيديو يوتيوب كامل">مونتاج فيديو يوتيوب كامل (طويل)</option>
                      <option value="حزمة محتوى قصير (Reels / Shorts / TikTok)">حزمة محتوى قصير (Reels / Shorts / TikTok)</option>
                      <option value="تصميم صور مصغرة (Thumbnails)">تصميم صور مصغرة (Thumbnails)</option>
                      <option value="فيديو إعلاني أو ترويجي لشركة">فيديو إعلاني أو ترويجي لشركة</option>
                      <option value="مشروع مونتاج شامل أو تعاون مستمر">مشروع مونتاج شامل أو تعاون مستمر</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      تفاصيل ورؤية المشروع:
                    </label>
                    <textarea
                      rows={4}
                      placeholder="اكتب نبذة عن الفكرة، مدة الفيديو المقترحة، أو أي مراجع تود مشاركتها..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-2xl text-sm font-black flex items-center justify-center gap-2.5 shadow-2xl shadow-emerald-600/30 transition transform hover:scale-[1.02] active:scale-95 border border-emerald-400/30"
                  >
                    <Send className="w-5 h-5 rotate-180" />
                    <span>إرسال الرسالة وبدء المحادثة على WhatsApp</span>
                  </button>
                </form>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
