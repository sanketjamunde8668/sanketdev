import { motion } from "framer-motion";

const details = [
  { label: "Full Name", value: "Sanket Jamunde" },
  { label: "Location", value: "Maharashtra, India" },
  { label: "Profession", value: "Web Developer" },
  { label: "Focus", value: "AI Automation" },
  { label: "Education", value: "B.Sc. Computer Science" },
  { label: "Email", value: "sanketjamunde046@gmail.com" },
];

export default function About() {
  return (
    <section id="about" className="section-y rule">
      <div className="container-px grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="num mb-4">01 — About</p>
          <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
            A developer with one foot in interfaces, the other in automation.
          </h2>
          <div className="space-y-5 text-muted leading-relaxed max-w-prose">
            <p>
              I'm Sanket — a Computer Science student and web developer based in Maharashtra,
              working at the intersection of clean front-end engineering and practical AI
              automation. Most of my time goes into building React and Next.js interfaces, then
              figuring out what parts of a workflow don't need a human anymore.
            </p>
            <p>
              What I care about is usefulness: a website that loads fast and reads clearly, an
              automation that quietly saves someone an hour every day. I'm early in my journey,
              still studying, still shipping — and building most of what I know by taking on real
              projects rather than waiting for a perfect resume.
            </p>
            <p>
              Long term, I want to keep narrowing in on AI-driven automation — WhatsApp flows,
              connected APIs, systems that do the repetitive work so people don't have to.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:pt-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted mb-6">
            Personal Profile
          </p>
          <dl className="divide-y divide-line border-t border-line">
            {details.map((d) => (
              <div key={d.label} className="flex items-center justify-between py-4 gap-4">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted shrink-0">
                  {d.label}
                </dt>
                <dd className="text-paper text-sm md:text-base text-right break-all">{d.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
