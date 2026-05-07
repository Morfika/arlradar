import { motion } from "framer-motion";
import { Radar, Compass, Award } from "lucide-react";
import { CircleDoodle } from "@/components/deck/Decor";

export function Slide8() {
  return (
    <div className="w-full h-full px-32 py-16 flex flex-col justify-center relative paper-grain">
      <CircleDoodle className="absolute top-32 right-40 w-28 h-28 text-coral/40" />
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">08 / 10 — Valor agregado diferencial</span>
      </div>
      <h2 className="font-display text-7xl text-bolivar-deep leading-[1.05] mb-10 max-w-[1500px]">
        No es <span className="line-through text-ink/50">software</span>.<br />
        Es <span className="italic text-coral">inteligencia que ya existe</span> pero no se está usando.
      </h2>

      <div className="grid grid-cols-2 gap-8 mb-8">
        {[
          {
            t: "Para el Director de Innovación", icon: Radar, color: "bg-coral",
            items: [
              { h: "Radar de señales en tiempo real", d: "Insights clasificados por sector, frecuencia y urgencia" },
              { h: "Discovery acelerado", d: "El ciclo pasa de semanas a horas. Más proyectos, más rápido" },
              { h: "Evidencia para decisiones", d: "No más intuición. Datos de campo reales para portafolio" },
            ]
          },
          {
            t: "Para el Director Sectorial", icon: Compass, color: "bg-bolivar",
            items: [
              { h: "Prevención predictiva por sector", d: "Sabe qué empresas tienen riesgos antes del siniestro" },
              { h: "Gestión proactiva de clientes clave", d: "Identifica clientes que necesitan atención" },
              { h: "Argumento de renovación más fuerte", d: '"Detectamos este riesgo antes de que ocurriera"' },
            ]
          },
        ].map((col, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15 }} className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className={`${col.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                <col.icon className="w-8 h-8" strokeWidth={1.8} />
              </div>
              <div className="font-display text-3xl text-bolivar-deep font-medium leading-tight">{col.t}</div>
            </div>
            {col.items.map((it, i) => (
              <div key={i} className="flex gap-4 py-3 border-b border-ink/10 last:border-0">
                <div className="font-display text-3xl font-medium text-coral leading-none mt-1">0{i + 1}</div>
                <div>
                  <div className="font-semibold text-lg text-bolivar-deep">{it.h}</div>
                  <div className="text-sm text-ink/60">{it.d}</div>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-bolivar-deep text-cream rounded-3xl p-8 grid grid-cols-[auto_1fr] gap-6 items-center max-w-[1500px]">
        <Award className="w-20 h-20 text-coral flex-shrink-0" strokeWidth={1.5} />
        <div>
          <div className="font-mono text-xs tracking-widest text-coral uppercase mb-2">Lo que ninguna ARL tiene hoy</div>
          <p className="text-2xl leading-snug">
            Un sistema que convierte <strong className="text-coral">87.000 conversaciones anuales</strong> en inteligencia estructurada, sin agregar fricción operativa, sin cambiar el comportamiento del asesor.{" "}
            <span className="font-display italic">El asesor ya graba. Solo falta que alguien escuche.</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
