"use client";

import { useGSAP } from "@/hooks/useGSAP";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  WhatsappFreeIcons,
} from "@hugeicons/core-free-icons";
import PageHeader from "@/components/shared/PageHeader";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQCategory from "@/components/FAQ/FAQCategory";
import { faqData } from "@/components/FAQ/faqData";
import CTABlock from "@/components/shared/CTABlock";

export default function FAQPage() {
  const ref = useGSAP((gsap) => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".faq-badge", { opacity: 0, y: 16, duration: 0.5 })
      .from(".faq-title", { opacity: 0, y: 32, duration: 0.7 }, "-=0.3")
      .from(".faq-desc", { opacity: 0, y: 24, duration: 0.6 }, "-=0.4")
      .from(".faq-back", { opacity: 0, x: -16, duration: 0.4 }, "-=0.3")
      .from(".faq-meta", { opacity: 0, y: 16, duration: 0.5 }, "-=0.3");

    gsap.utils.toArray<HTMLElement>(".faq-cat").forEach((el) => {
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
          badge="Pusat Bantuan"
          title="Pertanyaan Umum"
          description="Temukan jawaban atas pertanyaan yang paling sering diajukan terkait layanan kami. Jika Anda membutuhkan bantuan lebih lanjut, tim kami siap membantu Anda secara langsung."
          meta="Diperbarui terakhir: 1 Maret 2025"
          backHref="/"
          backLabel="Kembali ke Beranda"
          badgeClassName="faq-badge"
          titleClassName="faq-title"
          descriptionClassName="faq-desc"
          metaClassName="faq-meta"
          backButtonClassName="faq-back"
        />

        {/* FAQ Categories */}
        <div className="mt-16 space-y-4">
          {faqData.map((category, i) => (
            <div key={i} className="faq-cat">
              <FAQCategory title={category.title} items={category.items} />
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <CTABlock
          title="Masih ada pertanyaan?"
          description="Tim Diansa aktif setiap hari kerja. Respons WhatsApp biasanya dalam 1–2 jam."
          buttons={[
            {
              label: "Chat WhatsApp",
              href: "https://wa.me/628xxx",
              icon: WhatsappFreeIcons,
              variant: "primary",
              external: true,
            },
            {
              label: "Kirim Email",
              href: "mailtoL:support@diansadigital.id",
              icon: Mail01Icon,
              variant: "secondary",
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
