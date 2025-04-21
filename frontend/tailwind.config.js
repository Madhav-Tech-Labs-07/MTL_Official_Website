/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "#0B2545", // Blue Midnight
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#F8F9FA", // Ivory White
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#FFB100", // Bright Amber
          foreground: "hsl(var(--accent-foreground))",
        },
        secondaryAccent: {
          DEFAULT: "#6C757D", // Graphite Gray
          foreground: "hsl(var(--secondaryAccent-foreground))",
        },

        "off-white": "#F4F4F4",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        custom: "0 4px 20px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [animate],
};
