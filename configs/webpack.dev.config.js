const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [{
      test: /\.js/,
      loader: 'babel-loader',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
  ],
};
