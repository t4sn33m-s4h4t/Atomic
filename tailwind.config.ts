const { nextui } = require("@nextui-org/react");
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "360px",
        xxsm: "330px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        sectorsBG: 'url("/Sectors.png")',
      },
      colors: {
        // ATOMIC BAFSK SCIENCE CLUB - Updated Color Palette
        primary: "#486581",        // Deep Navy - main brand color
        primary_dark: "#334e68",   // Darker navy
        primary_darkest: "#102a43", // Deepest navy
        
        secondary: "#ff9900",      // Electric Orange - main accent
        secondary_light: "#ffad33", // Lighter orange
        secondary_lighter: "#ffd699", // Very light orange
        secondary_lightest: "#fff8f0", // Lightest orange
        
        // Additional accent colors for science theme
        accent: "#e60000",         // Atomic Red for highlights
        success: "#22c55e",        // Success green
        warning: "#f59e0b",        // Warning amber
        error: "#dc2626",          // Error red
      },
      fontFamily: {
        ShareTechTown: ["Share Tech Mono", "Mono"],
        Roboto: ["Roboto", "sans-serif"],
        Bebas: ["Bebas Neue", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tailwind-gradient-mask-image"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities({
        "grid-fluid-fit": (value) => {
          return {
            gridTemplateColumns: "repeat(auto-fit, minmax(" + value + ", 1fr))",
            display: "grid",
          };
        },
        "grid-fluid-fill": (value) => {
          return {
            gridTemplateColumns: "repeat(auto-fill, minmax(" + value + ", 1fr))",
            display: "grid",
          };
        },
      });
    }),

    nextui({
      themes: {
        dark: {
          colors: {
            // Updated dark theme colors for Atomic Bafsk
            primary: "#486581",           // Deep Navy
            primary_dark: "#334e68",      // Darker navy
            primary_darkest: "#102a43",   // Deepest navy
            
            secondary: "#ff9900",         // Electric Orange
            secondary_light: "#ffad33",   // Lighter orange
            secondary_lighter: "#ffd699", // Very light orange
            secondary_lightest: "#fff8f0", // Lightest orange
            
            // Additional dark theme accents
            accent: "#e60000",            // Atomic Red
            success: "#22c55e",           // Success green
            warning: "#f59e0b",           // Warning amber
            error: "#dc2626",             // Error red
          },
        },
      },
    }),
  ],
};
export default config;