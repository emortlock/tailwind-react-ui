const path = require('path')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    tailwindcss(path.resolve(__dirname, 'style', 'tailwind.js')),
    autoprefixer(),
  ],
}
