const autoprefixer = require('autoprefixer')
const clean = require('postcss-clean')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [tailwindcss(), autoprefixer(), clean()],
}
