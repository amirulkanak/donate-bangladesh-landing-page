/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**.html'],
  theme: {
    extend: {
      // Custom media queries screen size
      screens: {
        xs: '340px',
        tab: '834px',
        pc: '1170px',
      },
      // Custom font family
      fontFamily: {
        lexend: ['"Lexend"', 'sans-serif'],
      },
      // Custom colors
      colors: {
        'clr-ultra-pure-white': '#F9F7F3',
        'clr-inchworm': '#B4F461',
        'clr-dreamless-sleep': '#111111',
      },
    },
  },
  plugins: [require('daisyui')],

  // Config for daisyUI
  daisyui: {
    themes: ['light'], // only 'light' theme available
    prefix: 'da-', // change prefix for all classes
  },
};
