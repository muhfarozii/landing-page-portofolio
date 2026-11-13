import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Endless } from "@/components/ui/endless";
import { ProjectCard } from "@/components/project-card";
import { corridorImages, projects } from "@/lib/projects";

const CATEGORIES = ["All", "UI/UX Design", "Motion Graphics", "Video Editing"] as const;

export function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative">
      {/* 3D Endless Corridor with centered Selected Works text */}
      <div className="relative">
        <Endless
          images={corridorImages}
          kicker="Portfolio — 2024 / 2026"
          title={
            <>
              Selected{" "}
              <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                Works
              </span>
            </>
          }
          ariaLabel="Selected Works — endless 3D corridor of screens"
        />

        {/* Smooth bottom gradient blend into archive section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-40" />
      </div>

      {/* Selected Works Archive & Interactive Category Menu */}
      <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-16 md:pt-24">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-6 border-t border-white/10 pt-10 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 backdrop-blur-md">
              <span className="size-2 rounded-full bg-[var(--color-neon-cyan)] animate-pulse" />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-300">
                Selected Works
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">
              Every screen,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                one story at a time.
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-sm md:text-base text-gray-400 leading-relaxed">
              A curated showcase of my latest projects across digital product design, interactive experiences, and motion graphics.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="block font-display text-3xl font-bold text-white">
                {String(projects.length).padStart(2, "0")}
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                Projects
              </span>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-[var(--color-neon-cyan)]/50 hover:bg-[var(--color-neon-cyan)]/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
            >
              Start a project
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Category Menu Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-white/10 pb-6">
          {CATEGORIES.map((category) => {
            const count =
              category === "All"
                ? projects.length
                : projects.filter((p) => p.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[var(--color-neon-cyan)] text-black font-semibold shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-black/20 text-black font-semibold" : "bg-white/10 text-gray-400"
                  }`}
                >
                  {count > 0 ? count : "Soon"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid / Filtered Results */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] py-20 text-center">
            <div className="mb-4 grid size-12 place-items-center rounded-full bg-white/5 text-[var(--color-neon-cyan)]">
              <Sparkles className="size-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Projects in progress
            </h3>
            <p className="mt-2 max-w-sm text-sm text-gray-400">
              New {activeCategory} case studies are currently being curated and will be published soon.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="mt-6 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10 cursor-pointer"
            >
              View all works
            </button>
          </div>
        )}

        {/* Section Footer Meta */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.2em] text-gray-500">
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Selected works · Curated Archive
          </span>
          <span>UI/UX · Motion · Video</span>
        </div>
      </div>
    </section>
  );
}
