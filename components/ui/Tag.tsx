"use client";

export function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block font-mono text-xs px-2 py-0.5 rounded border border-[#1F1F1F] text-[#888888] bg-[#141414]">
      {label}
    </span>
  );
}
