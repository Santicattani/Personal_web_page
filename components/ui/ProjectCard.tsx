"use client";

import { ExternalLink } from "lucide-react";
import { Tag } from "./Tag";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-[#1F1F1F] rounded-lg p-5 bg-[#141414] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2A2A2A] flex flex-col h-full">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-[#F2F2F2] font-light leading-snug text-sm">{project.title}</h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-[#888888] hover:text-[#D4A853] transition-colors"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      {project.metric && (
        <span className="inline-block self-start font-mono text-xs px-2 py-0.5 rounded border border-[#D4A853]/30 text-[#D4A853] mb-3">
          {project.metric}
        </span>
      )}

      <p className="text-sm text-[#888888] leading-relaxed mb-4 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}
