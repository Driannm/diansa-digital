export default function ContactMap() {
  return (
    <div className="rounded-2xl overflow-hidden border border-[#1a1a18]/8 dark:border-white/10 bg-white/60 dark:bg-[#1a1a18]/60 transition-colors duration-300">
      {/* Label strip */}
      <div className="px-5 py-3.5 border-b border-[#1a1a18]/8 dark:border-white/10 flex items-center gap-2">
        <span className="text-base">📍</span>
        <span className="text-sm font-semibold text-[#1a1a18] dark:text-white">
          Diansa Digital Studio
        </span>
        <span className="ml-auto text-xs text-[#6b6860] dark:text-gray-400">
          Jl. Kemang Raya No. 12, Jakarta Selatan
        </span>
      </div>

      {/*
        Ganti src di bawah dengan embed URL Google Maps lokasi Anda.
        Cara: Google Maps → Share → Embed a map → copy src URL
      */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.8145!3d-6.2607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMzguNSJTIDEwNsKwNDgnNTIuMiJF!5e0!3m2!1sen!2sid!4v1234567890"
        width="100%"
        height="320"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Diansa Digital"
      />
    </div>
  );
}