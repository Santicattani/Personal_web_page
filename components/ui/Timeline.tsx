"use client";

import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/content/experience";

function TimelineEntry({ entry, index }: { entry: ExperienceEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative pl-6 border-l border-[#1F1F1F]"
    >
      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-[#D4A853] bg-[#0C0C0C]" />

      <div className="mb-1">
        <span className="font-mono text-xs text-[#D4A853]">{entry.period}</span>
      </div>
      <h3 className="text-[#F2F2F2] font-light text-lg leading-tight">{entry.role}</h3>
      <p className="text-[#888888] text-sm mb-3">
        {entry.company} · {entry.location}
      </p>

      <ul className="space-y-1.5 mb-4">
        {entry.highlights.map((h, i) => (
          <li key={i} className="text-sm text-[#888888] leading-relaxed flex gap-2">
            <span className="text-[#D4A853] shrink-0 mt-0.5">—</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {entry.subEntries && (
        <div className="space-y-3 ml-2">
          {entry.subEntries.map((sub, i) => (
            <div key={i} className="border-l border-[#1F1F1F] pl-4">
              <p className="text-sm text-[#F2F2F2] font-light mb-0.5">{sub.title}</p>
              <p className="text-xs text-[#888888] leading-relaxed">{sub.description}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <div className="space-y-10">
      {entries.map((entry, i) => (
        <TimelineEntry key={entry.company} entry={entry} index={i} />
      ))}
    </div>
  );
}
