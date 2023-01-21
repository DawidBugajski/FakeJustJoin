/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#e5f5ff',
        'filter-tablets-bg': '#e1f2fe',
        'green-no-hover': '#8c9e9f',
        'green-hover': '#3b4f4f',
        'primary-color': '#5da5a4',
      },
      fontFamily: {
        'League Spartan': ['"League Spartan"', 'sans-serif'],
      },
      backgroundImage: {
        'bg-header-mobile': "url('../public/images/bg-header-mobile.svg')",
      },
    },
  },
  plugins: [],
};
