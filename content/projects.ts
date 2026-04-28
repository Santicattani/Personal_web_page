export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
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
    title: "AutomateNow",
    description:
      "Landing page for an AI & automation consultancy. Built with Next.js and Framer Motion — animated particle canvas hero, full sections covering services, process, and case studies.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/Santicattani/AutomateNow_Web",
  },
  {
    type: "personal",
    title: "Forrajes Platform",
    description:
      "Full-stack platform for alfalfa and forage producers in Argentina. REST API in FastAPI with real-time pricing from clusterdealfalfa.com.ar, weather data, field management, and market tracking.",
    tags: ["FastAPI", "Python", "Next.js", "REST API", "Agro-tech"],
    github: "https://github.com/Santicattani/Forrajes-Project",
  },
];
