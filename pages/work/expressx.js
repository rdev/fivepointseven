// @flow
import * as React from 'react';
import Highlight from 'react-highlight';
import { stripIndent } from 'common-tags';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';

const project = portfolioItems.find(item => item.slug === 'expressx');

export default () => (
	<CaseStudy project={project}>
		<section>
			<h2>What is ExpressX?</h2>
			<p>
				Over the last couple years I’ve built quite a few applications on top of Express.js.
				<br />
				Express is a great framework for building Node web apps, but the more I used it, the
				more I found myself setting up lots and lots of boilerplate every time.
				<br />
				<br />
				In an average Express project I would normally have a build setup to take care of
				styles, transpilation, frontend bundling, live reloading (which is tough to set up
				for non-frontend parts of an application), etc.
				<br />
				But it’s not the only part that needs a lot of boilerplate. Inside of the actual
				application there’s also a view engine setup, i18n, body parsing, security,
				compression, HTTP/2...
				<br />
				Every time you’re working on an Express app, you need to spend time setting these
				up. I got really annoyed doing it over and over again and decided to build something
				to fix it. And thus, ExpressX was born!
			</p>
		</section>
		<section>
			<h2>So what the hell is it?</h2>
			<p>
				It’s a build system. Essentially. It is a little bit opinionated, but I believe the
				opinions are quite reasonable and it removes a whole lot of headacge when building
				Express apps. Here’s the full list of things ExpressX takes care of for you:
				<h3>Backend</h3>
				<ul>
					<li>ES6/7/Next (Babel’s ˮstage-3ˮ preset)</li>
					<li>Flow types handling</li>
					<li>HTTP/2 support</li>
					<li>Proper live reload (including server side changes)</li>
					<li>Body parsing</li>
					<li>Handlebars setup</li>
					<li>I18n setup</li>
					<li>Helmet for security</li>
					<li>Gzip compression</li>
				</ul>
				<h3>Styles</h3>
				<ul>
					<li>SCSS compilation</li>
					<li>Autoprefixing</li>
					<li>Minification in production</li>
				</ul>
				<h3>Frontend</h3>
				<ul>
					<li>Webpack bundling</li>
					<li>webpack-dev-middleware support</li>
					<li>Hot Module Replacement support</li>
				</ul>
				<h3>Misc</h3>
				<ul>
					<li>Sweet error reporting from Babel/Webpack/Sass</li>
					<li>Clean console output</li>
					<li>SPEED</li>
				</ul>
				Wow, that’s quite a few features.
			</p>
		</section>
		<section>
			<h2>How it works?</h2>
			<p>There’s a few stages that happen when you run an app with ExpressX.</p>
			<ul>
				<li>Babel transpilation runs on your main code</li>
				<li>Style compilation runs</li>
				<li>Webpack runs no your frontend code</li>
				<li>Static assets are copied over to the build directory</li>
				<li>Static cleanup (we don’t want Sass in public folder)</li>
				<li>Child process starts</li>
				<li>Dev file watch starts</li>
			</ul>
			<section>
				<h3>Child process?</h3>
				<p>
					Yes, child process{' '}
					<span role="img" aria-label="smile">
						😃
					</span>. This is what allows live reload when backend code is changed. The way
					it’s set up is{' '}
					<span style={{ opacity: 0.3, textDecoration: 'line-through' }}>
						shamelessly stolen
					</span>{' '}
					inspired by how Next.js does it. ExpressX starts your app in a child process
					that it can watch for crashes and stop/restart when the change happens.
				</p>
			</section>
		</section>
		<section>
			<h2>How to use it?</h2>
			<p>
				To get started, install ExpressX module globally, create a new folder and run `
				<span className="pre">expressx init</span>` inside of that folder. ExpressX will set
				up a simple project and install the dependencies. After that you can just run `
				<span className="pre">npm start</span>` and you’re set to go.
			</p>
			<section>
				<h3>Dependency Injection</h3>
				<p>
					There’s one thing you need to keep in mind, which is the way your app is set up
					in <span className="pre">app.js</span>. It needs to export a function that takes
					an <span className="pre">app</span> argument which is a standard Express app
					object.
				</p>
				<Highlight className="js">
					{stripIndent`
					import index from './routes/index';

					export default (app) => {
						// "app" is an express application instance
						// Do your setup here
						app.use('/', routes);

						return app; // Important, return "app" in the end
					}
					`}
				</Highlight>
				<p>
					This is used for setting up all of the Express boilerplate like views, HTTP/2,
					etc.
				</p>
			</section>
		</section>
		<section>
			<h2>Config</h2>
			<p>
				If you want to override some default in ExpressX, you can do so via{' '}
				<span className="pre">expressx.config.js</span> file in the root of your
				application. Here’s the structure of the file:
			</p>
			<Highlight className="js">
				{stripIndent`
					module.exports = {
						babel: {
							ignore: [],
							sourceMaps: 'inline',
							presets: 'expressx/babel/server',
						},
						http2: false, // { key, cert }
						port: 3000,
						poweredByHeader: 'ExpressX', // string | false
						errorHandling: true,
						i18n: {
							locales: ['en'],
							cookie: 'locale',
							path: 'locales',
							objectNotation: true,
						},
						hbs: {
							views: 'views',
							partials: 'views/partials',
							layouts: 'views/layouts',
							defaultLayout: 'views/layouts/default',
						},
						staticFolder: 'public',
						autoprefixer: {
							grid: true,
						},
						helmet: null, // helmet.js options
						styles: ['public/styles/styles.scss'],
						stylesOut: 'public/css',
						webpackMode: 'direct', // "direct" | "middleware"
						webpack: config => config,
						webpackDevMiddleware: {
							publicPath: '/js/',
						},
						disableWebpack: false,
						watchmanIgnore: [],
						debugPort: 5858,
					}
					`}
			</Highlight>
			<p>
				This file does not get transpiled, so you need to use{' '}
				<span className="pre">module.exports</span>
			</p>
		</section>
		<section>
			<h3>Conclusion</h3>
			<p>
				Since I built ExpressX, the amount of time I spend on setting things up is pretty
				much zero which speeds up total development time quite a bit. If you build Express
				applications frequently, I encourage you to try it out. Or you can even{' '}
				<a
					href="https://github.com/rdev/expressx"
					target="_blank"
					rel="noopener noreferrer"
				>
					contribute on GitHub
				</a>{' '}
				if you want to add/change/fix something.
				<br />
				<br />
				If you’re interested to know about more of my projects, hit that back button at the
				top and check out my other projects.
				<br />
				<br />
				Thanks for your time and have an amazing day!
			</p>
		</section>
	</CaseStudy>
);
