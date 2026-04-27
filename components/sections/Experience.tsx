"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/Timeline";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-[#1F1F1F]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-[#D4A853] uppercase tracking-widest">Experience</p>
        </motion.div>

        <Timeline entries={experience} />
      </div>
    </section>
  );
}
