import { motion } from "framer-motion";
import { Briefcase, Heart, AlertOctagon, Target } from "lucide-react";
import { StarBurst, DotGrid } from "@/components/deck/Decor";

export function SlideNew3() {
  return (
    <div className="w-full h-full px-28 py-12 flex flex-col justify-center relative paper-grain">
      <StarBurst className="absolute top-20 right-28 w-20 h-20 text-coral/40" />
      <DotGrid className="absolute bottom-20 left-24 w-36 h-20 text-bolivar/20" rows={4} cols={7} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">03 / 12 — Buyer Persona</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-[68px] text-bolivar-deep leading-[0.95] font-medium mb-8"
      >
        Buyer <span className="italic text-coral">Persona</span>
      </motion.h2>

      <div className="grid grid-cols-[1fr_2fr] gap-8 max-w-[1500px]">
        {/* Profile card */}
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-bolivar-deep text-cream rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-coral to-bolivar flex items-center justify-center mb-4 shadow-xl">
            <Briefcase className="w-12 h-12 text-white" />
          </div>
          <div className="font-display text-2xl font-medium leading-tight mb-2">Director Táctico de Innovación</div>
          <div className="font-mono text-xs tracking-widest text-coral uppercase mb-4">Director Sectorial</div>
          <div className="text-sm text-cream/70 leading-relaxed">Toma decisiones de portafolio y prevención para Seguros Bolívar ARL</div>
        </motion.div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: Briefcase,
              title: "Necesidad funcional",
              content: "Recibir señales de mercado filtradas y priorizadas",
              color: "bg-bolivar-mint border-2 border-bolivar/30",
              textColor: "text-bolivar-deep",
            },
            {
              icon: Heart,
              title: "Necesidad emocional",
              content: "Pasar de reaccionar ante siniestros a anticiparlos",
              color: "bg-coral/10 border-2 border-coral/30",
              textColor: "text-bolivar-deep",
            },
            {
              icon: AlertOctagon,
              title: "Frustraciones",
              content: "Recibe 87.000 registros A031 que documentan cumplimiento, no oportunidades. El discovery tarda semanas porque no hay inteligencia estructurada.",
              color: "bg-white border-2 border-ink/15",
              textColor: "text-bolivar-deep",
            },
            {
              icon: Target,
              title: "Métrica de éxito",
              content: "Número de decisiones de portafolio tomadas a partir de insights de campo",
              color: "bg-bolivar text-cream",
              textColor: "text-cream",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className={`${card.color} rounded-2xl p-5 shadow-md`}
            >
              <div className={`flex items-center gap-2 mb-2 ${card.textColor}`}>
                <card.icon className="w-4 h-4 opacity-70" />
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-70">{card.title}</span>
              </div>
              <p className={`text-base leading-snug font-medium ${card.textColor}`}>{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
