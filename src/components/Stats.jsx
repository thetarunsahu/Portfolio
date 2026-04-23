import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "../hooks/useCountUp";

const stats = [
  { value: 5, suffix: "+", label: "Projects Built" },
  { value: 2025, suffix: "", label: "Started Shipping" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: null, display: "∞", label: "Still Learning" },
];

function StatCard({ stat, index, inView }) {
  const count = useCountUp(stat.value ?? 0, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="stat-card group"
    >
      <p className="font-heading text-5xl font-bold text-[#0EA5E9] md:text-[56px]">
        {stat.display ?? count}{stat.suffix}
      </p>
      <p className="mt-2 text-sm text-[#888]">{stat.label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section id="stats" className="section-wrap relative overflow-hidden" ref={ref}>
      <motion.span style={{ y }} className="section-number right-0 top-8">
        04
      </motion.span>

      <div className="relative z-10">
        <p className="font-mono text-xs text-accent-blue md:text-sm">{"// BY THE NUMBERS"}</p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="section-title mt-4"
        >
          By The Numbers
        </motion.h2>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        {/* GitHub Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12"
        >
          <p className="mb-4 font-mono text-xs text-[#666]">{"// github contributions"}</p>
          <div className="overflow-hidden rounded-xl border"
            style={{ borderColor: "rgba(14,165,233,0.15)" }}
          >
            <img
              src="https://ghchart.rshah.org/0EA5E9/thetarunsahu"
              alt="Tarun's GitHub Contribution Chart"
              className="w-full"
              style={{ opacity: 0.8, display: "block" }}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
