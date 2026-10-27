import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "var(--dp-color-ground, #f7f2e7)",
        ink: {
          DEFAULT: "var(--dp-color-ink, #38352f)",
          muted: "var(--dp-color-ink-muted, #514d44)",
        },
        line: "var(--dp-color-line, #b3ac9d)",
        accent: "var(--dp-color-accent, #9e3a2e)",
        annotation: "var(--dp-color-annotation, #344c69)",
        highlight: "var(--dp-color-highlight, #f0dfa0)",
        scrap: "var(--dp-color-scrap, #fcf8ef)",
        strip: "var(--dp-color-strip, #eee8da)",
      },
      fontFamily: {
        marker: ["var(--font-marker)", "Caveat", "cursive"],
        hand: ["var(--font-hand)", "Patrick Hand", "cursive"],
      },
      borderRadius: {
        control: "9px 4px 17px 5px / 4px 12px 5px 9px",
        scrap: "2px 4px 3px 5px / 4px 2px 5px 3px",
      },
      boxShadow: {
        control: "2px 2px 0px #38352f",
        accent: "2px 2px 0px #9e3a2e",
        scrap: "1px 2px 0px rgba(56, 53, 47, 0.15)",
        "scrap-sm": "1px 1px 0px rgba(56, 53, 47, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
