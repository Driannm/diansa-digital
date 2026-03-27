"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  PaintBoardIcon,
  FileEditIcon,
  Share01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { useGSAP } from "@/hooks/useGSAP";

type Step = {
  number: string;
  icon: IconSvgElement;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    icon: PaintBoardIcon,
    title: "Pilih Tema",
    description: "Jelajahi 40+ tema undangan elegan yang bisa dikustomisasi sesuai selera dan konsep acaramu.",
  },
  {
    number: "02",
    icon: FileEditIcon,
    title: "Isi Data",
    description: "Lengkapi detail acara: nama, tanggal, lokasi, foto, dan musik background favoritmu.",
  },
  {
    number: "03",
    icon: Share01Icon,
    title: "Bagikan Link",
    description: "Dapatkan link undangan dalam 24 jam. Bagikan ke WhatsApp, Instagram, atau media sosial lainnya.",
  },
];

export default function HowItWorksSection() {
  const containerRef = useGSAP((gsap, ScrollTrigger) => {
    // Header animation
    gsap.from(".hiw-header", {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hiw-header",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Cards animation with stagger
    gsap.utils.toArray<HTMLElement>(".hiw-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // CTA button animation
    gsap.from(".hiw-cta", {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hiw-cta",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    ScrollTrigger.refresh();
  });

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="py-24 bg-[#1a1a18] dark:bg-[#1a1a18] text-white relative overflow-hidden transition-colors duration-500"
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#d4f04a]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#d4f04a]/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="hiw-header text-center mb-16">
          <p className="text-sm font-medium text-[#d4f04a] dark:text-[#d4f04a] mb-3">
            — Cara Kerja
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Mudah dalam{" "}
            <em className="not-italic text-white/40 dark:text-white/40">
              3 Langkah
            </em>
          </h2>
          <p className="mt-4 text-white/60 dark:text-white/60 max-w-md mx-auto text-lg">
            Dari pilih tema hingga undangan siap dibagikan, cukup dalam hitungan menit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-white/10 dark:bg-white/10" />
          {steps.map((step) => (
            <div
              key={step.number}
              className="hiw-card relative bg-white/5 dark:bg-white/5 rounded-2xl p-8 border border-white/10 dark:border-white/10 hover:border-[#d4f04a]/30 transition-all hover:bg-white/8"
            >
              <span className="font-display text-5xl font-bold text-white/10 dark:text-white/10 block mb-4">
                {step.number}
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#d4f04a]/15 border border-[#d4f04a]/20 flex items-center justify-center mb-5 text-[#d4f04a]">
                <HugeiconsIcon icon={step.icon} size={24} color="currentColor" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-white/60 dark:text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="hiw-cta mt-16 text-center">
          <a
            href="#tema"
            className="inline-flex items-center gap-2 bg-[#d4f04a] text-[#1a1a18] px-8 py-4 rounded-xl font-semibold hover:bg-[#c8e840] transition-colors"
          >
            Mulai Sekarang
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} color="currentColor" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}