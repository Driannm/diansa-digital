"use client";

import Link from "next/link";
import { useGSAP } from "@/hooks/useGSAP";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Home01Icon } from "@hugeicons/core-free-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const suggestions = [
  { label: "Koleksi Tema", href: "/tema" },
  { label: "Musik Undangan", href: "/music" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Hubungi Kami", href: "/contact" },
];

export default function NotFound() {
  const ref = useGSAP((gsap) => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".nf-number",  { opacity: 0, scale: 0.8, duration: 0.8, ease: "back.out(1.4)" })
      .from(".nf-title",   { opacity: 0, y: 24, duration: 0.6 }, "-=0.4")
      .from(".nf-desc",    { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
      .from(".nf-actions", { opacity: 0, y: 16, duration: 0.5 }, "-=0.3")
      .from(".nf-links",   { opacity: 0, y: 16, duration: 0.5 }, "-=0.3");

    // Float animation pada angka 404
    gsap.to(".nf-number", {
      y: -12,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-[#e7e3de] dark:bg-[#1a1a18] min-h-screen flex flex-col"
    >
      <Navbar />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center mt-28">

        {/* Dekorasi blob — konsisten HowItWorksSection */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#d4f04a]/8 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto">

          {/* 404 number besar */}
          <div className="nf-number mb-8">
            <p className="font-display font-bold text-[#1a1a18]/8 dark:text-white/5 leading-none select-none"
              style={{ fontSize: "clamp(8rem, 22vw, 16rem)" }}>
              404
            </p>
          </div>

          {/* Eyebrow */}
          <p className="text-sm font-medium text-[#6b6860] dark:text-white/40 mb-4">
            — Halaman Tidak Ditemukan
          </p>

          {/* Title — pola heading Diansa */}
          <h1 className="nf-title font-display text-3xl md:text-4xl font-bold text-[#1a1a18] dark:text-white leading-tight tracking-tight mb-4">
            Aduh, halaman ini{" "}
            <em className="not-italic text-[#1a1a18]/30 dark:text-white/25">
              tidak ada
            </em>
          </h1>

          <p className="nf-desc text-[#6b6860] dark:text-white/50 text-base leading-relaxed mb-10 max-w-sm mx-auto">
            Halaman yang Anda cari mungkin sudah dipindahkan, dihapus, atau
            URL-nya salah ketik. Tidak perlu khawatir — kami bantu arahkan.
          </p>

          {/* Primary actions */}
          <div className="nf-actions flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#1a1a18] dark:bg-white text-white dark:text-[#1a1a18] px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#1a1a18]/85 dark:hover:bg-white/85 transition-colors"
            >
              <HugeiconsIcon icon={Home01Icon} size={16} color="currentColor" strokeWidth={2} />
              Kembali ke Beranda
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border border-[#1a1a18]/20 dark:border-white/15 text-[#1a1a18] dark:text-white/70 px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-[#1a1a18]/5 dark:hover:bg-white/8 transition-colors"
            >
              Laporkan Masalah
            </Link>
          </div>

          {/* Quick links */}
          <div className="nf-links">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1a1a18]/30 dark:text-white/20 mb-4">
              Atau kunjungi
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {suggestions.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-white/60 dark:bg-white/5 border border-[#1a1a18]/8 dark:border-white/8 text-[#6b6860] dark:text-white/40 hover:text-[#1a1a18] dark:hover:text-white hover:border-[#1a1a18]/20 dark:hover:border-white/20 transition-all"
                >
                  {s.label}
                  <HugeiconsIcon icon={ArrowRight01Icon} size={12} color="currentColor" strokeWidth={2} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}