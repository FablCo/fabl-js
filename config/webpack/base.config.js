var path = require("path");
var webpack = require("webpack");

var rootPath = path.resolve(__dirname, "..", "..");
var srcPath = path.resolve(rootPath, "src");
var outputPath = path.resolve(rootPath, "dist");

module.exports = {
  context: rootPath,
  entry: {
    fabl: path.resolve(srcPath, "fabl.js")
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      },

      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json"
      }
    ]
  },

  output: {
    path: outputPath,
    filename: "[name].js",
    publicPath: "/",
    library: "Fabl",
    libraryTarget: "umd",
    umdNamedDefine: "fabl"
  },

  resolve: {
    extensions: [
      "",
      ".js",
      ".json"
    ],

    modulesDirectories: [
      "src",
      "node_modules"
    ]
  },

  target: "web"
};
