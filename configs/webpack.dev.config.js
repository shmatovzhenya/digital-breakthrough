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
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
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
  ],
};
