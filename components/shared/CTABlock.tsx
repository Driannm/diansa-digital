"use client";

import Link from "next/link";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import { useGSAP } from "@/hooks/useGSAP";

export type ButtonVariant = "primary" | "secondary";

export interface CTAButton {
  label: string;
  href: string;
  icon?: IconSvgElement;
  variant: ButtonVariant;
  external?: boolean;
}

interface CTABlockProps {
  title: string;
  description: string;
  buttons: CTAButton[];
  className?: string;
}

export default function CTABlock({
  title,
  description,
  buttons,
  className = "",
}: CTABlockProps) {
  const containerRef = useGSAP((gsap) => {
    gsap.from(".cta-box", {
      opacity: 0,
      scale: 0.96,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-box",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".cta-text", {
      opacity: 0,
      x: -40,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-box",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".cta-buttons", {
      opacity: 0,
      x: 40,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-box",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  const renderButton = (btn: CTAButton, idx: number) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 whitespace-nowrap";

    const variantClasses = {
      primary:
        "bg-[#d4f04a] text-[#1a1a18] hover:bg-[#c8e840]/90 dark:bg-[#1a1a18] dark:text-white dark:hover:bg-[#1a1a18]/85",
      secondary:
        "bg-white/8 border border-white/15 text-white hover:bg-white/15 dark:border-[#1a1a18]/30 dark:text-[#1a1a18] dark:hover:bg-[#1a1a18]/10",
    };

    const content = (
      <>
        {btn.icon && (
          <HugeiconsIcon icon={btn.icon} size={18} strokeWidth={2} />
        )}
        {btn.label}
      </>
    );

    const commonProps = {
      className: `${baseClasses} ${variantClasses[btn.variant]}`,
    };

    if (btn.external || btn.href.startsWith("http")) {
      return (
        <a
          key={idx}
          href={btn.href}
          target="_blank"
          rel="noopener noreferrer"
          {...commonProps}
        >
          {content}
        </a>
      );
    }

    return (
      <Link key={idx} href={btn.href} {...commonProps}>
        {content}
      </Link>
    );
  };

  return (
    <div ref={containerRef as React.RefObject<HTMLDivElement>} className={`mt-8 ${className}`}>
      <div className="cta-box bg-[#1a1a18] dark:bg-[#d4f04a] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center md:items-center justify-between gap-10 relative overflow-hidden text-center md:text-left transition-colors duration-800">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#d4f04a]/5 dark:bg-[#1a1a18]/5 -translate-y-1/3 translate-x-1/3 pointer-events-none transition-colors duration-800" />
        <div className="absolute bottom-0 left-32 w-40 h-40 rounded-full bg-[#d4f04a]/5 dark:bg-[#1a1a18]/5 translate-y-1/2 pointer-events-none transition-colors duration-800" />

        {/* Text section */}
        <div className="cta-text relative z-10 max-w-lg">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white dark:text-black leading-tight transition-colors duration-100">
            {title}
          </h2>
          <p className="mt-4 text-white/70 dark:text-black/70 text-lg transition-colors duration-100">
            {description}
          </p>
        </div>

        {/* Buttons section */}
        <div className="cta-buttons relative z-10 flex flex-col gap-3 min-w-max transition-colors duration-100">
          {buttons.map(renderButton)}
        </div>
      </div>
    </div>
  );
}