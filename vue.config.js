const fs = require('fs');
const path = require('path');
const webpack = require('webpack'); // Add this line

module.exports = {
	// other configurations...
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					NODE_OPTIONS: JSON.stringify(process.env.NODE_OPTIONS),
				},
			}),
		],
	},
};
