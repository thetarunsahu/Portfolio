import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";

const lines = [
  "Looking for a full stack developer? 👋",
  "I build web apps that actually work.",
  "React • Node • Python • AI — I got you.",
  "Let's create something great together.",
];

export default function SpeechBubble() {
  const { text } = useTypewriter(lines, {
    typingSpeed: 35,
    deletingSpeed: 18,
    holdDuration: 2300,
    pauseBetweenLines: 380,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1 }}
      className="glass absolute -right-2 top-6 z-20 max-w-[320px] rounded-2xl p-4 text-sm text-secondary md:right-10 md:top-10 md:text-base"
    >
      <p className="min-h-[58px] leading-relaxed">
        <span className="text-white">{text}</span>
        <span className="ml-1 inline-block h-4 w-[2px] animate-caret bg-accent-blue align-middle" />
      </p>
    </motion.div>
  );
}
