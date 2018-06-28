## What is ExpressX?

Over the last couple years I’ve built quite a few applications on top of Express.js.  
Express is a great framework for building Node web apps, but the more I used it, the more I found
myself setting up lots and lots of boilerplate every time.  
  
In an average Express project I would normally have a build setup to take care of styles, transpilation,
frontend bundling, live reloading (which is tough to set up for non-frontend parts of an application), etc.  
But it’s not the only part that needs a lot of boilerplate. Inside of the actual application there’s also a
view engine setup, i18n, body parsing, security, compression, HTTP/2...  
Every time you’re working on an Express app, you need to spend time setting these up. I got really annoyed
doing it over and over again and decided to build something to fix it. And thus, ExpressX was born!

## So what the hell is it?

It’s a build system. Essentially. It is a little bit opinionated, but I believe the opinions are quite reasonable
and it removes a whole lot of headacge when building Express apps. Here’s the full list of things ExpressX
takes care of for you:

### Backend

*   ES6/7/Next (Babel’s ˮstage-3ˮ preset)
*   Flow types handling
*   HTTP/2 support
*   Proper live reload (including server side changes)
*   Body parsing
*   Handlebars setup
*   I18n setup
*   Helmet for security
*   Gzip compression

### Styles

*   SCSS compilation
*   Autoprefixing
*   Minification in production

### Frontend

*   Webpack bundling
*   webpack-dev-middleware support
*   Hot Module Replacement support

### Misc

*   Sweet error reporting from Babel/Webpack/Sass
*   Clean console output
*   SPEED

Wow, that’s quite a few features.

## How it works?

There’s a few stages that happen when you run an app with ExpressX.

*   Babel transpilation runs on your main code
*   Style compilation runs
*   Webpack runs no your frontend code
*   Static assets are copied over to the build directory
*   Static cleanup (we don’t want Sass in public folder)
*   Child process starts
*   Dev file watch starts

### Child process?

Yes, child process 😃. This is what allows live reload when backend code is changed.
The way it’s set up is shamelessly stolen inspired by how Next.js does it. ExpressX starts your app in a
child process that it can watch for crashes and stop/restart when the change happens.

## How to use it?

To get started, install ExpressX module globally, create a new folder and run `expressx init` inside of that folder.
ExpressX will set up a simple project and install the dependencies. After that you can just run ` npm start` and you’re set to go.

### Dependency Injection

There’s one thing you need to keep in mind, which is the way your app is set up in app.js.
It needs to export a function that takes an app argument which is a standard Express app object.

```js
import index from './routes/index';

export default (app) => {
	// "app" is an express application instance
	// Do your setup here
	app.use('/', routes);

	return app; // Important, return "app" in the end
}
```

This is used for setting up all of the Express boilerplate like views, HTTP/2, etc.

## Config

If you want to override some default in ExpressX, you can do so via `expressx.config.js` file in the root of your
application. Here’s the structure of the file:

```js
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
```

This file does not get transpiled, so you need to use `module.exports`.

### Conclusion

Since I built ExpressX, the amount of time I spend on setting things up is pretty much zero which
speeds up total development time quite a bit. If you build Express applications frequently,
I encourage you to try it out. Or you can even [contribute on GitHub](https://github.com/rdev/expressx) if you
want to add/change/fix something.  
  
If you’re interested to know about more of my projects, hit that back button at the top and check out my other projects.  
  
Thanks for your time and have an amazing day!
