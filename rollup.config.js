import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from '@rollup/plugin-typescript'

import { name } from './package.json'

const { IGNORE_LIB } = process.env

const shebang = {}

export function createRollupConfig({ isMain, input, outputDir, format, env }) {
  const isDev = env === 'development'

  return {
    // Tell Rollup the entry point to the package
    input,
    // Tell Rollup which packages to ignore
    external: (id) => !id.startsWith('.') && !id.startsWith('/'),
    // Establish Rollup output
    output: {
      // Set filenames of the consumer's package
      file: [
        `${outputDir}/index`,
        isMain && format !== 'esm' && format,
        isMain && isDev && 'dev',
        'js',
      ]
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
      typescript(),
      babel({
        exclude: /node_modules/,
        plugins: [
          require.resolve('babel-plugin-annotate-pure-calls'),
          require.resolve('babel-plugin-dev-expression'),
          format !== 'cjs' && [
            require.resolve('babel-plugin-transform-rename-import'),
            {
              replacements: [{ original: 'lodash', replacement: 'lodash-es' }],
            },
          ],
        ].filter(Boolean),
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      sourceMaps(),
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
    ],
  }
}

const defaultFormats = ['esm', 'cjs']
const defaultEnvironments = ['development', 'production']

const entryPoints = [
  IGNORE_LIB !== 'true' && {
    input: './src/index.ts',
    outputDir: 'dist',
    formats: defaultFormats,
    environments: defaultEnvironments,
    isMain: true,
  },
  {
    input: './src/plugins/index.ts',
    outputDir: 'plugins',
    formats: ['cjs'],
    environments: ['development'],
  },
  {
    input: './src/tools/index.ts',
    outputDir: 'tools',
    formats: ['cjs'],
    environments: ['development'],
  },
]

export default entryPoints.filter(Boolean).reduce(
  (entryPointConfigs, { input, outputDir, formats, environments, isMain }) => [
    ...entryPointConfigs,
    ...formats.reduce(
      (config, format) => [
        ...config,
        ...environments.map((env) =>
          createRollupConfig({
            input,
            outputDir,
            format,
            env,
            isMain,
          }),
        ),
      ],
      [],
    ),
  ],
  [],
)
