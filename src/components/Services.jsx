import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Code2, Bot, Server, Database, Palette } from "lucide-react";
import { useMagneticHover } from "../hooks/useMagneticHover";
import { useRef } from "react";

const services = [
  {
    icon: Zap,
    title: "Landing Pages",
    desc: "High-converting pixel-perfect pages.",
  },
  {
    icon: Code2,
    title: "Web Applications",
    desc: "Full stack apps, idea to deployment.",
  },
  {
    icon: Bot,
    title: "AI-Powered Tools",
    desc: "OpenAI, Gemini, custom ML pipelines.",
  },
  {
    icon: Server,
    title: "API Development",
    desc: "Clean RESTful APIs and backend systems.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Scalable schemas, MongoDB to MySQL.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Figma to code, pixel-perfect always.",
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const magnetic = useMagneticHover(14);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      style={magnetic.style}
      className="service-card magnetic-wrap min-w-[290px] snap-start hover:-translate-y-1.5 md:min-w-0"
    >
      <span className="absolute right-4 top-1 font-heading text-[80px] leading-none text-white/5">
        {String(index + 1).padStart(2, "0")}
      </span>
      <Icon className="mb-6 text-accent-blue" size={28} />
      <h3 className="font-heading text-2xl font-bold text-white">{service.title}</h3>
      <p className="mt-3 leading-relaxed text-secondary">{service.desc}</p>
    </motion.article>
  );
}

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section id="services" className="section-wrap relative overflow-hidden" ref={ref}>
      <motion.span
        style={{ y }}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="section-number right-8 top-8"
      >
        02
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mb-14 max-w-4xl"
      >
        <h2 className="section-title">What I Build For You</h2>
        <p className="mt-4 text-lg text-secondary">
          From concept to deployment. Crafted like product systems, not generic feature lists.
        </p>
      </motion.div>

      <div className="no-scrollbar -mx-6 flex snap-x gap-5 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:overflow-visible md:px-0 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
