export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  type: "professional" | "personal";
};

export const projects: Project[] = [
  {
    type: "professional",
    title: "SAP S/4HANA TRM — Aceitera General Deheza",
    description:
      "End-to-end ERP implementation for one of Latin America's largest agribusiness companies. Managed a 40+ person cross-functional team through full project lifecycle: blueprinting, realization, UAT, cutover, and hypercare.",
    tags: ["SAP S/4HANA", "ERP", "TRM", "Enterprise", "Agribusiness"],
  },
  {
    type: "professional",
    title: "AI Data Platform — MercadoLibre",
    description:
      "Delivery management for AI and data products within MercadoLibre's internal platform team. Oversaw RAG pipeline delivery, data catalog initiatives, and BI tooling adoption across LATAM.",
    tags: ["AI", "RAG", "Data Strategy", "BI", "LATAM"],
  },
  {
    type: "professional",
    title: "Fintech Core Platform",
    description:
      "Led delivery of a multi-module fintech platform including P&L dashboards, automated risk scoring, and capital markets integrations. Coordinated backend, mobile, and QA teams.",
    tags: ["Fintech", "Capital Markets", "P&L", "Mobile", "Risk"],
  },
  {
    type: "personal",
    title: "AI Personal Finance Assistant",
    description:
      "Prototype personal finance tool powered by Claude, integrating bank transaction data with an LLM layer for natural-language queries and automated spend categorization.",
    tags: ["AI", "LLM", "Claude API", "Fintech", "Automation"],
  },
  {
    type: "personal",
    title: "PM Automation Toolkit",
    description:
      "Collection of scripts and prompts to automate recurring project management tasks: status report generation, risk register updates, and sprint retrospective summaries.",
    tags: ["Automation", "Python", "Prompting", "Productivity"],
  },
];
