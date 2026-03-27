"use client";

import { useGSAP } from "@/hooks/useGSAP";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactMap from "@/components/Contact/ContactMap";
import PageHeader from "@/components/shared/PageHeader";

export default function ContactPage() {
  const ref = useGSAP((gsap) => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".ct-badge", { opacity: 0, y: 16, duration: 0.5 })
      .from(".ct-title", { opacity: 0, y: 32, duration: 0.7 }, "-=0.3")
      .from(".ct-desc", { opacity: 0, y: 24, duration: 0.6 }, "-=0.4")
      .from(".ct-back", { opacity: 0, x: -16, duration: 0.4 }, "-=0.3")
      .from(".ct-meta", { opacity: 0, y: 16, duration: 0.5 }, "-=0.3");
    
    gsap.utils.toArray<HTMLElement>(".ct-block").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  return ( 
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-[#e7e3de] dark:bg-[#1a1a18] min-h-screen pt-24"
    >
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pb-32">
        {/* Header */}
        <PageHeader
          badge="Hubungi Kami"
          title="Kami Ada Untuk Anda"
          description="Punya pertanyaan, ingin pesan undangan, atau sekadar ingin
            mengobrol? Kami selalu senang mendengar dari Anda."
          meta="Diperbarui terakhir: 1 Maret 2025"
          backHref="/"
          backLabel="Kembali ke Beranda"
          badgeClassName="ct-badge"
          titleClassName="ct-title"
          descriptionClassName="ct-desc"
          metaClassName="ct-meta"
          backButtonClassName="ct-back"
        />

        {/* Main layout: Form kiri + Info kanan */}
        <div className="ct-block mt-14 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Kiri: Form */}
          <ContactForm />

          {/* Kanan: Info + WhatsApp + Note */}
          <ContactInfo />
        </div>

        {/* Google Maps */}
        <div className="ct-block mt-8">
          <ContactMap />
        </div>
      </main>

      <Footer />
    </div>
  );
}
