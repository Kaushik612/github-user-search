/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridColumn: {
        "span-2": "span 2 / span 3",
      },
      gridRow: {
        "span-1": "span 1/ span 2",
      },
    },
  },
  plugins: [],
};
