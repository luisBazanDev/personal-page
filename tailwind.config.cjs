/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "luis-blue": "#48cae4",
        "luis-blue-heavy": "#002da8",
        "luis-blue-dark": "#0C0C0C",
        "luis-gray-lighter": "#1C1C1C",
      },
      fontFamily: {
        inconsola: "Inconsolata, monospace",
      },
      spacing: {
        26: "6.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
