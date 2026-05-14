import { motion } from "framer-motion";
import { DollarSign, TrendingUp, AlertTriangle, Star } from "lucide-react";
import { DotGrid, StarBurst } from "@/components/deck/Decor";

const npvRows = [
  { year: "Año 1", income: "$3.068M", discount: "÷ 1.12", pv: "$2.739M" },
  { year: "Año 2", income: "$3.068M", discount: "÷ 1.2544", pv: "$2.446M" },
  { year: "Año 3", income: "$3.068M", discount: "÷ 1.4049", pv: "$2.184M" },
];

const strategicValues = [
  "Retención de clientes corporativos (22.000 empresas)",
  "Diferenciación frente a AXA y SURA",
  "Aceleración del portafolio de innovación",
];

export function SlideNew10() {
  return (
    <div className="w-full h-full px-24 py-9 flex flex-col justify-center relative paper-grain">
      <DotGrid className="absolute top-14 right-20 w-28 h-20 text-coral/20" rows={4} cols={6} />
      <StarBurst className="absolute bottom-20 right-32 w-16 h-16 text-bolivar-leaf/30" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-3">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">10 / 12 — Business Case</span>
      </motion.div>

      <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-[58px] text-bolivar-deep leading-[0.95] font-medium mb-5">
        Business <span className="italic text-coral">Case</span> · WACC 12%
      </motion.h2>

      <div className="grid grid-cols-[1.1fr_1fr_1fr] gap-5 mb-4">
        {/* Capex & Opex */}
        <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white border-2 border-ink/15 rounded-2xl p-5 shadow">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-5 h-5 text-bolivar" />
            <span className="font-mono text-[10px] tracking-widest text-bolivar uppercase">Inversión</span>
          </div>
          <div className="space-y-2.5">
            <div className="bg-bolivar-mint/50 rounded-xl p-3">
              <div className="font-mono text-[8px] tracking-widest text-bolivar uppercase mb-1">Capex Año 0</div>
              <div className="font-display text-2xl font-medium text-bolivar-deep">$90M COP</div>
              <div className="text-xs text-ink/60 mt-1">Desarrollo $60M · Gestión del cambio $30M</div>
            </div>
            <div className="bg-ink/5 rounded-xl p-3">
              <div className="font-mono text-[8px] tracking-widest text-ink/50 uppercase mb-1">Opex anual (Años 1–3)</div>
              <div className="font-display text-2xl font-medium text-bolivar-deep">$54M COP / año</div>
              <div className="text-xs text-ink/60 mt-1">APIs IA: transcripción + LLM</div>
            </div>
            <div className="bg-coral/10 border border-coral/30 rounded-xl p-3">
              <div className="font-mono text-[8px] tracking-widest text-coral uppercase mb-1">Piloto para validar</div>
              <div className="font-display text-2xl font-medium text-bolivar-deep">$12M COP</div>
              <div className="text-xs text-ink/60 mt-1">Antes de comprometer inversión completa</div>
            </div>
          </div>
        </motion.div>

        {/* NPV table */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white border-2 border-bolivar/20 rounded-2xl p-5 shadow">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-bolivar" />
            <span className="font-mono text-[10px] tracking-widest text-bolivar uppercase">NPV Beneficios (3 años)</span>
          </div>
          <div className="space-y-2 mb-3">
            {npvRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-1 items-center text-sm border-b border-ink/10 pb-2 last:border-0">
                <span className="font-mono text-[10px] text-ink/60">{row.year}</span>
                <span className="text-bolivar-deep font-medium text-center">{row.income}</span>
                <span className="text-bolivar font-semibold text-right">{row.pv}</span>
              </div>
            ))}
          </div>
          <div className="bg-bolivar rounded-xl p-3 text-center">
            <div className="font-mono text-[9px] tracking-widest text-cream/70 uppercase">NPV Beneficios Total</div>
            <div className="font-display text-3xl font-medium text-cream">$7.369M</div>
            <div className="text-xs text-cream/70">+ $100M/año discovery acelerado</div>
          </div>
        </motion.div>

        {/* Strategic value */}
        <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex flex-col gap-3">
          <div className="bg-coral/10 border-2 border-coral/30 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-coral" />
              <span className="font-mono text-[10px] tracking-widest text-coral uppercase">Honestidad financiera</span>
            </div>
            <p className="text-sm text-bolivar-deep leading-snug">
              El ROI financiero puro en 3 años es negativo si solo contamos la reducción del 1% de siniestralidad. El argumento correcto es el <strong>valor estratégico no cuantificado</strong>:
            </p>
          </div>
          <div className="bg-bolivar-mint border-2 border-bolivar/30 rounded-2xl p-4 flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-4 h-4 text-bolivar" />
              <span className="font-mono text-[10px] tracking-widest text-bolivar uppercase">Valor estratégico</span>
            </div>
            <div className="space-y-2">
              {strategicValues.map((v, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-bolivar mt-1.5 flex-shrink-0" />
                  <span className="text-xs text-bolivar-deep leading-snug">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom supuestos */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-3">
        {[
          { label: "Cuota Bolívar", value: "~$297.000M COP" },
          { label: "Reducción objetivo", value: "1% siniestralidad" },
          { label: "Beneficio año 1", value: "$2.968M + $100M" },
          { label: "WACC", value: "12%" },
          { label: "Horizonte", value: "3 años" },
        ].map((s, i) => (
          <div key={i} className="flex-1 bg-bolivar-deep text-cream rounded-xl p-3 text-center">
            <div className="font-mono text-[8px] tracking-widest text-cream/50 uppercase">{s.label}</div>
            <div className="font-display text-base font-medium">{s.value}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
