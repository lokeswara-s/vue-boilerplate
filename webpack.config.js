const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack');
const WebpackOnBuildPlugin = require('on-build-webpack');
const fs = require('fs');

require("dotenv").config();

module.exports = {
    mode: process.env.MODE,
    entry: path.resolve(__dirname, "src/entry.js"),
    output: {
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: require('html-webpack-template'),
            title:process.env.APP_TITLE,
            filename: path.resolve(__dirname, "dist/index.html"), //relative to root of the application
            bodyHtmlSnippet: '<div id="root"></div>',
        }),
        new VueLoaderPlugin(),
        new WebpackOnBuildPlugin(function (bundle) {
            /*
             @param error "Error Handler on file operation failed"
             @param data "Success Handler on file operation success"
             */
            fs.readFile(path.resolve(__dirname, "dist/main.js"), function (error, data) {
                var file_content = data.toString();
                // var gatheredContents = [...new Set(file_content.match(/\bsourceURL=webpack[a-zA-Z]*\b.*(\bvue\?)/g))];
                var gatheredContents = [...new Set(file_content.match(/\bn\/\* harmony import \*\/.*(\bvue\\")/g))];
                var someObject = {};
                gatheredContents.map(function (content, key) {
                    someObject[key] = (content.toString());
                });
                console.log(someObject)
            });
        })
    ],
    optimization:{
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
}