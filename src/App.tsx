/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Play, Monitor, Video, Layers, Mail, Github, Twitter, Linkedin } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-black/40 backdrop-blur-xl border-b border-white/10" : "py-6 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold tracking-tighter">
          NEXUS<span className="text-[var(--color-neon-cyan)]">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
        <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all text-sm font-medium">
          Let's Talk
        </button>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://cdn.pixabay.com/video/2020/05/25/40131-424823150_large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-neon-cyan)] animate-pulse" />
          <span className="text-xs font-medium tracking-wider uppercase text-gray-300">Available for freelance</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-6"
        >
          Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-cyan)] to-blue-500">Digital</span> <br />
          Experiences.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-light"
        >
          Specializing in high-end video editing, immersive motion graphics, and intuitive UI/UX design that leaves a lasting impression.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]">
            <span className="relative z-10 flex items-center gap-2">
              View Showreel <Play className="w-4 h-4 fill-current" />
            </span>
          </button>
          <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md font-semibold text-lg hover:bg-white/10 transition-all">
            Explore Work
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
};

const projects = [
  {
    id: 1,
    title: "Cyberpunk 2077 UI Concept",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    video: "https://cdn.pixabay.com/video/2020/02/24/32888-394548655_large.mp4",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Neon Nights Promo",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
    video: "https://cdn.pixabay.com/video/2021/08/11/84687-587467652_large.mp4",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Abstract Motion",
    category: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    video: "https://cdn.pixabay.com/video/2023/10/22/186008-876935105_large.mp4",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Fintech App Redesign",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    video: "https://cdn.pixabay.com/video/2020/05/25/40131-424823150_large.mp4",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 5,
    title: "Fintech App Redesign",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    video: "https://cdn.pixabay.com/video/2020/05/25/40131-424823150_large.mp4",
    span: "col-span-1 md:col-span-1 row-span-1",
  }
];

const ProjectCard = ({ project, key }: { project: typeof projects[0]; key?: React.Key }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
    } else if (!isHovered && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`relative group rounded-2xl overflow-hidden bg-white/5 border border-white/10 ${project.span}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 > */}

      {/* lapisan dasar: sedikit gelap agar gambar tidak terlalu silau saat tidak di hover */}
      <div className="absolute inset-0 bg-black/20 z-10" /> 

      {/* laipsan gradasi: dari hitam pekat dibawah (from-black/90) memudar ke transparan di atas (to-transparent). 
      Awalnya tak terlihat (opacity-0), lalu muncul saat di-hover (group-hover:opacity-100)*/}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      
      <img 
        src={project.image} 
        alt={project.title} 
        className={`w-full h-full object-cover`}
        referrerPolicy="no-referrer"
      />
      
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />

      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <div className="p-6 inline-block w-fit">
          <span className="text-[var(--color-neon-cyan)] text-sm font-medium mb-2 block">{project.category}</span>
          <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Works</span></h2>
          <p className="text-gray-400 max-w-md">A showcase of my latest projects across video editing, motion graphics, and digital product design.</p>
        </div>
        <button className="flex items-center gap-2 text-sm font-medium hover:text-[var(--color-neon-cyan)] transition-colors">
          View All Projects <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const services = [
  {
    icon: <Video className="w-8 h-8 text-[var(--color-neon-cyan)]" />,
    title: "Video Editing",
    desc: "Cinematic cuts, color grading, and dynamic storytelling that captivates audiences from the first frame."
  },
  {
    icon: <Layers className="w-8 h-8 text-[var(--color-neon-purple)]" />,
    title: "Motion Graphics",
    desc: "Fluid animations, 3D elements, and visual effects that bring static concepts to life."
  },
  {
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    title: "UI/UX Design",
    desc: "Intuitive, glassmorphic, and futuristic interfaces designed for seamless user experiences."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-neon-cyan)]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Bridging the gap between visual storytelling and interactive design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
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
  const tools = [
    "Adobe After Effects", "Figma", "CapCut PC", "Canva",
    "Adobe After Effects", "Figma", "CapCut PC", "Canva",
  ];

  return (
    <div className="py-10 border-y border-white/5 bg-black/50 overflow-hidden relative flex w-full">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee">
        {tools.map((tool, idx) => (
          <div 
            key={'group1-${idx}'} 
            className="flex justify-center items-center px-8 group cursor-default"
          >
            <span className="text-2xl md:text-4xl font-display font-bold text-white/20 uppercase tracking-widest transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.8)] whitespace-nowrap">
              {tool}
            </span>
            <span className="mx-8 text-white/10 text-2xl">•</span>
          </div>
        ))}
      </div>
      {/* Grup 2 (duplikat untuk menyambung tanpa henti) */}
      <div className="flex" aria-hidden="true">
        {tools.map((tool, idx)=>(
          <div
            key={'group2${idx}'}
            className="flex justify-center items-center px-8 group cursor-default"
            >
              <span className="text-2xl md:text-4xl font-display font-bold text-white/20 uppercase tracking-widest transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.8)] whitespace-nowrap">
                {tool}
              </span>
              <span className="mx-8 text-white/10 text-2xl">•</span>
            </div>
        ))}

      </div>
    </div>
  );
};

const CTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl p-12 md:p-24 text-center relative backdrop-blur-xl overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[var(--color-neon-cyan)]/10 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to create something <span className="text-[var(--color-neon-cyan)]">extraordinary?</span></h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Let's collaborate to bring your vision to life with cutting-edge design and motion.</p>
          
          <button className="px-10 py-5 bg-[var(--color-neon-cyan)] text-black rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all hover:scale-105 flex items-center gap-3 mx-auto">
            <Mail className="w-5 h-5" /> Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-display font-bold">
          NEXUS<span className="text-[var(--color-neon-cyan)]">.</span>
        </div>
        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
        </div>
        <p className="text-sm text-gray-500">© 2026 Nexus Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[var(--color-neon-cyan)] selection:text-black font-sans">
      <Navbar />
      <Hero />
      <About />
      <ToolMarquee />
      <Portfolio />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
