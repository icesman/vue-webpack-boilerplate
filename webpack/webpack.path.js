'use strict';

const glob = require('glob');
const entries = {};
const chunks = [];
const path = require('path');
const isDEV = process.env.NODE_ENV === 'development';

const _ = path.resolve('./');
const _dist = _ + '/static';
const _static = _ + '/src/assets/';
const _js = _static + 'js/';
const _css = _static + 'css/';
const _components = _ + '/src/components/';
const _filter = _ + '/src/vue';
const _modules = _ + '/src/modules';

glob.sync(_+'/src/pages/**/*.js').forEach(path => {
	const chunk = path.split('/src/pages/')[1].split('.js')[0];
	entries[chunk] = path;
	chunks.push(chunk);
});

module.exports = {
	basePath: _,

	chunks: chunks,

	entry: entries,

	output: {
		path: _dist,
		filename: '[name].[hash:8].js',
		publicPath: '/'
	},

	resolve: {
		extensions: ['.js', '.vue', '.css'],
		alias: {
			assets: _static,
			components: _components,
			vutils: _filter,
			modules: _modules
		}
	}
};
