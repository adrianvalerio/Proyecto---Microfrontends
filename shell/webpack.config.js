const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("@module-federation/enhanced/webpack");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [  
    new ModuleFederationPlugin({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        layout: "layout@http://localhost:3001/remoteEntry.js"
      },
shared: {
  react: { singleton: true, eager: true, requiredVersion: false },
  "react-dom": { singleton: true, eager: true, requiredVersion: false },
},
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
