'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	rules: [
		{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					css: ExtractTextPlugin.extract({
						use: [{
							loader: 'css-loader'
						}],
						fallback: 'style-loader'
					})
				},
				postLoaders: {
					html: 'babel-loader'
				},
				postcss: [
          require('autoprefixer')
				]
			}
		}
	]
};
