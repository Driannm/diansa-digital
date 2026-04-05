import SectionBlock from "@/components/shared/SectionBlock";

const team = [
  {
    name: "Yuda Andrian",
    role: "Co-founder & CEO",
    bio: "Mantan product manager di startup teknologi terkemuka. Percaya bahwa produk terbaik lahir dari empati yang mendalam.",
    initials: "YA",
  },
  {
    name: "Annisa Dava Islami",
    role: "Co-founder & CTO",
    bio: "Engineer dengan keahlian di distributed systems. Membangun infrastruktur yang kokoh agar Anda tidak perlu memikirkannya.",
    initials: "AD",
  },
  {
    name: "Yuda Andrian",
    role: "Co-founder & CPO",
    bio: "Desainer sekaligus peneliti UX. Misi hidupnya: membuat antarmuka yang begitu intuitif sampai tidak terasa seperti antarmuka.",
    initials: "YA",
  },
  {
    name: "Yuda Andrian",
    role: "Head of Customer Success",
    bio: "Menghubungkan pengguna dengan potensi penuh platform. Kalau ada yang tidak puas, itu urusannya.",
    initials: "YA",
  },
  {
    name: "Yuda Andrian",
    role: "Lead Engineer",
    bio: "Menulis kode seperti menulis prosa — bersih, bermakna, dan ada alurnya. Kontributor aktif beberapa proyek open source.",
    initials: "YA",
  },
  {
    name: "Yuda Andrian",
    role: "Head of Marketing",
    bio: "Menceritakan kisah perusahaan dengan cara yang jujur dan menyentuh. Percaya bahwa pemasaran terbaik adalah produk yang luar biasa.",
    initials: "YA",
  },
];

export default function TeamSection() {
  return (
    <SectionBlock number="03" title="Tim di Balik Layar">
      <p className="!text-[#6b6860]">
        Kami adalah tim yang beragam, tersebar di Jakarta, Bandung, dan Yogyakarta.
        Yang menyatukan kami bukan hanya pekerjaan, tapi keyakinan bersama bahwa
        momen spesial layak diabadikan dengan cara yang indah.
      </p>

      {/* Grid team card — konsisten dengan TemaSection & TestimonialSection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 !mt-6">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex gap-4 bg-white/60 border border-[#1a1a18]/8 rounded-2xl p-5 hover:border-[#1a1a18]/16 transition-colors"
          >
            {/* Avatar — konsisten dengan hero trust avatars: lime gradient */}
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#d4f04a] to-[#a8c820] border-2 border-[#e7e3de] flex items-center justify-center text-xs font-bold text-[#1a1a18] shrink-0">
              {member.initials}
            </div>

            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-sm font-semibold text-[#1a1a18] leading-tight">
                {member.name}
              </span>
              {/* Role — lime accent, konsisten dengan team-role pattern */}
              <span className="text-xs font-medium text-[#6b6860] uppercase tracking-[0.08em] mb-1.5">
                {member.role}
              </span>
              <p className="text-xs text-[#6b6860] leading-relaxed">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}