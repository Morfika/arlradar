import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { StarBurst, DotGrid } from "@/components/deck/Decor";

export function SlideWrapUp() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-bolivar-deep paper-grain overflow-hidden">
      {/* Decorative elements */}
      <DotGrid className="absolute top-16 left-16 w-64 h-40 text-cream/10" rows={5} cols={12} />
      <DotGrid className="absolute bottom-16 right-16 w-64 h-40 text-cream/10" rows={5} cols={12} />
      <StarBurst className="absolute top-24 right-32 w-32 h-32 text-coral/30" />
      <StarBurst className="absolute bottom-24 left-32 w-24 h-24 text-bolivar-leaf/30" />

      {/* Animated background gradient orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-br from-coral/30 to-bolivar/40 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
        className="relative z-10 flex flex-col items-center gap-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 bg-coral/20 border border-coral/40 text-coral px-6 py-2.5 rounded-full"
        >
          <Sparkles className="w-5 h-5" />
          <span className="font-mono text-sm tracking-[0.3em] uppercase">Sección final</span>
          <Sparkles className="w-5 h-5" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="font-display text-[140px] leading-[0.9] text-cream font-medium tracking-tight"
        >
          Wrap
          <br />
          <span className="text-coral italic">Up</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="font-display text-2xl text-cream/60 italic max-w-xl"
        >
          Identificación · Desafío · Solución · Business Case · Roadmap · Conclusiones
        </motion.p>
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-coral to-bolivar-leaf rounded-full origin-center"
      />
    </div>
  );
}
