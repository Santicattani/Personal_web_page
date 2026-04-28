export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  subEntries?: {
    title: string;
    period: string;
    description: string;
    bullets: string[];
  }[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Globant",
    role: "Technical Project Manager",
    period: "Sep 2024 — Present",
    location: "Buenos Aires, Argentina (Remote)",
    highlights: [
      "Led end-to-end delivery of high-impact technology initiatives within Agile frameworks (Scrum & Kanban), managing multidisciplinary teams and complex client relationships across two concurrent projects in the AI and fintech space.",
    ],
    subEntries: [
      {
        title: "Aceitera General Deheza — AI & Data Intelligence",
        period: "Oct 2024 — Mar 2026",
        description:
          "AI implementation project for one of Argentina's leading agro-industrial companies.",
        bullets: [
          "Led a cross-functional team of Data Engineers, Data Scientists, and Business Analysts across a 1.5-year engagement.",
          "Delivered an AI-powered Finance Agent with RAG integration, enabling 20 financial analysts to interact dynamically with reports from external consultancies.",
          "Built a BI pipeline with embedded AI for automated market share, demand elasticity, and regional sales analysis.",
          "Deployed a real-time competitive pricing monitoring system using web scraping agents across major supermarket chains.",
          "Generated an estimated saving of 5,000+ work hours per year across Finance and BI teams (~35 users).",
        ],
      },
      {
        title: "MercadoLibre — SAP TRM / Fondos Propios Grow",
        period: "Jan 2026 — Present",
        description:
          "SAP S/4HANA Treasury & Risk Management implementation for MercadoLibre's fixed income investment funds.",
        bullets: [
          "Leading an 11-person team (SAP consultants and developers) in the TRM implementation.",
          "Overseeing delivery of a back-office operational tool managing ~USD 100M in assets under management.",
          "Managing sprint ceremonies, backlog prioritization, risk identification, and alignment with MercadoLibre's Finance & People Systems team.",
        ],
      },
    ],
  },
  {
    company: "TELUS Digital",
    role: "IT Project Manager",
    period: "Sep 2023 — Sep 2024",
    location: "Argentina",
    highlights: [
      "Managed software development projects for Pay Retailers, a leading payment processing company serving major financial institutions across Latin America.",
      "Led the back-office platform roadmap, coordinating engineering teams to deliver features and track progress against business objectives.",
      "Proposed and executed a 4-month architectural migration from monolithic to microservices, improving deployment speed and platform uptime.",
      "Aligned projects with business goals using PMI and Scrum, managing scope, cost, timelines, and cross-functional resources.",
    ],
  },
  {
    company: "Survey Kiwi",
    role: "LATAM Project Lead",
    period: "~1 year",
    location: "Argentina",
    highlights: [
      "Following the company's acquisition by Australian capital, led LATAM operations across payments, commercial relationships, and business development.",
      "Successfully renewed a strategic enterprise license with Puma Energy, a key regional account.",
    ],
  },
  {
    company: "Solutions Malls",
    role: "Implementation Project Manager",
    period: "~1 year",
    location: "Argentina",
    highlights: [
      "Led end-to-end ERP implementation projects for shopping mall clients, managing the full deployment lifecycle from requirements gathering to go-live.",
      "Successfully delivered 14 concurrent ERP implementations across different clients within a 12-month period.",
    ],
  },
];
