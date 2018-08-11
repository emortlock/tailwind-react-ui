module.exports = {
  sections: [
    {
      name: 'Components',
      components: ['src/**/*.jsx'],
    },
  ],
  require: ['babel-polyfill', 'tailwindcss/dist/tailwind.min.css'],
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
