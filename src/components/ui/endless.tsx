"use client";

import { useEffect, useMemo, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

const DEFAULT_IMAGE_URLS = [
  "https://cdn.21st.dev/assets/mirror/49/496b84975083e207d6b9adf6898f417d9e66250a5fa0b324db7d69c24081e665.webp",
  "https://cdn.21st.dev/assets/mirror/56/565902d9502c3c50a98cd8dc1447754d865c370597acbf789e44e061abc98e02.webp",
  "https://cdn.21st.dev/assets/mirror/37/37149990d5ddbf0ad349dcffff6917efb95d450ff176bc7b911420a8bbce968d.webp",
  "https://cdn.21st.dev/assets/mirror/4f/4f0af24dd1f4e5f89e5b5ae1f10b711e837c279ebf1daea092a3376a4bfb4400.webp",
  "https://cdn.21st.dev/assets/mirror/95/9579da7038028c3ef96b8cca6a887ddb406851f37caa13a85627ce72975f16f0.webp",
  "https://cdn.21st.dev/assets/mirror/4b/4bd8b7ff2db5fb0d805712b372dcf2820752b709b377db8ac073f65abf7591f8.webp",
  "https://cdn.21st.dev/assets/mirror/d0/d0c716fa9bb2a2cbf7dda8f41ffdcda0aa12a5c1db1951ed093935e51377bdb0.webp",
  "https://cdn.21st.dev/assets/mirror/d1/d1c14c08413e7d35bc090bfe4ea560c88314c9899a10fb4a1791ce3a76d6a71e.webp",
  "https://cdn.21st.dev/assets/mirror/94/9409bb00df0c1bbb30e4e782f33b06232f39f39c9a5c4cf3e830853316be6e77.webp",
  "https://cdn.21st.dev/assets/mirror/bf/bf54bb945a1a7d3c154146a499bbb895b0c59d48e913c2377e380aa11ee5a5c2.webp",
  "https://cdn.21st.dev/assets/mirror/1f/1f2db3e1105e8a09b30a319647a614bfc0a6858e56a54e6a156ff0eeeb0984a7.webp",
  "https://cdn.21st.dev/assets/mirror/74/74388f29a6841a42a35929cea6e1acff8a748a69294ea03dfe78b61e74e2fa4c.webp",
];

const Z_FAR = -2400;
const Z_NEAR = 780;
const RANGE = Z_NEAR - Z_FAR;
const DEFAULT_DURATION = 16;
const FADE_IN = 0.06;
const FADE_OUT = 0.04;
const PERSPECTIVE = 1100;

export type EndlessProps = {
  /** Images travelling down the corridor. Falls back to the stock set. */
  images?: string[];
  /** Small label rendered above the title. */
  kicker?: string;
  /** Headline rendered in the middle of the corridor. */
  title?: ReactNode;
  /** Caption under the globe at the bottom. */
  caption?: string;
  /** Seconds a single plane needs to travel the whole depth. */
  duration?: number;
  className?: string;
  ariaLabel?: string;
};

const CSS = `
.endless-root,
.endless-root *,
.endless-root *::before,
.endless-root *::after {
  box-sizing: border-box;
}

.endless-root {
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100svh;
  overflow: hidden;
  background-color: #000000;
  color: #ffffff;
  font-family: inherit;
  user-select: none;
  pointer-events: none;
}

.endless-root .endless-scene {
  position: absolute;
  inset: 0;
  -webkit-perspective: ${PERSPECTIVE}px;
  perspective: ${PERSPECTIVE}px;
  -webkit-perspective-origin: 50% 50%;
  perspective-origin: 50% 50%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.endless-root .endless-world {
  position: absolute;
  inset: 0;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.endless-root .endless-plane {
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  border-radius: 10px;
  background-color: #0b0b0b;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  will-change: transform;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.07), 0 30px 60px -20px rgba(0, 0, 0, 0.9);
}

.endless-root .endless-plane img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  pointer-events: none;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.endless-root .endless-center {
  position: absolute;
  inset: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
  padding: 0 1.5rem;
  text-align: center;
  pointer-events: none;
  background: radial-gradient(
    48% 44% at 50% 50%,
    rgba(0, 0, 0, 0.86) 0%,
    rgba(0, 0, 0, 0.55) 45%,
    rgba(0, 0, 0, 0) 80%
  );
}

.endless-root .endless-kicker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  color: #a3a3a3;
  font-family: inherit;
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  line-height: 1;
  text-transform: uppercase;
}

.endless-root .endless-kicker::before,
.endless-root .endless-kicker::after {
  content: "";
  display: inline-block;
  width: 1.25rem;
  height: 1px;
  background-color: currentColor;
  opacity: 0.5;
}

.endless-root .endless-heading {
  margin: 0;
  color: #ffffff;
  font-family: var(--font-display, inherit);
  font-size: clamp(1.75rem, 3.2vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
  text-align: center;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .endless-root .endless-heading {
    white-space: normal;
    font-size: clamp(1.5rem, 5vw, 1.875rem);
    max-width: 12ch;
  }
}

@media (min-width: 1200px) {
  .endless-root .endless-heading {
    font-size: 2.75rem;
  }
}

/* iOS WebKit flattens nested 3D when an ancestor uses overflow: hidden. */
@supports (-webkit-touch-callout: none) {
  .endless-root {
    overflow: visible;
    -webkit-clip-path: inset(0);
    clip-path: inset(0);
  }
}
`;

function opacityForProgress(progress: number) {
  if (progress < FADE_IN) return Math.max(0, progress / FADE_IN);
  if (progress > 1 - FADE_OUT) return Math.max(0, (1 - progress) / FADE_OUT);
  return 1;
}

function getLayout() {
  const width = window.innerWidth;
  const planeW = width < 768 ? Math.min(width * 0.26, 190) : Math.min(width * 0.26, 400);
  return {
    planeW,
    planeH: planeW * (4 / 3),
    offsetX: width * 0.33,
    angle: 24,
  };
}

export function Endless({
  images,
  kicker,
  title = "Endless",
  duration = DEFAULT_DURATION,
  className,
  ariaLabel = "Endless 3D image corridor",
}: EndlessProps) {
  const rootRef = useRef<HTMLElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);

  const urls = useMemo(
    () => (images && images.length > 0 ? images : DEFAULT_IMAGE_URLS),
    [images],
  );
  const total = urls.length;

  useEffect(() => {
    const root = rootRef.current;
    const world = worldRef.current;
    if (!root || !world) return;

    const planes = Array.from(world.querySelectorAll<HTMLElement>(".endless-plane"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tweens: gsap.core.Tween[] = [];

    gsap.ticker.lagSmoothing(0);
    gsap.set(world, { force3D: true });

    const applyLayout = () => {
      const { planeW, planeH, offsetX, angle } = getLayout();
      planes.forEach((plane, index) => {
        const isLeft = index % 2 === 0;
        plane.style.width = `${planeW}px`;
        plane.style.height = `${planeH}px`;
        gsap.set(plane, {
          xPercent: -50,
          yPercent: -50,
          x: isLeft ? -offsetX : offsetX,
          y: 0,
          rotationY: isLeft ? angle : -angle,
          force3D: true,
        });
      });
    };

    applyLayout();

    planes.forEach((plane, index) => {
      const img = plane.querySelector("img") as HTMLImageElement | null;
      if (!img) return;

      const startProgress = index / total;

      gsap.set(plane, { z: Z_FAR + startProgress * RANGE });
      img.style.opacity = String(opacityForProgress(startProgress));
      plane.style.zIndex = String(Math.round(startProgress * 1000));

      if (reduceMotion) return;

      const tween = gsap.fromTo(
        plane,
        { z: Z_FAR },
        {
          z: Z_NEAR,
          duration,
          ease: "none",
          repeat: -1,
          immediateRender: false,
          onUpdate() {
            const progress = this.progress();
            img.style.opacity = String(opacityForProgress(progress));
            plane.style.zIndex = String(Math.round(progress * 1000));
          },
        },
      );

      tween.progress(startProgress);
      tweens.push(tween);
    });

    const resizeObserver = new ResizeObserver(applyLayout);
    resizeObserver.observe(root);

    // Pause the corridor while it is off screen so the rest of the page stays cheap.
    let isPaused = false;
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        const shouldPause = !entry.isIntersecting || document.hidden;
        if (shouldPause === isPaused) return;
        isPaused = shouldPause;
        tweens.forEach((tween) => (shouldPause ? tween.pause() : tween.resume()));
      },
      { threshold: 0 },
    );
    visibilityObserver.observe(root);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        tweens.forEach((tween) => tween.pause());
      } else if (!isPaused) {
        tweens.forEach((tween) => tween.resume());
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      tweens.forEach((tween) => tween.kill());
      gsap.killTweensOf(planes);
    };
  }, [urls, total, duration]);

  return (
    <section ref={rootRef} className={cn("endless-root", className)} aria-label={ariaLabel}>
      <style>{CSS}</style>
      <div className="endless-scene" aria-hidden="true">
        <div className="endless-world" ref={worldRef}>
          {urls.map((url, index) => (
            <div className="endless-plane" key={`${url}-${index}`}>
              <img src={url} alt="" loading="eager" decoding="async" />
            </div>
          ))}
        </div>
      </div>
      <div className="endless-center">
        {kicker ? <span className="endless-kicker">{kicker}</span> : null}
        <h2 className="endless-heading">{title}</h2>
      </div>
    </section>
  );
}

export { Endless as Component };
export default Endless;
