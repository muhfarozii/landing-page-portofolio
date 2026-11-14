/// <reference types="vite/client" />
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Monitor, Video, Layers, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { ArcRevealHero } from "@/components/ui/arc-preloader-hero";
import { Component as EtheralShadow } from "@/components/ui/etheral-shadow";
import { FaqProPreview, LogosSlider } from "@/components/ui/demo";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { SelectedWorks } from "@/components/selected-works";
import { PricingCard, BGComponent1, BGComponent2, BGComponent3 } from "@/components/ui/squishy-pricing";

const Navbar = ({ isVisible = true }: { isVisible?: boolean }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-black/40 backdrop-blur-xl border-b border-white/10" : "py-6 bg-transparent border-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold tracking-tighter">
          NEXUS<span className="text-[var(--color-neon-cyan)]">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#work" className="hover:text-white transition-colors">Selected Works</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
        <a href="#contact" className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all text-sm font-medium">
          Let's Talk
        </a>
      </div>
    </motion.nav>
  );
};

const DemoOne = ({ onComplete, onRevealStart }: { onComplete?: () => void, onRevealStart?: () => void }) => {
  return (
    <ArcRevealHero greetingHold={1000} onComplete={onComplete} onRevealStart={onRevealStart}>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-5 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <EtheralShadow
            color="rgba(128, 128, 128, 0.4)"
            animation={{ scale: 100, speed: 90 }}
            noise={{ opacity: 1, scale: 1.2 }}
            sizing="fill"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-5">
          <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Crafting Digital Experiences.
          </h1>
          <p className="max-w-2xl text-balance text-base text-gray-400 md:text-lg">
            Specializing in high-end video editing, immersive motion graphics, and intuitive UI/UX design that leaves a lasting impression.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-200"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/20 transition-colors hover:bg-white/10"
            >
              See our work
            </a>
          </div>
        </div>
      </div>
    </ArcRevealHero>
  );
};


const services = [
  {
    label: "Video Production",
    title: "Video Editing",
    desc: "Cinematic cuts, color grading, and dynamic storytelling that captivates audiences from the first frame.",
    icon: <Video className="w-5 h-5 text-white" />,
    background: "bg-gradient-to-br from-cyan-600 via-sky-700 to-blue-900 border-cyan-400/30",
    BGComponent: BGComponent1
  },
  {
    label: "Motion & 3D",
    title: "Motion Graphics",
    desc: "Fluid animations, 3D elements, and visual effects that bring static concepts to life.",
    icon: <Layers className="w-5 h-5 text-white" />,
    background: "bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-900 border-purple-400/30",
    BGComponent: BGComponent2
  },
  {
    label: "Digital Product",
    title: "UI/UX Design",
    desc: "Intuitive, glassmorphic, and futuristic interfaces designed for seamless user experiences.",
    icon: <Monitor className="w-5 h-5 text-white" />,
    background: "bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 border-blue-400/30",
    BGComponent: BGComponent3
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-neon-cyan)]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--color-neon-cyan)] animate-pulse" />
            <span className="text-xs font-medium tracking-wider uppercase text-gray-300">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Bridging the gap between visual storytelling and interactive design.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <PricingCard
              key={idx}
              label={service.label}
              title={service.title}
              description={service.desc}
              cta="Start a Project"
              ctaLink="#contact"
              icon={service.icon}
              background={service.background}
              BGComponent={service.BGComponent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative flex justify-center"
          >
            {/* Neon Backlight Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-[var(--color-neon-cyan)]/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[350px] bg-[var(--color-neon-purple)]/20 rounded-full blur-[60px] pointer-events-none translate-x-10 translate-y-10" />
            
            {/* Profile Image Container */}
            <div className="relative z-10 w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-4">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-black/50 relative">
                {/* Placeholder for Cut-out Image */}
                <img 
                  src="/assets/2.jpeg" 
                  alt="Farozi" 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:mix-blend-normal hover:opacity-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay gradient to blend bottom edge */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <span className="text-xs font-medium tracking-wider uppercase text-[var(--color-neon-cyan)]">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)]">Farozi.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-400 font-light">
              <p>
                I don't just edit videos or design interfaces—I build visual narratives that make brands impossible to ignore. As a <strong className="text-white font-medium">Freelance Video Editor, Motion Graphic Designer, and UI/Graphic Designer</strong>, my goal is to turn complex ideas into seamless digital experiences.
              </p>
              <p>
                Beyond the visuals, I bring a strategic edge. With experience in <strong className="text-white font-medium">digital marketing</strong>, I craft compelling video scripts and social media copy that don't just look good, but actually convert.
              </p>
              <p className="text-white/80 italic border-l-2 border-[var(--color-neon-cyan)] pl-4">
                "Design is how it looks, motion is how it feels, and copy is why they care."
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="block text-2xl font-bold text-white mb-1">2+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Years Exp.</span>
              </div>
              <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="block text-2xl font-bold text-white mb-1">50+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Projects</span>
              </div>
              <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="block text-2xl font-bold text-white mb-1">100%</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Commitment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ToolMarquee = () => {
  return (
    <div className="py-10 border-y border-white/5 bg-black/50 overflow-hidden relative">
      <LogosSlider />
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 px-6 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-neon-cyan)]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto bg-[#0a0a0a]/80 border border-white/15 rounded-3xl p-8 md:p-16 relative backdrop-blur-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        {/* Animated moving black silk / wavy cloth with white light reflections */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-45">
          <EtheralShadow
            color="rgba(255, 255, 255, 0.45)"
            animation={{ scale: 100, speed: 75 }}
            noise={{ opacity: 0.9, scale: 1.2 }}
            sizing="fill"
          />
          {/* Subtle gradient vignette to blend edges smoothly with depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        </div>

        {/* Subtle decorative glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--color-neon-purple)]/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[var(--color-neon-cyan)]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full">
           <FaqProPreview />
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Tanya Budget Project");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          email: email,
          subject: `Portfolio Contact: ${subject}`,
          message: message,
          from_name: "Nexus Portfolio Client",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setEmail("");
        setSubject("Tanya Budget Project");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-neon-cyan)]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-16 relative backdrop-blur-xl overflow-hidden">
        {/* Glow effect inside card */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--color-neon-purple)]/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[var(--color-neon-cyan)]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and info */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[var(--color-neon-cyan)] animate-pulse" />
              <span className="text-xs font-medium tracking-wider uppercase text-gray-300">Collab with me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Ready to create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-cyan)] to-blue-500">extraordinary?</span>
            </h2>
            
            <p className="text-gray-400 font-light leading-relaxed">
              Let's collaborate to bring your vision to life with cutting-edge design, premium motion graphics, and high-converting copy.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                  <Mail className="w-5 h-5 text-[var(--color-neon-cyan)]" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider">Fast Response</span>
                  <span className="text-sm font-medium">Replies within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl relative">
              
              {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-cyan-500/10 border border-[var(--color-neon-cyan)]/30 text-[var(--color-neon-cyan)] flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">Email Anda sudah terkirim! Saya akan segera menghubungi Anda.</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">Gagal mengirim pesan. Silakan coba lagi nanti.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email Anda</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[var(--color-neon-cyan)] focus:bg-white/10 focus:outline-none transition-all text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Keperluan</label>
                  <div className="relative">
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[var(--color-neon-cyan)] focus:bg-white/10 focus:outline-none transition-all text-white text-sm appearance-none cursor-pointer"
                    >
                      <option value="Tanya Budget Project" className="bg-[#050505] text-white">Tanya Budget Project</option>
                      <option value="Nego Harga" className="bg-[#050505] text-white">Nego Harga / Kerjasama</option>
                      <option value="Tanya Freelance" className="bg-[#050505] text-white">Tanya Layanan Lainnya</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Deskripsi Keperluan</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Jelaskan detail kebutuhan proyek atau penawaran Anda..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[var(--color-neon-cyan)] focus:bg-white/10 focus:outline-none transition-all text-white text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-[var(--color-neon-cyan)] text-black rounded-xl font-bold hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:scale-[1.02] active:scale-95 transition-all flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none text-sm uppercase tracking-wider"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Mengirim...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" /> Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [isIntroDone, setIsIntroDone] = useState(false);

  useEffect(() => {
    // Memaksa halaman kembali ke atas saat direfresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Jalankan langsung
    window.scrollTo(0, 0);

    // Jalankan kembali dengan sedikit delay untuk mengantisipasi load layout
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[var(--color-neon-cyan)] selection:text-black font-sans overflow-x-hidden">
      <Navbar isVisible={isIntroDone} />
      
      {/* Wrapper to stack content above the fixed footer */}
      <div className="relative z-10 bg-[#050505] w-full shadow-[0_20px_50px_rgba(0,0,0,0.9)] rounded-b-[2.5rem]">
        <DemoOne 
          onComplete={() => setIsIntroDone(true)} 
          onRevealStart={() => setTimeout(() => setIsIntroDone(true), 600)} 
        />
        <About />
        <ToolMarquee />
        <SelectedWorks />
        <Services />
        <FAQSection />
        <CTA />
      </div>

      <CinematicFooter />
    </div>
  );
}
