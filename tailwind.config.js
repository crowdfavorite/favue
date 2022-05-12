const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './resources/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'cf-base': {
          DEFAULT: '#f12e15',
          dark: '#a8200e',
          light: '#f56c5b',
        },
        'cf-gray': {
          DEFAULT: '#5d5d5d'
        },
        'cf-complement': {
          DEFAULT: '#f12e15',
          dark: '#86190B'
        }
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
