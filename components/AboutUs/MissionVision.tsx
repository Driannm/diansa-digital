const items = [
  {
    label: "Misi",
    text: "Memberdayakan individu dan bisnis Indonesia dengan teknologi yang sederhana, andal, dan terjangkau — sehingga mereka bisa fokus pada momen yang benar-benar penting.",
  },
  {
    label: "Visi",
    text: "Menjadi platform undangan digital pilihan utama di Indonesia yang dikenal karena kepercayaan, estetika, dan pengalaman yang tak terlupakan.",
  },
];

export default function MissionVision() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-0">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-white/60 dark:bg-white/10 border border-[#1a1a18]/8 rounded-2xl p-8 hover:border-[#1a1a18]/16 transition-colors"
        >
          {/* Label — konsisten dengan eyebrow Diansa */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#1a1a18] dark:text-white mb-4">
            {item.label}
          </span>
          <p className="font-display text-base font-normal text-[#6b6860] dark:text-gray-400 leading-relaxed italic">
            &ldquo;{item.text}&rdquo;
          </p>
        </div>
      ))}
    </div>
  );
}