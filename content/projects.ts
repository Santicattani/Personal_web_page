export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  type: "professional" | "personal";
  metric?: string;
};

export const projects: Project[] = [
  {
    type: "professional",
    title: "AI Finance Agent — Aceitera General Deheza",
    description:
      "AI-powered Finance Agent integrated with multiple data sources and a RAG system, enabling 20 financial analysts to interact dynamically with external consultancy reports — drastically reducing manual research time.",
    tags: ["AI", "RAG", "Finance", "Data Engineering", "Agro-industrial"],
    metric: "5,000+ hrs/year saved",
  },
  {
    type: "professional",
    title: "Competitive Pricing Monitor — AGD",
    description:
      "Real-time competitive pricing monitoring system using web scraping agents across major supermarket chains in Argentina, enabling strategic pricing decisions at scale.",
    tags: ["Web Scraping", "Agents", "BI", "Python", "Real-time"],
  },
  {
    type: "professional",
    title: "SAP S/4HANA TRM — MercadoLibre",
    description:
      "Leading an 11-person team implementing SAP Treasury & Risk Management for MercadoLibre's fixed income investment funds. Back-office tool managing ~USD 100M in assets under management.",
    tags: ["SAP S/4HANA", "TRM", "Fintech", "Capital Markets"],
    metric: "~USD 100M AUM",
  },
  {
    type: "professional",
    title: "Monolith → Microservices Migration — Pay Retailers",
    description:
      "Proposed and led a 4-month architectural migration from monolithic to microservices for a payment processing platform serving major financial institutions across LATAM.",
    tags: ["Microservices", "Architecture", "Fintech", "Payments", "LATAM"],
  },
  {
    type: "personal",
    title: "AI Personal Finance Assistant",
    description:
      "Prototype personal finance tool powered by an LLM, integrating bank transaction data for natural-language queries and automated spend categorization.",
    tags: ["AI", "LLM", "Fintech", "Automation"],
  },
  {
    type: "personal",
    title: "PM Automation Toolkit",
    description:
      "Collection of scripts and prompt templates automating recurring PM tasks: status report generation, risk register updates, and sprint retrospective summaries.",
    tags: ["Automation", "Python", "Prompting", "Productivity"],
  },
];
