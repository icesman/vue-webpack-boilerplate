'use strict';

const isDEV = process.env.NODE_ENV === 'development';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('./webpack.path');

const webpack = require('webpack');

var devRules = isDEV ? {rules: [], plugins: []} : {
	rules: [{
		loader: 'clean-css-loader',
		options: {
			compatibility: 'ie9',
			level: 2,
			inline: ['remote']
		}
	}],
	plugins: [
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {discardComments: {removeAll: true}},
			canPrint: true
		})
	]
};

module.exports = {
	rules: [
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader: 'css-loader'
				}].concat(devRules.rules)
			})
		},
		{
			test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
			exclude: /favicon\.png$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 1000
				}
			}]
		}
	],
	
	plugins: [
		new ExtractTextPlugin({
			filename: 'assets/css/[name].[hash:8].css',
			allChunks: true
		})
	].concat(devRules.plugins)
};
