"use client";

import { Tag } from "./Tag";
import type { SkillGroup as SkillGroupType } from "@/content/skills";

export function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <div className="border border-[#1F1F1F] rounded-lg p-5 bg-[#141414]">
      <p className="text-xs font-mono text-[#D4A853] uppercase tracking-widest mb-3">
        {group.label}
      </p>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <Tag key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
}
