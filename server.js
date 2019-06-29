require('dotenv').config();
const {
	join,
} = require('path');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const nextjs = require('next');
const {
	socialRedirect,
	contact,
} = require('./lib/telegram');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = nextjs({
	dev,
});
const handle = app.getRequestHandler();

async function startServer() {
	await app.prepare();

	const server = express();

	server.use(helmet());
	// server.use(helmet.contentSecurityPolicy({
	// 	directives: {
	// 		defaultSrc: ["'self'"],
	// 		scriptSrc: [
	// 			"'self'",
	// 			"'unsafe-inline'",
	// 			'www.googletagmanager.com',
	// 			'www.google.com',
	// 			'www.gstatic.com',
	// 			'api.keen.io',
	// 			'githy.com',
	// 			'platform.twitter.com',
	// 		],
	// 		connectSrc: ["'self'", 'www.googletagmanager.com', 'api.keen.io'],
	// 		styleSrc: ["'self'", "'unsafe-inline'"],
	// 	},
	// }));
	server.use(compression());
	server.use(bodyParser.json());
	server.use(bodyParser.urlencoded({
		extended: true,
	}));

	server.use((req, res, next) => {
		res.setHeader('X-Powered-By', 'The Force');
		res.setHeader('X-Why-Would-You-Even-Look-Here', 'No, but for real?');
		next();
	});
	server.use(
		'/static',
		express.static(`${__dirname}/static`, {
			maxAge: '30d',
			immutable: true,
		}),
	);

	server.use('/service-worker.js', (req, res) => {
		const filePath = join(__dirname, '.next/service-worker.js');
		app.serveStatic(req, res, filePath);
	});

	server.get('/_/:social', socialRedirect);
	server.post('/contact', contact);

	server.get('*', (req, res) => handle(req, res));

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
}

startServer();
