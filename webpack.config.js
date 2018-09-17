const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader")

require("dotenv").config();

module.exports = {
    mode: process.env.MODE,
    entry: path.resolve(__dirname, "src/entry.js"),
    output: {
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.scss$/,
                use:[
                    "vue-style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: require("html-webpack-template"),
            title:process.env.APP_TITLE,
            filename: path.resolve(__dirname, "dist/index.html"), //relative to root of the application
            bodyHtmlSnippet: "<div id='root'></div>",
        }),
        new VueLoaderPlugin()
    ]
}