'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface SquishyCardProps {
  label: string;
  title?: string;
  monthlyPrice?: string;
  description: string;
  cta: string;
  ctaLink?: string;
  background: string;
  icon?: React.ReactNode;
  BGComponent: React.ComponentType;
}

export const BGComponent1 = () => (
  <motion.svg
    width="100%"
    height="100%"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.5 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0 pointer-events-none"
  >
    <motion.circle
      variants={{ hover: { scaleY: 0.5, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="114.5"
      r="101.5"
      fill="rgba(0, 0, 0, 0.25)"
      className="dark:fill-white/10"
    />
    <motion.ellipse
      variants={{ hover: { scaleY: 2.25, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="265.5"
      rx="101.5"
      ry="43.5"
      fill="rgba(0, 0, 0, 0.25)"
      className="dark:fill-white/10"
    />
  </motion.svg>
);

export const BGComponent2 = () => (
  <motion.svg
    width="100%"
    height="100%"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.05 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0 pointer-events-none"
  >
    <motion.rect
      x="14"
      width="153"
      height="153"
      rx="15"
      fill="rgba(0, 0, 0, 0.25)"
      className="dark:fill-white/10"
      variants={{ hover: { y: 219, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 12 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
    <motion.rect
      x="155"
      width="153"
      height="153"
      rx="15"
      fill="rgba(0, 0, 0, 0.25)"
      className="dark:fill-white/10"
      variants={{ hover: { y: 12, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 219 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
  </motion.svg>
);

export const BGComponent3 = () => (
  <motion.svg
    width="100%"
    height="100%"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.25 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0 pointer-events-none"
  >
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.3, duration: 1, ease: "backInOut" }}
      d="M148.893 157.531C154.751 151.673 164.249 151.673 170.107 157.531L267.393 254.818C273.251 260.676 273.251 270.173 267.393 276.031L218.75 324.674C186.027 357.397 132.973 357.397 100.25 324.674L51.6068 276.031C45.7489 270.173 45.7489 260.676 51.6068 254.818L148.893 157.531Z"
      fill="rgba(0, 0, 0, 0.25)"
      className="dark:fill-white/10"
    />
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
      d="M148.893 99.069C154.751 93.2111 164.249 93.2111 170.107 99.069L267.393 196.356C273.251 202.213 273.251 211.711 267.393 217.569L218.75 266.212C186.027 298.935 132.973 298.935 100.25 266.212L51.6068 217.569C45.7489 211.711 45.7489 202.213 51.6068 196.356L148.893 99.069Z"
      fill="rgba(0, 0, 0, 0.25)"
      className="dark:fill-white/10"
    />
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
      d="M148.893 40.6066C154.751 34.7487 164.249 34.7487 170.107 40.6066L267.393 137.893C273.251 143.751 273.251 153.249 267.393 159.106L218.75 207.75C186.027 240.473 132.973 240.473 100.25 207.75L51.6068 159.106C45.7489 153.249 45.7489 143.751 51.6068 137.893L148.893 40.6066Z"
      fill="rgba(0, 0, 0, 0.25)"
      className="dark:fill-white/10"
    />
  </motion.svg>
);

export const PricingCard = ({
  label,
  title,
  monthlyPrice,
  description,
  cta,
  ctaLink = "#contact",
  background,
  icon,
  BGComponent,
}: SquishyCardProps) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 1, ease: "backInOut" }}
      variants={{ hover: { scale: 1.05 } }}
      className={`relative min-h-[420px] w-full max-w-sm shrink-0 overflow-hidden rounded-2xl p-8 ${background} shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-white/15`}
    >
      <div className="relative z-10 text-white">
        <div className="flex items-center justify-between mb-4">
          <span className="block w-fit rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white border border-white/25">
            {label}
          </span>
          {icon && (
            <div className="p-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white">
              {icon}
            </div>
          )}
        </div>

        {monthlyPrice ? (
          <motion.span
            initial={{ scale: 0.85 }}
            variants={{ hover: { scale: 1 } }}
            transition={{ duration: 1, ease: "backInOut" }}
            className="my-3 block origin-top-left font-mono text-5xl md:text-6xl font-black leading-[1.1]"
          >
            ${monthlyPrice}/<br />Month
          </motion.span>
        ) : title ? (
          <motion.h3
            initial={{ scale: 0.95 }}
            variants={{ hover: { scale: 1.02 } }}
            transition={{ duration: 1, ease: "backInOut" }}
            className="my-3 block origin-top-left font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white"
          >
            {title}
          </motion.h3>
        ) : null}

        <p className="text-base text-white/90 leading-relaxed font-light mt-2">
          {description}
        </p>
      </div>

      <div className="relative z-20 pt-6">
        <a
          href={ctaLink}
          className="block w-full rounded-xl border-2 border-white bg-white py-3 text-center font-mono font-bold uppercase tracking-wider text-neutral-900 backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:text-white hover:border-white/80 active:scale-98 shadow-md"
        >
          {cta}
        </a>
      </div>

      <BGComponent />
    </motion.div>
  );
};

export const Component = () => {
  return (
    <section className="bg-background px-4 py-12 min-h-screen transition-colors">
      <div className="mx-auto flex w-fit flex-wrap justify-center gap-6">
        <PricingCard
          label="Individual"
          monthlyPrice="299"
          description="For individuals who want to understand why their landing pages aren't working"
          cta="Sign up"
          background="bg-indigo-600 dark:bg-indigo-700"
          BGComponent={BGComponent1}
        />
        <PricingCard
          label="Company"
          monthlyPrice="999"
          description="For mid-sized companies who are serious about boosting their revenue by 30%"
          cta="Sign up"
          background="bg-purple-600 dark:bg-purple-700"
          BGComponent={BGComponent2}
        />
        <PricingCard
          label="Enterprise"
          monthlyPrice="4,999"
          description="For large enterprises looking to outsource their conversion rate optimization"
          cta="Book a call"
          background="bg-pink-600 dark:bg-pink-700"
          BGComponent={BGComponent3}
        />
      </div>
    </section>
  );
};

export default Component;
