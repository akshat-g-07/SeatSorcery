import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        LogoFont: "Edu TAS Beginner",
      },
      colors: {
        primaryColor: "#0048FF",
      },
    },
  },
};
export default config;
