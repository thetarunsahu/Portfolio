import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed inset-x-0 top-0 z-[9999] h-[2px]"
      aria-hidden="true"
    >
      <div className="h-full w-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4]" />
    </motion.div>
  );
}
