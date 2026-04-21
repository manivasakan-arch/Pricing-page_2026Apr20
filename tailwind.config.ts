import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#ff5500",
          50: "#ffeee5",
          100: "#ffd1ba",
          border: "#ffb48f",
        },
        ink: {
          primary: "#171717",
          secondary: "#525252",
          tertiary: "#a3a3a3",
        },
        line: {
          primary: "#1a1a1a33",
          secondary: "#1a1a1a17",
          tertiary: "#1a1a1a0f",
        },
        surface: {
          primary: "#ffffff",
          secondary: "#fafafa",
          quaternary: "#e5e5e5",
        },
        success: "#16a34a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "elev-1":
          "0 1px 2px 1px rgba(26,26,26,0.06), 0 0 0 1px rgba(26,26,26,0.09), inset 0 0 0 1px rgba(255,255,255,0.8)",
        "card":
          "0 4px 10px 0 rgba(0,0,0,0.06), 0 1px 2px 0 rgba(0,0,0,0.08)",
        "card-hover":
          "0 10px 30px -6px rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.4)", opacity: "0.6" },
        },
      },
      animation: {
        "fade-up": "fade-up 500ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-dot": "pulse-dot 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
