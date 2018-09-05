import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

const { MODULE_FORMAT } = process.env

const suffix = MODULE_FORMAT === 'cjs' ? '.cjs' : ''

const createConfig = (input, outputFile) => ({
  input,
  output: {
    file: outputFile,
    format: MODULE_FORMAT,
  },
  external: module => /node_module/.test(module),
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
})

const config = [createConfig('./src/index.js', `dist/index${suffix}.js`)]

if (MODULE_FORMAT === 'cjs') {
  config.push(
    createConfig('./src/plugins/index.js', `plugins/index.js`),
    createConfig('./src/tools/index.js', `tools/index.js`),
  )
}

export default config
