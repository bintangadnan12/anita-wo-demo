// ============================================================
// BRAND CONFIG — edit bagian ini saja untuk ganti klien
// ============================================================
export const BRAND = {
  name: "CV Anita Wedding Organizer",
  nameShort: "Anita",
  nameDisplay: ["Anita", "Wedding", "Organizer"] as const,
  niche: "Wedding Organizer & Dekorasi Lampung",
  tagline: "Hari Spesialmu, Urusan Kami",
  heroDesc: "CV Anita Wedding Organizer hadir untuk mewujudkan pernikahan impian Anda di Metro & Lampung — lengkap dengan dekorasi elegan, MUA profesional, dan koordinasi penuh dari tim berpengalaman.",
  aboutDesc: "CV Anita Wedding Organizer adalah penyelenggara acara pernikahan terlengkap dan terpercaya di Kota Metro, Lampung. Kami melayani mulai dari wedding organizer, dekorasi adat Jawa & Sunda, MUA, attire, hingga entertainment — semua dalam satu tim yang solid. Behind every calm bride, ada kami yang siap lari ke sana-sini demi semuanya berjalan sempurna.",
  city: "Metro, Lampung",
  address: "Kota Metro, Lampung",
  year: "2020",
  heroImg: "/img/wedding1.jpg",
  metaTitle: "CV Anita Wedding Organizer — WO Terlengkap Metro Lampung",
  metaDesc: "Wedding Organizer, Dekorasi, MUA & Attire terlengkap di Metro Lampung. CV Anita Wedding Organizer siap wujudkan pernikahan impian Anda.",
};
// ============================================================

export const WHATSAPP_NUMBER = "6289677374440"; // placeholder — ganti nomor WA Anita WO
export const PHONE_DISPLAY = "0896-7737-4440";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const NAV_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Paket", href: "#paket" },
  { label: "Blog", href: "#blog" },
  { label: "Kontak", href: "#kontak" },
];

export const SERVICES = [
  {
    title: "Wedding Organizer",
    desc: "Koordinasi pernikahan menyeluruh — dari rundown, vendor, hingga hari H tanpa hambatan.",
    icon: "Sparkles",
  },
  {
    title: "Dekorasi Adat & Modern",
    desc: "Dekorasi adat Jawa, Sunda, hingga modern — siger, ronce melati, dan konsep custom.",
    icon: "Flower2",
  },
  {
    title: "MUA Profesional",
    desc: "Makeup artist berpengalaman untuk pengantin tampil memukau di hari istimewa.",
    icon: "Star",
  },
  {
    title: "Attire & Busana",
    desc: "Koleksi busana pengantin adat dan modern yang elegan untuk semua momen.",
    icon: "Heart",
  },
  {
    title: "Entertainment",
    desc: "Hiburan berkualitas untuk memeriahkan resepsi dan membuat tamu terkesan.",
    icon: "PartyPopper",
  },
  {
    title: "Paket All-in-One",
    desc: "Satu vendor, semua terlayani — WO, dekor, MUA, attire, dan entertainment.",
    icon: "Gift",
  },
];

export const GALLERY = [
  { src: "/img/wedding1.jpg", cat: "Wedding", h: "tall" },
  { src: "/img/wedding2.jpg", cat: "Dekorasi", h: "short" },
  { src: "/img/wedding3.jpg", cat: "Wedding", h: "short" },
  { src: "/img/wedding4.jpg", cat: "Dekorasi", h: "tall" },
  { src: "/img/wedding5.jpg", cat: "Event", h: "tall" },
  { src: "/img/wedding6.jpg", cat: "Wedding", h: "short" },
  { src: "/img/wedding7.jpg", cat: "Dokumentasi", h: "short" },
  { src: "/img/wedding8.jpg", cat: "Wedding", h: "tall" },
  { src: "/img/wedding9.jpg", cat: "Dekorasi", h: "short" },
];

export const GALLERY_TABS = ["Semua", "Wedding", "Dekorasi", "Event", "Dokumentasi"] as const;

type Pkg = { name: string; tag?: string; price: number; popular?: boolean; features: string[] };

export const WO_PACKAGES: Pkg[] = [
  {
    name: "Paket Starter",
    tag: "100 – 200 tamu",
    price: 5_500_000,
    features: [
      "Koordinator & 3 tim hari H",
      "Briefing & technical meeting",
      "Susunan acara & rundown",
      "Pendamping pengantin",
      "Konsultasi gratis",
    ],
  },
  {
    name: "Paket Regular",
    tag: "250 – 350 tamu",
    price: 8_500_000,
    popular: true,
    features: [
      "Koordinator senior & 5 tim hari H",
      "Briefing, TM & gladi resik",
      "Rundown, cue card & timeline",
      "Pendamping kedua pengantin",
      "Koordinasi seluruh vendor",
      "Konsultasi tak terbatas",
    ],
  },
  {
    name: "Paket Premium",
    tag: "400 – 500 tamu",
    price: 12_000_000,
    features: [
      "Koordinator senior & 8 tim hari H",
      "Briefing, TM & 2x gladi resik",
      "Custom rundown & timeline detail",
      "Pendamping & asisten keluarga",
      "Full vendor coordination",
      "Laporan & evaluasi pasca acara",
    ],
  },
  {
    name: "Paket Signature",
    tag: "500+ tamu / Big Event",
    price: 18_000_000,
    features: [
      "Event director & 12+ tim",
      "Unlimited meeting & planning",
      "Custom premium concept",
      "VIP escort keluarga inti",
      "Koordinasi vendor premium",
      "Konsep & supervisi penuh hari H",
    ],
  },
];

export const DEKOR_PACKAGES: Pkg[] = [
  { name: "Dekorasi Essentials", tag: "Simpel Elegan", price: 10_000_000, features: ["Pelaminan utama", "Backdrop akad", "Standing flower", "Photobooth sederhana", "Karpet & ornamen"] },
  { name: "Dekorasi Modern", tag: "Contemporary", price: 16_000_000, popular: true, features: ["Pelaminan premium", "Backdrop akad custom", "Fresh flower arrangement", "Photobooth instagramable", "Dekor meja tamu"] },
  { name: "Dekorasi Luxury", tag: "Full Floral", price: 22_000_000, features: ["Pelaminan luxury", "Full fresh flower", "Aisle & entrance deco", "Photobooth premium", "Styling area lengkap"] },
  { name: "Dekorasi Grand", tag: "Big Event", price: 35_000_000, features: ["Konsep ballroom / outdoor mewah", "Fresh flower & lighting dekoratif", "Stage & backdrop grand", "Photobooth signature", "Full area styling"] },
];

export const DOKUM_PACKAGES: Pkg[] = [
  { name: "Paket Silver", tag: "Akad only", price: 3_500_000, features: ["1 fotografer", "1 videografer", "200 foto edit", "Highlight video 1 menit", "Soft file lengkap"] },
  { name: "Paket Gold", tag: "Akad + Resepsi", price: 5_500_000, popular: true, features: ["2 fotografer", "1 videografer", "400 foto edit", "Highlight video 2 menit", "Album cetak premium"] },
  { name: "Paket Platinum", tag: "Full Day", price: 7_500_000, features: ["3 fotografer", "2 videografer", "Cinematic video 3 menit", "Same day edit", "Album & USB box"] },
  { name: "Paket Sinematik", tag: "Pre & Full Day", price: 9_500_000, features: ["Tim sinematik lengkap", "Pre-wedding session", "Cinematic video 5 menit", "Foto unlimited", "Album luxury box"] },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Konsultasi Gratis", desc: "Ceritakan impian Anda. Kami dengar dan pahami setiap detail.", icon: "MessageCircle" },
  { n: "02", title: "Perencanaan Detail", desc: "Kami rancang konsep, rundown, dan koordinasikan semua vendor.", icon: "ClipboardList" },
  { n: "03", title: "Eksekusi Profesional", desc: "Hari H di tangan kami. Anda hadir, menikmati, dan bersinar.", icon: "HeartHandshake" },
  { n: "04", title: "Kenangan Selamanya", desc: "Dokumentasi indah sebagai warisan momen bahagia Anda.", icon: "Image" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Anita WO benar-benar all-out! Dekorasi, MUA, sampai rundown acara semua rapi banget. Tamu kami kagum, dan kami bisa menikmati hari pernikahan tanpa khawatir. Makasih Tim Anita!",
    name: "Septy & Ferdi",
    date: "Mei 2026",
    avatar: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=200&q=80",
  },
  {
    quote:
      "Behind every calm bride, ada tim WO yang siap lari ke sana-sini — dan itu Anita! Profesional, responsif, dan dekorasinya cantik banget sesuai tema adat yang kami mau.",
    name: "Annisa & Fikri",
    date: "April 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "Paket all-in-one Anita WO sangat worth it! Dari WO, dekor, MUA, sampai entertainment, semuanya satu tim dan koordinasinya luar biasa. Highly recommended untuk pasangan di Lampung!",
    name: "Naufal & Yuuki",
    date: "Maret 2026",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export const BLOG_POSTS = [
  {
    title: "7 Tren Wedding 2026 yang Wajib Anda Tahu Sebelum Menikah",
    cat: "Inspirasi",
    date: "10 Mei 2026",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  },
  {
    title: "Checklist Lengkap Persiapan Pernikahan 12 Bulan Sebelum Hari H",
    cat: "Panduan",
    date: "2 April 2026",
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
  },
  {
    title: "Cara Memilih Wedding Organizer yang Tepat untuk Hari Spesial Anda",
    cat: "Tips",
    date: "15 Maret 2026",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&q=80",
  },
];

export const formatIDR = (n: number) =>
  "Rp " + n.toLocaleString("id-ID");
