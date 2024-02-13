/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        'northern-air': '#A5C9CA',
        'dark-shade': '#0b2a45',
        'base-dark-blue': '#0d304f',
        'lighter-shade': '#3a5a7d',
        'pale-shade': '#6789a8',
        'very-pale-shade': '#d1ddeb',

      },
    },
  },
  plugins: [],
}

