/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero_bg': "url('./assets/hero_bg.jpg')",
        'travel': "url('./assets/travel_mobile.jpg')",
        'task': "url('./assets/tasklist_mobile.jpg')",
        'sale': "url('./assets/sale_mobile.jpg')",
        'calculator': "url('./assets/ios_calculator.jpg')",
        'dashboard': "url('./assets/dashboard.jpg')",
        'movies': "url('./assets/movies.jpg')",
        'ghsearch': "url('./assets/gh_search.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#165656',
        'secondary': '#DBF7EC',
        'tertiary': '#F7F7F7',
      }),
      textColor: {
        'primary': '#165656',
        'secondary': '#DBF7EC',
        'tertiary': '#F7F7F7',
      },
      colors: {
        'primary': '#165656',
        'secondary': '#DBF7EC',
        'tertiary': '#EEEEEE',
        'border': '#DFDFDF',
      },
      fontFamily: {
        Comfortaa: ['Comfortaa', 'cursive']
      },
      height: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
      },
    },
  },
  plugins: [require("daisyui")],
}
