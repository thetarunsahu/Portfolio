"use client";

export default function Instagram() {
    const open = () =>
        window.open("https://www.instagram.com/tarunnsahuu/", "_blank");

    return (
        <section className="px-6 lg:px-20 max-w-content mx-auto pt-[140px]">
            <div data-reveal className="text-center">
                <h2 className="font-serif text-section-heading mb-3">
                    Follow the journey
                </h2>
                <p className="text-body text-secondary max-w-md mx-auto mb-10">
                    I document my building process, learning moments,
                    and dev life on Instagram.
                </p>

                <button
                    onClick={open}
                    className="group inline-block mx-auto border border-[rgba(255,255,255,0.1)] rounded-xl bg-surface p-6 w-80 text-left
                     hover:border-[rgba(255,255,255,0.2)] hover:scale-[1.02] transition-all duration-200 cursor-hover"
                >
                    <svg className="w-8 h-8 mb-4" viewBox="0 0 24 24" fill="none">
                        <defs>
                            <radialGradient id="ig" cx="30%" cy="107%" r="150%">
                                <stop offset="0%" stopColor="#fdf497" />
                                <stop offset="5%" stopColor="#fdf497" />
                                <stop offset="45%" stopColor="#fd5949" />
                                <stop offset="60%" stopColor="#d6249f" />
                                <stop offset="90%" stopColor="#285AEB" />
                            </radialGradient>
                        </defs>
                        <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig)" strokeWidth="1.5" fill="none" />
                        <circle cx="12" cy="12" r="5" stroke="url(#ig)" strokeWidth="1.5" fill="none" />
                        <circle cx="17.5" cy="6.5" r="1" fill="url(#ig)" />
                    </svg>

                    <p className="text-lg text-primary font-normal mb-1">@tarunnsahuu</p>
                    <p className="text-sm text-secondary mb-5">Follow for updates</p>

                    <span className="text-sm text-secondary border border-[rgba(255,255,255,0.1)] rounded px-4 py-2
                           group-hover:border-[rgba(255,255,255,0.2)] transition-colors duration-200">
                        Open Instagram
                    </span>
                </button>
            </div>
        </section>
    );
}
