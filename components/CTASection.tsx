"use client";

import { useGSAP } from "@/hooks/useGSAP";

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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
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