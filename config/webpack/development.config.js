var webpack = require("webpack");

var baseConfig = require("./base.config.js");

module.exports = Object.assign({}, baseConfig, {
  devtool: "inline-source-map",

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
});
