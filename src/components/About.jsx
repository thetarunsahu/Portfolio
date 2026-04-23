import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Terminal from "./Terminal";
import Timeline from "./Timeline";
import { useCountUp } from "../hooks/useCountUp";

function Stat({ target, suffix = "", label, inView }) {
  const value = useCountUp(target, inView);
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <p className="font-heading text-3xl font-bold text-white">
        {value}
        {suffix}
      </p>
      <p className="mt-1 text-xs uppercase tracking-wider text-secondary">{label}</p>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" className="section-wrap relative overflow-hidden" ref={ref}>
      <motion.span style={{ y }} className="section-number left-0 top-10">
        01
      </motion.span>
      <div className="relative z-10">
        <p className="font-mono text-xs text-accent-blue md:text-sm">{"// WHO I AM"}</p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-5xl font-heading text-[42px] font-extrabold leading-[1.03] tracking-tight text-white md:text-[64px]"
        >
          I don&apos;t just write code.
          <br />I build products.
        </motion.h2>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="grid gap-8 text-secondary md:grid-cols-2">
            <p className="leading-relaxed">
              I&apos;m Tarun — CS undergrad at MIT ADT University, Pune. Started building in 2025 and
              haven&apos;t stopped since.
            </p>
            <p className="leading-relaxed">
              I don&apos;t just write code — I think about products, problems, and the people using
              them. Full stack dev + AI integration + rapid prototyping.
            </p>
            <div className="md:col-span-2 grid gap-4 pt-2 sm:grid-cols-3">
              <Stat target={5} suffix="+" label="Projects" inView={inView} />
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-heading text-3xl font-bold text-white">2025</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-secondary">Started</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-heading text-3xl font-bold text-white">Always</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-secondary">Shipping</p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: inView ? 0.1 : 0 }}
          >
            <Terminal />
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <Timeline />
      </div>
    </section>
  );
}
