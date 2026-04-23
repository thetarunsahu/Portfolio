import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import SpeechBubble from "./SpeechBubble";
import Marquee from "./Marquee";

const lines = ["FULL STACK", "DEVELOPER", "& AI BUILDER."];
const HeroCharacter = lazy(() => import("./HeroCharacter"));

export default function Hero() {
  return (
    <section id="work" className="relative min-h-screen overflow-hidden px-6 pb-0 pt-16">
      <div className="portal-orb" />

      {/* ── Split Layout: Text + Character ── */}
      <div className="hero-split relative z-10">
        {/* Left: Text content */}
        <div className="hero-split__text">
          <motion.span
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs text-emerald-300 sm:text-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
            Available for work 🟢
          </motion.span>
          {lines.map((line, index) => (
            <motion.h1
              key={line}
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 0.8, delay: 0.15 + index * 0.2, ease: [0.25, 1, 0.5, 1] }}
              className={`font-heading text-[clamp(36px,10vw,64px)] md:text-[clamp(48px,7vw,100px)] font-extrabold uppercase leading-[0.95] tracking-[-1px] break-keep max-w-full ${
                line === "DEVELOPER" ? "outline-text" : ""
              } ${line === "& AI BUILDER." ? "gradient-text" : "text-white"}`}
            >
              {line}
            </motion.h1>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-8 max-w-xl text-base text-muted sm:text-lg"
          >
            Tarun Kumar Sahu — Building products that actually matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.05 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
            <a href="#services" className="btn-ghost">
              See My Work
            </a>
          </motion.div>

          <SpeechBubble />
        </div>

        {/* Right: Character showcase */}
        <div className="hero-split__character">
          <Suspense
            fallback={
              <div className="hero-character-placeholder" />
            }
          >
            <HeroCharacter />
          </Suspense>
        </div>
      </div>

      {/* Decorative particles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <span className="absolute left-[14%] top-[26%] h-2 w-2 rounded-full bg-accent-cyan/70 shadow-[0_0_20px_rgba(6,182,212,0.8)]" />
        <span className="absolute right-[20%] top-[38%] h-1.5 w-1.5 rounded-full bg-accent-blue/80 shadow-[0_0_18px_rgba(14,165,233,0.75)]" />
        <span className="absolute left-[20%] bottom-[26%] h-1 w-20 bg-white/20" />
        <span className="absolute right-[18%] bottom-[32%] h-[1px] w-24 bg-white/20" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <Marquee />
      </div>
    </section>
  );
}
