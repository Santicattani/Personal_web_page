export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  status?: string;
};

export const education: EducationEntry[] = [
  {
    degree: "Postgraduate in Corporate Finance & Capital Markets",
    institution: "Universidad Siglo 21",
    period: "2023 — Present",
    status: "In Progress",
  },
  {
    degree: "Bachelor of Business Administration",
    institution: "Universidad Siglo 21",
    period: "2013 — 2018",
  },
];
