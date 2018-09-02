const path = require('path')
const autoprefixer = require('autoprefixer')
const clean = require('postcss-clean')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    tailwindcss(path.resolve(__dirname, 'style', 'tailwind.js')),
    autoprefixer(),
    clean(),
  ],
}
