/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "#223257",
        light_blue: "#C4D0E8",
        amethyst: "#A2A9FF",
        rose: "#F9BCB2",
        gray: "#DDE5F0",
      },
      fontFamily: {
        sans: ["Karla", "sans-serif"],
        mono: ["Koulen", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
