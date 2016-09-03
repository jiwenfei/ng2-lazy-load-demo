const webpack = require("webpack");
const merge = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge({}, config, {
  output: {
    publicPath: "https://quramy.github.io/ng2-lazy-load-demo/dist/"
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ]
});
