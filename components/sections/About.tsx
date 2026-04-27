"use client";

import { motion } from "framer-motion";
import { meta } from "@/content/meta";

const facts = [
  { label: "Experience", value: meta.yearsOfExperience + " years" },
  { label: "Industries", value: meta.industries },
  { label: "Languages", value: meta.languages },
  { label: "Location", value: meta.location },
];

export function About() {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs text-[#D4A853] uppercase tracking-widest mb-8">About</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div>
            <p className="text-[#888888] leading-relaxed text-base font-light">{meta.bio}</p>
          </div>

          <div className="space-y-5">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-[#1F1F1F] pb-4">
                <p className="font-mono text-xs text-[#888888] uppercase tracking-wider mb-1">
                  {fact.label}
                </p>
                <p className="text-[#F2F2F2] font-light text-sm">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
