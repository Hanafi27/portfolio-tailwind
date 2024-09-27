/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./img/hans.png')",
      },
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "rgb(220 38 38)",
        dark: "rgb(15 23 42)",
        secondary: "#64748b",
      },
    },
  },
  plugins: [],
};
