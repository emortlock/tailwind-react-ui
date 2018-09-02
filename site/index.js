const fs = require('fs')
const path = require('path')
const glob = require('glob-all')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { version } = require('../package.json')
const { getWhitelist, TailwindReactExtractor } = require('../tools')

const isDev = process.env.NODE_ENV === 'development'
const components = fs.readdirSync(
  path.resolve(__dirname, '..', 'src/components'),
)

module.exports = {
  title: `Tailwind React`,
  version,
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
          name: 'Theming',
          content: './site/docs/theming.md',
        },
      ],
    },
    {
      name: 'Component Demos',
      content: './site/docs/styleguide.md',
      components: ['./src/components/**/index.js'],
      usageMode: 'hide',
    },
    {
      name: 'Component APIs',
      sections: components.map(component => ({
        name: `${component.charAt(0).toUpperCase()}${component.substring(1)}`,
        components: [`./src/components/${component}/[A-Z]*.jsx`],
        ignore: ['**/tailwind/*'],
        usageMode: 'expand',
      })),
    },
    {
      name: 'Contributing',
      content: './site/docs/contributing.md',
    },
  ],
  skipComponentsWithoutExample: true,
  getExampleFilename(componentPath) {
    return componentPath.endsWith('.jsx')
      ? path.resolve(__dirname, 'defaultReadme.md')
      : path.resolve(path.dirname(componentPath), 'readme.md')
  },
  getComponentPathLine(componentPath) {
    if (!componentPath.endsWith('.jsx')) {
      return componentPath
    }
    const name = path.basename(componentPath, '.jsx')
    return `import { ${name} } from 'tailwind-react'`
  },
  styles: {
    Pre: {
      pre: {
        overflow: 'scroll',
      },
    },
  },
  require: [
    '@babel/polyfill',
    './site/style/main.css',
    './site/addComponents.js',
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader?cacheDirectory',
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
    plugins: isDev
      ? []
      : [
          new PurgecssPlugin({
            whitelist: getWhitelist({}, []),
            paths: glob.sync([
              path.join(__dirname, 'docs/*.md'),
              path.join(__dirname, '../', '/src/components/**/*.md'),
            ]),
            extractors: [
              {
                extractor: TailwindReactExtractor,
                extensions: ['md'],
              },
            ],
          }),
          new MiniCssExtractPlugin({
            filename: 'main.[contenthash].css',
          }),
        ],
  },
}
