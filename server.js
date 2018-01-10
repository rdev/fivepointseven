const { join } = require('path');
const express = require('express');
const compression = require('compression');
const nextjs = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = nextjs({ dev });
const handle = app.getRequestHandler();

async function startServer() {
	await app.prepare();

	const server = express();

	server.use(compression());
	server.use((req, res, next) => {
		res.setHeader('X-Powered-By', 'The Force');
		res.setHeader('X-Why-Would-You-Look-Here', 'No, but for real?');
		next();
	});

	server.get('/service-worker.js', (req, res) => {
		const filePath = join(__dirname, '.next/service-worker.js');
		app.serveStatic(req, res, filePath);
	});

	server.get('*', (req, res) => handle(req, res));

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
}

startServer();
