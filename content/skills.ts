export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Project & Delivery",
    skills: [
      "Agile",
      "Scrum",
      "Kanban",
      "SAFe",
      "PMI / PMP",
      "Risk Management",
      "Backlog Management",
      "Release Planning",
      "OKRs",
    ],
  },
  {
    label: "AI & Data",
    skills: [
      "AI Product Delivery",
      "RAG Pipelines",
      "Data Strategy",
      "Business Intelligence",
      "LLM Integrations",
      "Prompt Engineering",
    ],
  },
  {
    label: "Enterprise Systems",
    skills: [
      "SAP S/4HANA",
      "TRM Module",
      "ERP Implementation",
      "System Integration",
      "Cutover Management",
    ],
  },
  {
    label: "Finance & Fintech",
    skills: [
      "Capital Markets",
      "Fintech Platforms",
      "P&L Management",
      "Budget Control",
      "Corporate Finance",
    ],
  },
  {
    label: "Leadership",
    skills: [
      "Stakeholder Management",
      "C-Level Communication",
      "Cross-functional Teams",
      "Cross-cultural Teams",
      "Vendor Management",
      "Team Coaching",
    ],
  },
];
