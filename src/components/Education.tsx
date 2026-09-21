import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-y rule">
      <div className="container-px grid lg:grid-cols-[0.9fr_1.1fr] gap-10 sm:gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="num mb-4">05 — Education</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight max-w-lg">
            Studying computer science, building alongside it.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-4 sm:gap-6 border-t border-line pt-8 sm:pt-10"
        >
          <GraduationCap className="text-gold shrink-0" size={28} strokeWidth={1.5} />
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <h3 className="text-xl sm:text-2xl text-paper">B.Sc. Computer Science</h3>
              <span className="font-mono text-xs text-gold border border-gold/30 px-2 py-0.5">
                In Progress
              </span>
            </div>
            <p className="text-muted mb-1">Deogiri College</p>
            <p className="text-sm text-muted">Expected Graduation — 2030</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
