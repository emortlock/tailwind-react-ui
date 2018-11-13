const fs = require('fs')
const path = require('path')
// const glob = require('glob-all')
// const PurgecssPlugin = require('purgecss-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { version } = require('../package.json')
// const { getWhitelist, TailwindReactExtractor } = require('../tools')

const isDev = process.env.NODE_ENV === 'development'
const components = fs.readdirSync(
  path.resolve(__dirname, '..', 'src/components'),
)

module.exports = {
  title: `Tailwind React UI`,
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
      name: 'Component Primitives',
      components: ['./src/components/primitives/*.jsx'],
    },
    {
      name: 'UI Components',
      sections: components
        .map(component => {
          const readme = path.resolve(
            __dirname,
            '../src/components',
            component,
            'readme.md',
          )

          return {
            name: `${component.charAt(0).toUpperCase()}${component.substring(
              1,
            )}`,
            content: fs.existsSync(readme)
              ? path.resolve(
                  __dirname,
                  '../src/components',
                  component,
                  'readme.md',
                )
              : undefined,
            components: [`./src/components/${component}/[A-Z]*.jsx`],
            usageMode: 'expand',
          }
        })
        .filter(section => !!section),
    },
    {
      name: 'Contributing',
      content: './site/docs/contributing.md',
    },
  ],
  skipComponentsWithoutExample: true,
  getExampleFilename(componentPath) {
    if (path.extname(componentPath) === '.jsx') {
      const componentMdPath = componentPath.replace('.jsx', '.md')
      if (fs.existsSync(componentMdPath)) return componentMdPath
      return path.resolve(__dirname, 'defaultReadme.md')
    }

    return path.resolve(path.dirname(componentPath), 'readme.md')
  },
  getComponentPathLine(componentPath) {
    if (!componentPath.endsWith('.jsx')) {
      return componentPath
    }
    const name = path.basename(componentPath, '.jsx')
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
    Wrapper: path.resolve(__dirname, './components/Wrapper.jsx'),
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
          // new PurgecssPlugin({
          //   whitelist: getWhitelist({}, [
          //     'flex-col-reverse',
          //     'flex-wrap-reverse',
          //     'max-w-md',
          //     'sm:w-1/5',
          //   ]),
          //   paths: glob.sync([
          //     path.join(__dirname, 'docs/*.md'),
          //     path.join(__dirname, '../', '/src/components/**/*.md'),
          //   ]),
          //   extractors: [
          //     {
          //       extractor: TailwindReactExtractor,
          //       extensions: ['md'],
          //     },
          //   ],
          // }),
          new MiniCssExtractPlugin({
            filename: 'main.[contenthash].css',
          }),
        ],
  },
}
