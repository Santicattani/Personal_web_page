"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { GitHubCard, type GitHubProject } from "@/components/ui/GitHubCard";
import { projects } from "@/content/projects";

const githubProjects: GitHubProject[] = [
  {
    title: "AutomateNow",
    subtitle: "automatenow.vercel.app",
    description:
      "Landing page for an AI & automation consultancy. Showcases 6 service lines, case studies, and a consultative approach to process automation for SMBs.",
    github: "https://github.com/Santicattani/AutomateNow_Web",
    link: "https://automate-now-web.vercel.app",
    languages: [
      { name: "TypeScript", percent: 44, color: "#3178C6" },
      { name: "HTML", percent: 50, color: "#E44D26" },
      { name: "CSS", percent: 5, color: "#563D7C" },
      { name: "JavaScript", percent: 1, color: "#F1E05A" },
    ],
    features: [
      { title: "AI Customer Support", desc: "WhatsApp, web & social — automated intelligent responses" },
      { title: "Lead Qualification", desc: "Automatic prospect filtering; team receives only qualified leads" },
      { title: "Admin Automation", desc: "Billing, onboarding & approvals removed from manual backoffice" },
      { title: "Tool Integration", desc: "CRM, forms, email & spreadsheets connected end-to-end" },
      { title: "Auto Reports", desc: "Real-time dashboards & management reports that generate themselves" },
      { title: "Sales Automation", desc: "Sales flows, follow-ups & proposals on autopilot" },
    ],
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Forrajes Platform",
    subtitle: "Full-stack agro platform · FastAPI + Next.js",
    description:
      "Platform for alfalfa and forage producers in Argentina. Real-time pricing from Cluster de Alfalfa & Agrofy APIs, field management with geolocation, weather data, and JWT authentication.",
    github: "https://github.com/Santicattani/Forrajes-Project",
    languages: [
      { name: "Python", percent: 19, color: "#3572A5" },
      { name: "HTML", percent: 80, color: "#E44D26" },
      { name: "JavaScript", percent: 1, color: "#F1E05A" },
    ],
    features: [
      { title: "Alfalfa Prices", desc: "Live data from clusterdealfalfa.com.ar — Córdoba, henification & other provinces" },
      { title: "Cattle Market", desc: "Real-time livestock prices from Agrofy API" },
      { title: "Field Management", desc: "CRUD for producer fields with lat/long geolocation" },
      { title: "Weather Data", desc: "Current weather per field location" },
      { title: "JWT Auth", desc: "Secure user authentication with token-based sessions" },
      { title: "Price History", desc: "Historical tracking for market & alfalfa prices" },
    ],
    tags: ["FastAPI", "Python", "SQLAlchemy", "Next.js", "REST API", "Agro-tech"],
  },
];

export function Projects() {
  const professional = projects.filter((p) => p.type === "professional");

  return (
    <section id="projects" className="py-24 border-t border-[#1F1F1F]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-[#D4A853] uppercase tracking-widest">Projects</p>
        </motion.div>

        {/* Professional */}
        <div className="mb-14">
          <p className="font-mono text-xs text-[#888888] uppercase tracking-wider mb-5">Professional highlights</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {professional.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub */}
        <div>
          <p className="font-mono text-xs text-[#888888] uppercase tracking-wider mb-5">Personal · GitHub</p>
          <div className="space-y-4">
            {githubProjects.map((project, i) => (
              <GitHubCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
