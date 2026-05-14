import { motion } from "framer-motion";
import { Frown, MessageSquareOff, Unplug, Trash2 } from "lucide-react";
import { StarBurst, SquigglyLine } from "@/components/deck/Decor";

const barriers = [
  { icon: MessageSquareOff, text: "El A031 captura cumplimiento, no oportunidades" },
  { icon: Frown, text: "El asesor no tiene un momento diseñado para reportar insights" },
  { icon: Unplug, text: "No existe canal estructurado entre campo y comité" },
  { icon: Trash2, text: "La información valiosa muere en WhatsApp y conversaciones informales" },
];

export function SlideNew5() {
  return (
    <div className="w-full h-full px-28 py-12 flex flex-col justify-center relative paper-grain">
      <StarBurst className="absolute top-20 right-28 w-20 h-20 text-coral/40" />
      <SquigglyLine className="absolute bottom-12 left-32 w-60 h-4 text-bolivar-leaf" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">05 / 12 — Job to Be Done</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-[58px] text-bolivar-deep leading-[1.0] font-medium mb-6 max-w-[1300px]"
      >
        Job to <span className="italic text-coral">Be Done</span>
      </motion.h2>

      {/* JTBD Statement */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-bolivar-deep text-cream rounded-3xl p-8 mb-7 border-l-8 border-coral max-w-[1500px]"
      >
        <div className="font-mono text-xs text-coral uppercase tracking-widest mb-3">Declaración JTBD</div>
        <p className="font-display text-2xl italic leading-snug">
          "Cuando el <span className="not-italic font-semibold text-coral">Comité Táctico de Innovación</span> de Seguros Bolívar ARL recibe múltiples señales dispersas a través de asesores saturados por la operación diaria,{" "}
          quiere un proceso sistémico que filtre y priorice automáticamente los retos de alto valor,{" "}
          para <span className="not-italic font-semibold text-bolivar-leaf">pasar de la reactividad normativa a liderar con prevención predictiva</span>."
        </p>
      </motion.div>

      {/* Barriers */}
      <div>
        <div className="font-mono text-xs text-coral uppercase tracking-widest mb-4">Barreras y dolores</div>
        <div className="grid grid-cols-2 gap-4 max-w-[1500px]">
          {barriers.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-start gap-4 bg-white border-2 border-coral/20 rounded-2xl p-5 shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                <b.icon className="w-5 h-5 text-coral" />
              </div>
              <p className="text-base text-bolivar-deep leading-snug">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
