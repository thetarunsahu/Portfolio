import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const groups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "Django", "REST APIs", "Express.js"],
  },
  {
    title: "Database & Cloud",
    items: ["MongoDB", "MySQL", "Firebase", "AWS", "Vercel", "Render"],
  },
  {
    title: "AI & DevTools",
    items: ["OpenAI API", "Gemini API", "Git", "Figma", "Docker"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section id="skills" className="section-wrap relative overflow-hidden" ref={ref}>
      <motion.span style={{ y }} className="section-number right-0 top-8">
        03
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <h2 className="section-title">Tech Manifest</h2>
      </motion.div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className="manifest-row"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.04 }}
                  className="rounded-full border border-accent-blue/20 bg-accent-blue/10 px-3 py-1.5 text-sm text-accent-blue transition-all duration-300 hover:bg-accent-blue hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
