import { motion } from "framer-motion";
import { Phone, Sparkles, BarChart3, RefreshCcw, ArrowRight } from "lucide-react";
import { StarBurst, DotGrid } from "@/components/deck/Decor";

const flowSteps = [
  {
    icon: Phone,
    title: "Asesor realiza la llamada",
    desc: "Sin cambio de comportamiento — la llamada se graba automáticamente",
    color: "bg-bolivar-deep text-cream",
  },
  {
    icon: Sparkles,
    title: "IA transcribe y clasifica",
    desc: "Empresa, sector, dolor detectado, señal de mercado, riesgo pre-siniestro. En minutos.",
    color: "bg-coral text-white",
  },
  {
    icon: BarChart3,
    title: "Dashboard al director",
    desc: "Señales priorizadas por frecuencia, sector y urgencia",
    color: "bg-bolivar text-cream",
  },
  {
    icon: RefreshCcw,
    title: "Feedback al asesor",
    desc: "Ve que su reporte generó una iniciativa. Se cierra el loop.",
    color: "bg-bolivar-mint text-bolivar-deep border-2 border-bolivar/40",
  },
];

export function SlideNew9() {
  return (
    <div className="w-full h-full px-28 py-10 flex flex-col justify-center relative paper-grain">
      <StarBurst className="absolute top-20 right-24 w-20 h-20 text-coral/40" />
      <DotGrid className="absolute bottom-20 left-20 w-36 h-20 text-bolivar/15" rows={4} cols={7} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">09 / 12 — La Solución</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-[64px] text-bolivar-deep leading-[0.95] font-medium mb-3"
      >
        La Solución: <span className="italic text-coral">ARL Radar</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-ink/70 mb-7 max-w-[1200px]"
      >
        Plataforma que procesa automáticamente las grabaciones de llamadas de campo mediante IA, extrae hallazgos estructurados y los entrega al Comité de Innovación como un radar de señales priorizadas.
      </motion.p>

      {/* Flow */}
      <div className="flex items-stretch gap-0 mb-6 max-h-[220px]">
        {flowSteps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.12 }}
            className="flex-1 relative"
          >
            {i < flowSteps.length - 1 && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <ArrowRight className="w-5 h-5 text-ink/30" />
              </div>
            )}
            <div className={`${step.color} rounded-2xl p-5 h-full mr-2 shadow-lg flex flex-col`}>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                <step.icon className="w-5 h-5" />
              </div>
              <div className="font-display text-lg font-medium leading-snug mb-2">{step.title}</div>
              <p className="text-sm opacity-80 leading-snug">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MVP Pilot */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} className="bg-bolivar-deep text-cream rounded-2xl px-7 py-5 flex items-center gap-8">
        <div className="font-mono text-xs tracking-widest text-coral uppercase whitespace-nowrap">MVP Piloto propuesto</div>
        <div className="w-px h-10 bg-cream/20" />
        {[
          { v: "8 semanas", l: "Duración" },
          { v: "20 asesores", l: "Escala" },
          { v: "2 directores", l: "Sectoriales" },
          { v: "3 métricas", l: "Adopción · Calidad · Decisiones" },
        ].map((m, i) => (
          <div key={i} className="text-center">
            <div className="font-display text-2xl font-medium text-coral">{m.v}</div>
            <div className="font-mono text-[10px] tracking-widest text-cream/60 uppercase">{m.l}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
