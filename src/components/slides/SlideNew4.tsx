import { motion } from "framer-motion";
import { Phone, FileText, Database, Search, CheckCircle } from "lucide-react";
import { DotGrid } from "@/components/deck/Decor";

const steps = [
  {
    icon: Phone,
    stage: "Visita/llamada",
    action: "Asesor habla con cliente",
    pain: "Detecta dolor real pero no tiene mecanismo para reportarlo",
    painLevel: "high",
  },
  {
    icon: FileText,
    stage: "Post-visita",
    action: "Llena A031",
    pain: "Documenta cumplimiento, no el insight",
    painLevel: "high",
  },
  {
    icon: Database,
    stage: "Reporte",
    action: "A031 llega al sistema",
    pain: "Director recibe dato de cumplimiento, no de oportunidad",
    painLevel: "high",
  },
  {
    icon: Search,
    stage: "Discovery",
    action: "Comité busca insights",
    pain: "Debe hacer investigación desde cero, semanas de trabajo",
    painLevel: "high",
  },
  {
    icon: CheckCircle,
    stage: "Decisión",
    action: "Comité decide",
    pain: "Sin datos de campo reales, decisión basada en intuición",
    painLevel: "high",
  },
];

export function SlideNew4() {
  return (
    <div className="w-full h-full px-28 py-12 flex flex-col justify-center relative paper-grain">
      <DotGrid className="absolute top-20 right-24 w-32 h-20 text-coral/25" rows={4} cols={7} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">04 / 12 — User Journey</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-[64px] text-bolivar-deep leading-[0.95] font-medium mb-8"
      >
        User Journey · <span className="italic text-coral">Estado Actual</span>
      </motion.h2>

      {/* Journey flow */}
      <div className="flex items-stretch gap-0 flex-1 min-h-0 max-h-[380px]">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.12 }}
            className="flex-1 relative"
          >
            {/* Connector arrow */}
            {i < steps.length - 1 && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-0 h-0 border-t-[14px] border-b-[14px] border-l-[16px] border-t-transparent border-b-transparent border-l-bolivar-deep/20" />
            )}

            <div className="h-full mr-1 bg-white border-2 border-ink/10 rounded-2xl p-4 flex flex-col shadow-md">
              {/* Step number */}
              <div className="w-8 h-8 rounded-full bg-bolivar-deep text-cream flex items-center justify-center font-mono text-xs font-bold mb-3">
                {i + 1}
              </div>

              {/* Stage label */}
              <div className="font-mono text-[10px] tracking-widest text-bolivar uppercase mb-1">{step.stage}</div>

              {/* Icon + action */}
              <div className="flex items-center gap-2 mb-3">
                <step.icon className="w-5 h-5 text-bolivar-deep flex-shrink-0" />
                <span className="font-display text-base font-medium text-bolivar-deep leading-snug">{step.action}</span>
              </div>

              {/* Pain point */}
              <div className="mt-auto bg-coral/10 border border-coral/30 rounded-xl p-3">
                <div className="font-mono text-[9px] tracking-widest text-coral uppercase mb-1">Dolor</div>
                <p className="text-xs text-bolivar-deep/80 leading-snug">{step.pain}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Key insight */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="mt-5 bg-bolivar-deep text-cream rounded-2xl px-8 py-4 flex items-center gap-4"
      >
        <div className="font-display italic text-coral text-5xl leading-none">"</div>
        <p className="text-lg leading-snug">
          La información valiosa <span className="font-semibold text-coral">muere en WhatsApp y conversaciones informales</span>. El sistema no está diseñado para escucharla.
        </p>
      </motion.div>
    </div>
  );
}
