var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const Uglify = require("uglifyjs-webpack-plugin");
var JavaScriptObfuscator = require("webpack-obfuscator");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const express = require("express");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const envPath =
  process.env.NODE_ENV === "development" ? ".env.dev" : ".env.prod";

require("dotenv").config({ path: envPath });

module.exports = {
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    filename:
      process.env.NODE_ENV === "development"
        ? "[name].js"
        : "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: "file-loader?name=[name].[ext]"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  // optimization: {
  //   minimizer: [new TerserPlugin()]
  // },
  plugins: [
    new Dotenv({ path: envPath }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chicken: "im a chicken",
      base: process.env.base
    }),
    new webpack.ContextReplacementPlugin(/.*/),
    new CleanWebpackPlugin()
    // new JavaScriptObfuscator({
    //   rotateUnicodeArray: true
    // })
  ],
  devServer: {
    historyApiFallback: true
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "http://localhost:4000"
    })
  }
};
