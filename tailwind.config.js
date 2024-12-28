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
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0f3c70",
          secondary: "#3ABFF8",
          accent: "#F472B6",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        dark: {
          primary: "#0f3c70",
          secondary: "#3ABFF8",
          accent: "#F472B6",
          neutral: "#1E293B",
          "base-100": "#1E293B",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      "cupcake", // Use DaisyUI's built-in "cupcake" theme
    ],
  },
};
