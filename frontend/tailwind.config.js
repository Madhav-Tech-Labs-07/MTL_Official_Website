/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate"

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // New luxurious blue-green color palette
        primary: {
          DEFAULT: "#0A5F6C", // Deep Teal
          light: "#1A7F8C",
          dark: "#064954",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F8F9FA", // Ivory White
          foreground: "#0A5F6C",
        },
        accent: {
          DEFAULT: "#00C9A7", // Aquamarine
          light: "#33D6B9",
          dark: "#00A589",
          foreground: "#0A5F6C",
        },
        complementary: {
          DEFAULT: "#C9A700", // Gold
          light: "#E6C000",
          dark: "#A38900",
          foreground: "#FFFFFF",
        },
        "off-white": "#F4F4F4",
        "dark-teal": "#064954",
        "light-teal": "#E6F7F5",
        "deep-sea": "#003B46",
        emerald: "#2DD4BF",
        gold: "#C9A700",
        cream: "#FFF8E1",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      boxShadow: {
        custom: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "custom-lg": "0 10px 30px rgba(0, 0, 0, 0.1)",
        "inner-glow": "inset 0 2px 10px rgba(0, 195, 167, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        texture: "url('/textures/subtle-pattern.png')",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [animate],
}
