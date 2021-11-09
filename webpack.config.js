const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "production",
  entry: {
    app: "./public/assets/index.js",
  },
  output: {
    path: __dirname + "/public/dist",
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
        src: path.resolve("public/assets/images/icon-515x512.png"),
        sizes: [192, 512],
        destination: path.join("assets", "images")
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