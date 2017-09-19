'use strict';

const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const _ = path.resolve('./');
const htmlArray = [];

glob.sync(_+'/src/pages/**/*.html').forEach(path => {
	console.log(path);

	const filename = path.split('/src/pages/')[1].split('/app.html')[0] + '.html';
	const chunk = path.split('/src/pages/')[1].split('.html')[0];
	const htmlConf = {
		filename: filename,
		template: path,
		inject: 'body',
		inlineSource: '^(\/assets\/css.*app).*(css)$',
		// favicon: './src/assets/img/logo.png',
		hash: false,
		chunks: ['vendors', chunk],
		minify: {
			removeComments: true,
			collapseWhitespace: true,
			removeAttributeQuotes: true,
			removeTagWhitespace: true,
			useShortDoctype: true,
			minifyURLs: true,
			minifyJS: true
		}
	};
	htmlArray.push(new HtmlWebpackPlugin(htmlConf));
});


module.exports = {
	plugins: htmlArray.concat([
		new HtmlInlineSourcePlugin()
	])
};
