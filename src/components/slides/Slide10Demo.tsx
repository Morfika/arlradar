import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Phone, Mic, FileText, Users, AlertTriangle, Sparkles, CheckCircle2, Activity, TrendingUp, Lightbulb } from "lucide-react";

/* ============== DEMO TIMELINE (in seconds) ==============
 0  - 4   : phone ringing → call connected
 4  - 14  : conversation transcript appears word-by-word
 11 - 16  : IA brain pulses, processing
 13 - 22  : A031 form fields fill themselves (4 fields stagger)
 18 - 26  : insights cards pop into directors' inboxes (innovation + technical)
 22 - 30  : value chip "+$29M COP / año" appears, loop restart
========================================================= */

type Line = { speaker: "asesor" | "cliente"; text: string; t: number };
const LINES: Line[] = [
  { speaker: "asesor", t: 4, text: "Buenos días, soy Carlos, asesor ARL. ¿Cómo va la operación?" },
  { speaker: "cliente", t: 5.5, text: "Hola, todo bien… aunque los muchachos están cargando bultos de 50 kilos a mano." },
  { speaker: "asesor", t: 8, text: "¿Hace cuánto pasa eso? ¿Tienen ayudas mecánicas?" },
  { speaker: "cliente", t: 10, text: "Hace dos meses, desde que se dañó el montacargas. Tres ya se quejan de espalda." },
  { speaker: "asesor", t: 12, text: "Entiendo. ¿Y cuántos colaboradores están en home-office?" },
  { speaker: "cliente", t: 13.5, text: "Casi el 60%. Varios reportan dolor de cuello. No tienen sillas adecuadas." },
];

const A031_FIELDS = [
  { t: 14, label: "Empresa", value: "Industrias Andinas S.A.S.", color: "bg-bolivar-mint" },
  { t: 16, label: "Sector", value: "Manufactura · Logística", color: "bg-bolivar-mint" },
  { t: 18, label: "Riesgo pre-siniestro detectado", value: "Carga manual >25kg sin ayudas mecánicas (3 trabajadores afectados)", color: "bg-coral/20" },
  { t: 20, label: "Señal de mercado", value: "Riesgo emergente: ergonomía home-office (60% empresa)", color: "bg-coral/20" },
];

const NOTIFS = [
  { t: 19, who: "Directivos de Innovación", role: "Dir. Innovación", msg: "Nueva señal de mercado: ergonomía home-office en el 60% de la empresa.", tag: "OPORTUNIDAD", icon: Lightbulb, color: "bg-coral" },
  { t: 21, who: "Directivos de Innovación", role: "Dir. Innovación", msg: "Riesgo activo: carga manual sin ayudas mecánicas (3 trabajadores afectados).", tag: "PREVENCIÓN", icon: AlertTriangle, color: "bg-bolivar" },
  { t: 23, who: "Director Sectorial", role: "Manufactura", msg: "Cliente prioritario: contactar antes de renovación.", tag: "RETENCIÓN", icon: Activity, color: "bg-bolivar-deep" },
];

const CYCLE_ACTIVE = 30; // seconds of animation
const PAUSE = 5;         // seconds of pause at the end before restarting
const CYCLE_TOTAL = CYCLE_ACTIVE + PAUSE;
const FPS = 30;

function useTimeline() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const totalElapsed = ((now - start) / 1000) % CYCLE_TOTAL;
      // Clamp at CYCLE_ACTIVE during the pause window
      const elapsed = Math.min(totalElapsed, CYCLE_ACTIVE);
      setT(elapsed);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return t;
}

function Typewriter({ text, started, speed = 35 }: { text: string; started: boolean; speed?: number }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    if (!started) { setShown(""); return; }
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, started, speed]);
  return <>{shown}{started && shown.length < text.length && <span className="inline-block w-0.5 h-5 bg-current animate-pulse ml-0.5" />}</>;
}

export function Slide10Demo() {
  const t = useTimeline();
  const callConnected = t > 3;
  const visibleLines = LINES.filter(l => t >= l.t);
  const visibleFields = A031_FIELDS.map((f, i) => ({ ...f, visible: t >= f.t, idx: i }));
  const visibleNotifs = NOTIFS.filter(n => t >= n.t);
  const showValue = t >= 25;

  // audio waveform bars
  const bars = Array.from({ length: 32 }).map((_, i) => i);

  return (
    <div className="w-full h-full px-20 py-12 flex flex-col relative bg-cream paper-grain">
      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-16 bg-bolivar" />
            <span className="font-mono text-sm tracking-widest text-bolivar uppercase">10 / 10 — Demo en vivo</span>
            <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-3 h-3 rounded-full bg-destructive" />
            <span className="font-mono text-xs text-destructive uppercase tracking-widest font-bold">REC</span>
          </div>
          <h2 className="font-display text-6xl text-bolivar-deep leading-[1.0] font-medium">
            Una llamada. <span className="italic text-coral">Tres decisiones.</span> Cero fricción.
          </h2>
        </div>
        <div className="font-mono text-sm text-ink/50">
          ARL Radar · {Math.floor(t).toString().padStart(2, "0")}:{Math.floor((t % 1) * 100).toString().padStart(2, "0")}
        </div>
      </div>

      {/* Main grid: phone | A031 form | notifications */}
      <div className="grid grid-cols-[1fr_1.1fr_1fr] gap-5 flex-1 min-h-0">

        {/* === COL 1 : PHONE CALL === */}
        <div className="bg-bolivar-deep text-cream rounded-3xl p-6 flex flex-col relative overflow-hidden shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-full ${callConnected ? "bg-bolivar-leaf" : "bg-coral"} flex items-center justify-center shadow-lg`}>
              {callConnected ? <Mic className="w-6 h-6" /> : <Phone className="w-6 h-6 animate-pulse" />}
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest text-coral uppercase">{callConnected ? "Llamada activa" : "Marcando…"}</div>
              <div className="font-display text-xl font-medium leading-tight">Asesor ↔ Cliente</div>
            </div>
          </div>

          {/* waveform */}
          <div className="flex items-end gap-[3px] h-10 mb-3 px-1">
            {bars.map(i => {
              const h = callConnected ? 20 + Math.abs(Math.sin((t * 6) + i * 0.7)) * 70 : 10;
              return <motion.div key={i} className="flex-1 bg-coral rounded-full" style={{ height: `${h}%` }} animate={{ opacity: callConnected ? [0.4, 1, 0.4] : 0.3 }} transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.04 }} />;
            })}
          </div>

          {/* transcript */}
          <div className="flex-1 overflow-hidden flex flex-col gap-2 text-sm">
            <AnimatePresence>
              {visibleLines.map((l, i) => (
                <motion.div
                  key={`${l.t}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`rounded-xl p-2.5 ${l.speaker === "asesor" ? "bg-coral/20 border-l-2 border-coral" : "bg-cream/10 border-l-2 border-cream/40"}`}
                >
                  <div className="font-mono text-[9px] tracking-widest uppercase opacity-70 mb-0.5">{l.speaker === "asesor" ? "Carlos · Asesor" : "Andrea · Cliente"}</div>
                  <div className="leading-snug text-[13px]">
                    <Typewriter text={l.text} started={t >= l.t} speed={28} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* === COL 2 : IA BRAIN + A031 FORM === */}
        <div className="flex flex-col gap-4 min-h-0">
          {/* IA brain */}
          <div className="bg-white rounded-3xl p-4 shadow-xl border-2 border-coral/30 relative overflow-hidden">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: t > 11 ? [0, 360] : 0, scale: t > 11 ? [1, 1.1, 1] : 1 }}
                transition={{ rotate: { repeat: Infinity, duration: 3, ease: "linear" }, scale: { repeat: Infinity, duration: 1.2 } }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral to-bolivar flex items-center justify-center shadow-lg"
              >
                <Sparkles className="w-7 h-7 text-white" />
              </motion.div>
              <div className="flex-1">
                <div className="font-mono text-[10px] tracking-widest text-coral uppercase">Capa IA · GPT-4o + Whisper</div>
                <div className="font-display text-lg font-medium text-bolivar-deep leading-tight">
                  {t < 11 ? "Esperando audio…" : t < 22 ? "Extrayendo hallazgos…" : "Distribuyendo insights…"}
                </div>
              </div>
              {t > 11 && (
                <div className="flex gap-1">
                  {[0, 1, 2].map(i => (
                    <motion.div key={i} className="w-2 h-2 rounded-full bg-coral" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* A031 form */}
          <div className="bg-white rounded-3xl p-5 shadow-xl flex-1 flex flex-col min-h-0 border-2 border-bolivar/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-bolivar" />
                <span className="font-display text-xl font-medium text-bolivar-deep">Formato A031</span>
                <span className="font-mono text-[10px] bg-bolivar-mint text-bolivar-deep px-2 py-0.5 rounded-full uppercase tracking-wider">Auto-llenado</span>
              </div>
              {visibleFields.every(f => f.visible) && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-1 text-bolivar font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5" /> Completo
                </motion.div>
              )}
            </div>

            <div className="space-y-2.5 flex-1">
              {visibleFields.map((f, i) => (
                <div key={i} className="border border-ink/10 rounded-xl p-2.5 relative overflow-hidden">
                  <div className="font-mono text-[9px] tracking-widest text-ink/50 uppercase">{f.label}</div>
                  <div className="text-[15px] text-bolivar-deep font-semibold min-h-[22px] leading-snug mt-0.5">
                    {f.visible ? <Typewriter text={f.value} started={true} speed={20} /> : <span className="text-ink/20 italic text-xs">— pendiente —</span>}
                  </div>
                  {f.visible && (
                    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.4 }} className={`absolute inset-0 ${f.color} -z-10 origin-left`} />
                  )}
                  {f.visible && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} className="absolute top-2 right-2 bg-coral text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" /> IA
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === COL 3 : NOTIFICATIONS === */}
        <div className="flex flex-col gap-3 min-h-0">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-5 h-5 text-bolivar" />
            <span className="font-display text-xl font-medium text-bolivar-deep">Distribución a directivos</span>
          </div>

          <div className="flex-1 flex flex-col gap-3 min-h-0">
            <AnimatePresence>
              {visibleNotifs.map((n, i) => (
                <motion.div
                  key={n.t}
                  initial={{ opacity: 0, x: 40, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ type: "spring", damping: 18 }}
                  className="bg-white rounded-2xl p-4 shadow-xl border-l-[6px] relative"
                  style={{ borderLeftColor: i === 0 ? "var(--coral)" : i === 1 ? "var(--bolivar)" : "var(--bolivar-deep)" }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`${n.color} text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                      <n.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-display text-base font-semibold text-bolivar-deep truncate">{n.who}</span>
                        <span className={`${n.color} text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider`}>{n.tag}</span>
                      </div>
                      <div className="font-mono text-[9px] text-ink/50 uppercase tracking-wider mb-1">{n.role}</div>
                      <div className="text-[13px] text-ink/75 leading-snug">{n.msg}</div>
                    </div>
                  </div>
                  <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="absolute bottom-0 left-0 h-0.5 bg-bolivar-leaf rounded-full" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Value chip */}
          <AnimatePresence>
            {showValue && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", damping: 12 }}
                className="bg-gradient-to-br from-coral to-bolivar text-white rounded-2xl p-4 shadow-2xl relative overflow-hidden"
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute -right-4 -top-4 w-24 h-24 opacity-20">
                  <Sparkles className="w-full h-full" />
                </motion.div>
                <div className="font-mono text-[10px] tracking-widest uppercase opacity-90 mb-1">Valor capturado en esta llamada</div>
                <div className="flex items-end gap-3">
                  <div className="font-display text-4xl font-bold leading-none">+$2.968 M</div>
                  <div className="text-xs opacity-90 mb-1">COP / año<br />cuota Bolívar · 1% reducción siniestralidad</div>
                </div>
                <div className="flex items-center gap-1.5 mt-2 text-xs">
                  <TrendingUp className="w-4 h-4" />
                  <span>1 conversación · 3 directivos informados · 1 producto nuevo en pipeline</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom progress bar */}
      <div className="mt-4 flex items-center gap-3">
        <span className="font-mono text-[10px] text-ink/50 uppercase tracking-widest">Demo {Math.floor(t)}s / {CYCLE_ACTIVE}s · loop</span>
        <div className="flex-1 h-1 bg-ink/10 rounded-full overflow-hidden">
          <motion.div className="h-full bg-coral rounded-full" style={{ width: `${(t / CYCLE_ACTIVE) * 100}%` }} />
        </div>
        <span className="font-display italic text-bolivar-deep text-base">La llamada ocurre. Ahora alguien escucha.</span>
      </div>
    </div>
  );
}
