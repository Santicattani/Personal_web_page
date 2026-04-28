"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects";

export function Projects() {
  const professional = projects.filter((p) => p.type === "professional");
  const personal = projects.filter((p) => p.type === "personal");

  return (
    <section id="projects" className="py-24 border-t border-[#1F1F1F]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-[#D4A853] uppercase tracking-widest">Projects</p>
        </motion.div>

        {/* Professional */}
        <div className="mb-12">
          <p className="font-mono text-xs text-[#888888] uppercase tracking-wider mb-5">Professional highlights</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {professional.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal / GitHub */}
        <div>
          <p className="font-mono text-xs text-[#888888] uppercase tracking-wider mb-5">Personal · GitHub</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personal.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
