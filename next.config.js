const path = require('path');
const glob = require('glob');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
	poweredByHeader: false,
	webpack: (config) => {
		config.module.rules.push(
			{
				test: /\.(css|scss)/,
				loader: 'emit-file-loader',
				options: {
					name: 'dist/[path][name].[ext]',
				},
			},
			{
				test: /\.css$/,
				use: ['babel-loader', 'raw-loader', 'postcss-loader'],
			},
			{
				test: /\.s(a|c)ss$/,
				use: [
					'babel-loader',
					'raw-loader',
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							includePaths: ['styles', 'node_modules']
								.map(d => path.join(__dirname, d))
								.map(g => glob.sync(g))
								.reduce((a, c) => a.concat(c), []),
						},
					},
				],
			},
		);

		config.plugins.push(new SWPrecacheWebpackPlugin({
			verbose: true,
			staticFileGlobsIgnorePatterns: [/\.next\//],
			staticFileGlobs: ['static/**/**.*'],
			runtimeCaching: [
				{
					handler: 'cacheFirst',
					urlPattern: /^https?.*/,
				},
			],
			dynamicUrlToDependencies: {
				'/': ['pages/index.js'],
				'/about': ['pages/about.js'],
			},
		}));

		return config;
	},
};
