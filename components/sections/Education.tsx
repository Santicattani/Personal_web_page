"use client";

import { motion } from "framer-motion";
import { education } from "@/content/education";

export function Education() {
  return (
    <section id="education" className="py-24 border-t border-[#1F1F1F]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-[#D4A853] uppercase tracking-widest">Education</p>
        </motion.div>

        <div className="space-y-6">
          {education.map((entry, i) => (
            <motion.div
              key={entry.degree}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-[#1F1F1F] pb-6"
            >
              <div>
                <p className="text-[#F2F2F2] font-light leading-snug">{entry.degree}</p>
                <p className="text-sm text-[#888888] mt-0.5">{entry.institution}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-mono text-xs text-[#888888]">{entry.period}</p>
                {entry.status && (
                  <span className="inline-block mt-1 font-mono text-xs px-2 py-0.5 rounded border border-[#D4A853]/30 text-[#D4A853]">
                    {entry.status}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
