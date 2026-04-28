"use client";

import Image from "next/image";

type CompanyConfig =
  | { type: "logo"; src: string; width: number; height: number; invert?: boolean }
  | { type: "initials"; initials: string; color: string };

const companyConfig: Record<string, CompanyConfig> = {
  Globant: { type: "logo", src: "/logo-globant.png", width: 80, height: 18, invert: true },
  "TELUS Digital": { type: "logo", src: "/logo-telusdigital.png", width: 100, height: 14, invert: true },
  "Survey Kiwi": { type: "logo", src: "/logo-surveykiwi.png", width: 90, height: 20, invert: false },
  "Solutions Malls": { type: "logo", src: "/logo-solutionsmalls.png", width: 24, height: 32, invert: true },
};

export function CompanyBadge({ company }: { company: string }) {
  const config = companyConfig[company] ?? {
    type: "initials" as const,
    initials: company.slice(0, 2).toUpperCase(),
    color: "#888888",
  };

  if (config.type === "logo") {
    return (
      <div className="h-10 px-3 rounded-lg flex items-center justify-center shrink-0 border border-[#1F1F1F] bg-[#141414]">
        <Image
          src={config.src}
          alt={company}
          width={config.width}
          height={config.height}
          className={`object-contain ${config.invert ? "brightness-0 invert" : ""}`}
        />
      </div>
    );
  }

  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-[11px] font-mono font-medium border"
      style={{
        borderColor: `${config.color}40`,
        backgroundColor: `${config.color}12`,
        color: config.color,
      }}
    >
      {config.initials}
    </div>
  );
}
