import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#0C0C0C",
                surface: "#141414",
                "surface-hover": "#1A1A1A",
                primary: "#F0F0F0",
                secondary: "#666666",
                accent: "#E8E8E8",
                lime: "#C9F31D",
                border: "rgba(255,255,255,0.08)",
                "border-hover": "rgba(255,255,255,0.15)",
            },
            fontFamily: {
                serif: ['"Instrument Serif"', "Georgia", "serif"],
                sans: ['"DM Sans"', "system-ui", "sans-serif"],
                mono: ['"JetBrains Mono"', "monospace"],
            },
            maxWidth: {
                content: "1100px",
            },
            spacing: {
                section: "160px",
            },
            fontSize: {
                hero: ["clamp(3.5rem, 8vw, 6rem)", { lineHeight: "1.05", fontWeight: "400" }],
                "section-heading": ["2.625rem", { lineHeight: "1.15", fontWeight: "400" }],
                body: ["1rem", { lineHeight: "1.8", fontWeight: "300" }],
                label: ["0.6875rem", { lineHeight: "1", fontWeight: "400", letterSpacing: "0.15em" }],
            },
        },
    },
    plugins: [],
};

export default config;
