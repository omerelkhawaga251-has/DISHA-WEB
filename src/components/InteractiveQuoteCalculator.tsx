'use client';

import React, { useState } from 'react';
import { MessageCircle, Calculator, Check, Sparkles, Send, Clock, Layers } from 'lucide-react';
import { DISHA_INFO } from '@/data/portfolioData';

export default function InteractiveQuoteCalculator() {
  const [videoType, setVideoType] = useState('youtube');
  const [videoLength, setVideoLength] = useState('medium');
  const [extras, setExtras] = useState<string[]>(['sound', 'color']);
  const [clientNotes, setClientNotes] = useState('');

  const videoTypes = [
    { id: 'youtube', label: 'فيديو يوتيوب كامل (16:9)', desc: 'تقطيع، رتم عالي، ومؤثرات' },
    { id: 'shorts', label: 'ريلز / تيك توك / شورتس (9:16)', desc: 'محتوى سريع مشوق مع كابشنز' },
    { id: 'promo', label: 'إعلان ترويجي أو تجاري', desc: 'إخراج سينمائي مخصص للمبيعات' },
    { id: 'thumbnail', label: 'تصميم صور مصغرة (Thumbnails)', desc: 'CTR عالي وجاذبية قصوى' },
  ];

  const lengths = [
    { id: 'short', label: 'أقل من دقيقة (Short-form)' },
    { id: 'medium', label: '3 إلى 10 دقائق (Standard)' },
    { id: 'long', label: 'أكثر من 10 دقائق (Long-form)' },
  ];

  const extraOptions = [
    { id: 'sound', label: 'تصميم وهندسة صوتية (Sound FX & Mixing)' },
    { id: 'color', label: 'تصحيح وتلوين سينمائي (Color Grading)' },
    { id: 'motion', label: 'أنيميشن وجرافيكس متحرك (Motion Graphics)' },
    { id: 'thumbnail_extra', label: 'تصميم ثمبنيل مخصص بجودة 4K' },
  ];

  const toggleExtra = (id: string) => {
    if (extras.includes(id)) {
      setExtras(extras.filter((e) => e !== id));
    } else {
      setExtras([...extras, id]);
    }
  };

  const getTypeName = () => videoTypes.find((t) => t.id === videoType)?.label || '';
  const getLengthName = () => lengths.find((l) => l.id === videoLength)?.label || '';
  const getExtrasNames = () =>
    extras.map((e) => extraOptions.find((o) => o.id === e)?.label).filter(Boolean).join(' + ');

  const generateWhatsAppUrl = () => {
    const text = `مرحباً مصطفى 👋
أود الاستفسار والاتفاق معك على مشروع مونتاج فيديو:
📌 نوع المشروع: ${getTypeName()}
⏱️ المدة التقديرية: ${getLengthName()}
✨ متطلبات إضافية: ${getExtrasNames() || 'مونتاج قياسي'}
${clientNotes ? `📝 ملاحظات خاصة: ${clientNotes}` : ''}

يرجى إفادتي بالتكلفة المتاحة والمدة الزمنية للبدء. شكراً لك!`;

    return `https://wa.me/201016345690?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900">
            حاسبة طلب المشروعات الفورية
          </h3>
          <p className="text-xs sm:text-sm text-stone-500">
            اختر تفاصيل مشروعك وسيتم تجهيز رسالة مخصصة لإرسالها مباشرة عبر WhatsApp بنقرة واحدة
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Step 1: Video Type */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-orange-600 mb-3">
            1. نوع المحتوى أو الفيديو:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {videoTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setVideoType(type.id)}
                className={`text-right p-4 rounded-2xl border-2 transition-all ${
                  videoType === type.id
                    ? 'border-orange-600 bg-orange-50/50 shadow-md shadow-orange-500/10'
                    : 'border-stone-200 hover:border-orange-300 bg-white'
                }`}
              >
                <div className="font-bold text-stone-900 text-sm flex items-center justify-between">
                  <span>{type.label}</span>
                  {videoType === type.id && (
                    <span className="w-5 h-5 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs">
                      <Check className="w-3 h-3" />
                    </span>
                  )}
                </div>
                <div className="text-xs text-stone-500 mt-1">{type.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Duration */}
        {videoType !== 'thumbnail' && (
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-orange-600 mb-3">
              2. المدة التقريبية للفيديو:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {lengths.map((len) => (
                <button
                  key={len.id}
                  type="button"
                  onClick={() => setVideoLength(len.id)}
                  className={`text-center py-3 px-4 rounded-xl border-2 font-bold text-xs transition-all ${
                    videoLength === len.id
                      ? 'border-orange-600 bg-orange-600 text-white shadow-md'
                      : 'border-stone-200 text-stone-700 hover:border-orange-300 bg-white'
                  }`}
                >
                  {len.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Extras */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-orange-600 mb-3">
            3. خدمات وتجهيزات إضافية:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {extraOptions.map((opt) => {
              const isChecked = extras.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => toggleExtra(opt.id)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-xs font-medium text-right ${
                    isChecked
                      ? 'border-orange-500 bg-orange-50 text-orange-950 font-bold'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <span>{opt.label}</span>
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                      isChecked
                        ? 'bg-orange-600 border-orange-600 text-white'
                        : 'border-stone-300 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: Notes (Optional) */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
            ملاحظات إضافية (رابط قناتك أو وصف الفكرة):
          </label>
          <input
            type="text"
            value={clientNotes}
            onChange={(e) => setClientNotes(e.target.value)}
            placeholder="مثال: قناة جيمنج، أو براند ملابس، أو بودكاست..."
            className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-orange-600 text-stone-900 bg-stone-50"
          />
        </div>

        {/* WhatsApp Submit Action */}
        <div className="pt-4 border-t border-stone-200">
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5b] text-white font-black text-base shadow-xl shadow-[#25D366]/30 transition transform hover:scale-[1.01] active:scale-[0.99]"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>إرسال طلب المشروع مباشرة على WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
