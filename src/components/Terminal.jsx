import { useEffect, useRef, useState } from "react";

const SEQUENCE = [
  { cmd: "$ whoami", out: "→ tarun_sahu" },
  { cmd: "$ cat skills.txt", out: "→ loading full stack powers ✓" },
  { cmd: "$ ./availability.sh", out: "→ OPEN FOR HIRE ✅" },
  { cmd: "$ echo passion", out: "→ building things that matter 🚀" },
];

const TYPING_SPEED = 32;       // ms per char for commands
const OUTPUT_SPEED = 18;       // ms per char for output
const PAUSE_AFTER_CMD = 300;   // pause before showing output
const PAUSE_AFTER_OUT = 800;   // pause before next command
const HOLD_COMPLETE = 3000;    // hold when all lines done
const CURSOR_BLINK = true;

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [phase, setPhase] = useState("idle"); // idle | typing-cmd | pause-before-out | typing-out | pause-after-out | done
  const [seqIndex, setSeqIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, currentText]);

  useEffect(() => {
    let timer;

    if (phase === "idle") {
      setLines([]);
      setCurrentText("");
      setSeqIndex(0);
      setPhase("typing-cmd");
      return;
    }

    if (phase === "typing-cmd") {
      const target = SEQUENCE[seqIndex].cmd;
      if (currentText.length < target.length) {
        timer = setTimeout(() => {
          setCurrentText(target.slice(0, currentText.length + 1));
        }, TYPING_SPEED);
      } else {
        timer = setTimeout(() => {
          setPhase("pause-before-out");
        }, PAUSE_AFTER_CMD);
      }
      return () => clearTimeout(timer);
    }

    if (phase === "pause-before-out") {
      setLines((prev) => [...prev, currentText]);
      setCurrentText("");
      setPhase("typing-out");
      return;
    }

    if (phase === "typing-out") {
      const target = SEQUENCE[seqIndex].out;
      if (currentText.length < target.length) {
        timer = setTimeout(() => {
          setCurrentText(target.slice(0, currentText.length + 1));
        }, OUTPUT_SPEED);
      } else {
        timer = setTimeout(() => {
          setLines((prev) => [...prev, currentText]);
          setCurrentText("");
          if (seqIndex < SEQUENCE.length - 1) {
            setSeqIndex((prev) => prev + 1);
            setPhase("pause-after-out");
          } else {
            setPhase("done");
          }
        }, PAUSE_AFTER_OUT);
      }
      return () => clearTimeout(timer);
    }

    if (phase === "pause-after-out") {
      timer = setTimeout(() => {
        setPhase("typing-cmd");
      }, 200);
      return () => clearTimeout(timer);
    }

    if (phase === "done") {
      timer = setTimeout(() => {
        setPhase("idle");
      }, HOLD_COMPLETE);
      return () => clearTimeout(timer);
    }
  }, [phase, currentText, seqIndex]);

  return (
    <div className="glass relative overflow-hidden rounded-2xl border border-white/10 bg-card p-5 shadow-glow">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <p className="font-mono text-xs text-secondary">tarun@dev: ~</p>
      </div>
      <div ref={scrollRef} className="min-h-[236px] space-y-1 font-mono text-sm overflow-y-auto max-h-[280px]">
        {lines.map((line, i) => (
          <p
            key={`${i}-${line}`}
            className="whitespace-pre-wrap"
            style={{ color: line.startsWith("$") ? "#9af7bb" : "#7dd3fc" }}
          >
            {line}
          </p>
        ))}
        {currentText && (
          <p
            className="whitespace-pre-wrap"
            style={{ color: currentText.startsWith("$") ? "#9af7bb" : "#7dd3fc" }}
          >
            {currentText}
            <span className="inline-block h-4 w-2 align-middle animate-caret bg-[#9af7bb] ml-0.5" />
          </p>
        )}
        {!currentText && phase !== "done" && (
          <span className="inline-block h-4 w-2 animate-caret bg-[#9af7bb]" />
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(180deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_4px)]" />
    </div>
  );
}
