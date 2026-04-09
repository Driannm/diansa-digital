"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { Track } from "@/Types";
import { formatDuration } from "@/lib/utilities";
import { musicGenres } from "./musicData";

interface MusicPlayerProps {
  tracks: Track[];
}

export default function MusicPlayer({ tracks }: MusicPlayerProps) {
  const [activeGenre, setActiveGenre] = useState("Semua");
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filtered =
    activeGenre === "Semua" ? tracks : tracks.filter((t) => t.genre === activeGenre);

  useEffect(() => {
    if (!currentTrack || !audioRef.current) return;
    audioRef.current.src = currentTrack.src;
    if (isPlaying) audioRef.current.play().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrack]);

  const handlePlay = useCallback(
    (track: Track) => {
      if (currentTrack?.id === track.id) {
        if (isPlaying) {
          audioRef.current?.pause();
          setIsPlaying(false);
        } else {
          audioRef.current?.play().catch(() => {});
          setIsPlaying(true);
        }
      } else {
        setCurrentTrack(track);
        setIsPlaying(true);
        setProgress(0);
        setCurrentTime(0);
      }
    },
    [currentTrack, isPlaying]
  );

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const pct =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(isNaN(pct) ? 0 : pct);
    setCurrentTime(Math.floor(audioRef.current.currentTime));
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !currentTrack) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audioRef.current.currentTime =
      ((e.clientX - rect.left) / rect.width) * audioRef.current.duration;
  };

  return (
    <div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Genre tabs — lime accent on dark, bukan black-on-white */}
      <div className="flex gap-2 flex-wrap mb-10">
        {musicGenres.map((genre) => (
          <button
            key={genre}
            onClick={() => setActiveGenre(genre)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              activeGenre === genre
                ? "bg-[#d4f04a] text-[#1a1a18] border-[#d4f04a]"
                : "bg-transparent text-white/50 border-white/15 hover:border-white/30 hover:text-white/80"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Track grid — 2 kolom, bukan list vertikal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map((track) => {
          const isActive = currentTrack?.id === track.id;

          return (
            <div
              key={track.id}
              onClick={() => handlePlay(track)}
              className={`group relative flex items-center gap-4 rounded-2xl p-4 border cursor-pointer transition-all duration-300 ${
                isActive
                  ? "bg-white/10 border-[#d4f04a]/40 shadow-lg shadow-[#d4f04a]/5"
                  : "bg-white/[0.04] border-white/8 hover:bg-white/[0.08] hover:border-white/15"
              }`}
            >
              {/* Cover art */}
              <div
                className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${track.coverGradient} shrink-0 flex items-center justify-center overflow-hidden`}
              >
                {isActive && isPlaying ? (
                  /* Equalizer animasi */
                  <div className="flex items-end gap-[3px] h-6 px-1">
                    {[4, 7, 5].map((h, i) => (
                      <span
                        key={i}
                        className="w-1.5 rounded-full bg-[#1a1a18] animate-bounce"
                        style={{
                          height: `${h * 2}px`,
                          animationDelay: `${i * 0.12}s`,
                          animationDuration: "0.6s",
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-[#1a1a18]/30"
                        : "bg-[#1a1a18]/20 group-hover:bg-[#1a1a18]/30"
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#1a1a18">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Info + progress */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p
                    className={`text-sm font-semibold truncate ${
                      isActive ? "text-white" : "text-white/80"
                    }`}
                  >
                    {track.title}
                  </p>
                  {track.popular && (
                    <span className="shrink-0 bg-[#d4f04a] text-[#1a1a18] text-[9px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-full">
                      Hot
                    </span>
                  )}
                </div>
                <p
                  className={`text-xs truncate ${
                    isActive ? "text-white/50" : "text-white/30"
                  }`}
                >
                  {track.artist} · {track.genre}
                </p>

                {/* Progress bar — hanya saat aktif */}
                {isActive && (
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="text-[10px] text-white/30 w-5 shrink-0">
                      {formatDuration(currentTime)}
                    </span>
                    <div
                      className="flex-1 h-0.5 bg-white/15 rounded-full cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSeek(e);
                      }}
                    >
                      <div
                        className="h-full bg-[#d4f04a] rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-white/30 w-5 shrink-0 text-right">
                      {formatDuration(track.duration)}
                    </span>
                  </div>
                )}
              </div>

              {/* Durasi + play button */}
              <div className="flex items-center gap-2 shrink-0">
                {!isActive && (
                  <span className="text-xs text-white/25">
                    {formatDuration(track.duration)}
                  </span>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlay(track);
                  }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-[#d4f04a] text-[#1a1a18]"
                      : "bg-white/8 text-white/50 group-hover:bg-white/15 group-hover:text-white"
                  }`}
                >
                  {isActive && isPlaying ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-white/40 py-16 text-sm">
          Belum ada lagu di genre ini.
        </p>
      )}
    </div>
  );
}