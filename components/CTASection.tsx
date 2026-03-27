"use client";

import { useGSAP } from "@/hooks/useGSAP";
import { WhatsappIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";


export default function CTASection() {
  const ref = useGSAP((gsap) => {
    gsap.from(".cta-box", {
      opacity: 0, scale: 0.96, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ".cta-box", start: "top 85%" },
    });

    gsap.from(".cta-text", {
      opacity: 0, x: -40, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: ".cta-box", start: "top 80%" },
    });

    gsap.from(".cta-buttons", {
      opacity: 0, x: 40, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: ".cta-box", start: "top 80%" },
    });
  });

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="cta-box bg-[#d4f04a] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/20 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-32 w-40 h-40 rounded-full bg-[#1a1a18]/5 translate-y-1/2 pointer-events-none" />

          <div className="cta-text relative z-10 max-w-lg">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a1a18] leading-tight">
              Siap Buat Undangan Impianmu?
            </h2>
            <p className="mt-4 text-[#1a1a18]/70 text-lg">
              Konsultasi gratis, tanpa komitmen. Tim kami siap membantu mewujudkan undangan digitalmu.
            </p>
          </div>

          <div className="cta-buttons relative z-10 flex flex-col gap-3 min-w-max">
            <a
              href="https://wa.me/628xxx"
              className="bg-[#1a1a18] text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-[#1a1a18]/85 transition-colors flex items-center gap-2"
            >
              <HugeiconsIcon icon={WhatsappIcon} />
              Chat WhatsApp
            </a>
            <a
              href="#tema"
              className="border border-[#1a1a18]/30 text-[#1a1a18] px-8 py-4 rounded-xl font-semibold text-center hover:bg-[#1a1a18]/10 transition-colors"
            >
              Lihat Tema Dulu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}