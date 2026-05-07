import { motion } from "framer-motion";

export function ArrowDoodle({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 80" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        d="M5 40 Q 60 5 110 35 T 185 40"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.1 }}
        d="M170 25 L 188 40 L 175 58"
      />
    </svg>
  );
}

export function StarBurst({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill={color}>
      <path d="M50 0 L58 38 L96 30 L66 56 L92 88 L52 70 L40 100 L36 64 L4 78 L26 50 L0 22 L36 36 Z" />
    </svg>
  );
}

export function SquigglyLine({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 20" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round">
      <path d="M2 10 Q 25 2 50 10 T 100 10 T 150 10 T 200 10 T 250 10 T 298 10" />
    </svg>
  );
}

export function CircleDoodle({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        d="M50 8 C 75 8 92 25 92 50 C 92 75 75 92 50 92 C 25 92 8 75 8 50 C 8 28 25 10 52 10"
      />
    </svg>
  );
}

export function DotGrid({ className = "", rows = 4, cols = 6, color = "currentColor" }: { className?: string; rows?: number; cols?: number; color?: string }) {
  return (
    <svg className={className} viewBox={`0 0 ${cols * 14} ${rows * 14}`} fill={color}>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={c * 14 + 7} cy={r * 14 + 7} r={2} />
        ))
      )}
    </svg>
  );
}

export function DiagonalStripes({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <pattern id="ds" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="3" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#ds)" />
    </svg>
  );
}
