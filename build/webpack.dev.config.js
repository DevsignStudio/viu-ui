'use strict'
const merge = require('webpack-merge');
const path = require('path');

const baseWebpackConfig = require('./webpack.base.config');

let webpackConfig = merge(baseWebpackConfig, {
	entry: path.resolve(__dirname, '../dev/main.js'),
	output: {
		filename: 'bundle.js'
	},
	devtool: '#eval-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, '../dev'),
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
        hints: false
    },
	resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
});

module.exports = webpackConfig;
