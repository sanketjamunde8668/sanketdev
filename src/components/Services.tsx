import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="section-y rule">
      <div className="container-px">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="num mb-4"
        >
          04 — Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl tracking-tight mb-16 max-w-2xl"
        >
          What I can build for you.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border-r border-b border-line p-8 flex flex-col gap-6 hover:bg-surface/50 transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <Icon className="text-gold" size={22} strokeWidth={1.5} />
                  <span className="font-mono text-xs text-muted">{service.index}</span>
                </div>
                <div>
                  <h3 className="text-lg text-paper mb-2">{service.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
