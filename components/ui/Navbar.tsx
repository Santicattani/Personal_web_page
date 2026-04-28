"use client";

import { useState, useEffect } from "react";
import { meta } from "@/content/meta";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Automations", href: "#automations" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0C0C0C]/90 backdrop-blur-sm border-b border-[#1F1F1F]" : ""
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-xs text-[#888888] hover:text-[#D4A853] transition-colors"
        >
          {meta.name.split(" ")[0].toLowerCase()}.dev
        </a>

        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#888888] hover:text-[#F2F2F2] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
