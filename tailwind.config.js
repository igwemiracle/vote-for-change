/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cookie: ['Cookie', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lobster: ['Lobster', 'sans-serif'],
      },
      screens: {
        xs: '303px',
      },
      colors: {
        'dark-brown': '#AF4D32',
        'dark-gray': '#2D3F51'
      }
    },
  },
  plugins: [],
}