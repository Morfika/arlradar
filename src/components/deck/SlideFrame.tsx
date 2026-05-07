import { useEffect, useState } from "react";

export function SlideFrame({ children, bg = "cream" }: { children: React.ReactNode; bg?: "cream" | "deep" | "white" }) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const fit = () => {
      const sx = window.innerWidth / 1920;
      const sy = window.innerHeight / 1080;
      setScale(Math.min(sx, sy));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  const bgClass = bg === "deep" ? "bg-bolivar-deep" : bg === "white" ? "bg-white" : "bg-cream";
  return (
    <div className={`fixed inset-0 overflow-hidden ${bgClass}`}>
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: 1920,
          height: 1080,
          marginLeft: -960,
          marginTop: -540,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
