"use client";

import { FaqPro, type FaqProItem } from "@/components/ui/faq-pro";

const items: FaqProItem[] = [
  {
    id: "what-is-iconiq",
    question: "Apa saja tahapan proses kerja yang Anda lakukan dalam mendesain produk?",
    answer: "Proses kerja saya mengikuti pendekatan Design Thinking: dimulai dari riset pengguna (UX Research), penyusunan alur (Information Architecture & User Flow), pembuatan kerangka (Wireframing), desain visual (High-Fidelity UI), hingga pembuatan Prototype yang interaktif.",
  },
  {
    id: "install-iconiq",
    question: "Apakah hasil akhir desain yang saya terima sudah siap diserahkan ke tim Developer?",
    answer: "Ya, tentu saja. Saya menggunakan Figma dengan implementasi Auto Layout dan menyusun Design System yang rapi. Hal ini memastikan proses penyerahan desain (developer handoff) berjalan lancar, terstruktur, dan mudah diimplementasikan oleh tim pengembang.  ",
  },
  {
    id: "iconiq-free",
    question: "Apa yang membedakan jasa desain Anda dengan desainer UI/UX lainnya?",
    answer: "Selain berfokus pada estetika visual yang modern, saya selalu mendalami sisi Usability untuk memastikan setiap elemen desain memiliki alasan yang kuat dalam memecahkan masalah pengguna dan mendukung tujuan bisnis Anda.",
  },
  {
    id: "iconiq-tooling",
    question: "Apa saja perangkat lunak (Software) yang Anda gunakan dalam proses desain?",
    answer: "Saya sangat fleksibel dalam menggunakan tools, tergantung pada kebutuhan project dan preferensi client. Namun, tools utama yang sering saya gunakan adalah: Figma (untuk UI/UX Design), Adobe Premiere Pro & After Effects (untuk Video Editing & Motion Graphics), serta Canva (untuk desain grafis sederhana dan konten media sosial). Jika Anda memiliki preferensi tool khusus, mohon informasikan kepada saya.",
  },
  {
    id: "iconiq-delivery",
    question: "Apakah Anda memberikan file sumber (source files) setelah proyek selesai?",
    answer: "Tentu saja. Untuk memastikan kolaborasi yang mulus dengan tim Anda, saya selalu menyediakan file sumber lengkap. Untuk proyek UI/UX, saya akan memberikan akses penuh ke file Figma (termasuk komponen, style guide, dan file prototype). Untuk proyek video, saya akan memberikan file project (sesuai permintaan), file footage (jika tidak melanggar hak cipta), serta file render final dalam berbagai format yang dibutuhkan.",
  }
];

export function FaqProPreview() {
  return <FaqPro className="w-full" defaultOpenFirst items={items} />;
}

export default FaqProPreview
