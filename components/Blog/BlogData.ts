import type { BlogPost } from "@/Types/blog-tpes";

// ─────────────────────────────────────────────────────────────
// Ganti fungsi ini dengan fetch ke API/database Anda nanti.
// Contoh:
//   export async function getPosts(): Promise<BlogPost[]> {
//     const res = await fetch(`${process.env.API_URL}/posts`);
//     return res.json();
//   }
// ─────────────────────────────────────────────────────────────

export const dummyPosts: BlogPost[] = [
  {
    id: "1",
    slug: "tren-undangan-digital-2025",
    title: "5 Tren Undangan Digital yang Mendominasi 2025",
    excerpt:
      "Dari animasi sinematik hingga integrasi RSVP real-time, inilah tren undangan digital yang sedang digemari pasangan muda Indonesia.",
    category: "Inspirasi",
    author: { name: "Laras Aditya", initials: "LA" },
    publishedAt: "2025-02-10T08:00:00Z",
    readingTime: 5,
    coverGradient: "from-[#d4f04a]/40 to-[#a8c820]/20",
    featured: true,
  },
  {
    id: "2",
    slug: "memilih-tema-undangan-pernikahan",
    title: "Panduan Memilih Tema Undangan Pernikahan yang Tepat",
    excerpt:
      "Rustic, modern minimal, atau dark luxury? Temukan cara mudah mencocokkan tema undangan dengan konsep pernikahan impian Anda.",
    category: "Panduan",
    author: { name: "Reza Mahendra", initials: "RM" },
    publishedAt: "2025-01-28T08:00:00Z",
    readingTime: 7,
    coverGradient: "from-rose-200/60 to-pink-300/30",
    featured: false,
  },
  {
    id: "3",
    slug: "cara-bagikan-undangan-digital-whatsapp",
    title: "Cara Efektif Membagikan Undangan Digital via WhatsApp",
    excerpt:
      "Strategi jitu agar undangan digital Anda dibuka, dibaca, dan direspons oleh semua tamu — tanpa dianggap spam.",
    category: "Tips",
    author: { name: "Sari Wulandari", initials: "SW" },
    publishedAt: "2025-01-15T08:00:00Z",
    readingTime: 4,
    coverGradient: "from-blue-200/60 to-indigo-300/30",
    featured: false,
  },
  {
    id: "4",
    slug: "rsvp-online-manfaat",
    title: "Kenapa RSVP Online Lebih Baik dari Konfirmasi Manual?",
    excerpt:
      "Hemat waktu, data lebih akurat, dan tidak ada lagi chat tengah malam. Ini alasan RSVP online jadi pilihan utama di 2025.",
    category: "Tips",
    author: { name: "Arya Pratama", initials: "AP" },
    publishedAt: "2025-01-05T08:00:00Z",
    readingTime: 6,
    coverGradient: "from-amber-200/60 to-yellow-300/30",
    featured: false,
  },
  {
    id: "5",
    slug: "undangan-digital-ramah-lingkungan",
    title: "Undangan Digital: Pilihan Cerdas untuk Pernikahan Eco-Friendly",
    excerpt:
      "Selain menghemat biaya cetak, undangan digital berkontribusi nyata pada lingkungan. Cari tahu dampaknya di sini.",
    category: "Inspirasi",
    author: { name: "Dinia Kusuma", initials: "DK" },
    publishedAt: "2024-12-20T08:00:00Z",
    readingTime: 5,
    coverGradient: "from-[#d4f04a]/30 to-emerald-300/20",
    featured: false,
  },
  {
    id: "6",
    slug: "musik-background-undangan-digital",
    title: "Rekomendasi Musik Background untuk Undangan Digital 2025",
    excerpt:
      "Dari keroncong modern hingga lo-fi romantic, pilihan musik background yang cocok untuk setiap tema undangan.",
    category: "Inspirasi",
    author: { name: "Laras Aditya", initials: "LA" },
    publishedAt: "2024-12-08T08:00:00Z",
    readingTime: 4,
    coverGradient: "from-purple-200/60 to-violet-300/30",
    featured: false,
  },
];

export const categories = ["Semua", "Inspirasi", "Panduan", "Tips"];

export async function getPosts(): Promise<BlogPost[]> {
  // TODO: ganti dengan fetch API ketika backend siap
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, { next: { revalidate: 60 } });
  // return res.json();
  return dummyPosts;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}