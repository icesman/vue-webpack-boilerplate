# vue-webpack-boilerplate
A boilerplate used for multi-page project for admin dashboard.
All the config files of Webpack are included in the `webpack` folder.


* `webpack.css.js` the configuration of the rules about CSS
* `webpack.dev.js` the configuration of the rules in the develope mode
* `webpack.html.js` the configuration of the rules about HTML
* `webpack.js.js` the configuration of the rules about JS
* `webpack.mock.js` to mock the data, used via the `webpack.dev.js`
* `webpack.path.js` the configuration of the rules about the base path used in project
* `webpack.vue.js` the configuration of the rules to handle the `Vue component file`

Some the files listed above finally will be imported in the `webpack.config.js` on the root folder.


