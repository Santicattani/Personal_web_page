"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { meta } from "@/content/meta";

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-[#1F1F1F]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg mx-auto"
        >
          <p className="font-mono text-xs text-[#D4A853] uppercase tracking-widest mb-6">
            Contact
          </p>
          <h2 className="text-3xl font-extralight text-[#F2F2F2] mb-3">Let's work together</h2>
          <p className="text-[#888888] font-light leading-relaxed mb-10">
            Open to new opportunities, advisory roles, and interesting conversations about AI,
            product delivery, and enterprise systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${meta.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[#D4A853] text-[#D4A853] text-sm font-light hover:bg-[#D4A853] hover:text-[#0C0C0C] transition-all duration-200"
            >
              <Mail size={14} />
              {meta.email}
            </a>
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[#1F1F1F] text-[#888888] text-sm font-light hover:border-[#888888] hover:text-[#F2F2F2] transition-all duration-200"
            >
              <ExternalLink size={14} />
              LinkedIn
            </a>
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[#1F1F1F] text-[#888888] text-sm font-light hover:border-[#888888] hover:text-[#F2F2F2] transition-all duration-200"
            >
              <ExternalLink size={14} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
