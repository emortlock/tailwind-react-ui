import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

import { dependencies, peerDependencies } from './package.json'

const { MODULE_FORMAT } = process.env

const suffix = MODULE_FORMAT === 'cjs' ? '.cjs' : ''

export default {
  input: './src/index.js',
  output: {
    file: `dist/index${suffix}.js`,
    format: MODULE_FORMAT,
  },
  external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}
