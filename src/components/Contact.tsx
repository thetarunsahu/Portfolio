"use client";

const contactLinks = [
    { label: "tarunsahu@email.com", href: "mailto:tarunsahu@email.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tarunnsahuu/" },
    { label: "GitHub", href: "https://github.com/thetarunsahu" },
    { label: "Instagram", href: "https://www.instagram.com/tarunnsahuu/" },
];

export default function Contact() {
    return (
        <section id="contact" className="px-6 lg:px-20 max-w-content mx-auto pt-[140px]">
            <div data-reveal className="max-w-xl mx-auto text-center">
                <h2 className="font-serif text-section-heading mb-4">
                    Let&apos;s build something
                    <br />
                    great together.
                </h2>

                <p className="text-body text-secondary mb-10">
                    I&apos;m a student who takes projects seriously.
                    Whether it&apos;s a collab, internship, or just a
                    conversation — I&apos;m here.
                </p>

                <div className="flex flex-col items-center gap-4 mb-10">
                    {contactLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-body text-secondary hover:text-primary transition-opacity duration-150 inline-flex items-center gap-2 cursor-hover"
                        >
                            {link.label}
                            <span className="text-sm">↗</span>
                        </a>
                    ))}
                </div>

                <p className="text-sm text-secondary flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Open to internships & collaborations
                </p>
            </div>
        </section>
    );
}
