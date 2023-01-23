/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "luis-blue": "#48cae4",
        "luis-blue-dark": "#003249",
        "luis-heavy-dark": "#03045e",
        "luis-blue-light": "#90e0ef",
        "luis-blue-lighter": "#caf0f8",
      },
      fontFamily: {
        inconsola: "Inconsolata, monospace",
      },
      spacing: {
        26: "6.5rem",
      },
    },
  },
  plugins: [],
};
