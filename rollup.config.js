import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

import { dependencies, peerDependencies } from './package.json'

const { MODULE_FORMAT } = process.env

const suffix = MODULE_FORMAT === 'cjs' ? '.cjs' : ''

const externalDeps = [
  ...Object.keys(dependencies),
  ...Object.keys(peerDependencies),
]

const createConfig = (input, outputFile) => ({
  input,
  output: {
    file: outputFile,
    format: MODULE_FORMAT,
  },
  external: module => {
    let isExternal = /node_module/.test(module)

    if (!isExternal) {
      externalDeps.forEach(dep => {
        if (new RegExp(`^${dep}`).test(module)) {
          isExternal = true
        }
      })
    }

    return isExternal
  },
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
