import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      primary: {
        "50":"#eff6ff",
        "100":"#dbeafe",
        "200":"#bfdbfe",
        "300":"#93c5fd",
        "400":"#60a5fa",
        "500":"#3b82f6",
        "600":"#2563eb",
        "700":"#1d4ed8",
        "800":"#1e40af",
        "900":"#1e3a8a",
        "950":"#172554"
      }
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;
