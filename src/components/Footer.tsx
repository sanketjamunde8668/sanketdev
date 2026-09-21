import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const links = [
  { icon: Instagram, href: "https://www.instagram.com/sanket_jamunde_046/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sanket-jamunde-a144343b0/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/sanketjamunde8668", label: "GitHub" },
  { icon: Mail, href: "mailto:sanketjamunde046@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="rule">
      <div className="container-px py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-display text-xl text-paper">
            SANKET DEVELOPER<span className="text-gold">.</span>
          </p>
          <p className="font-mono text-xs text-muted mt-1 uppercase tracking-widest">
            Web Developer · AI Automation
          </p>
        </div>

        <div className="flex gap-4">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center border border-line text-muted hover:text-gold hover:border-gold transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted">© 2026 Sanket Jamunde. All rights reserved.</p>
      </div>
    </footer>
  );
}
