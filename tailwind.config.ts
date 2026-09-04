import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#1e1b2e",
        surface: "#252238",
        surface2: "#2d2945",
        text: "#f0eeff",
        muted: "#a89ec0",
        muted2: "#5e5578",
        gold: "#8b7fd4",
        goldLight: "#9b8fd8",
        coral: "#f4845f",
        peach: "#f9a97e",
        amber2: "#f5c842",
        lavender: "#9b8fd8",
        sky: "#7ecff4",
      },
      backgroundImage: {
        grad: "linear-gradient(135deg, #f4845f 0%, #f9a97e 20%, #f5c842 40%, #9b8fd8 65%, #7ecff4 100%)",
        gradH: "linear-gradient(90deg, #f4845f 0%, #f5c842 40%, #7ecff4 100%)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-dmsans)", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
