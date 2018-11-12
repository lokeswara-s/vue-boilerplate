const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require('webpackbar');
const {
	VueLoaderPlugin
} = require("vue-loader")

require("dotenv").config();

module.exports = {
		entry: path.resolve(__dirname, "src/entry.js"),
		output: {
			path: path.resolve(__dirname, "dist")
		},
		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			compress: true,
			port: 9000,
			stats: 'errors-only',
		},
		module: {
			rules: [{
					test: /\.vue$/,
					use: "vue-loader"
				},
				{
					test: /\.scss$/,
					use: [
						"vue-style-loader",
						"css-loader",
						"sass-loader"
					]
				},
		]
	},
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'src/app/'),
      Routes: path.resolve(__dirname, 'src/routes/'),
      Services: path.resolve(__dirname, 'src/services/'),
      Store: path.resolve(__dirname, 'src/store/')
    }
  },
	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: require("html-webpack-template"),
			title: process.env.APP_TITLE,
			filename: path.resolve(__dirname, "dist/index.html"), //relative to root of the application
			bodyHtmlSnippet: "<div id='root'></div>",
		}),
		new VueLoaderPlugin(),
		new WebpackBar()
	]
}
