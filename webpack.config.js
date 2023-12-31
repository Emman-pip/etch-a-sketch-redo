const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    dom: "./src/domElements.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(
      __dirname,
      String.raw`D:\programming\web development\etch-a-sketch-redo\dist`
    ),
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Etch-a-sketch",
    }),
  ],
  module: {
    rules: [{ test: /\.css$/i, use: ["style-loader", "css-loader"] }],
  },
  output: {
    clean: true,
  },
};
