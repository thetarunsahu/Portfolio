import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Tarun — Full-Stack Developer & AI Engineer",
    description:
        "Building digital experiences that matter. Full-stack developer and AI engineer crafting products people love.",
    openGraph: {
        title: "Tarun — Full-Stack Developer & AI Engineer",
        description: "Building digital experiences that matter.",
        type: "website",
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-bg text-primary antialiased">{children}</body>
        </html>
    );
}
