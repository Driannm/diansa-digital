import SectionBlock from "@/components/shared/SectionBlock";

const items = [
  { label: "Pelanggaran Hukum", desc: "Melakukan tindakan yang melanggar hukum, peraturan perundang-undangan, atau hak pihak ketiga yang berlaku." },
  { label: "Konten Terlarang", desc: "Mengunggah atau menyebarkan konten yang mengandung SARA, pornografi, maupun unsur kekerasan." },
  { label: "Penipuan", desc: "Melakukan aktivitas penipuan, termasuk namun tidak terbatas pada phishing, manipulasi, atau praktik menyesatkan lainnya." },
  { label: "Keamanan Sistem", desc: "Mendistribusikan malware atau mencoba memperoleh akses tidak sah ke sistem, jaringan, atau data kami." },
  { label: "Penyalahgunaan Data", desc: "Melakukan scraping, pengumpulan, atau pemanfaatan data secara massal tanpa persetujuan tertulis dari kami." },
  { label: "Spam", desc: "Mengirimkan komunikasi yang tidak diminta, termasuk pesan promosi atau komersial kepada pengguna lain." },
];

export default function ProhibitedActivities() {
  return (
    <SectionBlock number="03" title="Aktivitas yang Dilarang">
      <p>
        Pengguna dilarang untuk melakukan aktivitas berikut dalam penggunaan platform Diansa Digital:
      </p>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d4f04a] shrink-0" />
            <span className="text-sm text-[#6b6860] dark:text-gray-400">
              <strong className="text-[#1a1a18] font-semibold dark:text-gray-400">{item.label}:</strong>{" "}
              {item.desc}
            </span>
          </li>
        ))}
      </ul>
    </SectionBlock>
  );
}