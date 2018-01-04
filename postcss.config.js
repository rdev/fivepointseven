const easyImport = require('postcss-easy-import');
const autoprefixer = require('autoprefixer');

module.exports = {
	plugins: [
		easyImport({ prefix: '_' }), // keep this first
		autoprefixer(), // so imports are auto-prefixed too
	],
};
