"use client";

const companyConfig: Record<string, { initials: string; color: string }> = {
  Globant: { initials: "GL", color: "#00B4D8" },
  GM2: { initials: "GM", color: "#D4A853" },
  "Survey Kiwi": { initials: "SK", color: "#4CAF7D" },
  "Solutions Malls": { initials: "SM", color: "#9B8EA8" },
};

export function CompanyBadge({ company }: { company: string }) {
  const config = companyConfig[company] ?? {
    initials: company.slice(0, 2).toUpperCase(),
    color: "#888888",
  };

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
