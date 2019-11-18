const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true
          },
          keep_classnames: true,
          keep_fnames: true
        },
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      })
    ]
  },
  output: {
    filename: "suporka_utils.min.js", // contenthash 若文件内容无变化，则 contenthash 名称不变
    path: path.resolve(__dirname, "./dist"),
    library: "SuporkaUtils",
    libraryExport: "default",
    libraryTarget: "umd"
  }
};
