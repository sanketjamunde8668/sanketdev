import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, ArrowUpRight, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  { icon: Mail, label: "sanketjamunde046@gmail.com", href: "mailto:sanketjamunde046@gmail.com" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/sanket_jamunde_046/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sanket-jamunde-a144343b0/" },
  { icon: Github, label: "GitHub", href: "https://github.com/sanketjamunde8668" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Wire this up to your form backend of choice (Formspree, Resend, EmailJS, etc).
    // Falls back to opening the user's mail client with the message pre-filled.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:sanketjamunde046@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="section-y rule">
      <div className="container-px grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="num mb-4"
          >
            06 — Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6"
          >
            Let's work together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted max-w-prose leading-relaxed mb-10"
          >
            Have a project, an idea, or a workflow that needs automating? I'd like to hear about
            it. Send a message or reach out directly.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-1 border-t border-line"
          >
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <li key={label} className="border-b border-line">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between py-4 text-paper hover:text-gold transition-colors"
                >
                  <span className="min-w-0 flex items-center gap-3 text-sm md:text-base">
                    <Icon size={16} className="text-gold shrink-0" />
                    <span className="break-all">{label}</span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted group-hover:text-gold transition-colors"
                  />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="flex min-w-0 flex-col gap-6"
        >
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted">
              Name
            </label>
            <input
              id="name"
              required
              autoComplete="name"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-2 bg-transparent border-b border-line py-3 text-paper placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-2 bg-transparent border-b border-line py-3 text-paper placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted">
              Message
            </label>
            <textarea
              id="message"
              required
              name="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full mt-2 bg-transparent border-b border-line py-3 text-paper placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors resize-none"
              placeholder="Tell me about your project"
            />
          </div>

          <Button type="submit" variant="primary" className="w-fit mt-2">
            {status === "sent" ? (
              <>
                Message Ready <Check size={16} />
              </>
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </Button>
          {status === "sent" && (
            <p className="text-xs text-muted" aria-live="polite">
              Your email client should have opened with this message pre-filled — just hit send.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
