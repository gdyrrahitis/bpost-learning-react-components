const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        "react-hot-loader/patch",
        "./src/main.js"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader"
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({ template: "./index.html" }),
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: "development",
    devServer: {
        contentBase: "./dist",
        port: 8082,
        hot: true
    }
};