'use client';

import React, { useState, use } from 'react';
import Navbar from '@/components/Navbar';
import VideoPlayer from '@/components/VideoPlayer';
import { VIDEOS } from '@/data/videos';
import Link from 'next/link';
import {
  ThumbsUp,
  Share2,
  Bookmark,
  CheckCircle2,
  Eye,
  MessageSquare,
  Send,
  ArrowRight,
  Clock,
  Check,
} from 'lucide-react';

interface WatchPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function WatchPage({ params }: WatchPageProps) {
  const unwrappedParams = use(params);
  const videoId = unwrappedParams.id;

  const video = VIDEOS.find((v) => v.id === videoId) || VIDEOS[0];
  const relatedVideos = VIDEOS.filter((v) => v.id !== video.id);

  const [likes, setLikes] = useState(1420);
  const [hasLiked, setHasLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'محمد علي',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
      text: 'شرح ممتاز واحترافي جداً! جودة الفيديو وسلاسة المشغل رائعة.',
      time: 'منذ ساعتين',
    },
    {
      id: 2,
      author: 'فاطمة الزهراء',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
      text: 'شكراً جزيلاً على هذه المعلومات القيمة، ننتظر المزيد من الدروس!',
      time: 'منذ 5 ساعات',
    },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    if (hasLiked) {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setComments([
      {
        id: Date.now(),
        author: 'أنت (مستخدم جديد)',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
        text: newComment.trim(),
        time: 'الآن',
      },
      ...comments,
    ]);
    setNewComment('');
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        {/* Back Link */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-400 font-medium transition"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة للرئيسية</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Video & Details Column */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            {/* Custom Video Player */}
            <VideoPlayer
              src={video.videoUrl}
              poster={video.thumbnailUrl}
              title={video.title}
              autoPlay={false}
            />

            {/* Video Title */}
            <h1 className="text-xl md:text-2xl font-bold text-white leading-snug">
              {video.title}
            </h1>

            {/* Author & Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
              {/* Channel Info */}
              <div className="flex items-center gap-3">
                <img
                  src={video.author.avatar}
                  alt={video.author.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-indigo-500/30"
                />
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-white text-sm md:text-base">
                    <span>{video.author.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 fill-indigo-400/20" />
                  </div>
                  <div className="text-xs text-slate-400">{video.author.subscribers}</div>
                </div>

                <button
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={`mr-3 px-4 py-2 rounded-xl text-xs font-bold transition transform active:scale-95 ${
                    isSubscribed
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/20'
                  }`}
                >
                  {isSubscribed ? 'مشترك ✓' : 'اشتراك'}
                </button>
              </div>

              {/* Interactive Action Buttons */}
              <div className="flex items-center gap-2">
                {/* Like Button */}
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition ${
                    hasLiked
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <ThumbsUp className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
                  <span>{likes.toLocaleString()}</span>
                </button>

                {/* Share Button */}
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800 transition"
                  title="نسخ رابط الفيديو"
                >
                  {copiedShare ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span>مشاركة</span>
                    </>
                  )}
                </button>

                {/* Save Button */}
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-2 rounded-xl text-xs transition border ${
                    isSaved
                      ? 'bg-indigo-600/20 text-indigo-400 border-indigo-500/40'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border-slate-800'
                  }`}
                  title="حفظ الفيديو"
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            {/* Video Description Box */}
            <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 text-sm">
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-2">
                <span className="flex items-center gap-1 text-slate-200">
                  <Eye className="w-3.5 h-3.5 text-indigo-400" />
                  {video.views} مشاهدة
                </span>
                <span>{video.createdAt}</span>
                <span className="bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-md text-[11px]">
                  {video.category}
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                {video.description}
              </p>

              {video.tags && (
                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-800/60">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-indigo-400 hover:underline cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Comments Section */}
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <h3 className="font-bold text-white text-base md:text-lg">
                  التعليقات ({comments.length})
                </h3>
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} className="flex gap-3">
                <input
                  type="text"
                  placeholder="أضف تعليقاً على الفيديو..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                />
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Send className="w-4 h-4 rotate-180" />
                  <span>إرسال</span>
                </button>
              </form>

              {/* Comments List */}
              <div className="flex flex-col gap-3 mt-2">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="flex gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60"
                  >
                    <img
                      src={comment.avatar}
                      alt={comment.author}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-slate-200">{comment.author}</span>
                        <span className="text-slate-500">{comment.time}</span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-300">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related / Suggested Videos Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-bold text-white text-base">فيديوهات مقترحة</h3>

            <div className="flex flex-col gap-3">
              {relatedVideos.map((item) => (
                <Link
                  key={item.id}
                  href={`/watch/${item.id}`}
                  className="group flex gap-3 p-2 rounded-xl bg-slate-900/30 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition"
                >
                  <div className="relative w-36 aspect-video rounded-lg overflow-hidden bg-slate-950 flex-shrink-0">
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 text-[10px] font-semibold text-white px-1.5 py-0.5 rounded">
                      {item.duration}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between flex-1 min-w-0 py-0.5">
                    <h4 className="text-xs font-semibold text-slate-200 line-clamp-2 group-hover:text-indigo-400 transition leading-snug">
                      {item.title}
                    </h4>
                    <div className="text-[11px] text-slate-400 truncate">
                      {item.author.name}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500">
                      <span>{item.views} مشاهدة</span>
                      <span>•</span>
                      <span>{item.createdAt}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
