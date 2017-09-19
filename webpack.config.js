'use strict';

const isDEV = process.env.NODE_ENV === 'development';

const webpack = require('webpack');
const path = require('./webpack/webpack.path');
const packHtml = require('./webpack/webpack.html');
const packJs = require('./webpack/webpack.js');
const packVue = require('./webpack/webpack.vue');
const packCss = require('./webpack/webpack.css');
const packDev = require('./webpack/webpack.dev');

module.exports = {

	entry: path.entry,

	output: path.output,

	resolve: path.resolve,

	module: {
		rules: [].concat(
			packVue.rules,
			packJs.rules,
			packCss.rules
		)
	},

	plugins: [].concat(
		packJs.plugins,
		packCss.plugins,
		packHtml.plugins,
		packDev.plugins,
		new webpack.DefinePlugin({
			GOODSLIBDEV:isDEV
		})
	),

	devServer: packDev.devServerOption,

	devtool: packDev.devtool
};
