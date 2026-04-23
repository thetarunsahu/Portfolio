import { Github, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Mail, label: "Email", href: "mailto:tarunkumarsahu354@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/thetarunsahu" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/tarunnsahuu" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 lg:px-10">
        {/* Left */}
        <div>
          <p className="font-heading text-2xl font-extrabold text-white">tarun.dev</p>
          <p className="mt-2 text-sm text-[#888]">Full Stack Developer & AI Builder</p>
          <p className="mt-1 text-sm text-[#666]">Pune, India 🇮🇳</p>
          <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available for work
          </span>
        </div>

        {/* Center */}
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-wider text-white">Quick Links</p>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-[#888] transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-wider text-white">Get In Touch</p>
          <ul className="mt-4 space-y-2">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#888] transition-colors hover:text-[#0EA5E9]"
                  >
                    <Icon size={14} /> {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-[#555] md:flex-row lg:px-10">
          <p>Built with React + Tailwind + ☕</p>
          <p>© 2025 Tarun Kumar Sahu</p>
          <p>Designed & Developed by Tarun</p>
        </div>
      </div>
    </footer>
  );
}
