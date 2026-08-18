import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 flex flex-col items-center justify-center p-6 text-center">
      <div className="text-8xl font-black text-orange-600 mb-4">404</div>
      <h1 className="text-3xl font-black mb-2">الصفحة غير موجودة</h1>
      <p className="text-stone-600 text-sm max-w-md mb-8">
        عذراً، الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition transform hover:scale-105"
      >
        العودة للصفحة الرئيسية
      </Link>
    </div>
  );
}
