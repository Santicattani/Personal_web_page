"use client";

import { motion } from "framer-motion";
import { Tag } from "./Tag";

type LanguageBar = { name: string; percent: number; color: string };

type Feature = { title: string; desc: string };

export type GitHubProject = {
  title: string;
  subtitle: string;
  description: string;
  github: string;
  link?: string;
  languages: LanguageBar[];
  features: Feature[];
  tags: string[];
};

export function GitHubCard({ project, index }: { project: GitHubProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-[#1F1F1F] rounded-xl overflow-hidden bg-[#141414] hover:border-[#2A2A2A] transition-colors duration-200"
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-4 border-b border-[#1F1F1F]">
        <div className="flex items-start justify-between gap-3 mb-1">
          <div>
            <h3 className="text-[#F2F2F2] font-light text-base">{project.title}</h3>
            <p className="font-mono text-[10px] text-[#888888] mt-0.5">{project.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] border border-[#D4A853]/30 text-[#D4A853] rounded px-2 py-0.5 hover:bg-[#D4A853]/10 transition-colors"
              >
                Live ↗
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] border border-[#1F1F1F] text-[#888888] rounded px-2 py-0.5 hover:border-[#888888] hover:text-[#F2F2F2] transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <p className="text-sm text-[#888888] leading-relaxed mt-2">{project.description}</p>
      </div>

      {/* Language bar */}
      <div className="px-5 py-3 border-b border-[#1F1F1F]">
        <div className="flex h-1.5 rounded-full overflow-hidden gap-px mb-2">
          {project.languages.map((lang) => (
            <div
              key={lang.name}
              style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
              className="h-full"
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {project.languages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: lang.color }} />
              <span className="font-mono text-[10px] text-[#888888]">{lang.name}</span>
              <span className="font-mono text-[10px] text-[#555555]">{lang.percent}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features grid */}
      <div className="p-5">
        <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-3">Features</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
          {project.features.map((f, i) => (
            <div key={i} className="border border-[#1F1F1F] rounded-lg p-3 bg-[#0C0C0C]">
              <p className="text-xs text-[#F2F2F2] font-light mb-0.5">{f.title}</p>
              <p className="text-[10px] text-[#888888] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => <Tag key={t} label={t} />)}
        </div>
      </div>
    </motion.div>
  );
}
