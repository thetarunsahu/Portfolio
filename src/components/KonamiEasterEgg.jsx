import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "KeyB", "KeyA",
];

export default function KonamiEasterEgg() {
  const [inputSeq, setInputSeq] = useState([]);
  const [triggered, setTriggered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [glitching, setGlitching] = useState(false);

  const handleKey = useCallback((e) => {
    const code = e.code;
    setInputSeq((prev) => {
      const next = [...prev, code].slice(-KONAMI.length);
      if (next.length === KONAMI.length && next.every((k, i) => k === KONAMI[i])) {
        return [];
      }
      return next;
    });
  }, []);

  // Check for match
  useEffect(() => {
    if (inputSeq.length === 0 && !triggered) {
      // Check if we just cleared — means match was found
    }
  }, [inputSeq, triggered]);

  // Separate effect for triggering
  useEffect(() => {
    const handler = (e) => {
      const code = e.code;
      setInputSeq((prev) => {
        const next = [...prev, code].slice(-KONAMI.length);
        if (next.length === KONAMI.length && next.every((k, i) => k === KONAMI[i])) {
          // Trigger easter egg
          setTimeout(() => {
            setGlitching(true);
            setTimeout(() => {
              setGlitching(false);
              setShowModal(true);
              setTriggered(true);
            }, 1500);
          }, 0);
          return [];
        }
        return next;
      });
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setTriggered(false);
  }, []);

  // ESC to close
  useEffect(() => {
    if (!showModal) return;
    const handler = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showModal, closeModal]);

  return (
    <>
      {/* Glitch overlay */}
      <AnimatePresence>
        {glitching && (
          <motion.div
            key="glitch"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="konami-glitch-overlay"
          />
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            key="modal-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="konami-modal"
            >
              <h3 className="font-heading text-2xl font-bold text-white">
                {"// SECRET UNLOCKED 🔓"}
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#888]">
                <p>You found the easter egg.</p>
                <p>Tarun is impressed. 👀</p>
                <p className="pt-2 text-[#666]">
                  Fun fact: This site was built with<br />
                  React + Tailwind + too much coffee ☕<br />
                  and an MSI Crosshair RTX 5060 🔥
                </p>
              </div>
              <button
                onClick={closeModal}
                className="mt-6 rounded-lg border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 px-6 py-2.5 text-sm font-semibold text-[#0EA5E9] transition-all hover:bg-[#0EA5E9]/20"
              >
                Close [ESC]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
