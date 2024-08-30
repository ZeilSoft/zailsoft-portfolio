const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#cf485f",
        "light": "#F9F7EE",
        "dark": "#000000",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
    },
    screens: {
      "2xsm": '360px',
      "xsm": '415px',
      "xlg": '1200px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
  darkMode: 'class',
}