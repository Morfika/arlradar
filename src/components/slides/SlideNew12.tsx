import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Star } from "lucide-react";
import { StarBurst, DotGrid, SquigglyLine } from "@/components/deck/Decor";

const conclusions = [
  {
    title: "Problema estructural, no tecnológico",
    desc: "El sistema no está diseñado para capturar inteligencia de campo. Los 87.000 puntos de contacto son oportunidades invisibles.",
  },
  {
    title: "El asesor tiene la información",
    desc: "La experimentación validó que el asesor quiere compartir sus hallazgos cuando se le abre el espacio correcto.",
  },
  {
    title: "La solución de menor fricción",
    desc: "Procesar lo que ya ocurre (grabaciones) en lugar de pedir un comportamiento nuevo al asesor.",
  },
];

const recommendations = [
  { n: "01", text: "Autorizar piloto de $12M COP antes de comprometer inversión completa" },
  { n: "02", text: "Integrar ARL Radar con el proceso de decisión del Comité Táctico desde el inicio" },
  { n: "03", text: "Diseñar incentivo visible para el asesor — que vea el impacto de sus reportes" },
  { n: "04", text: "Explorar alianza con proveedor de IA especializado en sector salud/seguros para reducir costos de desarrollo" },
];

export function SlideNew12() {
  return (
    <div className="w-full h-full px-28 py-10 flex flex-col justify-center relative paper-grain">
      <StarBurst className="absolute top-16 right-24 w-20 h-20 text-coral/40" />
      <DotGrid className="absolute bottom-20 left-20 w-36 h-20 text-bolivar/15" rows={4} cols={7} />
      <SquigglyLine className="absolute bottom-10 right-36 w-56 h-4 text-bolivar-leaf/50" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">12 / 12 — Conclusiones</span>
      </motion.div>

      <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-[60px] text-bolivar-deep leading-[0.95] font-medium mb-6">
        Conclusiones &amp; <span className="italic text-coral">Recomendaciones</span>
      </motion.h2>

      <div className="grid grid-cols-[1.1fr_1fr] gap-7">
        {/* Conclusions */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <div className="font-mono text-xs tracking-widest text-bolivar uppercase mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Conclusiones
          </div>
          <div className="space-y-4">
            {conclusions.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12 }}
                className="flex items-start gap-4 bg-bolivar-mint border-2 border-bolivar/25 rounded-2xl p-5 shadow"
              >
                <div className="w-8 h-8 rounded-xl bg-bolivar flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs font-bold text-cream">{i + 1}</span>
                </div>
                <div>
                  <div className="font-display text-lg font-medium text-bolivar-deep mb-1">{c.title}</div>
                  <p className="text-sm text-ink/70 leading-snug">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <div className="font-mono text-xs tracking-widest text-coral uppercase mb-4 flex items-center gap-2">
            <Star className="w-4 h-4" /> Recomendaciones para Seguros Bolívar
          </div>
          <div className="space-y-3">
            {recommendations.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4 bg-white border-2 border-coral/20 rounded-2xl p-5 shadow"
              >
                <div className="w-8 h-8 rounded-xl bg-coral text-white flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                  {r.n}
                </div>
                <p className="text-sm text-bolivar-deep leading-snug">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-5 bg-bolivar-deep text-cream rounded-2xl px-7 py-4 flex items-center justify-between"
      >
        <div>
          <div className="font-mono text-[10px] tracking-widest text-coral uppercase mb-1">Próximo paso concreto</div>
          <p className="font-display text-2xl">Piloto de <span className="text-coral">$12M COP</span> · 8 semanas · 20 asesores · validar antes de escalar</p>
        </div>
        <ArrowRight className="w-10 h-10 text-coral flex-shrink-0" />
      </motion.div>
    </div>
  );
}
