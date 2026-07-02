"use client";

import { FaqPro, type FaqProItem } from "@/components/ui/faq-pro";
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

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

const logos = [
  {
    id: "logo-figma",
    description: "Figma",
    image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
    className: "h-9 w-auto",
  },
  {
    id: "logo-nextjs",
    description: "Next.js",
    image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
    className: "h-9 w-auto",
  },
  {
    id: "logo-supabase",
    description: "Supabase",
    image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
    className: "h-9 w-auto",
  },
  {
    id: "logo-vercel",
    description: "Vercel",
    image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
    className: "h-9 w-auto",
  },
  {
    id: "logo-capcut",
    description: "CapCut",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/CapCut_logo.svg",
    className: "h-9 w-auto",
  },
  {
    id: "logo-aftereffects",
    description: "Adobe After Effects",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
    className: "h-9 w-auto",
  },
  {
    id: "logo-coreldraw",
    description: "CorelDRAW",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/CorelDraw_logo_%282%29.svg",
    className: "h-9 w-auto",
  },
  {
    id: "logo-canva",
    description: "Canva",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Canva_Logo_2021.svg",
    className: "h-9 w-auto",
  },
  {
    id: "logo-tailwind",
    description: "Tailwind CSS",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    className: "h-9 w-auto",
  },
  {
    id: "logo-react",
    description: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    className: "h-9 w-auto",
  },
  {
    id: "logo-html",
    description: "HTML5",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    className: "h-9 w-auto",
  },
  {
    id: "logo-css",
    description: "CSS3",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    className: "h-9 w-auto",
  },
  {
    id: "logo-javascript",
    description: "JavaScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    className: "h-9 w-auto",
  },
];

export function LogosSlider() {
  return (
    <div className='relative h-[100px] w-full overflow-hidden'>
      <InfiniteSlider 
        className='flex h-full w-full items-center' 
        duration={30}
        gap={48}
      >
        {logos.map((logo) => (
          <div 
            key={logo.id} 
            className='flex w-32 items-center justify-center'
          >
            <img
              src={logo.image}
              alt={logo.description}
              className={logo.className}
            />
          </div>
        ))}
      </InfiniteSlider>
      <ProgressiveBlur
        className='pointer-events-none absolute top-0 left-0 h-full w-[200px]'
        direction='left'
        blurIntensity={1}
      />
      <ProgressiveBlur
        className='pointer-events-none absolute top-0 right-0 h-full w-[200px]'
        direction='right'
        blurIntensity={1}
      />
    </div>
  );
}

export default FaqProPreview;