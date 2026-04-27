"use client";

import { motion } from "framer-motion";
import { SkillGroup } from "@/components/ui/SkillGroup";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-[#1F1F1F]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-[#D4A853] uppercase tracking-widest">Skills</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <SkillGroup group={group} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
