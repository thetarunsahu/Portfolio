import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#000000",
        card: "#090909",
        "card-hover": "#0A1628",
        "accent-blue": "#0EA5E9",
        "accent-cyan": "#06B6D4",
        primary: "#FFFFFF",
        secondary: "#888888",
        muted: "#666666",
        border: "rgba(255,255,255,0.06)",
      },
      fontFamily: {
        heading: ['"Syne"', "sans-serif"],
        sans: ['"DM Sans"', "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(14,165,233,0.15)",
        "soft-glow": "0 0 30px rgba(14,165,233,0.1)",
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        scanline: "scanline 2.2s linear infinite",
        caret: "caret 1s steps(1) infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
        caret: {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
