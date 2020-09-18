import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

import { name } from './package.json'

const { NODE_ENV } = process.env

const shebang = {}

export function createRollupConfig({
  input,
  outputDir,
  outputSuffix = '',
  format,
  noMinify = false,
} = {}) {
  const env = NODE_ENV || 'production'
  const isDev = env === 'development'

  return {
    // Tell Rollup the entry point to the package
    input,
    // Tell Rollup which packages to ignore
    external: (id) => !id.startsWith('.') && !id.startsWith('/'),
    // Establish Rollup output
    output: {
      // Set filenames of the consumer's package
      file: [`${outputDir}/index`, outputSuffix, 'js']
        .filter(Boolean)
        .join('.'),
      // Pass through the file format
      format,
      // Do not let Rollup call Object.freeze() on namespace import objects
      // (i.e. import * as namespaceImportObject from...) that are accessed dynamically.
      freeze: false,
      // Do not let Rollup add a `__esModule: true` property when generating exports for non-ESM formats.
      esModule: false,
      // Rollup has treeshaking by default, but we can optimize it further...
      name,
      sourcemap: true,
      globals: { 'react': 'React', 'react-native': 'ReactNative' },
      exports: 'named',
    },
    plugins: [
      resolve({
        mainFields: ['module', 'main', 'browser'],
      }),
      json(),
      {
        // Custom plugin that removes shebang from code
        // See: https://github.com/Rich-Harris/buble/pull/165
        transform(code) {
          const reg = /^#!(.*)/
          const match = code.match(reg)

          shebang[name] = match ? `#!${match[1]}` : ''

          return {
            code: code.replace(reg, ''),
            map: null,
          }
        },
      },
      replace({
        __BUILD_ENV__: JSON.stringify(env),
      }),
      typescript(),
      babel({
        exclude: /node_modules/,
        extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'],
        babelHelpers: 'runtime',
        inputSourceMap: true,
        plugins: [
          require.resolve('@babel/plugin-transform-runtime'),
          !noMinify && require.resolve('babel-plugin-annotate-pure-calls'),
          format === 'esm' && [
            require.resolve('babel-plugin-transform-rename-import'),
            {
              replacements: [{ original: 'lodash', replacement: 'lodash-es' }],
            },
          ],
        ].filter(Boolean),
      }),
      !noMinify &&
        !isDev &&
        terser({
          output: { comments: false },
          compress: {
            keep_infinity: true,
            pure_getters: true,
            collapse_vars: false,
          },
          ecma: 5,
          toplevel: format === 'cjs',
          warnings: true,
        }),
    ].filter(Boolean),
  }
}

const entryPoints = [
  {
    input: './src/index.ts',
    outputDir: 'dist',
    outputs: ['esm', 'cjs'],
  },
]

export default entryPoints.filter(Boolean).reduce(
  (entryPointConfigs, { input, outputDir, outputs, noMinify }) => [
    ...entryPointConfigs,
    ...outputs.reduce(
      (config, format, formatIdx) => [
        ...config,
        createRollupConfig({
          input,
          outputDir,
          format,
          outputSuffix: format.length > 1 && formatIdx > 0 ? format : '',
          noMinify,
        }),
      ],
      [],
    ),
  ],
  [],
)
