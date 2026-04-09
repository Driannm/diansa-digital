import type { Track, MusicGenre } from "@/Types";

export const musicGenres: MusicGenre[] = [
  "Semua", "Romantis", "Islami", "Instrumental", "Pop", "Jazz",
];

export const tracks: Track[] = [
  { id: "1", title: "A Thousand Years", artist: "Christina Perri", genre: "Romantis", duration: 285, src: "/music/a-thousand-years.mp3", coverGradient: "from-rose-200 to-pink-300", popular: true },
  { id: "2", title: "Perfect", artist: "Ed Sheeran", genre: "Romantis", duration: 263, src: "/music/perfect.mp3", coverGradient: "from-amber-100 to-orange-200", popular: true },
  { id: "3", title: "Sholawat Badar", artist: "Majelis Ilmu", genre: "Islami", duration: 210, src: "/music/sholawat-badar.mp3", coverGradient: "from-emerald-100 to-green-200" },
  { id: "4", title: "Ya Nabi Salam", artist: "Habib Syech", genre: "Islami", duration: 245, src: "/music/ya-nabi.mp3", coverGradient: "from-teal-100 to-emerald-200" },
  { id: "5", title: "Canon in D", artist: "Johann Pachelbel", genre: "Instrumental", duration: 185, src: "/music/canon-d.mp3", coverGradient: "from-slate-100 to-blue-100", popular: true },
  { id: "6", title: "River Flows in You", artist: "Yiruma", genre: "Instrumental", duration: 225, src: "/music/river-flows.mp3", coverGradient: "from-sky-100 to-indigo-100" },
  { id: "7", title: "Hanya Rindu", artist: "Andmesh Kamaleng", genre: "Pop", duration: 252, src: "/music/hanya-rindu.mp3", coverGradient: "from-[#d4f04a]/40 to-lime-200" },
  { id: "8", title: "Tak Ingin Usai", artist: "Judika", genre: "Pop", duration: 238, src: "/music/tak-ingin-usai.mp3", coverGradient: "from-purple-100 to-violet-200" },
  { id: "9", title: "All of Me", artist: "John Legend", genre: "Jazz", duration: 269, src: "/music/all-of-me.mp3", coverGradient: "from-yellow-100 to-amber-200", popular: true },
  { id: "10", title: "Fly Me to the Moon", artist: "Frank Sinatra", genre: "Jazz", duration: 147, src: "/music/fly-me.mp3", coverGradient: "from-blue-100 to-indigo-200" },
  { id: "11", title: "Cinta Luar Biasa", artist: "Andmesh Kamaleng", genre: "Pop", duration: 261, src: "/music/cinta-luar-biasa.mp3", coverGradient: "from-red-100 to-rose-200" },
  { id: "12", title: "Bless The Broken Road", artist: "Rascal Flatts", genre: "Romantis", duration: 243, src: "/music/bless-broken-road.mp3", coverGradient: "from-orange-100 to-red-100" },
];

export async function getTracks(): Promise<Track[]> {
  return tracks;
}
