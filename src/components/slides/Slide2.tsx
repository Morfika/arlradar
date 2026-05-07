import { motion } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { SquigglyLine, DotGrid } from "@/components/deck/Decor";

export function Slide2() {
  const lost = [
    { t: "Dolores no verbalizados", d: "Necesidades que el portafolio actual no cubre" },
    { t: "Señales de mercado", d: "Tendencias sectoriales emergentes" },
    { t: "Riesgos pre-siniestro", d: "Condiciones peligrosas antes del accidente" },
  ];
  return (
    <div className="w-full h-full px-32 py-20 flex flex-col justify-center relative paper-grain">
      <DotGrid className="absolute top-24 right-32 w-32 h-32 text-coral/40" rows={5} cols={5} />
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">02 / 10 — El problema real</span>
      </div>
      <h2 className="font-display text-7xl text-bolivar-deep leading-[1.05] mb-4 max-w-[1500px]">
        El A031 documenta <span className="italic text-coral">cumplimiento</span>.<br />
        No <span className="scribble-underline">oportunidades</span>.
      </h2>

      <div className="grid grid-cols-2 gap-10 mt-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white border-2 border-ink/10 rounded-3xl p-10 relative">
          <div className="absolute -top-4 left-8 bg-ink text-cream px-4 py-1.5 rounded-full text-sm font-mono tracking-wider">HOY · A031</div>
          <p className="text-sm uppercase tracking-widest text-ink/50 font-semibold mb-6 mt-2">Lo que sí captura</p>
          {["¿Se realizó la llamada?", "¿Se cumplió el protocolo?"].map((t, i) => (
            <div key={i} className="flex gap-4 items-center py-4 border-b border-ink/10 last:border-0">
              <div className="w-12 h-12 rounded-full bg-destructive/15 flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" strokeWidth={3} />
              </div>
              <div>
                <div className="font-semibold text-xl text-ink">{t}</div>
                <div className="text-base text-ink/60">Registro de cumplimiento normativo</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-bolivar-mint border-2 border-bolivar rounded-3xl p-10 relative shadow-xl">
          <div className="absolute -top-4 left-8 bg-coral text-white px-4 py-1.5 rounded-full text-sm font-mono tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> LO QUE SE PIERDE
          </div>
          <p className="text-sm uppercase tracking-widest text-bolivar font-semibold mb-6 mt-2">Cada llamada, cada día</p>
          {lost.map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.15 }} className="flex gap-4 items-center py-3 border-b border-bolivar/20 last:border-0">
              <div className="w-12 h-12 rounded-full bg-bolivar text-cream flex items-center justify-center font-display text-2xl font-medium">{i + 1}</div>
              <div>
                <div className="font-semibold text-xl text-bolivar-deep">{l.t}</div>
                <div className="text-base text-ink/70">{l.d}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.7, type: "spring" }}
        className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 bg-coral text-white rounded-full w-20 h-20 flex items-center justify-center shadow-2xl z-10"
      >
        <ArrowRight className="w-10 h-10" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-10 bg-bolivar-deep text-cream rounded-3xl p-8 flex items-center gap-6 max-w-[1500px]">
        <div className="font-display italic text-coral text-6xl leading-none">"</div>
        <div>
          <div className="font-mono text-xs tracking-widest text-coral/80 uppercase mb-1">Insight validado · experimentación de campo</div>
          <div className="text-2xl leading-snug">
            El asesor <span className="font-display italic">sí</span> tiene la información. Su operación diaria no le da espacio para compartirla, y el sistema actual tampoco se la pide. La fricción es <span className="text-coral font-semibold">estructural, no tecnológica</span>.
          </div>
        </div>
      </motion.div>
      <SquigglyLine className="absolute bottom-10 right-32 w-72 h-4 text-bolivar-leaf" />
    </div>
  );
}
