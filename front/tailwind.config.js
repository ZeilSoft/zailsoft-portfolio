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
        "main": "#374151",
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
}

