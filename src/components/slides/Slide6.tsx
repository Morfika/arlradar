import { motion } from "framer-motion";
import { Wallet } from "lucide-react";
import { DotGrid } from "@/components/deck/Decor";

export function Slide6() {
  const pilot = [
    { l: "Transcripción IA (Whisper / AssemblyAI)", s: "30 min/llamada × 20 asesores × 8 sem", v: "$1.2 M" },
    { l: "Clasificación LLM (GPT-4o / Claude)", s: "$0.002 USD por insight generado", v: "$0.3 M" },
    { l: "Dashboard básico (Retool / low-code)", s: "Configuración + personalización", v: "$8 M" },
    { l: "Onboarding asesores (½ día)", s: "Grabación técnicamente validada", v: "$2 M" },
  ];
  const full = [
    { l: "Transcripción IA escala completa", s: "87.000 llamadas × 30 min", v: "$47 M" },
    { l: "Clasificación y análisis LLM", s: "Procesamiento continuo", v: "$7 M" },
    { l: "Plataforma propia (3 meses dev)", s: "Equipo tech interno", v: "$60 M" },
    { l: "Gestión del cambio + formación", s: "200 asesores · 2 directores", v: "$30 M" },
  ];
  return (
    <div className="w-full h-full px-32 py-16 flex flex-col justify-center relative paper-grain">
      <DotGrid className="absolute top-20 right-32 w-32 h-20 text-coral/40" rows={4} cols={6} />
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">06 / 10 — Cuánto cuesta</span>
      </div>
      <h2 className="font-display text-7xl text-bolivar-deep leading-[1.05] mb-10 max-w-[1500px]">
        Inversión: <span className="italic text-coral">menos de lo que cuesta</span> un siniestro grave.
      </h2>

      <div className="grid grid-cols-2 gap-8">
        {[
          { title: "MVP piloto", sub: "8 semanas · 20 asesores", items: pilot, total: "$12 M COP", note: "Equivale a ~1/5 del costo de un solo siniestro laboral grave.", c: "border-coral", chipBg: "bg-coral" },
          { title: "Implementación completa", sub: "Año 1 · 200 asesores", items: full, total: "$144 M COP", note: "Operación años siguientes: ~$54 M COP / año", c: "border-bolivar", chipBg: "bg-bolivar" },
        ].map((card, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15 }} className={`bg-white rounded-3xl p-9 border-t-[10px] ${card.c} shadow-xl`}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="font-display text-4xl text-bolivar-deep font-medium">{card.title}</div>
                <div className="text-base text-ink/60 mt-1">{card.sub}</div>
              </div>
              <Wallet className="w-12 h-12 text-bolivar-leaf" strokeWidth={1.5} />
            </div>
            <div className="space-y-1">
              {card.items.map((it, i) => (
                <div key={i} className="flex justify-between gap-4 py-3 border-b border-ink/10">
                  <div>
                    <div className="text-base font-semibold text-ink">{it.l}</div>
                    <div className="text-sm text-ink/55">{it.s}</div>
                  </div>
                  <div className="font-display text-2xl font-medium text-bolivar-deep whitespace-nowrap">~{it.v}</div>
                </div>
              ))}
            </div>
            <div className={`${card.chipBg} text-white rounded-2xl p-5 mt-5 flex items-center justify-between`}>
              <span className="font-display text-2xl font-medium">Total</span>
              <span className="font-display text-4xl font-medium">{card.total}</span>
            </div>
            <p className="text-sm text-ink/60 italic mt-4 font-display">{card.note}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
