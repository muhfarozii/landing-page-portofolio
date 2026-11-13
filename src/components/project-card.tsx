import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-[var(--color-neon-cyan)]/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)]"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-[var(--color-neon-cyan)]/0 transition-colors duration-500 group-hover:bg-[var(--color-neon-cyan)]/[0.06]" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-6">
          <span className="font-mono text-[11px] tracking-[0.2em] text-white/50">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-medium tracking-[0.12em] text-white/70 backdrop-blur-md">
            {project.year}
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
        <div className="min-w-0">
          <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-neon-cyan)]">
            {project.category}
          </span>
          <h3 className="mt-2 font-display text-lg font-bold leading-snug text-white md:text-xl">
            {project.title}
          </h3>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 group-hover:border-transparent group-hover:bg-[var(--color-neon-cyan)] group-hover:text-black">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </motion.a>
  );
}
