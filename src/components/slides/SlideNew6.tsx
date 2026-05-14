import { motion } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { DotGrid, StarBurst } from "@/components/deck/Decor";

const commonBeliefs = [
  "La innovación parte del comité central, no del campo",
  "El asesor es un ejecutor normativo",
  "Más llamadas = más datos útiles automáticamente",
  "El A031 captura lo relevante",
];

const uncommonBeliefs = [
  "El asesor ya tiene los mejores insights del mercado — el sistema no se los pide",
  "87.000 llamadas son 87.000 entrevistas de cliente no estructuradas",
  "El cuello de botella es la captura, no la inteligencia",
  "La IA puede convertir una grabación en un insight accionable sin fricción",
];

export function SlideNew6() {
  return (
    <div className="w-full h-full px-28 py-10 flex flex-col justify-center relative paper-grain">
      <DotGrid className="absolute top-16 right-24 w-28 h-20 text-coral/25" rows={4} cols={6} />
      <StarBurst className="absolute bottom-24 right-36 w-16 h-16 text-bolivar-leaf/40" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">06 / 12 — Value Lab</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-[64px] text-bolivar-deep leading-[0.95] font-medium mb-6"
      >
        Value <span className="italic text-coral">Lab</span>
      </motion.h2>

      <div className="grid grid-cols-2 gap-6 mb-5">
        {/* Common Beliefs */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-ink/5 border-2 border-ink/15 rounded-2xl p-6">
          <div className="font-mono text-xs tracking-widest text-ink/50 uppercase mb-4">Common Beliefs · Lo que cree la industria</div>
          <div className="space-y-2.5">
            {commonBeliefs.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ink/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-ink/50" strokeWidth={3} />
                </div>
                <span className="text-sm text-ink/70 leading-snug">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Uncommon Beliefs */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-bolivar-mint border-2 border-bolivar/40 rounded-2xl p-6 shadow-xl">
          <div className="font-mono text-xs tracking-widest text-bolivar uppercase mb-4">Uncommon Beliefs · Nuestra apuesta</div>
          <div className="space-y-2.5">
            {uncommonBeliefs.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-bolivar flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cream" />
                </div>
                <span className="text-sm text-bolivar-deep font-medium leading-snug">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* SI/ENTONCES */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-bolivar-deep text-cream rounded-2xl px-7 py-4 flex items-start gap-5">
        <div className="font-display italic text-coral text-4xl leading-none mt-1">SI</div>
        <p className="text-base leading-snug flex-1">
          procesamos con IA las grabaciones de llamadas para extraer hallazgos estructurados por empresa, sector y tipo de dolor
        </p>
        <ArrowRight className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
        <div className="font-display italic text-bolivar-leaf text-xl leading-none mt-1 whitespace-nowrap">ENTONCES</div>
        <p className="text-base leading-snug flex-1">
          el Comité pasa de recibir <span className="text-coral font-semibold">ruido operativo</span> a recibir un radar de señales priorizadas en tiempo real, sin cambiar el comportamiento del asesor.
        </p>
      </motion.div>
    </div>
  );
}
