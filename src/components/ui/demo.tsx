"use client";

import FAQs, { type FaqItem } from "@/components/ui/text-reveal-faqs";
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export const portfolioFaqItems: FaqItem[] = [
  {
    id: "item-1",
    question: "What is your end-to-end product design workflow?",
    answer: "My workflow follows a user-centered Design Thinking approach: beginning with user research and information architecture, wireframing, high-fidelity visual design, through to interactive prototyping and usability validation.",
  },
  {
    id: "item-2",
    question: "Are the final design deliverables fully ready for developers?",
    answer: "Yes, absolutely. I design in Figma utilizing Auto Layout, structured design tokens, and scalable components. This ensures a seamless, well-documented handoff that developers can build with confidence.",
  },
  {
    id: "item-3",
    question: "What sets your creative work apart from other UI/UX designers?",
    answer: "Beyond crafting futuristic and polished visual aesthetics, I place equal weight on usability and conversion strategy—ensuring every element directly supports your brand's growth and user engagement.",
  },
  {
    id: "item-4",
    question: "What software and creative tools do you specialize in?",
    answer: "I leverage industry-standard creative tools tailored to each project: Figma for UI/UX Design & Prototyping, Adobe Premiere Pro & After Effects for Video Editing & Motion Graphics, and Canva for agile visual assets.",
  },
  {
    id: "item-5",
    question: "Do you provide complete source files upon project delivery?",
    answer: "Yes, definitely. You receive full ownership and access to all project assets: Figma files with components, style guides, and interactive prototypes for UI work; and project files, assets, and high-resolution renders for video and motion projects.",
  }
];

export function FaqProPreview() {
  return (
    <FAQs
      title={
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[var(--color-neon-cyan)] animate-pulse" />
            <span className="text-xs font-medium tracking-wider uppercase text-gray-300">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
      }
      subtitle="Find answers to common questions about my services, design workflow, and how we can collaborate."
      supportLink="#contact"
      supportText="Farozi support team"
      items={portfolioFaqItems}
      className="py-0 md:py-0"
    />
  );
}

export default function DemoOne() {
  return <FAQs />;
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
