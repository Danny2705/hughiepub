/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#ff0000',
        'white': '#ffffff',
        'red': '#fd0e39',
        'black': '#000000',
        'banana': '#a3d70f',
        'yellow': '#ffd007',
        'event': '#fdd001',
        'blue': '#0260c0',
        'orange': '#ffae62',
        'grey': '#8c8b8b',
        'light-blue-hover': '#edf1ff',
        'dark-blue': '#1f3e72',
      },
      fontfamily: {
        'irish-grover': 'Irish Grover, cursive',
      },
    },
  },
  plugins: [],
}

