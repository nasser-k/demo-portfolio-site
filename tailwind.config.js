/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode with the "class" strategy
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f3c70",
        darkBg: "#1E293B",
        darkText: "#CBD5E1",
      },
    },
  },
  plugins: [],
}

