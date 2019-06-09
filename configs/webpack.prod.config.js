const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/app.js',
  output: {
    path: path.dirname(__dirname),
    // path: path.join(path.dirname(__dirname), 'docs'),
    filename: 'app.[chunkhash].js',
  },
  mode: 'production',
  devtool: false,
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: true,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
          camelCase: true,
        },
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: () => ([
            require('postcss-import')(),
            require('autoprefixer')(),
            require('postcss-nested')(),
          ]),
        },
      }],
    }, {
      test: /\.js/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(jpe?g|png|ttf|eot|otf|gif|woff|woff2|webp)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      }],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
    }),
  ],
};
