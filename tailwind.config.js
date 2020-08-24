const plugins = require('./plugins')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [...Object.keys(plugins).map(name => plugins[name]())],
}
