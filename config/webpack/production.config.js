var webpack = require("webpack");

var baseConfig = require("./base.config.js");

module.exports = Object.assign({}, baseConfig, {
  devtool: "source-map",

  output: Object.assign({}, baseConfig.output, {
    filename: "[name].min.js"
  }),

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});
