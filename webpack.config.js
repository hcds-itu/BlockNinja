const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // or 'production'
  entry: {
    index: './src/client/index.js',
    question: './src/client/question.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/client/question.html',
      filename: 'question.html',
      chunks: ['question']
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // Apply style loader only for index.html
          'css-loader',
        ],
        include: path.resolve(__dirname, 'src', 'client', 'styles.css'),
      },
    ],
  },
};

