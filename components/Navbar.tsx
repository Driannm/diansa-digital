"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Tema", href: "/tema" },
  { label: "Music", href: "/music" },
  { label: "Portofolio", href: "/portofolio" },
];

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (!resolvedTheme) return null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // ── Styles (unchanged, only for reference) ──
  const bg = isDark
    ? "bg-[#1a1a18]/95 backdrop-blur-md shadow-sm border-b border-white/8"
    : "bg-[#e7e3de]/90 backdrop-blur-md shadow-sm border-b border-black/8";

  const linkCls = isDark
    ? "text-white/60 hover:text-white after:bg-white"
    : "text-[#1a1a18]/70 hover:text-[#1a1a18] after:bg-[#1a1a18]";

  const barCls = isDark ? "bg-white" : "bg-[#1a1a18]";

  const toggleCls = isDark
    ? "bg-white/8 border-white/15 text-white/60 hover:text-white hover:bg-white/15"
    : "bg-[#1a1a18]/6 border-[#1a1a18]/15 text-[#1a1a18]/50 hover:text-[#1a1a18] hover:bg-[#1a1a18]/10";

  const mobileBg = isDark ? "bg-[#1a1a18]" : "bg-[#e7e3de]";
  const mobileBorder = isDark ? "border-white/8" : "border-black/10";
  const mobileLinkCls = isDark
    ? "text-white/60 hover:text-white"
    : "text-[#1a1a18]/70 hover:text-[#1a1a18]";

  const ctaBorder = isDark ? "border-white/10" : "border-[#1a1a18]/20";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? bg : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={isDark ? "/logo/light.png" : "/logo/dark.png"}
            alt="Diansa Digital"
            width={48}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav - Centered using grid */}
        <div className="hidden md:block flex-1">
          <nav className={`flex justify-center items-center gap-8 text-sm font-medium ${linkCls}`}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Right: Toggle + CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${toggleCls}`}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <Link
            href="/contact"
            className={`bg-[#d4f04a] text-[#1a1a18] px-5 py-2 rounded-full border text-sm font-medium hover:bg-[#c8e840] transition-colors ${ctaBorder}`}
          >
            Studio Diansa
          </Link>
        </div>

        {/* Mobile: Toggle + Hamburger */}
        <div className="md:hidden flex items-center gap-1.5 shrink-0">
          <button
            onClick={toggle}
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${toggleCls}`}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-5 h-0.5 ${barCls} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 ${barCls} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 ${barCls} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? `max-h-72 border-t ${mobileBorder}` : "max-h-0"
        }`}
      >
        <nav className={`${mobileBg} px-6 py-4 flex flex-col gap-4`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium ${mobileLinkCls}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`bg-[#d4f04a] text-[#1a1a18] text-center px-5 py-2 rounded-full border text-sm font-medium hover:bg-[#c8e840] ${ctaBorder}`}
            onClick={() => setMenuOpen(false)}
          >
            Studio Diansa
          </Link>
        </nav>
      </div>
    </header>
  );
}