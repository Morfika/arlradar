import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ArrowDoodle, StarBurst } from "@/components/deck/Decor";

export function Slide9() {
  return (
    <div className="w-full h-full px-32 py-16 flex flex-col justify-center relative paper-grain">
      <StarBurst className="absolute top-20 right-32 w-24 h-24 text-coral" />
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">09 / 10 — El cierre</span>
      </div>
      <h2 className="font-display text-7xl text-bolivar-deep leading-[1.05] mb-2">
        La propuesta <span className="italic text-coral">concreta</span>.
      </h2>
      <p className="text-2xl text-ink/60 mb-10">Tres movimientos. Ocho semanas. Una decisión.</p>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          { n: "01", t: "Autorizar piloto de 8 semanas", d: "20 asesores activos en 2 sectores. Inversión ~$12 M COP. Validar calidad de insights y adopción." },
          { n: "02", t: "Acceso a grabaciones existentes", d: "Solo necesitamos las que ya se producen. Sin protocolo nuevo para el asesor." },
          { n: "03", t: "2 directores sectoriales beta", d: "Que validen si el dashboard entrega señales accionables en el formato que necesitan." },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="bg-white rounded-3xl p-7 border-l-[8px] border-coral shadow-xl relative">
            <CheckCircle2 className="absolute top-5 right-5 w-8 h-8 text-bolivar-leaf" />
            <div className="font-display text-7xl text-coral/30 font-bold leading-none mb-3">{s.n}</div>
            <div className="font-display text-2xl text-bolivar-deep font-medium mb-2 leading-tight">{s.t}</div>
            <div className="text-base text-ink/65 leading-relaxed">{s.d}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          { n: "8 sem", l: "duración del piloto" },
          { n: "$12 M", l: "COP inversión total" },
          { n: "3 métricas", l: "adopción · calidad · decisiones" },
        ].map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }} className="bg-bolivar-mint border-2 border-bolivar/20 rounded-2xl py-5 px-6 text-center">
            <div className="font-display text-5xl text-bolivar-deep font-medium">{m.n}</div>
            <div className="text-sm text-bolivar mt-1 uppercase tracking-wider font-semibold">{m.l}</div>
          </motion.div>
        ))}
      </div>

      <motion.blockquote initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="border-l-[6px] border-coral pl-8 py-3 max-w-[1500px]">
        <p className="font-display italic text-3xl text-bolivar-deep leading-snug">
          Prevenir no empieza cuando ocurre el accidente. Empieza cuando alguien <span className="bg-coral/30 px-2">detecta la señal</span> — y la organización sí la escucha.
          <br /><span className="text-coral not-italic font-medium">Seguros Bolívar ya tiene las señales. Solo falta el sistema que las escuche.</span>
        </p>
      </motion.blockquote>
      <ArrowDoodle className="absolute bottom-12 right-32 w-44 h-16 text-bolivar-leaf rotate-[6deg]" />
    </div>
  );
}
