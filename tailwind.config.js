/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: "#0e1714",
        background: "#f3f9f7",
        primary: "#5cb892",
        secondary: "#da99d5",
        accent: "#69d2a7",
      },
    },
  },
  plugins: [],
};
