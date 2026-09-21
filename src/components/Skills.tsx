import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-y rule">
      <div className="container-px">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="num mb-4"
        >
          02 — Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-10 sm:mb-16 max-w-2xl"
        >
          Tools and technologies I reach for daily.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="bg-ink p-6 sm:p-8"
            >
              <span className="font-mono text-xs text-gold">{group.index}</span>
              <h3 className="text-2xl mt-3 mb-2 text-paper">{group.title}</h3>
              <p className="text-sm text-muted mb-6">{group.note}</p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-fog border-t border-line pt-3 first:border-t-0 first:pt-0"
                  >
                    <span className="w-1 h-1 bg-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
