"use client";

import Link from "next/link";
import { useGSAP } from "@/hooks/useGSAP";

const stats = [
  { value: "1.200+", label: "Undangan Dibuat" },
  { value: "98%", label: "Klien Puas" },
  { value: "40+", label: "Tema Tersedia" },
  { value: "4.9★", label: "Rating Google" },
];

export default function HeroSection() {
  const containerRef = useGSAP((gsap, ScrollTrigger) => {
    // ── Hero: timeline (load animation) ──
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-badge",   { opacity: 0, y: 16, duration: 0.6 })
      .from(".hero-title",   { opacity: 0, y: 32, duration: 0.7 }, "-=0.3")
      .from(".hero-desc",    { opacity: 0, y: 24, duration: 0.6 }, "-=0.4")
      .from(".hero-cta",     { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
      .from(".hero-trust",   { opacity: 0, y: 16, duration: 0.5 }, "-=0.3")
      .from(".hero-mockup",  { opacity: 0, scale: 0.9, duration: 0.8, ease: "back.out(1.4)" }, "-=0.5");

    // ── Stats: trigger per-item with reverse animation
    gsap.utils.toArray<HTMLElement>(".hero-stat-item").forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse", // ← important for reverse on scroll up
        },
      });
    });

    ScrollTrigger.refresh(); // ensure correct start positions
  });

  return (
    <section
      id="home"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="min-h-screen pt-16 flex flex-col justify-center bg-[#e7e3de] dark:bg-[#1a1a18] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left Content */}
          <div>
            {/* Badge (optional – re-added for consistency) */}
            <div className="hero-badge inline-flex items-center gap-2 bg-[#d4f04a]/40 dark:bg-[#d4f04a]/20 border border-[#d4f04a] dark:border-[#d4f04a]/50 rounded-full px-4 py-1.5 text-xs font-medium text-[#1a1a18] dark:text-white mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Tersedia untuk pesanan baru
            </div>

            <h1 className="hero-title font-display text-5xl lg:text-6xl font-bold leading-[1.1] text-[#1a1a18] dark:text-white">
              Undangan Digital{" "}
              <em className="not-italic text-[#1a1a18]/50 dark:text-white/50">
                Modern
              </em>{" "}
              &amp; Elegan
            </h1>

            <p className="hero-desc mt-6 text-[#6b6860] dark:text-gray-400 text-lg leading-relaxed max-w-md">
              Desain elegan, fitur lengkap, dan siap dibagikan ke siapa saja.
              Buat undangan impian Anda bersama Diansa Digital.
            </p>

            <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#tema"
                className="bg-[#1a1a18] dark:bg-[#d4f04a] text-white dark:text-[#1a1a18] px-7 py-3.5 rounded-xl font-medium hover:bg-[#1a1a18]/85 dark:hover:bg-[#c8e840] transition-colors"
              >
                Pesan Sekarang
              </Link>
              <Link
                href="#portofolio"
                className="flex items-center gap-2 text-sm font-medium text-[#1a1a18] dark:text-white hover:text-[#1a1a18]/70 dark:hover:text-white/70 transition-colors"
              >
                Lihat Portofolio
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="hero-trust mt-12 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#e7e3de] dark:border-[#1a1a18] bg-gradient-to-br from-[#d4f04a] to-[#a8c820] flex items-center justify-center text-xs font-bold text-[#1a1a18]"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#6b6860] dark:text-gray-400">
                Dipercaya{" "}
                <span className="font-semibold text-[#1a1a18] dark:text-white">
                  1.200+
                </span>{" "}
                pasangan
              </p>
            </div>
          </div>

          {/* Right: Mockup */}
          <div className="hero-mockup relative hidden lg:flex justify-center items-center">
            <div className="absolute w-80 h-80 rounded-full bg-[#d4f04a]/30 dark:bg-[#d4f04a]/20 blur-3xl" />
            <div className="relative z-10 w-64 h-[500px] rounded-[40px] bg-[#1a1a18] dark:bg-[#1a1a18] border-4 border-[#1a1a18] shadow-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-[#f5f0e8] to-[#e8e0d0] dark:from-[#2a2a28] dark:to-[#1a1a18] flex flex-col items-center justify-center p-6 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-[#d4f04a] flex items-center justify-center mb-4 shadow-lg">
                  <span className="font-display text-xl font-bold text-[#1a1a18]">DD</span>
                </div>
                <p className="font-display text-center text-sm font-semibold text-[#1a1a18] dark:text-white leading-snug">
                  Budi & Sari
                </p>
                <p className="text-xs text-[#6b6860] dark:text-gray-400 mt-1">
                  Sabtu, 14 Februari 2026
                </p>
                <div className="mt-4 w-full h-px bg-[#1a1a18]/10 dark:bg-white/10" />
                <p className="mt-4 text-xs text-center text-[#6b6860] dark:text-gray-400">
                  Dengan penuh syukur kami mengundang kehadiran Anda...
                </p>
                <div className="mt-6 w-full bg-[#1a1a18] dark:bg-[#d4f04a] rounded-xl py-2.5 text-center">
                  <span className="text-white dark:text-[#1a1a18] text-xs font-medium">
                    Buka Undangan
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute top-8 -right-4 bg-white dark:bg-[#1a1a18] rounded-xl px-3 py-2 shadow-lg border border-black/5 dark:border-white/10 text-xs font-medium flex items-center gap-2 text-[#1a1a18] dark:text-white">
              <span className="text-yellow-500">★</span> 4.9/5 Rating
            </div>
            <div className="absolute bottom-12 -left-8 bg-[#d4f04a] dark:bg-[#d4f04a]/80 rounded-xl px-3 py-2 shadow-lg text-xs font-medium text-[#1a1a18]">
              🎉 Sudah aktif dalam 24 jam
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats bg-[#d4f04a]/60 dark:bg-[#d4f04a]/20 border border-[#d4f04a] dark:border-[#d4f04a]/50 rounded-2xl px-8 py-7 grid grid-cols-2 md:grid-cols-4 gap-6 text-center transition-colors duration-300">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat-item">
              <p className="font-display text-3xl font-bold text-[#1a1a18] dark:text-white">
                {stat.value}
              </p>
              <p className="text-sm text-[#6b6860] dark:text-gray-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}