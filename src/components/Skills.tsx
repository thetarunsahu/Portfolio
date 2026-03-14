"use client";

import { skills } from "@/lib/skills";
import { useMagnetic } from "@/hooks/useMagnetic";

function SkillItem({ name }: { name: string }) {
    const ref = useMagnetic(0.2);
    return (
        <span
            ref={ref as React.RefObject<HTMLSpanElement>}
            className="text-body text-[#444] hover:text-primary transition-colors duration-200 cursor-hover"
        >
            {name}
        </span>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="px-6 lg:px-20 max-w-content mx-auto pt-[140px]">
            <div data-reveal>
                <h2 className="font-serif text-section-heading mb-10">
                    What I work with
                </h2>

                <div className="flex flex-wrap items-center gap-x-1 gap-y-2 max-w-3xl">
                    {skills.map((skill, i) => (
                        <span key={skill} className="inline-flex items-center">
                            <SkillItem name={skill} />
                            {i < skills.length - 1 && (
                                <span className="text-[#333] mx-2">·</span>
                            )}
                        </span>
                    ))}
                </div>

                <p className="text-body text-[#555] mt-8">
                    Actively learning DSA, full-stack architecture, and AI integration →
                </p>
            </div>
        </section>
    );
}
