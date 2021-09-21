// ========================================================================
/* External */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// ========================================================================

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "assets", "index.html"),
    }),
  ],
  resolve: {
    extensions: ['*', '.js']
  },
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    host: "localhost",
    port: "8080",
    compress: true,
    historyApiFallback: true
  },
}