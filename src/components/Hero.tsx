import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Github, href: "https://github.com/sanketjamunde8668", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sanket-jamunde-a144343b0/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/sanket_jamunde_046/", label: "Instagram" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <BackgroundPaths />

      <div className="relative z-10 container-px w-full pt-32 pb-20 grid lg:grid-cols-[1.4fr_1fr] gap-16 items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="num mb-6"
          >
            Maharashtra, India — Available for work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[16vw] leading-[0.85] sm:text-8xl md:text-9xl font-bold tracking-tighter text-paper"
          >
            SANKET
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 font-mono text-sm md:text-base tracking-widest uppercase text-gold"
          >
            Web Developer · AI Automation
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-prose text-base md:text-lg text-muted leading-relaxed"
          >
            I design and build fast, modern websites, then wire in the automation that keeps
            businesses running without the manual busywork — from React interfaces to WhatsApp
            and workflow automations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projects">
              <Button variant="primary">
                View Projects <ArrowRight size={16} />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline">Contact Me</Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex lg:flex-col items-start lg:items-end gap-6 lg:gap-8 lg:pb-2"
        >
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 flex items-center justify-center border border-line text-muted hover:text-gold hover:border-gold transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
          <p className="font-mono text-xs text-muted lg:text-right max-w-[220px]">
            B.Sc. Computer Science student building in public — one project at a time.
          </p>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted hover:text-gold transition-colors"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
