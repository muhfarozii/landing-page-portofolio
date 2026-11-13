export type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Landing Page Karang Taruna Papajos",
    category: "UI/UX Design",
    year: "2024",
    image: "/assets/landing-page-kartar-v2.png",
    link: "https://dribbble.com/shots/27174209-Karang-Taruna-Papajos-Youth-Organization-Website-Exploration",
  },
  {
    id: 2,
    title: "Redesign the Huly landing page",
    category: "UI/UX Design",
    year: "2025",
    image: "/assets/huly.png",
    link: "https://dribbble.com/shots/27172883-Huly-Landing-Page-Redesign-Concept",
  },
  {
    id: 3,
    title: "Redesign FootLook landing page",
    category: "UI/UX Design",
    year: "2025",
    image: "/assets/redesign-footlook.png",
    link: "https://dribbble.com/shots/27173030-Footlook-Redesign-Merging-Sports-Data-with-Modern-UI",
  },
  {
    id: 4,
    title: "Redesign Sopa landing page",
    category: "UI/UX Design",
    year: "2026",
    image: "/assets/redesign-sopa.png",
    link: "https://dribbble.com/shots/27173057-Redesigning-SOPA-Simplifying-the-Luxury-Shopping-Journey",
  },
];

/** Screen works back to back, cycled into the endless corridor. */
const CORRIDOR_SOURCES = [
  "/assets/landing-page-kartar-v2.png",
  "/assets/huly.png",
  "/assets/redesign-footlook.png",
  "/assets/redesign-sopa.png",
  "/assets/landing-page-kartar.png",
];

const CORRIDOR_DEPTH = 12;

/**
 * Cycled so every neighbouring plane carries a different screen
 * (planes alternate left/right down the corridor).
 */
export const corridorImages: string[] = Array.from(
  { length: CORRIDOR_DEPTH },
  (_, index) => CORRIDOR_SOURCES[index % CORRIDOR_SOURCES.length],
);
