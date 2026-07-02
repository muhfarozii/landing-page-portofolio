# 🌌 NEXUS Portfolio - Project Context & Guideline

Dokumen ini berfungsi sebagai panduan referensi utama bagi AI Assistant dan Developer saat melakukan pembaruan (update) pada project ini. Dengan membaca file ini, kamu dapat memahami arsitektur, struktur data, gaya desain, dan aturan penulisan kode tanpa perlu membaca ulang seluruh file atau merusak kode yang sudah ada.

---

## 🚀 Tech Stack & Dependencies

Project ini dibangun menggunakan stack modern berikut:

- **Framework Core**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) (menggunakan **TypeScript**).
- **Styling & Theme**: [Tailwind CSS v4](https://tailwindcss.com/) (menggunakan `@tailwindcss/vite` plugin).
- **Animasi & Interaksi**:
  - [Framer Motion / Motion](https://motion.dev/) (diimpor dari `"motion/react"`).
  - [GSAP](https://gsap.com/) (GreenSock Animation Platform) untuk manipulasi performa tinggi.
- **Ikonografi**: [Lucide React](https://lucide.dev/) untuk koleksi ikon SVG clean.
- **AI Integrasi (Optional/Ready)**: `@google/genai` (Google Gemini SDK).
- **Database (Optional/Ready)**: `better-sqlite3` + `express` untuk backend pendukung.

---

## 📂 Struktur Folder Project

Berikut adalah struktur folder penting yang perlu dipahami:

```text
E:\Coding Project\Landingpage porto\
├── public/                 # Asset statis (gambar, icon, video mentah)
├── src/
│   ├── components/         # Komponen modular
│   │   └── ui/             # Komponen UI interaktif premium
│   │       ├── arc-preloader-hero.tsx  # Preloader cinematic berbentuk melengkung (Arc)
│   │       ├── etheral-shadow.tsx      # Animasi ambient glowing background
│   │       ├── faq-pro.tsx             # Accordion FAQ dengan efek premium
│   │       ├── motion-footer.tsx       # Footer interaktif sinematik
│   │       └── demo.tsx                # Komponen demo / preview lainnya
│   ├── lib/                # Utility functions atau setup pihak ketiga
│   ├── App.tsx             # Layout utama & penggabung semua section halaman
│   ├── main.tsx            # Entry point React (StrictMode mounting)
│   └── index.css           # Global CSS, Font import, dan Design Tokens
├── package.json            # Konfigurasi dependensi dan scripts
├── vite.config.ts          # Konfigurasi build Vite + Tailwind v4
└── tsconfig.json           # Konfigurasi compiler TypeScript
```

---

## 🎨 Design System & Styling Tokens

Aturan visual yang wajib dipertahankan untuk menjaga estetika premium:

### 1. Typography (Font)
Didefinisikan di `src/index.css`:
- **Font Sans**: `"Outfit", sans-serif` (digunakan untuk teks utama, deskripsi, dan UI control).
- **Font Display**: `"Space Grotesk", sans-serif` (digunakan untuk heading besar dan judul utama).

### 2. Palet Warna (Colors)
- **Background Utama**: `#050505` (sangat gelap/hitam premium).
- **Neon Cyan**: `var(--color-neon-cyan)` / `#00f0ff` (warna aksen utama, glow effect).
- **Neon Purple**: `var(--color-neon-purple)` / `#8a2be2` (warna aksen sekunder).
- **Text & Borders**: Kombinasi `white`, `gray-300`, `gray-400`, dan border semi-transparan `white/10` dengan efek `backdrop-blur-md` (Glassmorphism).

### 3. Utility Custom
- **Animasi Marquee**: `.animate-marquee` didefinisikan di `index.css` untuk logo/tool scroll horizontal secara terus-menerus. Animasi akan *pause* ketika di-hover.

---

## 🔄 Alur & State Penting (Core Flows)

Ketika melakukan modifikasi pada halaman utama (`src/App.tsx`), perhatikan state berikut:

1. **Preloader & Intro State (`isIntroDone`)**:
   - Website memiliki intro cinematic dari komponen `<ArcRevealHero>`.
   - Setelah intro selesai, event callback `onComplete` akan memicu `setIsIntroDone(true)`.
   - Navbar (`<Navbar isVisible={isIntroDone} />`) hanya akan muncul jika `isIntroDone` bernilai `true`.
2. **Form Kontak (CTA Section)**:
   - Form kontak menggunakan state `status` (`"idle" | "loading" | "success" | "error"`).
   - Menampilkan alert feedback indah (`CheckCircle` / `AlertCircle`) sesuai dengan status pengiriman email.
3. **Logo Slider & Progressive Blur (Marquee Baru)**:
   - Slider logo menggunakan komponen `<InfiniteSlider>` ...
   - Efek memudar (*fade-out*) di ujung kiri dan kanan ...

---

## ⚠️ Panduan untuk AI & Developer (Aturan Keras)

Setiap kali melakukan update atau penambahan fitur:

1. **Gunakan `"motion/react"` untuk Framer Motion**:
   - Di React 19, gunakan impor `import { motion } from "motion/react"` bukan `"framer-motion"`.
2. **Pertahankan Estetika & Glow Effect**:
   - Jangan gunakan warna solid standar (seperti `blue-500` mentah). Gunakan gradient premium, glassmorphism (`backdrop-blur`), dan bayangan glow (`shadow-[0_0_35px_rgba(0,240,255,0.6)]`).
3. **Jangan Merusak Transisi Halaman**:
   - Modifikasi konten di dalam `App.tsx` harus dibungkus dengan z-index dan layout yang tepat (`relative z-10 bg-[#050505]`) agar footer sinematik di bawahnya tetap bekerja dengan baik.
4. **Validasi Tipe TypeScript**:
   - Selalu deklarasikan type data yang jelas untuk props komponen baru. Jangan matikan type checking.
5. **Incremental Update**:
   - Ubah kode secara terfokus pada modul target. Hindari melakukan rewrite massal pada file yang tidak berhubungan langsung dengan request.

---

*Dokumen ini dibuat secara otomatis pada tanggal 2 Juli 2026.*