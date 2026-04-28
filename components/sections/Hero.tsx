"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { meta } from "@/content/meta";
import { MeshGradient } from "@paper-design/shaders-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* MeshGradient background */}
      <MeshGradient
        style={{ position: "absolute", inset: 0 }}
        width="100%"
        height="100%"
        colors={["#0C0C0C", "#16120A", "#141414", "#1A1208"]}
        speed={0.25}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-[#D4A853] tracking-widest uppercase mb-4">
            Senior Technical Project Manager
          </p>

          <h1 className="text-5xl sm:text-7xl font-extralight text-[#F2F2F2] leading-tight tracking-tight mb-4">
            {meta.name}
          </h1>

          <p className="text-lg sm:text-xl text-[#888888] font-light max-w-xl mb-10 leading-relaxed">
            {meta.tagline}
          </p>

          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <a
              href="/cv-santiago-cattani.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[#D4A853] text-[#D4A853] text-sm font-light hover:bg-[#D4A853] hover:text-[#0C0C0C] transition-all duration-200"
            >
              <Download size={14} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[#1F1F1F] text-[#888888] text-sm font-light hover:border-[#888888] hover:text-[#F2F2F2] transition-all duration-200"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#888888] hover:text-[#D4A853] transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
