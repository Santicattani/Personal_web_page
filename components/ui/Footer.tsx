"use client";

import { meta } from "@/content/meta";

export function Footer() {
  return (
    <footer className="border-t border-[#1F1F1F] py-8 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-[#888888]">
          © {new Date().getFullYear()} {meta.name}
        </p>
        <p className="font-mono text-xs text-[#888888]">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
