/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'old-rose': '#c48a75',
        'glacier': '#75afc4',
        'silk': '#bda69e',
        'silk-brown': '#C88C75',
        'dust-green': '#A3AF9E',
        'light-green': '#E4E3D7',
      },
      fontFamily: {
        barlow: ['"Barlow Semi Condensed"', ...defaultTheme.fontFamily.sans],
        roboto:['"Roboto"', ...defaultTheme.fontFamily.sans],
        barlow_condensed: ['"Barlow Condensed"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
