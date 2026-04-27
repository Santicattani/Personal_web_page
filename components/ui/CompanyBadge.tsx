"use client";

import Image from "next/image";

type CompanyConfig =
  | { type: "logo"; src: string; width: number; height: number }
  | { type: "initials"; initials: string; color: string };

const companyConfig: Record<string, CompanyConfig> = {
  Globant: { type: "logo", src: "/logo-globant.png", width: 72, height: 16 },
  GM2: { type: "initials", initials: "GM", color: "#D4A853" },
  "Survey Kiwi": { type: "initials", initials: "SK", color: "#4CAF7D" },
  "Solutions Malls": { type: "initials", initials: "SM", color: "#9B8EA8" },
};

export function CompanyBadge({ company }: { company: string }) {
  const config = companyConfig[company] ?? {
    type: "initials" as const,
    initials: company.slice(0, 2).toUpperCase(),
    color: "#888888",
  };

  if (config.type === "logo") {
    return (
      <div className="h-9 px-2.5 rounded-md flex items-center justify-center shrink-0 bg-white">
        <Image
          src={config.src}
          alt={company}
          width={config.width}
          height={config.height}
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 text-[10px] font-mono font-medium border"
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
