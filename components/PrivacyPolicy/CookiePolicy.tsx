import SectionBlock from "@/components/shared/SectionBlock";

const cookies = [
  {
    label: "Cookie Esensial",
    desc: "Diperlukan untuk fungsi dasar platform. Tidak dapat dinonaktifkan.",
    canDisable: false,
  },
  {
    label: "Cookie Analitik",
    desc: "Membantu kami memahami cara pengguna berinteraksi dengan platform.",
    canDisable: true,
  },
  {
    label: "Cookie Preferensi",
    desc: "Menyimpan pengaturan Anda seperti bahasa dan pilihan tampilan.",
    canDisable: true,
  },
];

export default function CookiePolicy() {
  return (
    <SectionBlock number="05" title="Kebijakan Cookie">
      <p>
        Kami menggunakan cookie dan teknologi pelacakan serupa untuk meningkatkan
        pengalaman Anda di platform Diansa Digital.
      </p>

      <ul className="space-y-3 !mt-2">
        {cookies.map((cookie) => (
          <li
            key={cookie.label}
            className="bg-white/60 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl p-4 flex items-start justify-between gap-4"
          >
            <div className="flex items-start gap-3 flex-1">
              <span className="text-sm">
                <strong className="text-[#1a1a18] dark:text-white font-semibold block mb-0.5">
                  {cookie.label}
                </strong>
                <span className="text-[#6b6860] dark:text-gray-400">
                  {cookie.desc}
                </span>
              </span>
            </div>
            {/* Status badge */}
            <span
              className={`shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full mt-0.5 ${
                cookie.canDisable
                  ? "bg-black/5 dark:bg-white/10 text-[#6b6860] dark:text-gray-400"
                  : "bg-[#d4f04a]/40 dark:bg-[#d4f04a]/20 text-[#1a1a18] dark:text-white"
              }`}
            >
              {cookie.canDisable ? "Opsional" : "Wajib"}
            </span>
          </li>
        ))}
      </ul>

      <p>
        Anda dapat mengelola preferensi cookie melalui pengaturan browser kapan saja.
        Menonaktifkan cookie tertentu dapat mempengaruhi fungsionalitas platform.
      </p>
    </SectionBlock>
  );
}