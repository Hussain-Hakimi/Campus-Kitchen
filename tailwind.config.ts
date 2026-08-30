import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { orange: "#E8792F", green: "#2F7D4A", cream: "#FFF9F1", ink: "#24231F" }
      },
      boxShadow: { soft: "0 16px 45px rgba(36,35,31,0.09)" }
    }
  },
  plugins: []
};

export default config;
