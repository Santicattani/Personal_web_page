"use client";

import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/content/experience";

function TimelineEntry({ entry, index }: { entry: ExperienceEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative pl-8 border-l border-[#1F1F1F]"
    >
      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-[#D4A853] bg-[#0C0C0C]" />

      <div className="flex items-baseline gap-3 flex-wrap mb-1">
        <h3 className="text-[#F2F2F2] font-light text-base">{entry.role}</h3>
        <span className="font-mono text-xs text-[#D4A853]">{entry.period}</span>
      </div>
      <p className="text-sm text-[#888888] mb-4">
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
        <div className="space-y-4">
          {entry.subEntries.map((sub, i) => (
            <div key={i} className="border border-[#1F1F1F] rounded-lg p-4 bg-[#141414]">
              <div className="flex items-start justify-between gap-3 mb-1">
                <p className="text-sm text-[#F2F2F2] font-light">{sub.title}</p>
                <span className="font-mono text-xs text-[#888888] shrink-0">{sub.period}</span>
              </div>
              <p className="text-xs text-[#888888] mb-3 leading-relaxed">{sub.description}</p>
              <ul className="space-y-1.5">
                {sub.bullets.map((b, j) => (
                  <li key={j} className="text-xs text-[#888888] leading-relaxed flex gap-2">
                    <span className="text-[#D4A853] shrink-0">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
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
