const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        port: process.env.PORT || 3000,
        historyApiFallback: true,
        open: true,
        hot: true,
        compress: true,
        static: {
            directory: path.join(__dirname, 'public'),
            watch: {
                ignored: /node_modules/,
            },
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        htmlPlugin]
};