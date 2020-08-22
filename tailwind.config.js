const plugins = require('./src/plugins')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [...Object.keys(plugins).map(name => plugins[name]())],
}
