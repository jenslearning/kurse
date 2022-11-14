/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        bestFont: "'Nunito', sans-serif"
      },

      backgroundColor: {
        page: '#eeeeee',
        image: '#e0466b'
      }
    },
  },
  plugins: [],
}