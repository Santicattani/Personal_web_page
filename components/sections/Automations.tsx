"use client";

import { motion } from "framer-motion";
import { AgentFlow } from "@/components/ui/AgentFlow";
import { Tag } from "@/components/ui/Tag";

const techStack = [
  "n8n", "OpenAI GPT-4o", "Whisper", "WhatsApp API",
  "Redis", "Google Sheets", "Gmail", "LangChain",
];

const metrics = [
  { value: "8", label: "Sub-agentes especializados" },
  { value: "24/7", label: "Disponibilidad" },
  { value: "< 3s", label: "Tiempo de respuesta promedio" },
];

export function Automations() {
  return (
    <section id="automations" className="py-24 border-t border-[#1F1F1F]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-[#D4A853] uppercase tracking-widest mb-1">
            Automations
          </p>
          <p className="text-[#888888] text-sm font-light">n8n · AI Agents</p>
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-[#1F1F1F] rounded-xl overflow-hidden"
        >
          {/* Header */}
          <div className="border-b border-[#1F1F1F] bg-[#141414] px-6 py-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[#D4A853]/30 text-[#D4A853]">
                    n8n
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[#1F1F1F] text-[#888888]">
                    Multi-Agent System
                  </span>
                </div>
                <h3 className="text-[#F2F2F2] font-light text-lg leading-tight">
                  AI Property Management Agent
                </h3>
                <p className="text-[#888888] text-sm mt-1">311 PM — Administradora de propiedades</p>
              </div>

              {/* Metrics */}
              <div className="flex gap-5 shrink-0">
                {metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="text-lg font-light text-[#D4A853]">{m.value}</p>
                    <p className="text-[10px] text-[#888888] font-mono leading-tight max-w-[70px]">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-[#888888] leading-relaxed mt-4 max-w-2xl">
              Sistema multi-agente que recibe consultas por WhatsApp —texto y notas de voz—
              de propietarios e inquilinos. El orquestador transcribe el audio con Whisper,
              mantiene contexto de conversación en Redis, y despacha a 8 agentes especializados
              para responder en lenguaje natural sobre pagos, saldos, inventario y más.
            </p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {techStack.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </div>

          {/* Architecture diagram */}
          <div className="p-6 bg-[#0C0C0C]">
            <p className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-5">
              Arquitectura del sistema
            </p>
            <AgentFlow />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
