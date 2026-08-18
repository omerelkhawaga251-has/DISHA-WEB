# مجلد الفيديوهات المحلية (Local Videos)

ضع ملفات الفيديو الخاصة بك هنا (مثل: `my-video.mp4` أو `tutorial.webm`).

### كيفية استخدام الفيديو في الموقع:
1. انسخ ملف الفيديو وضعه داخل هذا المجلد: `public/videos/my-video.mp4`
2. افتح ملف `src/data/videos.ts`
3. قم بتعيين `videoUrl: '/videos/my-video.mp4'`

مثال:
```typescript
{
  id: '7',
  title: 'فيديو خاص بي من جهازي',
  description: 'وصف الفيديو...',
  videoUrl: '/videos/my-video.mp4',
  thumbnailUrl: 'https://images.unsplash.com/...',
  duration: '05:30',
  views: '1.2 ألف',
  category: 'تطوير الويب',
  author: {
    name: 'أحمد',
    avatar: 'https://...',
    subscribers: '10K',
  },
  createdAt: 'منذ يوم',
}
```

> **تنبيه للنشر على Vercel:**
> - إذا كان الفيديو محلياً، تأكد أن حجم الملف أقل من 25 ميجابايت (لأن GitHub و Vercel يضعان قيوداً على أحجام الملفات الكبيرة في المستودع).
> - للفيديوهات الأكبر حجماً، يُفضل استخدام روابط مباشرة (مثل AWS S3 / Cloudinary / Supabase / YouTube) ووضع الرابط في `videoUrl`.
