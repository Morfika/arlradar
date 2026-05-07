import { motion } from "framer-motion";
import { Lightbulb, Zap } from "lucide-react";
import { StarBurst, DotGrid } from "@/components/deck/Decor";

export function Slide4() {
  return (
    <div className="w-full h-full px-32 py-20 flex flex-col justify-center relative paper-grain">
      <StarBurst className="absolute top-24 right-32 w-24 h-24 text-coral" />
      <DotGrid className="absolute bottom-28 left-32 w-32 h-20 text-bolivar/30" rows={4} cols={6} />
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">04 / 10 — Value Lab</span>
      </div>
      <h2 className="font-display text-7xl text-bolivar-deep leading-[1.05] mb-12 max-w-[1500px]">
        La apuesta que <span className="italic">pocos en la industria</span> se han atrevido a hacer.
      </h2>

      <div className="grid grid-cols-2 gap-10 mb-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white border-2 border-ink/10 rounded-3xl p-10 relative">
          <div className="absolute -top-5 left-8 bg-ink text-cream px-5 py-2 rounded-full text-sm font-mono tracking-wider">CREENCIA COMÚN</div>
          <p className="text-lg text-ink/60 uppercase tracking-wider mb-6 mt-2 font-semibold">Lo que cree la industria</p>
          <ul className="space-y-3 text-xl text-ink/70 leading-relaxed">
            <li className="flex gap-3"><span className="text-destructive">✕</span> La innovación parte del comité, no del campo</li>
            <li className="flex gap-3"><span className="text-destructive">✕</span> El asesor es un ejecutor normativo</li>
            <li className="flex gap-3"><span className="text-destructive">✕</span> Más llamadas = más datos útiles automáticamente</li>
            <li className="flex gap-3"><span className="text-destructive">✕</span> El A031 captura lo relevante</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-bolivar text-cream rounded-3xl p-10 relative shadow-2xl">
          <div className="absolute -top-5 left-8 bg-coral text-white px-5 py-2 rounded-full text-sm font-mono tracking-wider flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4" /> NUESTRA CREENCIA CONTRARIA
          </div>
          <p className="text-lg text-cream/80 uppercase tracking-wider mb-6 mt-2 font-semibold">El asesor ya tiene la inteligencia</p>
          <ul className="space-y-3 text-xl leading-relaxed">
            <li className="flex gap-3"><span className="text-coral font-bold">→</span> El asesor ya tiene los mejores insights del mercado</li>
            <li className="flex gap-3"><span className="text-coral font-bold">→</span> 87.000 llamadas son 87.000 conversaciones no estructuradas</li>
            <li className="flex gap-3"><span className="text-coral font-bold">→</span> El cuello de botella es la <em className="font-display">captura</em>, no la inteligencia</li>
            <li className="flex gap-3"><span className="text-coral font-bold">→</span> La IA convierte una grabación en un insight accionable</li>
          </ul>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-bolivar-mint border-l-[8px] border-bolivar rounded-2xl p-8 max-w-[1500px]">
        <div className="grid grid-cols-[auto_1fr_auto_1fr] gap-6 items-center">
          <div className="bg-bolivar text-cream font-display text-3xl font-medium px-5 py-2 rounded-xl">SI</div>
          <p className="text-xl text-bolivar-deep leading-snug">procesamos con IA las grabaciones de llamadas para extraer hallazgos estructurados por empresa, sector y tipo de dolor</p>
          <div className="bg-coral text-white font-display text-3xl font-medium px-5 py-2 rounded-xl flex items-center gap-2"><Zap className="w-6 h-6" /> ENTONCES</div>
          <p className="text-xl text-bolivar-deep leading-snug">el Comité de Innovación pasa de recibir <span className="line-through text-ink/50">ruido operativo</span> a recibir un <strong>radar de señales priorizadas en tiempo real </strong>  sin agragar más carga al trabajo del asesor.</p>
        </div>
      </motion.div>
    </div>
  );
}
