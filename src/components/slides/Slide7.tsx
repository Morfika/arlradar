import { motion } from "framer-motion";
import { Shield, TrendingUp, Trophy } from "lucide-react";
import { ArrowDoodle, StarBurst } from "@/components/deck/Decor";

export function Slide7() {
  return (
    <div className="w-full h-full px-32 py-16 flex flex-col justify-center relative paper-grain">
      <StarBurst className="absolute top-24 right-40 w-20 h-20 text-coral" />
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">07 / 10 — Cuánto ganan</span>
      </div>
      <h2 className="font-display text-7xl text-bolivar-deep leading-[1.05] mb-8 max-w-[1500px]">
        El retorno no es opcional.<br />
        Es la diferencia entre <span className="italic text-coral">prevenir</span> y <span className="line-through text-ink/50">pagar</span>.
      </h2>

      <div className="grid grid-cols-[1.4fr_1fr] gap-8 mb-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-bolivar-mint rounded-3xl p-8 border-2 border-bolivar/30">
          <div className="flex items-center gap-3 mb-5">
            <Shield className="w-8 h-8 text-bolivar" />
            <div className="font-display text-3xl text-bolivar-deep font-medium">Valor directo · reducción de siniestralidad</div>
          </div>
          {[
            { t: "Prevención de 1 siniestro grave evitado", d: "Indemnización + costos legales + pérdida productividad", v: "$15 – 80 M" },
            { t: "Reducción 1% siniestralidad (cuota Bolívar)", d: "~10.2% de participación sobre $29.100 M sector · con insights predictivos", v: "~$2.968 M / año" },
            { t: "Discovery de innovación acelerado", d: "De semanas a tiempo real · +2 iniciativas/año", v: "Alto" },
          ].map((r, i) => (
            <div key={i} className="flex justify-between gap-6 py-3 border-b border-bolivar/20 last:border-0">
              <div>
                <div className="font-semibold text-lg text-bolivar-deep">{r.t}</div>
                <div className="text-sm text-ink/60">{r.d}</div>
              </div>
              <div className="font-display text-2xl font-medium text-bolivar whitespace-nowrap">{r.v}</div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="bg-white rounded-3xl p-8 border-2 border-coral/40">
          <div className="flex items-center gap-3 mb-5">
            <Trophy className="w-8 h-8 text-coral" />
            <div className="font-display text-3xl text-bolivar-deep font-medium">Valor estratégico</div>
          </div>
          {[
            { t: "Diferenciación competitiva", d: "AXA Colpatria y SURA ya desarrollan analítica" },
            { t: "Retención de clientes corporativos", d: "Detectar riesgos = renovación más fuerte" },
            { t: "Habilitar work-from-home como mercado", d: "81% de empresas con esquemas híbridos" },
          ].map((r, i) => (
            <div key={i} className="py-3 border-b border-ink/10 last:border-0">
              <div className="font-semibold text-lg text-bolivar-deep">{r.t}</div>
              <div className="text-sm text-ink/60">{r.d}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {[
          { n: "~$2.968 M", l: "COP valor mínimo año 1 (cuota Bolívar, 1% reducción)", c: "bg-bolivar text-cream" },
          { n: "~20×", l: "ROI potencial solo en reducción de siniestralidad", c: "bg-coral text-white" },
          { n: "$12 M", l: "COP para validar con piloto", c: "bg-white text-bolivar-deep border-2 border-bolivar-deep" },
        ].map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className={`${m.c} rounded-3xl p-7 flex items-center gap-5 shadow-xl`}>
            <TrendingUp className="w-12 h-12 opacity-70" />
            <div>
              <div className="font-display text-5xl font-medium leading-none">{m.n}</div>
              <div className="text-base mt-2 opacity-90">{m.l}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <ArrowDoodle className="absolute bottom-12 left-32 w-44 h-16 text-bolivar-leaf -rotate-6" />
    </div>
  );
}
