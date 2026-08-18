'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  Sliders,
  PictureInPicture,
  Loader2,
  RefreshCw,
} from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  autoPlay?: boolean;
}

// Helper to check if URL is YouTube
function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`
    : null;
}

export default function VideoPlayer({
  src,
  poster,
  title,
  autoPlay = false,
}: VideoPlayerProps) {
  const isYouTube = !!getYouTubeEmbedUrl(src);
  const youtubeUrl = getYouTubeEmbedUrl(src);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [hasError, setHasError] = useState(false);

  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reset states when src changes
  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
    setIsPlaying(false);
    setCurrentTime(0);
  }, [src]);

  // If YouTube, render responsive iframe embed
  if (isYouTube && youtubeUrl) {
    return (
      <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
        <iframe
          src={youtubeUrl}
          title={title || 'YouTube Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    );
  }

  // Auto-hide controls after inactivity
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
        setShowSpeedMenu(false);
      }, 3000);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => {
        console.warn('Autoplay error:', err);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
      setHasError(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      videoRef.current.muted = false;
      videoRef.current.volume = volume || 1;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const skipTime = (seconds: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.min(
      Math.max(0, videoRef.current.currentTime + seconds),
      duration || 100
    );
  };

  const changePlaybackRate = (rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackRate(rate);
      setShowSpeedMenu(false);
    }
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen().catch((err) => console.error(err));
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen().catch((err) => console.error(err));
      setIsFullscreen(false);
    }
  };

  const togglePiP = async () => {
    if (!videoRef.current) return;
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (document.pictureInPictureEnabled) {
        await videoRef.current.requestPictureInPicture();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const reloadVideo = () => {
    if (videoRef.current) {
      setHasError(false);
      setIsLoading(true);
      videoRef.current.load();
    }
  };

  // Format seconds to mm:ss or hh:mm:ss
  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '00:00';
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = Math.floor(secs % 60);
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.code === 'Space' || e.key === 'k') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        skipTime(5);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        skipTime(-5);
      } else if (e.key === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'm') {
        e.preventDefault();
        toggleMute();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, isMuted, duration, volume]);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl group select-none flex items-center justify-center font-sans border border-slate-800"
    >
      {/* HTML5 Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        playsInline
        preload="metadata"
        crossOrigin="anonymous"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={() => {
          setIsLoading(false);
          setHasError(false);
        }}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => {
          setIsLoading(false);
          setHasError(false);
        }}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        onClick={togglePlay}
        className="w-full h-full object-contain cursor-pointer"
      />

      {/* Loading Spinner */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
          <Loader2 className="w-12 h-12 text-indigo-500 animate-spin" />
        </div>
      )}

      {/* Error State with Retry */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/95 text-white p-6 text-center z-20">
          <p className="text-red-400 font-semibold mb-2 text-base">تعذر تحميل أو تشغيل الفيديو</p>
          <p className="text-xs text-slate-400 max-w-md mb-4">
            تأكد من وجود ملف الفيديو في مجلد public أو صحة الرابط الخارجي.
          </p>
          <button
            onClick={reloadVideo}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-lg transition"
          >
            <RefreshCw className="w-4 h-4" />
            <span>إعادة المحاولة</span>
          </button>
        </div>
      )}

      {/* Big Center Play/Pause Overlay */}
      {!isPlaying && !isLoading && !hasError && (
        <button
          onClick={togglePlay}
          aria-label="تشغيل الفيديو"
          className="absolute z-10 w-20 h-20 rounded-full bg-indigo-600/90 hover:bg-indigo-600 text-white flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 active:scale-95 backdrop-blur-sm"
        >
          <Play className="w-10 h-10 fill-current ml-1" />
        </button>
      )}

      {/* Top Title Overlay (when controls active) */}
      <div
        className={`absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-300 pointer-events-none ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {title && <h3 className="text-white text-base md:text-lg font-medium drop-shadow truncate">{title}</h3>}
      </div>

      {/* Bottom Controls Bar */}
      <div
        className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent px-4 py-3 transition-opacity duration-300 flex flex-col gap-2 ${
          showControls && !hasError ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        dir="ltr"
      >
        {/* Progress Bar / Seek Slider */}
        <div className="relative group/progress flex items-center h-4 cursor-pointer">
          <div className="absolute inset-x-0 h-1.5 bg-white/20 rounded-full overflow-hidden group-hover/progress:h-2.5 transition-all">
            <div
              className="h-full bg-indigo-500 rounded-full relative transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <input
            type="range"
            min="0"
            max={duration || 100}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        {/* Action Controls Row */}
        <div className="flex items-center justify-between text-white text-sm">
          {/* Left Controls (Play, Volume, Time) */}
          <div className="flex items-center gap-3">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="p-1.5 hover:bg-white/20 rounded-lg transition"
              title={isPlaying ? 'إيقاف مؤقت (Space)' : 'تشغيل (Space)'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
            </button>

            {/* Skip -10s */}
            <button
              onClick={() => skipTime(-10)}
              className="p-1.5 hover:bg-white/20 rounded-lg transition text-slate-300 hover:text-white"
              title="تراجع 10 ثوانٍ"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Skip +10s */}
            <button
              onClick={() => skipTime(10)}
              className="p-1.5 hover:bg-white/20 rounded-lg transition text-slate-300 hover:text-white"
              title="تقديم 10 ثوانٍ"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-1.5 group/vol">
              <button
                onClick={toggleMute}
                className="p-1.5 hover:bg-white/20 rounded-lg transition"
                title={isMuted ? 'إلغاء الكتم (M)' : 'كتم الصوت (M)'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5 text-red-400" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-indigo-500 opacity-80 group-hover/vol:opacity-100 transition"
              />
            </div>

            {/* Time Display */}
            <div className="text-xs text-slate-300 font-mono select-none">
              <span>{formatTime(currentTime)}</span>
              <span className="mx-1 text-slate-500">/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Right Controls (Speed, PiP, Fullscreen) */}
          <div className="flex items-center gap-2">
            {/* Speed Selector Menu */}
            <div className="relative">
              <button
                onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                className="px-2 py-1 hover:bg-white/20 rounded-lg text-xs font-semibold tracking-wide transition flex items-center gap-1"
                title="سرعة التشغيل"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>{playbackRate}x</span>
              </button>

              {showSpeedMenu && (
                <div className="absolute bottom-10 right-0 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl p-1 shadow-2xl flex flex-col gap-1 min-w-[90px] z-20">
                  {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => changePlaybackRate(rate)}
                      className={`text-xs px-3 py-1.5 text-left rounded-lg transition ${
                        playbackRate === rate
                          ? 'bg-indigo-600 text-white font-bold'
                          : 'text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {rate === 1 ? 'عادي (1x)' : `${rate}x`}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Picture in Picture */}
            <button
              onClick={togglePiP}
              className="p-1.5 hover:bg-white/20 rounded-lg transition text-slate-300 hover:text-white"
              title="نافذة عائمة (PiP)"
            >
              <PictureInPicture className="w-4 h-4" />
            </button>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="p-1.5 hover:bg-white/20 rounded-lg transition"
              title={isFullscreen ? 'خروج من الشاشة الكاملة (F)' : 'ملء الشاشة (F)'}
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
