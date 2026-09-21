import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-y rule">
      <div className="container-px">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="num mb-4"
        >
          03 — Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl tracking-tight mb-16 max-w-2xl"
        >
          A selection of things I've built.
        </motion.h2>

        <div className="space-y-px bg-line border-y border-line">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-ink grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center py-10"
            >
              <span className="font-mono text-sm text-gold">{project.index}</span>

              <div className="overflow-hidden order-3 md:order-none">
                <div className="aspect-[16/10] md:aspect-[3/2] overflow-hidden bg-surface">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="md:pl-4">
                <h3 className="text-2xl text-paper mb-3">{project.name}</h3>
                <p className="text-sm text-muted leading-relaxed max-w-md mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] uppercase tracking-wider text-muted border border-line px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline inline-flex items-center gap-1.5 text-sm text-paper hover:text-gold"
                    >
                      Live Demo <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline inline-flex items-center gap-1.5 text-sm text-muted hover:text-gold"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
