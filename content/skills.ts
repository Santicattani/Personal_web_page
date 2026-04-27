export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Project & Delivery",
    skills: [
      "Agile & Scrum",
      "Kanban",
      "PMI / PMP",
      "Risk Management",
      "Backlog & Sprint Planning",
      "Release Planning",
      "OKRs",
    ],
  },
  {
    label: "AI & Data",
    skills: [
      "AI Product Delivery",
      "RAG Pipelines",
      "Data & AI Strategy",
      "Business Intelligence",
      "LLM Integrations",
      "Web Scraping Agents",
    ],
  },
  {
    label: "Enterprise Systems",
    skills: [
      "SAP S/4HANA TRM",
      "ERP Implementation",
      "Microservices Architecture",
      "System Integration",
      "Cutover Management",
    ],
  },
  {
    label: "Finance & Fintech",
    skills: [
      "Capital Markets",
      "Fintech Platforms",
      "P&L & Budget Management",
      "Corporate Finance",
      "Payment Processing",
    ],
  },
  {
    label: "Leadership",
    skills: [
      "Stakeholder Management",
      "Cross-cultural Teams",
      "Cross-functional Leadership",
      "Client Relationships",
      "Team Coaching",
    ],
  },
];
