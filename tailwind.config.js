/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      // Custom media queries screen size
      screens: {
        tab: '834px',
        pc: '1170px',
      },
      // Custom font family
      fontFamily: {
        lexend: ['"Lexend"', 'sans-serif'],
      },
      // Custom colors
      colors: {
        'clr-gray-1': '#E9E9E9',
      },
      backgroundImage: {},
    },
  },
  plugins: [require('daisyui')],

  // Config for daisyUI
  daisyui: {
    themes: ['light'], // only 'light' theme available
    prefix: 'da-', // change prefix for all classes
  },
};
