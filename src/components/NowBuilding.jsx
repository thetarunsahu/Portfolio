import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    status: "active",
    badge: "In Progress",
    title: "Full Stack Portfolio",
    desc: "Building this exact site you're looking at. React + Tailwind + Framer Motion.",
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    status: "active",
    badge: "Learning",
    title: "DSA with Java",
    desc: "Going deep into Data Structures and Algorithms. Building problem-solving muscle.",
    tags: ["Java", "DSA", "LeetCode"],
  },
  {
    status: "upcoming",
    badge: "Coming Soon",
    title: "Next Big Project",
    desc: "Something AI-powered is in the works. Can't say much yet. Stay tuned. 🔥",
    tags: ["AI", "Full Stack", "???"],
  },
];

function StatusDot({ status }) {
  return (
    <span className="relative flex h-2.5 w-2.5">
      {status === "active" && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
      )}
      <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
        status === "active" ? "bg-emerald-400" : "bg-yellow-400"
      }`} />
    </span>
  );
}

function ProjectCard({ project, index }) {
  const borderColor = project.status === "active"
    ? "rgba(34,197,94,0.4)"
    : "rgba(234,179,8,0.4)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="now-card group"
      style={{ borderLeftColor: borderColor }}
    >
      <div className="mb-4 flex items-center gap-3">
        <StatusDot status={project.status} />
        <span className="rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
          style={{
            background: project.status === "active" ? "rgba(34,197,94,0.1)" : "rgba(234,179,8,0.1)",
            color: project.status === "active" ? "#22c55e" : "#eab308",
            border: `1px solid ${project.status === "active" ? "rgba(34,197,94,0.25)" : "rgba(234,179,8,0.25)"}`,
          }}
        >
          {project.badge}
        </span>
      </div>

      <h3 className="font-heading text-xl font-bold text-white">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#888]">{project.desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-[#666]">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function NowBuilding() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section id="now-building" className="section-wrap relative overflow-hidden" ref={ref}>
      <motion.span style={{ y }} className="section-number right-0 top-8">
        05
      </motion.span>

      <div className="relative z-10">
        <p className="font-mono text-xs text-accent-blue md:text-sm">{"// WHAT'S HAPPENING"}</p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="section-title mt-4"
        >
          Currently Building
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-lg text-[#888]"
        >
          What&apos;s happening in Tarun&apos;s world right now
        </motion.p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
