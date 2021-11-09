const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "production",
  entry: {
    app: "./client/assets/js/index.js",
  },
  output: {
    path: __dirname + "/client/dist",
    filename: "index.bundle.js"
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: "Budget Tracker",
      short_name: "Budget Tracker",
      description: "An application which works on or offline to allow the user to track a budget and log expenses.",
      background_color: "#2184d1",
      theme_color: "#ffffff",
      start_url: "/",
      icons: [{
        src: path.resolve("client/assets/icons/icon-512x512.png"),
        sizes: [192, 512],
        destination: path.join("assets", "icons")
      }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = config;