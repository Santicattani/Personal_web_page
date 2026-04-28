"use client";

import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    title: "Intake",
    scenario: "Recibe Consultas",
    description: "Webhook recibe la consulta del cliente con archivos adjuntos",
    steps: ["PDF.co extrae texto", "OpenAI analiza documento", "ClickUp task creado", "Google Drive organiza archivos"],
    color: "#D4A853",
  },
  {
    number: "02",
    title: "Client Quote",
    scenario: "Presupuesto Cliente",
    description: "Genera y envía presupuesto al cliente automáticamente",
    steps: ["Precios desde Google Sheets", "Google Docs desde template", "Gmail draft listo"],
    color: "#D4A853",
  },
  {
    number: "03",
    title: "Freelancer",
    scenario: "Presupuesto Freelancer",
    description: "Asigna y cotiza al freelancer según el tipo de trabajo",
    steps: ["ClickUp polling", "Enrutamiento por tipo", "Email automático al freelancer"],
    color: "#D4A853",
  },
  {
    number: "04",
    title: "Delivery",
    scenario: "Enviar Traducción",
    description: "Entrega el trabajo al cliente cuando el freelancer completa",
    steps: ["Google Forms trigger", "Descarga de Drive", "Email con adjunto al cliente"],
    color: "#D4A853",
  },
  {
    number: "05",
    title: "Invoice",
    scenario: "Generador Facturas",
    description: "Genera y envía la factura cuando la tarea se completa",
    steps: ["Datos de Google Sheets", "Factura desde template", "Gmail al cliente"],
    color: "#D4A853",
  },
];

const tools = [
  { label: "Make.com", color: "#6D00CC" },
  { label: "OpenAI GPT", color: "#10A37F" },
  { label: "ClickUp", color: "#7B68EE" },
  { label: "Google Sheets", color: "#34A853" },
  { label: "Google Docs", color: "#4285F4" },
  { label: "Google Drive", color: "#FBBC04" },
  { label: "Gmail", color: "#EA4335" },
  { label: "PDF.co", color: "#FF6B35" },
  { label: "Webhooks", color: "#888888" },
];

export function CRMFlow() {
  return (
    <div className="w-full">
      {/* Pipeline stages */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent hidden sm:block" />

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="relative"
            >
              {/* Stage card */}
              <div className="border border-[#1F1F1F] bg-[#141414] rounded-lg p-3 hover:border-[#D4A853]/20 transition-colors duration-200 h-full">
                {/* Number badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] text-[#D4A853] bg-[#D4A853]/10 border border-[#D4A853]/20 rounded px-1.5 py-0.5">
                    {stage.number}
                  </span>
                </div>

                <p className="text-xs font-light text-[#F2F2F2] mb-0.5">{stage.title}</p>
                <p className="font-mono text-[9px] text-[#888888] mb-2">{stage.scenario}</p>
                <p className="text-[10px] text-[#888888] leading-relaxed mb-3">{stage.description}</p>

                <ul className="space-y-1">
                  {stage.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-1.5">
                      <span className="text-[#D4A853] text-[8px] mt-0.5 shrink-0">▸</span>
                      <span className="text-[9px] text-[#888888] leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tools row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-5 pt-4 border-t border-[#1F1F1F] flex flex-wrap gap-2"
      >
        {tools.map((tool) => (
          <div
            key={tool.label}
            className="flex items-center gap-1.5 border rounded-md px-2.5 py-1"
            style={{ borderColor: `${tool.color}25`, backgroundColor: `${tool.color}08` }}
          >
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: tool.color }} />
            <span className="text-[10px] font-mono" style={{ color: tool.color }}>{tool.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
