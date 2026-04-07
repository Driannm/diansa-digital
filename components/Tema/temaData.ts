import type { Theme, ThemeCategory } from "@/Types";

export const themeCategories: ThemeCategory[] = [
  "Semua", "Pernikahan", "Ulang Tahun", "Khitanan", "Wisuda",
];

export const themes: Theme[] = [
  {
    id: "1", slug: "rustic-garden",
    name: "Rustic Garden", category: "Pernikahan",
    color: "from-[#c8b89a] to-[#a89070]", accent: "#8b6914",
    badge: "Terlaris", price: 299,
    description: "Tema hangat bernuansa taman rustic dengan sentuhan kayu alami dan bunga liar yang elegan.",
    features: ["RSVP Online", "Galeri Foto", "Google Maps", "Countdown Timer", "Background Music"],
    demoUrl: "#",
  },
  {
    id: "2", slug: "modern-minimal",
    name: "Modern Minimal", category: "Pernikahan",
    color: "from-[#e8e8e8] to-[#c8c8c8]", accent: "#333333",
    badge: "Baru", price: 299,
    description: "Desain bersih dan modern dengan tipografi yang kuat. Cocok untuk pasangan yang mencintai simplisitas.",
    features: ["RSVP Online", "Galeri Foto", "Google Maps", "Countdown Timer"],
    demoUrl: "#",
  },
  {
    id: "3", slug: "floral-bloom",
    name: "Floral Bloom", category: "Pernikahan",
    color: "from-[#f9c8d4] to-[#e8a0b0]", accent: "#c0507a",
    badge: null, price: 149,
    description: "Tema bunga yang romantis dengan palet warna pink lembut dan ilustrasi floral yang indah.",
    features: ["RSVP Online", "Countdown Timer"],
    demoUrl: "#",
  },
  {
    id: "4", slug: "dark-luxury",
    name: "Dark Luxury", category: "Pernikahan",
    color: "from-[#2a2020] to-[#1a1018]", accent: "#d4b060",
    badge: "Premium", price: 499,
    description: "Elegan dan mewah dengan latar gelap dan aksen emas. Untuk momen yang tak terlupakan.",
    features: ["RSVP Online", "Galeri Foto", "Google Maps", "Countdown Timer", "Background Music", "Video Opening", "QR Code"],
    demoUrl: "#",
  },
  {
    id: "5", slug: "tropical-leaf",
    name: "Tropical Leaf", category: "Ulang Tahun",
    color: "from-[#a8d8a0] to-[#70b868]", accent: "#2d6a22",
    badge: null, price: 149,
    description: "Segar dan ceria dengan motif daun tropis. Sempurna untuk perayaan ulang tahun yang meriah.",
    features: ["RSVP Online", "Countdown Timer", "Background Music"],
    demoUrl: "#",
  },
  {
    id: "6", slug: "pastel-dream",
    name: "Pastel Dream", category: "Khitanan",
    color: "from-[#c8e0f8] to-[#a0c8f0]", accent: "#2060a0",
    badge: null, price: 149,
    description: "Lembut dan manis dengan warna pastel biru. Ideal untuk acara khitanan yang berkesan.",
    features: ["RSVP Online", "Countdown Timer"],
    demoUrl: "#",
  },
  {
    id: "7", slug: "golden-gate",
    name: "Golden Gate", category: "Wisuda",
    color: "from-[#f5e6a0] to-[#e0c840]", accent: "#b8960a",
    badge: "Baru", price: 149,
    description: "Tema wisuda yang megah dengan nuansa emas dan celebrasi pencapaian yang penuh kebanggaan.",
    features: ["RSVP Online", "Galeri Foto", "Countdown Timer"],
    demoUrl: "#",
  },
  {
    id: "8", slug: "sakura-bliss",
    name: "Sakura Bliss", category: "Pernikahan",
    color: "from-[#fce4ec] to-[#f8bbd0]", accent: "#ad1457",
    badge: null, price: 299,
    description: "Terinspirasi keindahan bunga sakura Jepang. Romantis, ringan, dan penuh pesona.",
    features: ["RSVP Online", "Galeri Foto", "Google Maps", "Countdown Timer", "Background Music"],
    demoUrl: "#",
  },
  {
    id: "9", slug: "midnight-blue",
    name: "Midnight Blue", category: "Ulang Tahun",
    color: "from-[#1a237e] to-[#283593]", accent: "#7986cb",
    badge: null, price: 149,
    description: "Dramatis dan elegan dengan biru tengah malam yang dalam. Pesta ulang tahun yang berkesan.",
    features: ["RSVP Online", "Countdown Timer", "Background Music"],
    demoUrl: "#",
  },
];

// TODO: ganti dengan fetch API
export async function getThemes(): Promise<Theme[]> {
  return themes;
}

export async function getThemeBySlug(slug: string): Promise<Theme | undefined> {
  return themes.find((t) => t.slug === slug);
}

export function getRelatedThemes(current: Theme, count = 3): Theme[] {
  return themes
    .filter((t) => t.id !== current.id && t.category === current.category)
    .slice(0, count);
}
