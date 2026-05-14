import { motion } from "framer-motion";
import { Radar, Building2, Lightbulb, User, BookOpen, Calendar } from "lucide-react";
import { StarBurst, DotGrid } from "@/components/deck/Decor";

export function SlideNew1() {
  const items = [
    { icon: Radar, label: "Nombre", value: "ARL Radar", color: "bg-coral text-white" },
    { icon: Building2, label: "Empresa", value: "Seguros Bolívar ARL", color: "bg-bolivar text-cream" },
    { icon: Lightbulb, label: "Reto", value: "Captura y estructuración de inteligencia de campo", color: "bg-bolivar-mint text-bolivar-deep border-2 border-bolivar/30" },
    { icon: User, label: "Equipo", value: "PPP Group", color: "bg-white text-bolivar-deep border-2 border-ink/10" },
    { icon: BookOpen, label: "Materia", value: "IIND3312 — Innovación y Emprendimiento en Ingeniería", color: "bg-white text-bolivar-deep border-2 border-ink/10" },
    { icon: Calendar, label: "Fecha", value: "Mayo 2026", color: "bg-bolivar-deep text-cream" },
  ];

  return (
    <div className="w-full h-full px-32 py-14 flex flex-col justify-center relative paper-grain">
      <StarBurst className="absolute top-16 right-32 w-20 h-20 text-coral/50" />
      <DotGrid className="absolute bottom-20 left-24 w-40 h-24 text-bolivar/20" rows={4} cols={8} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-5">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">01 / 12 — Identificación</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-[76px] text-bolivar-deep leading-[0.95] font-medium mb-10 max-w-[1200px]"
      >
        Identificación<br />
        <span className="italic text-coral">del proyecto</span>
      </motion.h2>

      <div className="grid grid-cols-3 gap-5 max-w-[1500px]">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`${item.color} rounded-2xl p-6 shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-2">
              <item.icon className="w-5 h-5 opacity-70" />
              <span className="font-mono text-xs tracking-widest uppercase opacity-70">{item.label}</span>
            </div>
            <div className="font-display text-xl font-medium leading-snug">{item.value}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
