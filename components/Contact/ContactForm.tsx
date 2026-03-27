"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

type FormState = "idle" | "loading" | "success" | "error";

const subjects = [
  "Pesan Undangan",
  "Pertanyaan Paket & Harga",
  "Revisi Undangan",
  "Kerjasama & Mitra",
  "Lainnya",
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    // TODO: ganti dengan fetch ke API endpoint Anda
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
    await new Promise((r) => setTimeout(r, 1200)); // simulasi

    setFormState("success");
  };

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white/60 dark:bg-[#1a1a18]/60 border border-[#1a1a18]/8 dark:border-white/10 rounded-2xl h-full min-h-[420px] transition-colors duration-300">
        <div className="w-16 h-16 rounded-full bg-[#d4f04a]/30 border-2 border-[#d4f04a] flex items-center justify-center mb-6 text-2xl text-[#1a1a18] dark:text-white">
          ✓
        </div>
        <h3 className="font-display text-2xl font-bold text-[#1a1a18] dark:text-white mb-3">
          Pesan Terkirim!
        </h3>
        <p className="text-[#6b6860] dark:text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
          Terima kasih sudah menghubungi kami. Tim Diansa akan membalas dalam
          1×24 jam kerja.
        </p>
        <button
          onClick={() => {
            setFormState("idle");
            setForm({ name: "", email: "", phone: "", subject: "", message: "" });
          }}
          className="text-sm font-medium text-[#6b6860] dark:text-gray-400 hover:text-[#1a1a18] dark:hover:text-white transition-colors underline underline-offset-2"
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/60 dark:bg-[#1a1a18]/60 border border-[#1a1a18]/8 dark:border-white/10 rounded-2xl p-8 flex flex-col gap-5 transition-colors duration-300"
    >
      <h2 className="font-display text-xl font-bold text-[#1a1a18] dark:text-white mb-1">
        Kirim Pesan
      </h2>

      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#1a1a18] dark:text-gray-300 uppercase tracking-[0.1em]">
            Nama Lengkap <span className="text-[#d4f04a]">*</span>
          </label>
          <input
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Budi Santoso"
            className="bg-[#e7e3de] dark:bg-[#1a1a18] border border-[#1a1a18]/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#1a1a18] dark:text-white placeholder:text-[#1a1a18]/30 dark:placeholder:text-white/30 focus:outline-none focus:border-[#1a1a18]/30 dark:focus:border-white/30 focus:ring-2 focus:ring-[#d4f04a]/30 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#1a1a18] dark:text-gray-300 uppercase tracking-[0.1em]">
            Nomor WhatsApp
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="08xx xxxx xxxx"
            className="bg-[#e7e3de] dark:bg-[#1a1a18] border border-[#1a1a18]/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#1a1a18] dark:text-white placeholder:text-[#1a1a18]/30 dark:placeholder:text-white/30 focus:outline-none focus:border-[#1a1a18]/30 dark:focus:border-white/30 focus:ring-2 focus:ring-[#d4f04a]/30 transition-all"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#1a1a18] dark:text-gray-300 uppercase tracking-[0.1em]">
          Email <span className="text-[#d4f04a]">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="budi@email.com"
          className="bg-[#e7e3de] dark:bg-[#1a1a18] border border-[#1a1a18]/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#1a1a18] dark:text-white placeholder:text-[#1a1a18]/30 dark:placeholder:text-white/30 focus:outline-none focus:border-[#1a1a18]/30 dark:focus:border-white/30 focus:ring-2 focus:ring-[#d4f04a]/30 transition-all"
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#1a1a18] dark:text-gray-300 uppercase tracking-[0.1em]">
          Keperluan <span className="text-[#d4f04a]">*</span>
        </label>
        <select
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className="bg-[#e7e3de] dark:bg-[#1a1a18] border border-[#1a1a18]/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#1a1a18] dark:text-white focus:outline-none focus:border-[#1a1a18]/30 dark:focus:border-white/30 focus:ring-2 focus:ring-[#d4f04a]/30 transition-all appearance-none cursor-pointer"
        >
          <option value="" disabled>Pilih keperluan...</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#1a1a18] dark:text-gray-300 uppercase tracking-[0.1em]">
          Pesan <span className="text-[#d4f04a]">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Ceritakan kebutuhan undangan digital Anda..."
          className="bg-[#e7e3de] dark:bg-[#1a1a18] border border-[#1a1a18]/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#1a1a18] dark:text-white placeholder:text-[#1a1a18]/30 dark:placeholder:text-white/30 focus:outline-none focus:border-[#1a1a18]/30 dark:focus:border-white/30 focus:ring-2 focus:ring-[#d4f04a]/30 transition-all resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "loading"}
        className="w-full bg-[#1a1a18] dark:bg-[#d4f04a] text-white dark:text-[#1a1a18] py-3.5 rounded-xl font-semibold text-sm hover:bg-[#1a1a18]/85 dark:hover:bg-[#c8e840] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {formState === "loading" ? (
          <>
            <span className="w-4 h-4 rounded-full border-2 border-white/30 dark:border-[#1a1a18]/30 border-t-white dark:border-t-[#1a1a18] animate-spin" />
            Mengirim...
          </>
        ) : (
          <>
            Kirim Pesan
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="currentColor" strokeWidth={2} />
          </>
        )}
      </button>

      <p className="text-[11px] text-[#1a1a18]/30 dark:text-white/30 text-center">
        Dengan mengirim pesan, Anda menyetujui{" "}
        <a href="/privacy-policy" className="underline hover:text-[#1a1a18]/60 dark:hover:text-white/60 transition-colors">
          Kebijakan Privasi
        </a>{" "}
        kami.
      </p>
    </form>
  );
}