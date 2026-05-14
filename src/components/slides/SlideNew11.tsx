import { motion } from "framer-motion";
import { Rocket, CheckSquare, BarChart3, Globe, FlaskConical } from "lucide-react";
import { DotGrid, SquigglyLine } from "@/components/deck/Decor";

const phases = [
  {
    icon: Rocket,
    phase: "Piloto",
    time: "Semanas 1–8",
    action: "20 asesores, 2 sectores, dashboard básico",
    metric: "Adopción, calidad insights, decisiones tomadas",
    color: "bg-coral text-white",
  },
  {
    icon: CheckSquare,
    phase: "Validación",
    time: "Semanas 9–16",
    action: "Expandir a 50 asesores, ajustar clasificación IA",
    metric: "Reducción en tiempo de discovery",
    color: "bg-bolivar text-cream",
  },
  {
    icon: BarChart3,
    phase: "Escala",
    time: "Mes 6–12",
    action: "160 asesores, plataforma propia",
    metric: "Impacto en siniestralidad medible",
    color: "bg-bolivar-deep text-cream",
  },
  {
    icon: Globe,
    phase: "Expansión",
    time: "Año 2",
    action: "Integrar con portafolio de innovación",
    metric: "NPV real vs estimado",
    color: "bg-ink text-cream",
  },
];

const nextExperiments = [
  "Piloto de grabación con 5 llamadas reales — validar calidad de transcripción",
  "Entrevistas con 3 directores sectoriales — validar formato del dashboard",
  "Test A/B: clasificación IA vs clasificación manual",
];

export function SlideNew11() {
  return (
    <div className="w-full h-full px-28 py-11 flex flex-col justify-center relative paper-grain">
      <DotGrid className="absolute top-16 right-24 w-32 h-20 text-coral/20" rows={4} cols={7} />
      <SquigglyLine className="absolute bottom-10 left-32 w-56 h-4 text-bolivar-leaf/60" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">11 / 12 — Roadmap</span>
      </motion.div>

      <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-[64px] text-bolivar-deep leading-[0.95] font-medium mb-7">
        Roadmap de <span className="italic text-coral">Validación</span>
      </motion.h2>

      {/* Phase cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {phases.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`${p.color} rounded-2xl p-5 shadow-xl flex flex-col`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                <p.icon className="w-4 h-4" />
              </div>
              <div>
                <div className="font-display text-xl font-medium">{p.phase}</div>
                <div className="font-mono text-[9px] tracking-widest opacity-70 uppercase">{p.time}</div>
              </div>
            </div>
            <p className="text-sm leading-snug opacity-90 mb-2 flex-1">{p.action}</p>
            <div className="border-t border-white/20 pt-2">
              <div className="font-mono text-[8px] tracking-widest opacity-60 uppercase mb-1">Métrica</div>
              <p className="text-xs opacity-80 leading-snug">{p.metric}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeline connector */}
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="h-1.5 bg-gradient-to-r from-coral via-bolivar to-ink rounded-full mb-6 origin-left" />

      {/* Next experiments */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-white border-2 border-bolivar/20 rounded-2xl p-5 shadow">
        <div className="flex items-center gap-2 mb-3">
          <FlaskConical className="w-5 h-5 text-bolivar" />
          <span className="font-mono text-xs tracking-widest text-bolivar uppercase">Próximos experimentos sugeridos</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {nextExperiments.map((exp, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-bolivar-mint border-2 border-bolivar flex items-center justify-center flex-shrink-0">
                <span className="font-mono text-[10px] font-bold text-bolivar">{i + 1}</span>
              </div>
              <p className="text-sm text-bolivar-deep leading-snug">{exp}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
