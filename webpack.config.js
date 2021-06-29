const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
};

module.exports = {
  mode: mode,
  target: target,

  output: {
    assetModuleFilename: "images/[hash][ext]",
  },

  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource"
      },
      {
        test: /.\js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"]
      }
    ],
  },

  plugins: [new MiniCssExtractPlugin()],
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  }
}