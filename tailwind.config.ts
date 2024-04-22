import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0047ba",
        white: "#ffffff",
        black: "#242424",
        gray: "#818181",
        lightestgray: "#F4F4F4",
        yellow: "#FACD49",
      },
    },
  },
  plugins: [],
};
export default config;
