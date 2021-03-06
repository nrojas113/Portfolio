const path = require("path");

module.exports = {
  entry: "./app/index.js",
  mode: "development",
  devtool: "hidden-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 8000,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(scss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(mov|mp4|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
};
