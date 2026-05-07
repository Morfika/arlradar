import { motion } from "framer-motion";
import { ArrowDoodle, StarBurst, DotGrid, CircleDoodle } from "@/components/deck/Decor";
import { Mic, TrendingDown, Phone } from "lucide-react";

export function Slide1() {
  return (
    <div className="w-full h-full px-32 py-20 flex flex-col justify-center relative paper-grain">
      {/* decor */}
      <StarBurst className="absolute top-24 right-40 w-20 h-20 text-coral" />
      <DotGrid className="absolute bottom-32 left-32 w-40 h-24 text-bolivar/30" rows={4} cols={8} />
      <CircleDoodle className="absolute top-32 left-40 w-28 h-28 text-bolivar-leaf/60" />
      <motion.div
        initial={{ rotate: -8, scale: 0 }}
        animate={{ rotate: -8, scale: 1 }}
        transition={{ type: "spring", delay: 0.4 }}
        className="absolute top-20 right-[28rem] bg-coral text-white font-display italic text-2xl px-5 py-2 rounded-full shadow-lg"
      >
        Hook ✦
      </motion.div>

      <div className="max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-16 bg-bolivar" />
          <span className="font-mono text-sm tracking-widest text-bolivar uppercase">01 / 10 — La pregunta</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-display text-[88px] leading-[0.95] text-bolivar-deep tracking-tight font-medium mb-10"
        >
          Seguros Bolívar tiene{" "}
          <span className="relative inline-block">
            <span className="relative z-10">87.000 conversaciones</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="absolute left-0 bottom-2 h-5 w-full bg-coral/40 -z-0 origin-left"
            />
          </span>{" "}
          de cliente al año.<br />
          <span className="font-display italic text-bolivar">¿Cuántas se convierten en decisiones?</span>
        </motion.h1>

        <motion.blockquote
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="border-l-[6px] border-coral pl-8 py-2 max-w-[1100px] mb-12"
        >
          <p className="font-display italic text-3xl text-ink/80 leading-snug">
            "Un asesor llama a una empresa, el encargado menciona que varios trabajadores están cargando peso de forma improvisada. No hay reporte. Semanas después, llega la primera incapacidad. <span className="text-bolivar-deep not-italic font-medium">La señal existía. Nadie la capturó.</span>"
          </p>
        </motion.blockquote>

        <div className="grid grid-cols-3 gap-8 max-w-[1300px]">
          {[
            { n: "87.000", l: "puntos de contacto / año", icon: Phone, c: "bg-bolivar text-cream" },
            { n: "~ 0", l: "insights estructurados generados", icon: TrendingDown, c: "bg-coral text-white" },
            { n: "$2.91 B", l: "COP en siniestros pagados / año (sector)", icon: Mic, c: "bg-white text-bolivar-deep border-2 border-bolivar-deep" },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.15 }}
              className={`${m.c} rounded-3xl p-8 relative overflow-hidden shadow-xl`}
            >
              <m.icon className="absolute -top-4 -right-4 w-32 h-32 opacity-10" />
              <div className="font-display text-7xl font-medium leading-none mb-3">{m.n}</div>
              <div className="text-base opacity-90 font-medium">{m.l}</div>
            </motion.div>
          ))}
        </div>

        <ArrowDoodle className="absolute bottom-16 right-32 w-56 h-24 text-coral rotate-[8deg]" />
      </div>
    </div>
  );
}
