import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  {
    icon: Mail,
    label: "Send an Email",
    href: "mailto:tarunkumarsahu354@gmail.com",
    display: "tarunkumarsahu354@gmail.com →",
  },
  {
    icon: Github,
    label: "View GitHub",
    href: "https://github.com/thetarunsahu",
    display: "github.com/thetarunsahu →",
  },
  {
    icon: Linkedin,
    label: "Connect on LinkedIn",
    href: "https://linkedin.com/in/tarunnsahuu",
    display: "linkedin.com/in/tarunnsahuu →",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl text-center"
      >
        <h2 className="font-heading text-[48px] font-extrabold uppercase leading-[0.9] tracking-[-2px] text-white md:text-[100px] lg:text-[120px]">
          GOT AN IDEA?
        </h2>
        <h2 className="font-heading text-[48px] font-extrabold uppercase leading-[0.9] tracking-[-2px] md:text-[100px] lg:text-[120px] outline-text">
          LET&apos;S BUILD IT.
        </h2>
        <h2 className="font-heading text-[48px] font-extrabold uppercase leading-[0.9] tracking-[-2px] md:text-[100px] lg:text-[120px] gradient-text">
          TOGETHER.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-[#666] md:text-lg">
          Whether it&apos;s a web app, AI tool, or just a crazy idea — I&apos;m here for it.
        </p>
        <a
          href="mailto:tarunkumarsahu354@gmail.com"
          className="mt-6 inline-block text-lg text-white transition-all duration-300 hover:underline md:text-3xl"
        >
          tarunkumarsahu354@gmail.com
        </a>
      </motion.div>

      <div className="mx-auto mt-10 grid w-full max-w-3xl gap-4">
        {links.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="glass flex items-center justify-between rounded-2xl px-5 py-4 text-sm text-secondary transition-all duration-300 hover:border-accent-blue/50 hover:bg-white/[0.06] hover:text-white"
            >
              <span className="flex items-center gap-2">
                <Icon size={16} />
                {item.label}
              </span>
              <span className="text-secondary">{item.display}</span>
            </motion.a>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          Currently available
        </span>
      </div>
    </section>
  );
}
