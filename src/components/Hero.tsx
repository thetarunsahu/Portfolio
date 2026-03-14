"use client";

import { useMagnetic } from "@/hooks/useMagnetic";

const heroWords = ["Building", "things", "while", "learning", "everything."];
const WORD_BASE_DELAY = 700; // ms from page load
const WORD_STAGGER = 100; // ms between words

function MagButton({
    children,
    filled,
    onClick,
}: {
    children: string;
    filled?: boolean;
    onClick: () => void;
}) {
    const ref = useMagnetic(0.3);
    return (
        <button
            ref={ref as React.RefObject<HTMLButtonElement>}
            onClick={onClick}
            className={`px-5 py-2.5 text-sm rounded cursor-hover transition-transform duration-200 hover:-translate-y-px ${filled
                    ? "bg-[#F0F0F0] text-[#0C0C0C] font-normal"
                    : "border border-[rgba(255,255,255,0.15)] text-primary font-light"
                }`}
        >
            {children}
        </button>
    );
}

export default function Hero() {
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-20 max-w-content mx-auto">
            {/* Small label */}
            <p
                className="font-mono text-label uppercase text-secondary mb-6"
                style={{ opacity: 0, animation: "bodyIn 0.4s ease forwards 0.6s" }}
            >
                CS Student · Building in public
            </p>

            {/* Hero heading — word by word */}
            <h1 className="font-serif text-hero leading-[1.05] mb-8">
                {heroWords.map((word, i) => (
                    <span key={i}>
                        <span className="word-wrap">
                            <span
                                className="word-inner"
                                style={{
                                    animationDelay: `${WORD_BASE_DELAY + i * WORD_STAGGER}ms`,
                                    color: word === "everything." ? "#C9F31D" : undefined,
                                }}
                            >
                                {word}
                            </span>
                        </span>
                        {i === 1 || i === 3 ? <br /> : " "}
                    </span>
                ))}
            </h1>

            {/* Subtitle */}
            <p
                className="text-[15px] text-secondary max-w-lg mb-10 leading-relaxed"
                style={{ opacity: 0, animation: "bodyIn 0.4s ease forwards 1s" }}
            >
                I&apos;m Tarun — CS student at MIT ADT University,
                Pune. Started coding in 2025. I build real projects
                because that&apos;s how I actually learn.
            </p>

            {/* Buttons */}
            <div
                className="flex items-center gap-4 mb-8"
                style={{ opacity: 0, animation: "bodyIn 0.4s ease forwards 1.2s" }}
            >
                <MagButton filled onClick={() => scrollTo("skills")}>
                    See My Work
                </MagButton>
                <MagButton onClick={() => scrollTo("contact")}>
                    Get in Touch
                </MagButton>
            </div>

            {/* Tagline */}
            <p
                className="text-[13px] text-[#555]"
                style={{ opacity: 0, animation: "bodyIn 0.4s ease forwards 1.4s" }}
            >
                CS Student · Building in public · Always learning
            </p>

            {/* Scroll arrow */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-secondary">
                    <path d="M8 4V20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
            </div>
        </section>
    );
}
