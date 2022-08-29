/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '320px',
      md: '600px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1440px',
    },
    extend: {},
  },
  plugins: [],
}
