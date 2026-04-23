import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import tarun1 from "../assets/tarun1.jpg";
import tarun2 from "../assets/tarun2.jpg";

const IMAGE_PATHS = [tarun1, tarun2];
const CYCLE_MS = 5000;
const BADGES = [
  { emoji: "⚡", label: "React Dev", top: "20px", right: "-55px", dur: "3s", delay: "0s" },
  { emoji: "🤖", label: "AI Builder", top: "42%", left: "-65px", dur: "4s", delay: "0.5s" },
  { emoji: "🔥", label: "Full Stack", bottom: "50px", right: "-50px", dur: "3.5s", delay: "1s" },
  { emoji: "💻", label: "MSI Beast", top: "15px", left: "-45px", dur: "4.5s", delay: "1.5s" },
];
const BIT_VALUES = ["0", "1", "01", "10", "11"];

export default function HeroCharacter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [bits, setBits] = useState([]);
  const containerRef = useRef(null);
  const tiltTransition = useRef("transform 0.1s ease");

  // ── Image cycling ──
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % IMAGE_PATHS.length);
    }, CYCLE_MS);
    return () => clearInterval(timer);
  }, []);

  // ── Binary bits spawner ──
  useEffect(() => {
    const timer = setInterval(() => {
      const id = crypto.randomUUID();
      setBits((prev) => [
        ...prev,
        {
          id,
          text: BIT_VALUES[Math.floor(Math.random() * BIT_VALUES.length)],
          left: 10 + Math.random() * 80,
          drift: (Math.random() - 0.5) * 60,
          duration: 2000 + Math.random() * 500,
        },
      ]);
      setTimeout(() => {
        setBits((prev) => prev.filter((b) => b.id !== id));
      }, 2600);
    }, 300);
    return () => clearInterval(timer);
  }, []);

  // ── 3D tilt on mouse move (tracked on hero section) ──
  const handleTilt = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const px = (e.clientX - cx) / (rect.width / 2);
    const py = (e.clientY - cy) / (rect.height / 2);
    tiltTransition.current = "transform 0.1s ease";
    setTilt({
      x: Math.max(-8, Math.min(8, -py * 8)),
      y: Math.max(-10, Math.min(10, px * 10)),
    });
  }, []);

  const resetTilt = useCallback(() => {
    tiltTransition.current = "transform 0.8s ease";
    setTilt({ x: 0, y: 0 });
  }, []);

  // Attach tilt to hero section
  useEffect(() => {
    const hero = document.getElementById("work");
    if (!hero) return;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;
    hero.addEventListener("mousemove", handleTilt);
    hero.addEventListener("mouseleave", resetTilt);
    return () => {
      hero.removeEventListener("mousemove", handleTilt);
      hero.removeEventListener("mouseleave", resetTilt);
    };
  }, [handleTilt, resetTilt]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
      ref={containerRef}
      className="hero-character-root"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tiltTransition.current,
      }}
    >
      {/* ── Glow layers ── */}
      <div className="hc-glow hc-glow--outer" />
      <div className="hc-glow hc-glow--mid" />
      <div className="hc-glow hc-glow--inner" />

      {/* ── Spinning rings ── */}
      <div className="hc-ring hc-ring--1" />
      <div className="hc-ring hc-ring--2" />
      <div className="hc-ring hc-ring--3" />

      {/* ── Floating animation wrapper ── */}
      <div className="hc-float-wrap">
        {/* ── Image card ── */}
        <div className={`hc-image-card${isHovered ? " is-hovered" : ""}`}>
          {/* Corner decorations */}
          <span className="hc-corner hc-corner--tl" />
          <span className="hc-corner hc-corner--tr" />
          <span className="hc-corner hc-corner--bl" />
          <span className="hc-corner hc-corner--br" />

          {/* Crossfading images */}
          {IMAGE_PATHS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Tarun character pose ${i + 1}`}
              className={`hc-image${i === activeIndex ? " is-active" : ""}`}
              draggable={false}
            />
          ))}

          {/* Scan line */}
          <div className="hc-scanline" />

          {/* Binary bits */}
          {bits.map((bit) => (
            <span
              key={bit.id}
              className="hc-bit"
              style={{
                left: `${bit.left}%`,
                "--drift": `${bit.drift}px`,
                animationDuration: `${bit.duration}ms`,
              }}
            >
              {bit.text}
            </span>
          ))}
        </div>
      </div>

      {/* ── Floating tech badges ── */}
      {BADGES.map((badge, i) => (
        <div
          key={i}
          className="hc-badge"
          style={{
            top: badge.top,
            right: badge.right,
            left: badge.left,
            bottom: badge.bottom,
            animationDuration: badge.dur,
            animationDelay: badge.delay,
          }}
        >
          <span>{badge.emoji}</span> {badge.label}
        </div>
      ))}

      {/* ── Switcher dots ── */}
      <div className="hc-dots">
        {IMAGE_PATHS.map((_, i) => (
          <button
            key={i}
            aria-label={`Show image ${i + 1}`}
            className={`hc-dot${i === activeIndex ? " is-active" : ""}`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </motion.div>
  );
}
