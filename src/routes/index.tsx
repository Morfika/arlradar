import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SlideFrame } from "@/components/deck/SlideFrame";
import { Slide1 } from "@/components/slides/Slide1";
import { Slide2 } from "@/components/slides/Slide2";
import { Slide3 } from "@/components/slides/Slide3";
import { Slide4 } from "@/components/slides/Slide4";
import { Slide5 } from "@/components/slides/Slide5";
import { Slide6 } from "@/components/slides/Slide6";
import { Slide7 } from "@/components/slides/Slide7";
import { Slide8 } from "@/components/slides/Slide8";
import { Slide9 } from "@/components/slides/Slide9";
import { Slide10Demo } from "@/components/slides/Slide10Demo";

export const Route = createFileRoute("/")({
  component: Deck,
});

const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10Demo];
const LABELS = ["Hook", "Problema", "Actores", "Value Lab", "Solución", "Costos", "Retorno", "Diferencial", "Cierre", "Demo IA"];

function Deck() {
  const [i, setI] = useState(0);
  const Current = SLIDES[i];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") setI(p => Math.min(p + 1, SLIDES.length - 1));
      if (e.key === "ArrowLeft") setI(p => Math.max(p - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <SlideFrame>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0"
        >
          <Current />
        </motion.div>
      </AnimatePresence>

      {/* Navigation chrome */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-bolivar-deep/95 backdrop-blur text-cream px-5 py-3 rounded-full shadow-2xl z-50">
        <button
          onClick={() => setI(p => Math.max(p - 1, 0))}
          disabled={i === 0}
          className="w-10 h-10 rounded-full bg-cream/10 hover:bg-coral disabled:opacity-30 disabled:hover:bg-cream/10 flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-1.5 px-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`transition-all rounded-full ${idx === i ? "w-8 h-2 bg-coral" : "w-2 h-2 bg-cream/40 hover:bg-cream/70"}`}
              title={LABELS[idx]}
            />
          ))}
        </div>
        <div className="font-mono text-xs tracking-widest uppercase text-cream/70 px-2 min-w-[90px] text-center">
          {String(i + 1).padStart(2, "0")} · {LABELS[i]}
        </div>
        <button
          onClick={() => setI(p => Math.min(p + 1, SLIDES.length - 1))}
          disabled={i === SLIDES.length - 1}
          className="w-10 h-10 rounded-full bg-coral hover:bg-coral/80 disabled:opacity-30 flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </SlideFrame>
  );
}
