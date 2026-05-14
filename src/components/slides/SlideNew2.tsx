import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, Zap } from "lucide-react";
import { SquigglyLine, DotGrid } from "@/components/deck/Decor";

export function SlideNew2() {
  return (
    <div className="w-full h-full px-28 py-12 flex flex-col justify-center relative paper-grain">
      <DotGrid className="absolute top-16 right-24 w-32 h-28 text-coral/30" rows={5} cols={6} />
      <SquigglyLine className="absolute bottom-10 right-32 w-64 h-4 text-bolivar-leaf" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">02 / 12 — El Desafío</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-[62px] text-bolivar-deep leading-[1.0] font-medium mb-6 max-w-[1400px]"
      >
        Reto Original &amp; <span className="italic text-coral">Pivot Estratégico</span>
      </motion.h2>

      <div className="grid grid-cols-2 gap-6 mb-5">
        {/* Original challenge */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-ink/5 border-2 border-ink/15 rounded-2xl p-6 relative">
          <div className="absolute -top-3.5 left-6 bg-ink text-cream px-4 py-1 rounded-full text-xs font-mono tracking-widest uppercase">Reto original</div>
          <div className="flex items-start gap-3 mt-2">
            <AlertCircle className="w-6 h-6 text-ink/40 mt-1 flex-shrink-0" />
            <p className="font-display text-xl text-bolivar-deep italic leading-snug">
              "¿Cómo aprovechar los <span className="not-italic font-semibold text-coral">87.000 puntos de contacto</span> anuales para generar insights de valor que permitan innovar?"
            </p>
          </div>
          <div className="mt-4 text-sm text-ink/60 leading-relaxed">
            <strong className="text-ink/80">Contexto:</strong> Seguros Bolívar es la 2ª ARL más grande de Colombia (10.2%). Opera con 160+ asesores que atienden 22.000+ empresas. La industria migra de reactivo a preventivo — AXA y SURA ya desarrollan analítica predictiva.
          </div>
        </motion.div>

        {/* Redefined challenge */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-bolivar-mint border-2 border-bolivar/40 rounded-2xl p-6 relative shadow-xl">
          <div className="absolute -top-3.5 left-6 bg-coral text-white px-4 py-1 rounded-full text-xs font-mono tracking-widest uppercase flex items-center gap-1.5">
            <Zap className="w-3 h-3" /> Redefinición del reto
          </div>
          <div className="flex items-start gap-3 mt-2">
            <ArrowRight className="w-6 h-6 text-bolivar mt-1 flex-shrink-0" />
            <p className="font-display text-xl text-bolivar-deep italic leading-snug">
              "¿Cómo convertir automáticamente las conversaciones de campo en <span className="not-italic font-semibold text-coral">señales estructuradas y priorizadas</span> para el Comité de Innovación, sin agregar fricción al asesor?"
            </p>
          </div>
          <div className="mt-4 text-sm text-bolivar-deep/70 leading-relaxed">
            <strong className="text-bolivar-deep">Justificación:</strong> El reto original asumía que el problema era tecnológico. La experimentación reveló que era <span className="font-semibold text-coral">estructural</span> — el sistema no está diseñado para capturar lo que el asesor ya sabe.
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="grid grid-cols-4 gap-4">
        {[
          { n: "2ª", l: "ARL más grande de Colombia" },
          { n: "10.2%", l: "participación de mercado" },
          { n: "160+", l: "asesores en campo" },
          { n: "22.000+", l: "empresas atendidas" },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 border border-ink/10 text-center shadow">
            <div className="font-display text-4xl font-medium text-bolivar">{s.n}</div>
            <div className="text-xs text-ink/60 mt-1">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
