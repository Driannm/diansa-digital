"use client";

import Link from "next/link";
import { useGSAP } from "@/hooks/useGSAP";
import {
  InstagramIcon,
  TiktokIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Footer() {
  const ref = useGSAP((gsap) => {
    gsap.from(".footer-brand", {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: ".footer-brand", start: "top 90%", toggleActions: "play none none reverse", },
    });

    gsap.from(".footer-col", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: { trigger: ".footer-col", start: "top 90%", toggleActions: "play none none reverse", },
    });

    gsap.from(".footer-bottom", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: { trigger: ".footer-bottom", start: "top 95%", toggleActions: "play none none reverse", },
    });
  });

  const layanan = [
    { label: "Undangan Pernikahan", href: "/services/wedding" },
    { label: "Undangan Ulang Tahun", href: "/services/birthday" },
    { label: "Undangan Khitanan", href: "/services/circumcision" },
    { label: "Undangan Wisuda", href: "/services/graduation" },
  ];

  const informasi = [
    { label: "Tentang Kami", href: "/about-us" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontak", href: "/contact" },
  ];

  const startYear = 2023;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref as React.RefObject<HTMLElement>}
      className="border-t border-black/10 dark:border-white/10 mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="footer-brand md:col-span-2">
            <span className="font-display text-3xl font-bold text-[#1a1a18] dark:text-white transition-colors duration-500">
              Diansa Digital
            </span>
            <p className="mt-4 text-sm text-[#6b6860] dark:text-gray-400 leading-relaxed max-w-xs transition-colors duration-500">
              Undangan digital modern yang memadukan estetika elegan dengan
              teknologi terkini untuk momen terbaik hidupmu.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/diansa.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#d4f04a] border border-[#1a1a18]/20 dark:border-white/20 flex items-center justify-center hover:bg-[#c8e840] transition-colors text-[#1a1a18]"
              >
                <HugeiconsIcon icon={InstagramIcon} size={20} color="currentColor" />
              </a>
              <a
                href="https://tiktok.com/@diansadigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#d4f04a] border border-[#1a1a18]/20 dark:border-white/20 flex items-center justify-center hover:bg-[#c8e840] transition-colors text-[#1a1a18]"
              >
                <HugeiconsIcon icon={TiktokIcon} size={20} color="currentColor" />
              </a>
              <a
                href="https://wa.me/628xxx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#d4f04a] border border-[#1a1a18]/20 dark:border-white/20 flex items-center justify-center hover:bg-[#c8e840] transition-colors text-[#1a1a18]"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={20} color="currentColor" />
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div className="footer-col">
            <h4 className="text-sm font-semibold text-[#1a1a18] dark:text-white mb-4 transition-colors duration-500">
              Layanan
            </h4>
            <ul className="space-y-2.5 text-sm text-[#6b6860] dark:text-gray-400">
              {layanan.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#1a1a18] dark:hover:text-gray-300 transition-colors duration-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi */}
          <div className="footer-col">
            <h4 className="text-sm font-semibold text-[#1a1a18] dark:text-white mb-4 transition-colors duration-500">
              Informasi
            </h4>
            <ul className="space-y-2.5 text-sm text-[#6b6860] dark:text-gray-400">
              {informasi.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#1a1a18] dark:hover:text-gray-300 transition-colors duration-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom mt-12 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6b6860] dark:text-gray-400 transition-colors duration-500">
          <p>
            ©{" "}
            {startYear === currentYear
              ? startYear
              : `${startYear}–${currentYear}`}{" "}
            Diansa Digital. Semua hak dilindungi.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#1a1a18] dark:hover:text-gray-300 transition-colors duration-100"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-[#1a1a18] dark:hover:text-gray-300 transition-colors duration-100"
            >
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}