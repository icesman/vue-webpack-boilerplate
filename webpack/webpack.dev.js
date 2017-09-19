'use strict';

const isDEV = process.env.NODE_ENV === 'development';
const setupApp = require("./webpack.mock.js");

module.exports = {
	plugins: [],

	devServerOption: {
		host: "localhost",
			port: 9001,
			historyApiFallback: false,
			noInfo: true,
			proxy: {
				'/api': {
					target: 'http://192.168.1.227:5005/',
					changeOrigin: true,
					pathRewrite: { '^/api': '' }
				}
			},
			// setup: setupApp
	},

	devtool: isDEV ? 'cheap-module-source-map' : false
	// 'cheap-module-sohrce-map'
	// '#eval-source-map
};
