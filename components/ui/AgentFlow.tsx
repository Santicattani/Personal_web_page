"use client";

import { motion } from "framer-motion";

type Agent = {
  name: string;
  description: string;
  color: string;
};

const subAgents: Agent[] = [
  { name: "Rent Roll Agent", description: "Consulta de inquilinos y unidades activas", color: "#D4A853" },
  { name: "Payments Agent", description: "Estado de pagos y cuotas", color: "#D4A853" },
  { name: "Owner Bank Balance", description: "Saldo de cuenta por propietario", color: "#D4A853" },
  { name: "Property Bank Balance", description: "Saldo de cuenta por propiedad", color: "#D4A853" },
  { name: "Unit Inventory Agent", description: "Inventario de unidades disponibles", color: "#D4A853" },
  { name: "Charge Detail Agent", description: "Detalle de cargos a inquilinos", color: "#D4A853" },
  { name: "Contact Info Agent", description: "Información de contactos", color: "#D4A853" },
  { name: "Validation Agent", description: "Validación de identidad y acceso", color: "#D4A853" },
];

const techBadges = [
  { label: "n8n", color: "#EA4B71" },
  { label: "OpenAI GPT-4o", color: "#10A37F" },
  { label: "Whisper", color: "#10A37F" },
  { label: "WhatsApp", color: "#25D366" },
  { label: "Redis", color: "#DC382D" },
  { label: "Google Sheets", color: "#34A853" },
  { label: "Gmail", color: "#EA4335" },
  { label: "LangChain", color: "#00A0AE" },
];

function Arrow() {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="w-px h-5 bg-[#2A2A2A]" />
      <div
        className="w-0 h-0"
        style={{
          borderLeft: "5px solid transparent",
          borderRight: "5px solid transparent",
          borderTop: "6px solid #2A2A2A",
        }}
      />
    </div>
  );
}

export function AgentFlow() {
  return (
    <div className="w-full">
      {/* Input layer */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center gap-3 mb-1"
      >
        <div className="flex items-center gap-2 border border-[#25D366]/30 bg-[#25D366]/08 rounded-lg px-4 py-2">
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-xs text-[#F2F2F2] font-light">WhatsApp</span>
          <span className="font-mono text-[10px] text-[#888888]">texto</span>
        </div>
        <div className="flex items-center gap-2 border border-[#25D366]/30 bg-[#25D366]/08 rounded-lg px-4 py-2">
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-xs text-[#F2F2F2] font-light">WhatsApp</span>
          <span className="font-mono text-[10px] text-[#888888]">audio → Whisper</span>
        </div>
      </motion.div>

      <div className="flex justify-center">
        <Arrow />
      </div>

      {/* Orchestrator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="border border-[#D4A853]/50 bg-[#D4A853]/05 rounded-xl p-4 mb-1 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4A853]/03 via-transparent to-[#D4A853]/03" />
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D4A853]/15 border border-[#D4A853]/40 flex items-center justify-center shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#D4A853] animate-pulse" />
            </div>
            <div>
              <p className="text-sm font-light text-[#F2F2F2]">Orchestrator Agent</p>
              <p className="text-xs text-[#888888]">GPT-4o · memoria en Redis · enrutamiento dinámico</p>
            </div>
          </div>
          <div className="sm:ml-auto flex flex-wrap gap-1.5">
            <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[#EA4B71]/30 text-[#EA4B71]">n8n</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[#10A37F]/30 text-[#10A37F]">GPT-4o</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[#DC382D]/30 text-[#DC382D]">Redis</span>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center">
        <Arrow />
      </div>

      {/* Sub-agents label */}
      <p className="text-center font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-2">
        despacha a agentes especializados
      </p>

      {/* Sub-agents grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-1">
        {subAgents.map((agent, i) => (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
            className="border border-[#1F1F1F] bg-[#141414] rounded-lg p-3 hover:border-[#D4A853]/30 transition-colors duration-200"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A853]/60 mb-2" />
            <p className="text-xs text-[#F2F2F2] font-light leading-snug mb-1">{agent.name}</p>
            <p className="text-[10px] text-[#888888] leading-relaxed">{agent.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Arrow />
      </div>

      {/* Data sources */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="flex justify-center flex-wrap gap-2"
      >
        {[
          { label: "Google Sheets", color: "#34A853" },
          { label: "Gmail", color: "#EA4335" },
          { label: "HTTP APIs", color: "#888888" },
        ].map((src) => (
          <div
            key={src.label}
            className="flex items-center gap-1.5 border rounded-lg px-3 py-1.5"
            style={{ borderColor: `${src.color}30`, backgroundColor: `${src.color}08` }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: src.color }} />
            <span className="text-xs font-light" style={{ color: src.color }}>{src.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
