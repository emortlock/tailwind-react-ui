const fs = require('fs')
const path = require('path')
const glob = require('glob-all')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { version } = require('../package.json')
const { getPaths, purgeFromTailwindReact } = require('../tools')

const isDev = process.env.NODE_ENV === 'development'

const components = fs.readdirSync(
  path.resolve(__dirname, '..', 'src/components'),
)

module.exports = {
  title: `Tailwind React UI`,
  version,
  // eslint-disable-next-line global-require
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
  ).parse,
  sections: [
    {
      name: '',
      content: './README.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: './site/docs/installation.md',
        },
        {
          name: 'Usage',
          content: './site/docs/usage.md',
        },
        {
          name: 'Contributing',
          content: './site/docs/contributing.md',
        },
      ],
    },
    {
      name: 'Components',
      components: ['./src/components/**/*.tsx'],
    },
  ],
  skipComponentsWithoutExample: true,
  getExampleFilename(componentPath) {
    if (path.extname(componentPath) === '.tsx') {
      const componentMdPath = componentPath.replace('.tsx', '.md')
      if (fs.existsSync(componentMdPath)) return componentMdPath
      return path.resolve(__dirname, 'defaultReadme.md')
    }

    return path.resolve(path.dirname(componentPath), 'readme.md')
  },
  getComponentPathLine(componentPath) {
    if (!componentPath.endsWith('.tsx')) {
      return componentPath
    }
    const name = path.basename(componentPath, '.tsx')
    return `import { ${name} } from 'tailwind-react-ui'`
  },
  styles: {
    Pre: {
      pre: {
        overflow: 'scroll',
      },
    },
    Playground: {
      preview: {
        position: 'relative',
        display: 'block',
        padding: '0',
        border: 'none',
        borderRadius: '0',
      },
    },
  },
  styleguideComponents: {
    Wrapper: path.resolve(__dirname, './components/Wrapper'),
  },
  require: ['@babel/polyfill', './site/style/main.css'],
  webpackConfig: {
    devtool: isDev && 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          use: {
            loader: 'babel-loader?cacheDirectory',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    loose: true,
                    modules: false,
                    targets: '>2%',
                  },
                ],
              ],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?$/,
          use: require.resolve('ts-loader'),
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: isDev
            ? ['style-loader', 'postcss-loader']
            : [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../',
                  },
                },
                'css-loader',
                'postcss-loader',
              ],
        },
        {
          test: /\.md$/,
          use: [],
        },
      ],
    },
    plugins: [
      !isDev &&
        new MiniCssExtractPlugin({
          filename: 'main.[contenthash].css',
        }),
      !isDev &&
        new PurgecssPlugin({
          whitelist: [],
          paths: glob.sync([
            path.join(__dirname, 'components/*.tsx'),
            path.join(__dirname, 'docs/*.md'),
            path.join(__dirname, '../README.md'),
            ...getPaths(),
            ...components.map((component) =>
              path.join(__dirname, '..', `src/components/${component}/*.md`),
            ),
          ]),
          extractors: [
            {
              extractor: purgeFromTailwindReact,
              extensions: ['md', 'tsx'],
            },
          ],
        }),
    ].filter(Boolean),
    resolve: {
      extensions: [
        'web.mjs',
        'mjs',
        'web.js',
        'js',
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'json',
        'web.jsx',
        'jsx',
      ],
    },
  },
  moduleAliases: {
    'tailwind-react-ui': path.resolve(__dirname, '..', './src/'),
  },
}
