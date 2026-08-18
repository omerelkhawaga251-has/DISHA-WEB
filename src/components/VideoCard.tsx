import React from 'react';
import Link from 'next/link';
import { Video } from '@/types/video';
import { Play, CheckCircle2, Eye, Clock } from 'lucide-react';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <Link
      href={`/watch/${video.id}`}
      className="group flex flex-col bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-indigo-500/50 rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Duration Badge */}
        <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-sm text-white text-xs font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
          <Clock className="w-3 h-3 text-slate-300" />
          <span>{video.duration}</span>
        </div>

        {/* Hover Play Button Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </div>
        </div>

        {/* Category Tag */}
        <div className="absolute top-2.5 right-2.5 bg-indigo-600/90 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full">
          {video.category}
        </div>
      </div>

      {/* Video Info */}
      <div className="p-4 flex gap-3 flex-1">
        {/* Author Avatar */}
        <div className="flex-shrink-0">
          <img
            src={video.author.avatar}
            alt={video.author.name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-700/50"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="font-semibold text-slate-100 text-sm md:text-base leading-snug line-clamp-2 group-hover:text-indigo-400 transition-colors">
            {video.title}
          </h3>

          <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
            <span>{video.author.name}</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400/20" />
          </div>

          <div className="mt-2 flex items-center gap-3 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {video.views} مشاهدة
            </span>
            <span>•</span>
            <span>{video.createdAt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
