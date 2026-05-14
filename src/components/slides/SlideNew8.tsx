import { motion } from "framer-motion";
import { FlaskConical, CheckCircle2, Lightbulb, Clock, MessageSquare } from "lucide-react";
import { StarBurst, DotGrid } from "@/components/deck/Decor";

const insights = [
  "Ergonomía remota — dolor de cuello y espalda en home-office",
  "Fatiga digital en trabajo híbrido",
  "Vacíos de portafolio para trabajadores de home office",
];

export function SlideNew8() {
  return (
    <div className="w-full h-full px-28 py-12 flex flex-col justify-center relative paper-grain">
      <StarBurst className="absolute top-20 right-28 w-20 h-20 text-bolivar-leaf/40" />
      <DotGrid className="absolute bottom-20 left-24 w-36 h-20 text-bolivar/15" rows={4} cols={7} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">08 / 12 — Experimento 2</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-[60px] text-bolivar-deep leading-[0.95] font-medium mb-7"
      >
        Experimento 2 · <span className="italic text-coral">El Buscador de Oro</span>
      </motion.h2>

      <div className="grid grid-cols-[1.1fr_1fr] gap-6 mb-6">
        {/* Setup */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white border-2 border-ink/15 rounded-2xl p-6 shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-bolivar-mint flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-bolivar" />
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest text-bolivar uppercase">Entrevista de Cambio</div>
              <div className="font-display text-xl font-medium text-bolivar-deep">El Buscador de Oro</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-bolivar-mint/50 rounded-xl p-3">
              <div className="font-mono text-[9px] tracking-widest text-bolivar uppercase mb-1">Hipótesis</div>
              <p className="text-sm text-bolivar-deep">Una conversación directa de 15 minutos revela dolores reales que el portafolio no resuelve</p>
            </div>

            <div className="bg-ink/5 rounded-xl p-4">
              <div className="font-mono text-[9px] tracking-widest text-ink/50 uppercase mb-2">Pregunta única utilizada</div>
              <p className="font-display text-base italic text-bolivar-deep">
                "¿Cuéntame la última vez que un cliente te pidió algo que no supiste cómo resolver con el portafolio actual?"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-ink/5 rounded-xl p-3 text-center">
                <div className="font-mono text-[8px] tracking-widest text-ink/50 uppercase">Perfil</div>
                <div className="font-semibold text-bolivar-deep text-sm mt-1">1 asesor de alto desempeño</div>
              </div>
              <div className="bg-coral/10 rounded-xl p-3 text-center flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-coral" />
                <div className="font-semibold text-bolivar-deep text-sm">30+ minutos</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Result */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex flex-col gap-4">
          <div className="bg-bolivar-mint border-2 border-bolivar/40 rounded-2xl p-5 flex-1 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle2 className="w-8 h-8 text-bolivar" />
              <div>
                <div className="font-mono text-[10px] tracking-widest text-bolivar uppercase">Resultado · VALIDADA ✓</div>
                <div className="font-display text-2xl font-medium text-bolivar-deep">Dolores emergentes</div>
              </div>
            </div>
            <div className="space-y-2">
              {insights.map((ins, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-bolivar flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cream text-[10px] font-bold">{i + 1}</span>
                  </div>
                  <span className="text-sm text-bolivar-deep leading-snug">{ins}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-bolivar-leaf/30 rounded-2xl p-4 flex items-start gap-3">
            <MessageSquare className="w-6 h-6 text-bolivar-leaf flex-shrink-0 mt-0.5" />
            <p className="text-sm text-bolivar-deep/80 italic leading-snug">
              "Validación adicional: técnicamente viable grabar las llamadas <span className="not-italic font-semibold text-bolivar">sin cambiar el protocolo del asesor</span>."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Learning */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="bg-bolivar-deep text-cream rounded-2xl px-7 py-4 flex items-start gap-4">
        <Lightbulb className="w-7 h-7 text-coral flex-shrink-0 mt-0.5" />
        <div>
          <div className="font-mono text-[10px] tracking-widest text-coral uppercase mb-1">Aprendizaje clave</div>
          <p className="text-base leading-snug">
            El asesor tiene la información y <span className="font-semibold text-coral">quiere compartirla</span>. El problema es que nadie se la había pedido de forma estructurada.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
