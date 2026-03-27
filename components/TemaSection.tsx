"use client";

import Link from "next/link";
import { useGSAP } from "@/hooks/useGSAP";

const themes = [
  { id: 1, name: "Rustic Garden", category: "Pernikahan", color: "from-[#c8b89a] to-[#a89070]", accent: "#8b6914", badge: "Terlaris" },
  { id: 2, name: "Modern Minimal", category: "Pernikahan", color: "from-[#e8e8e8] to-[#c8c8c8]", accent: "#333", badge: "Baru" },
  { id: 3, name: "Floral Bloom", category: "Pernikahan", color: "from-[#f9c8d4] to-[#e8a0b0]", accent: "#c0507a", badge: null },
  { id: 4, name: "Dark Luxury", category: "Pernikahan", color: "from-[#2a2020] to-[#1a1018]", accent: "#d4b060", badge: "Premium" },
  { id: 5, name: "Tropical Leaf", category: "Ulang Tahun", color: "from-[#a8d8a0] to-[#70b868]", accent: "#2d6a22", badge: null },
  { id: 6, name: "Pastel Dream", category: "Khitanan", color: "from-[#c8e0f8] to-[#a0c8f0]", accent: "#2060a0", badge: null },
];

const categories = ["Semua", "Pernikahan", "Ulang Tahun", "Khitanan", "Wisuda"];

export default function TemaSection() {
  const containerRef = useGSAP((gsap, ScrollTrigger) => {
    // Header animation
    gsap.from(".tema-header", {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".tema-header",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Tabs animation
    gsap.from(".tema-tabs", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".tema-tabs",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Cards animation with stagger
    gsap.utils.toArray<HTMLElement>(".tema-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Refresh ScrollTrigger to recalculate positions
    ScrollTrigger.refresh();
  });

  return (
    <section
      id="tema"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="py-24 bg-[#e7e3de] dark:bg-[#1a1a18] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="tema-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-[#6b6860] dark:text-gray-400 mb-2">
              — Koleksi Tema
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a1a18] dark:text-white leading-tight">
              Temukan Tema{" "}
              <em className="not-italic text-[#1a1a18]/40 dark:text-white/40">
                Impianmu
              </em>
            </h2>
          </div>
          <Link
            href="/themes"
            className="text-sm font-medium text-[#1a1a18] dark:text-white border border-[#1a1a18]/20 dark:border-white/20 px-5 py-2.5 rounded-full hover:bg-[#1a1a18] hover:text-white dark:hover:bg-white dark:hover:text-[#1a1a18] transition-all"
          >
            Lihat Semua Tema →
          </Link>
        </div>

        <div className="tema-tabs flex gap-2 flex-wrap mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                i === 0
                  ? "bg-[#1a1a18] text-white border-[#1a1a18] dark:bg-white dark:text-[#1a1a18] dark:border-white"
                  : "bg-transparent text-[#6b6860] dark:text-gray-400 border-[#6b6860]/30 dark:border-gray-600 hover:border-[#1a1a18] dark:hover:border-white hover:text-[#1a1a18] dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className="tema-card theme-card group cursor-pointer rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#1a1a18]/80 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`h-52 bg-gradient-to-br ${theme.color} relative flex items-center justify-center`}
              >
                <div className="w-28 h-36 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 flex flex-col items-center justify-center gap-1 shadow-xl">
                  <div
                    className="w-8 h-8 rounded-full border-2"
                    style={{
                      borderColor: theme.accent,
                      backgroundColor: theme.accent + "30",
                    }}
                  />
                  <div className="w-16 h-1.5 rounded-full bg-white/50 mt-1" />
                  <div className="w-12 h-1 rounded-full bg-white/30" />
                  <div className="w-14 h-1 rounded-full bg-white/30" />
                </div>
                {theme.badge && (
                  <span className="absolute top-3 left-3 bg-[#d4f04a] text-[#1a1a18] text-xs font-semibold px-2.5 py-1 rounded-full">
                    {theme.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-[#1a1a18] px-4 py-2 rounded-full text-sm font-medium">
                    Lihat Demo →
                  </span>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#1a1a18] dark:text-white text-sm">
                    {theme.name}
                  </p>
                  <p className="text-xs text-[#6b6860] dark:text-gray-400 mt-0.5">
                    {theme.category}
                  </p>
                </div>
                <button className="text-xs font-medium border border-[#1a1a18]/20 dark:border-white/20 px-3 py-1.5 rounded-full hover:bg-[#1a1a18] hover:text-white dark:hover:bg-white dark:hover:text-[#1a1a18] transition-all">
                  Pilih
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}