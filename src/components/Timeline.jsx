import { motion } from "framer-motion";

const events = [
  {
    date: "2025 Jan",
    title: "Started coding seriously",
    desc: "Picked up HTML, CSS, JavaScript. Built first projects and experiments.",
  },
  {
    date: "2025 Jun",
    title: "Went Full Stack",
    desc: "Learned React, Node.js, MongoDB. Started building real applications.",
  },
  {
    date: "2025 Dec",
    title: "AI Integration",
    desc: "Started working with OpenAI and Gemini APIs. Built TechResQ — AI disaster preparedness platform.",
  },
  {
    date: "2026 Apr",
    title: "Still Learning & Building",
    desc: "Deep diving into DSA with Java, system design, and full stack architecture. Always shipping, always improving.",
  },
  {
    date: "2026 Jun",
    title: "Freelancing Begins 🚀",
    desc: "Opening doors for clients. Ready to build products that solve real problems.",
    upcoming: true,
  },
];

export default function Timeline() {
  return (
    <div className="mt-14">
      <p className="mb-8 font-mono text-xs text-accent-blue md:text-sm">{"// journey.log"}</p>

      <div className="relative pl-8 md:pl-10">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#0EA5E9] via-[#0EA5E9]/40 to-transparent md:left-[15px]" />

        {events.map((event, i) => (
          <motion.div
            key={event.date}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-10 last:mb-0"
            style={event.upcoming ? { opacity: 0.7 } : undefined}
          >
            {/* Dot */}
            <span className="absolute -left-8 top-1.5 flex h-5 w-5 items-center justify-center md:-left-10">
              <span
                className="h-3 w-3 rounded-full"
                style={
                  event.upcoming
                    ? {
                        background: "transparent",
                        border: "2px dashed #eab308",
                        boxShadow: "0 0 10px rgba(234,179,8,0.4)",
                      }
                    : {
                        background: "#0EA5E9",
                        boxShadow: "0 0 10px rgba(14,165,233,0.5)",
                      }
                }
              />
            </span>

            {/* Badge for upcoming */}
            {event.upcoming && (
              <span className="mb-2 inline-block rounded-full border border-yellow-500/25 bg-yellow-500/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-yellow-400">
                Coming Soon ⚡
              </span>
            )}

            <p
              className="font-heading text-sm font-bold"
              style={{ color: event.upcoming ? "#eab308" : "#0EA5E9" }}
            >
              {event.date}
            </p>
            <h4 className="mt-1 text-lg font-bold text-white">{event.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-[#888]">{event.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
