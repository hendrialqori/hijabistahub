/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Jost: 'Jost, sans-serif'
      },
      screens: {
        xs: '375px', 
        ...defaultTheme.screens
      }
    }
  },
  plugins: []
}
