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
				'/': [
					'pages/index.js',
					'components/home-page/HomeWelcome.js',
					'components/Links.js',
					'components/Page.js',
				],
				'/about': [
					'pages/about.js',
					'components/about-page/AboutParagraph.js',
					'components/about-page/FrameworksModal.js',
					'components/Links.js',
					'components/Logo.js',
					'components/Page.js',
				],
				'/work': [
					'pages/work.js',
					'components/work-page/ProjectBrief.js',
					'components/work-page/ProjectList.js',
					'components/Links.js',
					'components/Page.js',
				],
				'/contact': [
					'pages/contact.js',
					'components/contact-page/ContactForm.js',
					'components/contact-page/ErrorMessage.js',
					'components/Links.js',
					'components/Logo.js',
					'components/Page.js',
				],
				'/work/my-website': [
					'pages/work/my-website.js',
					'components/case-study/CaseStudy.js',
					'components/case-study/CaseStudyHeader.js',
					'components/case-study/BackButton.js',
					'components/case-study/NightModeToggle.js',
				],
				'/work/convertable': [
					'pages/work/convertable.js',
					'components/case-study/CaseStudy.js',
					'components/case-study/CaseStudyHeader.js',
					'components/case-study/BackButton.js',
					'components/case-study/NightModeToggle.js',
				],
				'/work/storehub-website': [
					'pages/work/storehub-website.js',
					'components/case-study/CaseStudy.js',
					'components/case-study/CaseStudyHeader.js',
					'components/case-study/BackButton.js',
					'components/case-study/NightModeToggle.js',
				],
				'/work/storehub-display': [
					'pages/work/storehub-display.js',
					'components/case-study/CaseStudy.js',
					'components/case-study/CaseStudyHeader.js',
					'components/case-study/BackButton.js',
					'components/case-study/NightModeToggle.js',
				],
				'/work/sandstone': [
					'pages/work/sandstone.js',
					'components/case-study/CaseStudy.js',
					'components/case-study/CaseStudyHeader.js',
					'components/case-study/BackButton.js',
					'components/case-study/NightModeToggle.js',
				],
				'/work/myplate': [
					'pages/work/myplate.js',
					'components/case-study/CaseStudy.js',
					'components/case-study/CaseStudyHeader.js',
					'components/case-study/BackButton.js',
					'components/case-study/NightModeToggle.js',
				],
				'/work/mindway': [
					'pages/work/mindway.js',
					'components/case-study/CaseStudy.js',
					'components/case-study/CaseStudyHeader.js',
					'components/case-study/BackButton.js',
					'components/case-study/NightModeToggle.js',
				],
			},
		}));

		return config;
	},
};
