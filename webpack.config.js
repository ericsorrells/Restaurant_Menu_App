// ========================================================================
/* External */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// ========================================================================

module.exports = {
  entry: path.resolve(__dirname, './src/app.js'),
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
  },
}