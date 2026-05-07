import { motion } from "framer-motion";
import { Mic, Cpu, BarChart3, RefreshCw, ArrowRight } from "lucide-react";
import { CircleDoodle } from "@/components/deck/Decor";

export function Slide5() {
  const steps = [
    { icon: Mic, n: 1, t: "Asesor realiza la llamada", d: "Sin cambio de comportamiento. La llamada se graba automáticamente y el audio sube a la plataforma.", color: "bg-coral" },
    { icon: Cpu, n: 2, t: "IA transcribe y clasifica", d: "Empresa, sector, dolor, señal de mercado, riesgo pre-siniestro. En minutos.", color: "bg-bolivar" },
    { icon: BarChart3, n: 3, t: "Dashboard al director", d: "Señales priorizadas por frecuencia, sector y urgencia. Listas para decidir.", color: "bg-bolivar-deep" },
    { icon: RefreshCw, n: 4, t: "Feedback al asesor", d: "Ve que su reporte generó una iniciativa. Se cierra el loop. Aumenta adopción.", color: "bg-coral" },
  ];
  return (
    <div className="w-full h-full px-32 py-20 flex flex-col justify-center relative paper-grain">
      <CircleDoodle className="absolute top-32 right-40 w-32 h-32 text-bolivar-leaf/40" />
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-bolivar" />
        <span className="font-mono text-sm tracking-widest text-bolivar uppercase">05 / 10 — La solución</span>
      </div>
      <h2 className="font-display text-7xl text-bolivar-deep leading-[1.05] mb-2 max-w-[1500px]">
        <span className="bg-bolivar-deep text-cream px-4 italic">ARL Radar</span>: de conversación a decisión
      </h2>
      <p className="font-display italic text-5xl text-coral mb-12">en menos de 24 horas.</p>

      <div className="grid grid-cols-4 gap-6 relative mb-10">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-white rounded-3xl p-7 shadow-xl relative"
          >
            <div className={`${s.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
              <s.icon className="w-10 h-10" strokeWidth={1.8} />
            </div>
            <div className="font-display text-7xl text-ink/10 absolute top-4 right-6 leading-none font-bold">{s.n}</div>
            <div className="font-display text-2xl text-bolivar-deep font-medium mb-2 leading-tight">{s.t}</div>
            <p className="text-base text-ink/65 leading-relaxed">{s.d}</p>
            {i < 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.1 }} className="absolute top-1/2 -right-5 -translate-y-1/2 z-10 bg-cream rounded-full p-1">
                <ArrowRight className="w-7 h-7 text-coral" strokeWidth={2.5} />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-bolivar-deep text-cream rounded-3xl p-8 grid grid-cols-[auto_1fr] gap-8 items-center max-w-[1500px]">
        <div className="bg-coral text-white px-6 py-4 rounded-2xl font-display text-2xl font-medium leading-tight text-center">
          MVP<br />8 SEMANAS
        </div>
        <div>
          <div className="font-mono text-xs tracking-widest text-coral uppercase mb-2">Propuesta de inicio</div>
          <p className="text-2xl leading-snug">
            <strong className="text-coral">20 asesores activos</strong> + <strong className="text-coral">2 directores sectoriales</strong> + dashboard básico. Medición de 3 métricas: <em className="font-display">adopción · calidad de insights · decisiones tomadas</em>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
