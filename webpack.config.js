const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(
      __dirname,
      String.raw`D:\programming\web development\etch-a-sketch-redo\dist`
    ),
  },
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
