import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "var(--font-montserrat)",
    },
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      screens: {
        xxs: "320px",
        xs: "360px",
        xsm: "480px", // Added for small devices
        sm: "640px",
        sml: "720px", // Added to bridge sm and md
        md: "768px",
        lg: "960px",
        lgl: "1024px", // Common tablet size
        xl: "1200px",
        mac: "1280px", // Common laptop size
        xsl: "1365px",
        xxl: "1440px", // High-resolution laptops
        xxxl: "1600px", // Large monitors
        hd: "1920px", // Full HD screens
        uhd: "2560px", // 2K/Ultrawide monitors
        fourk: "3840px", // 4K resolution
      },
      colors: {
        primary: "#fef4ea",
        accent: {
          DEFAULT: "#3fddb5",
          hover: "#cafcf0",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
