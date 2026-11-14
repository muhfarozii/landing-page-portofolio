'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from "framer-motion"

// Compatible Link component for React/Vite environment
const Link = ({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) => (
  <a href={href} className={className}>
    {children}
  </a>
)

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface FAQsProps {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  supportLink?: string
  supportText?: string
  items?: FaqItem[]
  className?: string
}

const defaultFaqItems: FaqItem[] = [
  {
    id: 'item-1',
    question: 'What is Ruixen UI?',
    answer: 'Ruixen UI is a modern, fully responsive design system that provides pre-built components, utilities, and layouts to help developers build scalable web applications quickly and efficiently.',
  },
  {
    id: 'item-2',
    question: 'Which platforms does Ruixen UI support?',
    answer: 'Ruixen UI is built for web applications and works seamlessly with React, Next.js, and other modern JavaScript frameworks. It also supports dark mode and responsive layouts out of the box.',
  },
  {
    id: 'item-3',
    question: 'Can I customize Ruixen UI components?',
    answer: 'Yes! All Ruixen UI components are fully customizable via props, CSS classes, and theme configuration. You can easily adapt colors, spacing, typography, and layout to match your brand.',
  },
  {
    id: 'item-4',
    question: 'Does Ruixen UI provide integration with third-party tools?',
    answer: 'Absolutely. Ruixen UI includes ready-to-use integrations and patterns for popular tools and services, making it easier to connect your application with analytics, authentication, and workflow platforms.',
  },
  {
    id: 'item-5',
    question: 'Is there documentation and support available?',
    answer: 'Yes, Ruixen UI comes with comprehensive documentation, live examples, and tutorials. Additionally, our community and support channels are available to help you implement components and resolve any issues.',
  },
]

export default function FAQs({
  title = "FAQs",
  subtitle = "Everything you need to know about Ruixen UI",
  supportLink = "#contact",
  supportText = "Ruixen UI support team",
  items,
  className = "",
}: FAQsProps) {
  const faqItems = items || defaultFaqItems

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-2">
            <h2 className="text-foreground text-4xl font-semibold">{title}</h2>
            <p className="text-muted-foreground mt-4 text-balance text-lg text-gray-400">
              {subtitle}
            </p>
            <p className="text-muted-foreground mt-6 hidden md:block text-gray-400">
              Can’t find what you’re looking for? Reach out to our{' '}
              <Link
                href={supportLink}
                className="text-primary font-medium hover:underline text-[var(--color-neon-cyan)]"
              >
                {supportText}
              </Link>{' '}
              for assistance.
            </p>
          </div>

          <div className="md:col-span-3">
            <Accordion
              type="single"
              collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-gray-200 dark:border-white/10">
                  <AccordionTrigger className="cursor-pointer text-base font-medium hover:no-underline text-left text-white hover:text-[var(--color-neon-cyan)] transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <p className="text-muted-foreground mt-6 md:hidden text-gray-400">
            Can't find what you're looking for? Contact our{' '}
            <Link
              href={supportLink}
              className="text-primary font-medium hover:underline text-[var(--color-neon-cyan)]">
              {supportText}
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export const BlurredStagger = ({
  text = "built by ruixen.com",
}: {
  text: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <>
      <div className="w-full">
        <motion.p
          variants={container}
          initial="hidden"
          animate="show"
          className="text-base leading-relaxed break-words whitespace-normal text-gray-300"
        >
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </>
  );
};
