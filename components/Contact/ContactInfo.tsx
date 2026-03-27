"use client";

import {
  Location01Icon,
  Clock01Icon,
  Mail01Icon,
  WhatsappIcon,
  InstagramIcon,
  TiktokIcon,
  ArrowRight01Icon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const infoItems = [
  {
    icon: Location01Icon,
    label: "Alamat",
    value: "Jl. Kemang Raya No. 12, Jakarta Selatan 12730",
  },
  {
    icon: Clock01Icon,
    label: "Jam Operasional",
    value: "Senin – Sabtu, 08.00 – 21.00 WIB",
  },
  {
    icon: Mail01Icon,
    label: "Email",
    value: "halo@diansadigital.id",
    href: "mailto:halo@diansadigital.id",
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890",
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/diansa.digital",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@diansadigital",
    icon: TiktokIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281234567890",
    icon: WhatsappIcon,
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {/* Info cards */}
      <div className="bg-white/60 dark:bg-[#1a1a18]/60 border border-[#1a1a18]/8 dark:border-white/10 rounded-2xl p-6 flex flex-col gap-5 transition-colors duration-300">
        <h2 className="font-display text-xl font-bold text-[#1a1a18] dark:text-white">
          Informasi Kontak
        </h2>

        {infoItems.map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <div className="mt-0.5 text-[#1a1a18] dark:text-white">
              <HugeiconsIcon icon={item.icon} size={18} />
            </div>

            <div>
              <p className="text-[11px] font-semibold text-[#1a1a18]/40 dark:text-white/40 uppercase tracking-[0.12em] mb-0.5">
                {item.label}
              </p>

              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-[#1a1a18] dark:text-white font-medium hover:text-[#6b6860] dark:hover:text-gray-300 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-[#1a1a18] dark:text-white">{item.value}</p>
              )}
            </div>
          </div>
        ))}

        {/* Divider */}
        <div className="w-full h-px bg-[#1a1a18]/8 dark:bg-white/10" />

        {/* Social links */}
        <div>
          <p className="text-[11px] font-semibold text-[#1a1a18]/40 dark:text-white/40 uppercase tracking-[0.12em] mb-3">
            Ikuti Kami
          </p>

          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-[#d4f04a] dark:bg-[#d4f04a]/80 border border-[#1a1a18]/20 dark:border-white/20 flex items-center justify-center hover:bg-[#c8e840] dark:hover:bg-[#d4f04a] transition-colors text-[#1a1a18] dark:text-[#1a1a18]"
              >
                <HugeiconsIcon icon={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20Diansa%2C%20saya%20ingin%20bertanya%20tentang%20undangan%20digital"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-[#d4f04a] dark:bg-[#d4f04a]/90 border border-[#d4f04a] dark:border-[#d4f04a]/50 rounded-2xl p-5 hover:bg-[#c8e840] dark:hover:bg-[#d4f04a] transition-colors group"
      >
        <div className="w-12 h-12 rounded-xl bg-[#1a1a18]/10 dark:bg-white/10 flex items-center justify-center shrink-0">
          <HugeiconsIcon icon={WhatsappIcon} size={22} color="#1a1a18" />
        </div>

        <div className="flex-1">
          <p className="font-semibold text-sm text-[#1a1a18] dark:text-[#1a1a18]">
            Chat Langsung
          </p>
          <p className="text-xs text-[#1a1a18]/60 dark:text-[#1a1a18]/70 mt-0.5">
            Respons dalam 1–2 jam di hari kerja
          </p>
        </div>

        <HugeiconsIcon
          icon={ArrowRight01Icon}
          size={16}
          color="#1a1a18"
        />
      </a>

      {/* Response time note */}
      <div className="flex items-start gap-4 bg-[#d4f04a]/40 dark:bg-[#d4f04a]/5 border border-[#d4f04a]/30 dark:border-[#d4f04a]/20 rounded-2xl px-6 py-5">
        <HugeiconsIcon
          icon={InformationCircleIcon}
          size={20}
          className="text-[#1a1a18] dark:text-white shrink-0 mt-0.5 transition-colors duration-300"
        />
        <p className="text-sm text-[#1a1a18] dark:text-gray-200 leading-relaxed transition-colors duration-300">
        Rata-rata waktu respons kami adalah{" "}
          <span className="font-semibold">di bawah 2 jam</span> di hari kerja.
          Untuk urusan mendesak, chat WhatsApp adalah cara tercepat.
        </p>
      </div>
    </div>
  );
}