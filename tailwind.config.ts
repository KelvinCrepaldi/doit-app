import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "doit-green-background": "#E0F1E0",
        "doit-green-button": "#D7F4CD",
        "doit-green-text": "#005B1A",
        "doit-orange-text": "#FF7A00",
      },
      fontFamily: {
        roboto: ["var(--roboto)"],
      },
    },
  },
  plugins: [],
};
export default config;
