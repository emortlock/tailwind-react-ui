module.exports = {
  sections: [
    {
      name: 'Components',
      components: ['src/**/index.js'],
    },
  ],
  skipComponentsWithoutExample: true,
  require: [
    'babel-polyfill',
    'tailwindcss/dist/tailwind.min.css',
    './build/styleguide.js',
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
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
}
