import { motion } from "framer-motion";
import { MessageSquare, FlaskConical, XCircle, Lightbulb } from "lucide-react";
import { DotGrid, SquigglyLine } from "@/components/deck/Decor";

export function SlideNew7() {
  return (
    <div className="w-full h-full px-28 py-12 flex flex-col justify-center relative paper-grain">
      <DotGrid className="absolute top-16 right-24 w-32 h-24 text-bolivar/20" rows={4} cols={7} />
      <SquigglyLine className="absolute bottom-10 right-32 w-56 h-4 text-coral/50" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">07 / 12 — Experimento 1</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-[62px] text-bolivar-deep leading-[0.95] font-medium mb-7"
      >
        Experimento 1 · <span className="italic text-coral">Radar por WhatsApp</span>
      </motion.h2>

      <div className="grid grid-cols-[1fr_1fr] gap-6 mb-6">
        {/* Setup */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white border-2 border-ink/15 rounded-2xl p-6 shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-bolivar-mint flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-bolivar" />
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest text-bolivar uppercase">Setup del experimento</div>
              <div className="font-display text-xl font-medium text-bolivar-deep">Radar de Innovación por WhatsApp</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-bolivar-mint/50 rounded-xl p-3">
              <div className="font-mono text-[9px] tracking-widest text-bolivar uppercase mb-1">Hipótesis</div>
              <p className="text-sm text-bolivar-deep">Si el canal es tan fácil como escribir un chat, los asesores reportarán información valiosa sin interrumpir su día</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Canal", value: "Grupo WhatsApp cerrado" },
                { label: "Asesores", value: "5 participantes" },
                { label: "Duración", value: "48 horas" },
              ].map((d, i) => (
                <div key={i} className="bg-ink/5 rounded-xl p-3 text-center">
                  <div className="font-mono text-[8px] tracking-widest text-ink/50 uppercase">{d.label}</div>
                  <div className="font-semibold text-bolivar-deep text-sm mt-1">{d.value}</div>
                </div>
              ))}
            </div>
            <div className="text-sm text-ink/60">
              Formato de 3 campos: <span className="font-semibold text-ink/80">empresa / situación / dolor</span>. Instrucciones claras enviadas al inicio.
            </div>
          </div>
        </motion.div>

        {/* Result */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex flex-col gap-4">
          {/* Result card */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5 flex-1">
            <div className="flex items-center gap-3 mb-3">
              <XCircle className="w-8 h-8 text-destructive" />
              <div>
                <div className="font-mono text-[10px] tracking-widest text-destructive uppercase">Resultado · INVALIDADA</div>
                <div className="font-display text-3xl font-medium text-bolivar-deep">0 de 5 asesores reportaron</div>
              </div>
            </div>
            <p className="text-base text-ink/70">Silencio total a pesar de instrucciones claras y canal accesible.</p>
          </div>

          {/* Message icon */}
          <div className="bg-white border-2 border-ink/10 rounded-2xl p-4 flex items-center gap-4">
            <MessageSquare className="w-10 h-10 text-ink/20" />
            <div className="flex-1">
              <div className="font-mono text-[9px] tracking-widest text-ink/40 uppercase mb-1">WhatsApp · Grupo ARL Radar</div>
              <div className="text-sm text-ink/40 italic">Sin mensajes nuevos en 48 horas…</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Learning */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-bolivar-deep text-cream rounded-2xl px-7 py-4 flex items-start gap-4">
        <Lightbulb className="w-7 h-7 text-coral flex-shrink-0 mt-0.5" />
        <div>
          <div className="font-mono text-[10px] tracking-widest text-coral uppercase mb-1">Aprendizaje clave</div>
          <p className="text-base leading-snug">
            La fricción no es el canal — es el <span className="font-semibold text-coral">momento</span>. El día a día del asesor no tiene un espacio diseñado para reportar. Reducir la fricción tecnológica no cambia la fricción <span className="font-semibold text-bolivar-leaf">estructural</span>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
