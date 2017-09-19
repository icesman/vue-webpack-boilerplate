'use strict';

const isDEV = process.env.NODE_ENV === 'development';
const config = require('./webpack.path');

const webpack = require('webpack');
const path = require('path');
const _ = path.resolve('./');
const prodArray = isDEV ? [] : [
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	}),
	new webpack.optimize.UglifyJsPlugin({
		compress: { warnings: false },
		comments: false
	})
];

module.exports = {
	rules: [
		{
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						["es2015"]
					]
				}
			},
			exclude: /node_modules|assets/
		},
		// doom template to module
		{
			test: /\.doom$/,
			use: 'raw-loader',
			exclude: /node_modules/
		},
	],

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors',
			filename: 'assets/[name].[hash:8].js',
			chunks: config.chunks,
			minChunks: function(module){
				return module.context &&
					(module.context.indexOf('node_modules') !== -1 || 
						module.context.indexOf('assets/js/libs') !== -1 || 
						module.context.indexOf('assets/css/libs') !== -1 );
			}
		}),

		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			moment: "moment",
			'window.jQuery': 'jquery',
			struct: 'struct',
		}),

		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
	].concat(prodArray)
};
