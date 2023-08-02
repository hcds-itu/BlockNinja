const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // or "production"
  entry: {
    index: "./src/client/index.js",
    question: "./src/client/question.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/index.html",
      filename: "index.html",
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/client/question.html",
      filename: "question.html",
      chunks: ["question"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/client/end.html",
      filename: "end.html",
      chunks: ["end"]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css", // Output extracted CSS files with the same name as their entry
    }),
  ],
  module: {
    rules: [
      {
        test: /styles\.css$/, // Process styles.css separately for index.html
        use: [
          "style-loader",
          "css-loader",
        ],
        include: path.resolve(__dirname, "src", "client"),
        exclude: path.resolve(__dirname, "src", "client", "question.css"), // Exclude question.css from styles.css processing
        exclude: path.resolve(__dirname, "src", "client", "end.css"), // Exclude end.css from styles.css processing
      },
      {
        test: /question\.css$/, // Process question.css separately for question.html
        use: [
          "style-loader",
          "css-loader",
        ],
        include: path.resolve(__dirname, "src", "client"),
        exclude: path.resolve(__dirname, "src", "client", "end.css"), // Exclude end.css from question.css processing
      },
      {
        test: /end\.css$/, // Process question.css separately for question.html
        use: [
          "style-loader",
          "css-loader",
        ],
        include: path.resolve(__dirname, "src", "client"),
      },
    ],
  },
};

