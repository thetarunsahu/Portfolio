"use client";

export default function About() {
    return (
        <section id="about" className="px-6 lg:px-20 max-w-content mx-auto pt-[140px]">
            <div data-reveal className="grid lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-7 space-y-6">
                    <h2 className="font-serif text-section-heading">About me</h2>

                    <p className="text-body text-secondary max-w-[56ch]">
                        I&apos;m a Computer Science student at MIT ADT University, Pune.
                        I started building things in 2025 — and I haven&apos;t stopped since.
                    </p>

                    <p className="text-body text-secondary max-w-[56ch]">
                        Right now I&apos;m focused on full-stack web development, learning
                        DSA properly through Java, and exploring how AI can be integrated
                        into real applications. My best project so far is TechResQ — an
                        AI-powered disaster preparedness platform.
                    </p>

                    <p className="text-body text-secondary max-w-[56ch]">
                        I&apos;m not a senior developer. I&apos;m a student who takes
                        building seriously. Still early, always improving.
                    </p>

                    <p className="text-sm text-secondary pt-4">
                        2025 — started &nbsp;·&nbsp; Real projects shipped
                    </p>
                </div>

                <div className="lg:col-span-5 aspect-[4/5] rounded-lg bg-surface border border-[rgba(255,255,255,0.08)] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-surface to-bg flex items-center justify-center">
                        <span className="font-serif text-6xl text-[#1a1a1a]">T</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
