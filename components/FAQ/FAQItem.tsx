"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#1a1a18]/8 dark:border-white/10">
      <button
        className={`w-full flex justify-between items-start gap-4 py-5 text-left transition-colors duration-200 group ${
          open ? "text-[#1a1a18] dark:text-white" : "text-[#1a1a18] dark:text-white/80"
        }`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className={`font-body text-sm md:text-base font-medium leading-snug flex-1 transition-colors duration-200 ${
            open
              ? "text-[#1a1a18] dark:text-white"
              : "text-[#1a1a18]/80 dark:text-white/70 group-hover:text-[#1a1a18] dark:group-hover:text-white"
          }`}
        >
          {question}
        </span>

        <span
          className={`shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-200 ${
            open
              ? "bg-[#d4f04a] border-[#d4f04a] text-[#1a1a18] dark:bg-[#d4f04a]/90 dark:text-[#1a1a18]"
              : "bg-transparent border-[#1a1a18]/20 dark:border-white/20 text-[#1a1a18]/50 dark:text-white/50 group-hover:border-[#1a1a18]/40 dark:group-hover:border-white/40"
          }`}
          aria-hidden="true"
        >
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-[#6b6860] dark:text-gray-400 text-sm leading-relaxed pr-10">
          {answer}
        </p>
      </div>
    </div>
  );
}