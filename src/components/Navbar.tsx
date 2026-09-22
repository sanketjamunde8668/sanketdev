import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-500",
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      )}
    >
      <nav className="container-px flex items-center justify-between h-20">
        <a href="#home" className="flex items-center" aria-label="Sanket Jamunde home">
          <img
            src="/images/public/images/image.png.png"
            alt="Sanket Jamunde"
            className="h-12 w-12 object-contain"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-9">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-mono uppercase tracking-[0.15em] text-muted hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden min-h-12 min-w-12 flex items-center justify-end text-paper"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-ink lg:hidden"
          >
            <div className="container-px flex items-center justify-between h-20">
              <a href="#home" onClick={() => setOpen(false)} aria-label="Sanket Jamunde home">
                <img
                  src="/images/public/images/image.png.png"
                  alt="Sanket Jamunde"
                  className="h-12 w-12 object-contain"
                />
              </a>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-paper">
                <X size={22} />
              </button>
            </div>
            <ul className="container-px flex flex-col gap-1 mt-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="rule py-5"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-paper hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
