const path = require('path');

module.exports = {
  // mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/dist/'
  },
  devServer: {
    client: {
      overlay: true,
    },
  },
  module: {
    rules: [
      { test: /\.js$/, use: `babel-loader`, },
    ],
  },
  devtool: `eval-source-map`,
};
