"use client";

import { useState, useEffect } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

function NavLink({ label, href, active }: { label: string; href: string; active: boolean }) {
    const ref = useMagnetic(0.25);
    const scrollTo = () => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

    return (
        <button
            ref={ref as React.RefObject<HTMLButtonElement>}
            onClick={scrollTo}
            className="relative text-sm font-light text-secondary hover:text-primary transition-opacity duration-150 cursor-hover"
        >
            {label}
            {active && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-lime" />
            )}
        </button>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            for (const id of ["contact", "skills", "about"]) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 200) {
                    setActive(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 h-14 transition-all duration-300 ${scrolled
                    ? "backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)] bg-[#0C0C0C]/80"
                    : "bg-transparent"
                }`}
            style={{ opacity: 0, animation: "bodyIn 0.4s ease forwards 0.4s" }}
        >
            <div className="max-w-content mx-auto flex items-center justify-between h-full px-6 lg:px-20">
                <span className="font-serif text-lg text-primary">Tarun</span>

                <div className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <NavLink
                            key={l.href}
                            label={l.label}
                            href={l.href}
                            active={active === l.href.replace("#", "")}
                        />
                    ))}
                </div>

                <span className="hidden md:flex items-center gap-1.5 text-label uppercase text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                    Available
                </span>
            </div>
        </nav>
    );
}
