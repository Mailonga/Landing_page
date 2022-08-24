/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '540px',
      md: '650px',
      lg: '720px',
      xl: '1080px',
      '2xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
}
