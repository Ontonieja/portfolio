import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "gradient-glow": "0 0 25px rgba(236,72,201,0.99)",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "gradient 6s ease infinite",
      },
      colors: {
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "primary-orange": "#ECC054",
        "primary-background": "#EFEFEF",
        "primary-button": "# 16132B",
        "light-blue": "#8AB7DF",
        "muted-gray": "#16132B",
        "light-gray": "#3E3E47",
        "section-background": "#e7e7e7",
        "project-background": "#24242A",
      },
      fontFamily: {
        grotesk: "var(--font-space-grotesk)",
      },
    },
    maxWidth: {
      "1920": "1920px",
    },
  },
  plugins: [],
} satisfies Config;
