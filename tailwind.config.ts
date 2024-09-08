import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        "geist-thin": ["geist-thin", "sans-serif"],
        "geist-bold": ["geist-bold", "sans-serif"],
        "geist-light": ["geist-light", "sans-serif"],
        "geist-medium": ["geist-medium", "sans-serif"],
        "geist-semibold": ["geist-semibold", "sans-serif"],
        "geist-regular": ["geist-regular", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#252525",
          200: "#2B2B2B",
          300: "#333333",
          400: "#343434",
          500: "#292929",
          700: "#323232",
        },
        grey: {
          100: "#6D6D6D",
          200: "#9E9E9E",
          300: "#f0f0f0",
          400: "#E6E6E6",
          500: "rgba(160,160,160,0.25)",
          600: "#868686",
          700: "#2D2D2D",
          800: "#AAAAAA",
          900: "#C2C2C2",
          1000: "#55595E",
          1100: "#94989D",
          1200: "#A5A9AE",
          1300: "#D1D1D1",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      dropShadow: {
        xl: "0px 0px 0px 1px rgba(180, 180, 180, 0.25)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
