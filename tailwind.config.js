/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ["Nunito", "sans-serif"],
        'poppins': ["Poppins", "sans-serif"],
        'cursive': ['Comic Neue', 'cursive'],
      },
      zIndex: {
        '100': '100',
      },
      width: {
        '90': '90%'
      }
    },
  },
  plugins: [],
};
