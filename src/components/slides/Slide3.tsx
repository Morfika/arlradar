import { motion } from "framer-motion";
import { Briefcase, Users, Cpu, ArrowRight } from "lucide-react";
import { ArrowDoodle } from "@/components/deck/Decor";

export function Slide3() {
  const actors = [
    {
      icon: Briefcase, color: "bg-coral text-white", ring: "ring-coral/30",
      role: "Director de Innovación",
      sub: "Comprador",
      d: "Necesita señales de mercado filtradas y priorizadas para tomar decisiones de portafolio. Hoy recibe el A031 — datos de cumplimiento, no de oportunidad.",
      tag: "Hoy: sin inteligencia de campo", tagColor: "bg-destructive/15 text-destructive"
    },
    {
      icon: Users, color: "bg-sand text-bolivar-deep", ring: "ring-bolivar/30",
      role: "Asesor de gestión de riesgo",
      sub: "Usuario",
      d: "Realiza 87.000 llamadas/año, escucha dolores reales, detecta señales. No tiene un mecanismo para que esa información salga de su cabeza.",
      tag: "Grabación validada técnicamente", tagColor: "bg-bolivar-mint text-bolivar-deep"
    },
    {
      icon: Cpu, color: "bg-bolivar text-cream", ring: "ring-coral/30",
      role: "Capa de inteligencia artificial",
      sub: "Solución propuesta",
      d: "El puente que hoy no existe. Procesa las grabaciones, extrae los hallazgos estructurados y los entrega al director ya clasificados, sin cambiar nada del asesor.",
      tag: "MVP piloto · 8 semanas", tagColor: "bg-coral text-white"
    },
  ];
  return (
    <div className="w-full h-full px-32 py-20 flex flex-col justify-center relative paper-grain">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">03 / 10 — A quién le resolvemos esto</span>
      </div>
      <h2 className="font-display text-7xl text-bolivar-deep leading-[1.05] mb-3">
        Tres actores. <span className="italic text-coral">Un sistema</span> que hoy los desconecta.
      </h2>
      <p className="text-2xl text-ink/60 mb-12 max-w-[1300px]">El puente que falta entre quien escucha al cliente y quien decide qué construir.</p>

      <div className="grid grid-cols-3 gap-8 relative">
        {actors.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-white rounded-3xl p-10 shadow-xl relative"
          >
            <div className={`w-24 h-24 rounded-2xl ${a.color} flex items-center justify-center mb-6 shadow-lg ring-8 ${a.ring}`}>
              <a.icon className="w-12 h-12" strokeWidth={1.8} />
            </div>
            <div className="font-mono text-xs tracking-widest text-coral uppercase mb-2">{a.sub}</div>
            <div className="font-display text-3xl text-bolivar-deep font-medium mb-4 leading-tight">{a.role}</div>
            <div className="text-lg text-ink/70 leading-relaxed mb-6">{a.d}</div>
            <span className={`inline-block ${a.tagColor} px-4 py-1.5 rounded-full text-sm font-semibold`}>{a.tag}</span>
          </motion.div>
        ))}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="absolute top-12 left-[33%] -translate-x-1/2">
          <ArrowRight className="w-12 h-12 text-coral" strokeWidth={2.5} />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute top-12 left-[66.5%] -translate-x-1/2">
          <ArrowRight className="w-12 h-12 text-coral" strokeWidth={2.5} />
        </motion.div>
      </div>

      <ArrowDoodle className="absolute bottom-12 left-32 w-48 h-20 text-bolivar-leaf -rotate-12" />
    </div>
  );
}
