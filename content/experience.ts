export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  subEntries?: {
    title: string;
    description: string;
  }[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Globant",
    role: "Technical Project Manager",
    period: "2021 — Present",
    location: "Remote · LATAM",
    highlights: [
      "Led cross-functional squads of 15–30 engineers across multiple time zones, delivering AI-augmented products and enterprise integrations.",
      "Defined and owned delivery roadmaps, OKRs, and stakeholder communications at C-level.",
      "Drove adoption of agile practices (Scrum, Kanban, SAFe) across delivery units.",
    ],
    subEntries: [
      {
        title: "Aceitera General Deheza — SAP S/4HANA TRM",
        description:
          "Managed full ERP implementation for one of Argentina's largest agribusiness companies. Coordinated SAP functional consultants, custom dev teams, and business stakeholders through go-live.",
      },
      {
        title: "MercadoLibre — AI & Data Products",
        description:
          "Embedded TPM for AI product delivery within MercadoLibre's data platform. Oversaw RAG pipelines, data strategy initiatives, and BI tooling rollouts across LATAM markets.",
      },
    ],
  },
  {
    company: "GM2",
    role: "Project Manager",
    period: "2019 — 2021",
    location: "Buenos Aires, Argentina",
    highlights: [
      "Managed software delivery projects for fintech and capital markets clients.",
      "Coordinated backend and mobile teams across multiple concurrent product releases.",
      "Implemented risk management frameworks that reduced scope creep by 30%.",
    ],
  },
  {
    company: "Survey Kiwi",
    role: "Product & Project Manager",
    period: "2018 — 2019",
    location: "Buenos Aires, Argentina",
    highlights: [
      "Owned product roadmap for a SaaS survey platform with 50,000+ active users.",
      "Worked directly with engineering and design teams in two-week sprints.",
      "Drove a 40% improvement in onboarding completion rate through UX iteration.",
    ],
  },
  {
    company: "Solutions Malls",
    role: "Project Coordinator",
    period: "2017 — 2018",
    location: "Buenos Aires, Argentina",
    highlights: [
      "Coordinated technology implementation projects for shopping mall operators across Argentina.",
      "Managed vendor relationships and on-site delivery teams.",
    ],
  },
];
