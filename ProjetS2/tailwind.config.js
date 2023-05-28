/**  @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    		colors: {
          Gold: '#E4B849',
          White: "#FFFFFF",
          LightGray: "#DFDEDE",
          Gray:"#969595",
          DarkGray:"#434141",
          Black:"#1D1C1C",
          Blue:"#2B6CA8",
        },
        fontFamily: {
        button:['Bebas Neue', 'sans-serif'],
        texte:['Lato', 'sans-serif'],
        title:['Roboto', 'sans-serif']
        },
    extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, 80px)'
      }
    }
  },
  plugins: []
}