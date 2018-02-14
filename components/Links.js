// @flow
import * as React from 'react';
import Router from 'next/router';
import autobind from 'autobind-decorator';
import initServiceWorker from '../lib/service-worker';
import { sleep, addClass } from '../lib/utils';
import Keen from '../lib/keen';
import { greeting, log } from '../lib/log';

Router.onAppUpdated = (nextUrl) => {
	// persist the local state
	window.location.href = nextUrl;
};

@autobind
export default class Links extends React.Component<LinksProps, LinksState> {
	state = {
		active: this.props.active,
		linksClass: this.props.active === 'hello' ? 'links hidden' : 'links',
	};

	componentWillMount() {
		this.setLinksClass();
	}

	componentDidMount() {
		Router.prefetch('/about');
		Router.prefetch('/work');
		Router.prefetch('/contact');

		// This component exists on every page, so let's sneak some global things into it
		greeting();

		// Let's get to service worker goodness
		initServiceWorker();

		Keen.recordEvent('pageviews');
	}

	setLinksClass() {
		const { pathname, query } = this.props;

		this.setState({
			linksClass:
				pathname && query && !query.nospin && !query.noLinksAnimation
					? 'links links-animated'
					: 'links',
		});
	}

	async goToAbout(e: SyntheticEvent<*>) {
		e.preventDefault();
		log('Moving you to "About" page...');

		this.setState({
			active: 'about',
		});

		Keen.recordEvent('page-transitions', {
			from: Router.pathname,
			to: '/about',
		});

		switch (Router.pathname) {
			case '/':
				addClass('home-heading', 'push-back');
				addClass('compass', 'compass-push-home-about');

				await sleep(1);

				Router.push('/about');
				break;
			case '/contact':
				addClass('contact-form', 'push-back');
				addClass('contact-checkmark', 'push-back');
				addClass('compass', 'compass-push-contact-about');

				await sleep(0.7);

				Router.push('/about');
				break;
			case '/work':
				addClass('work-box', 'push-back');
				addClass('compass', 'compass-fade-in');

				await sleep(0.8);

				Router.push('/about');
				break;
			default:
				break;
		}
	}

	async goToWork(e: SyntheticEvent<*>) {
		e.preventDefault();
		log('Moving you to "Work" page...');

		this.setState({
			active: 'work',
		});

		Keen.recordEvent('page-transitions', {
			from: Router.pathname,
			to: '/work',
		});

		switch (Router.pathname) {
			case '/':
				addClass('home-welcome', 'fade-out');

				await sleep(0.6);

				Router.push('/work');
				break;
			case '/about':
				addClass('about-wrapper', 'leaving');
				addClass('about-paragraph', 'push-back');
				addClass('compass', 'fade-out');

				await sleep(0.6);

				Router.push('/work');
				break;
			case '/contact':
				addClass('contact-form', 'push-back');
				addClass('contact-checkmark', 'push-back');
				addClass('compass', 'fade-out');

				await sleep(0.6);

				Router.push('/work');
				break;
			default:
				break;
		}
	}

	async goToContact(e: SyntheticEvent<*>) {
		e.preventDefault();
		log('Moving you to "Contact" page...');

		this.setState({
			active: 'contact',
		});

		Keen.recordEvent('page-transitions', {
			from: Router.pathname,
			to: '/contact',
		});

		switch (Router.pathname) {
			case '/':
				addClass('home-heading', 'push-back');
				addClass('compass', 'compass-push-home-contact');

				await sleep(0.8);

				Router.push('/contact');
				break;
			case '/about':
				addClass('about-wrapper', 'leaving');
				addClass('about-paragraph', 'push-back');
				addClass('compass', 'compass-push-about-contact');

				await sleep(0.8);

				Router.push('/contact');
				break;
			case '/work':
				addClass('work-box', 'push-back');
				addClass('compass', 'compass-push-work-contact');

				await sleep(0.7);

				Router.push('/contact');
				break;
			default:
				break;
		}
	}

	async goToMain(e: SyntheticEvent<*>) {
		e.preventDefault();
		log('Moving you to home page...');

		this.setState({
			active: 'hello',
		});

		Keen.recordEvent('page-transitions', {
			from: Router.pathname,
			to: '/about',
		});

		switch (Router.pathname) {
			case '/about':
				addClass('about-wrapper', 'leaving');
				addClass('about-paragraph', 'push-back');
				addClass('compass', 'compass-push-about-home');

				await sleep(1.2);

				Router.push({ pathname: '/', query: { nospin: true } }, { pathname: '/' });
				break;
			case '/work':
				addClass('work-box', 'push-back');

				await sleep(0.8);

				Router.push(
					{ pathname: '/', query: { noLinksAnimation: true } },
					{ pathname: '/' },
				);
				break;
			case '/contact':
				addClass('compass', 'compass-push-contact-home');
				addClass('contact-form', 'push-back');
				addClass('contact-checkmark', 'push-back');

				await sleep(1.2);

				Router.push({ pathname: '/', query: { nospin: true } }, { pathname: '/' });
				break;
			default:
				break;
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="navigation">
					<div className={this.state.linksClass} id="links">
						<a
							id="hello-link"
							style={{ opacity: this.state.active === 'hello' ? 1 : 0.5 }}
							href="/"
							onClick={this.goToMain}
						>
							hello
						</a>
						<a
							id="about-link"
							style={{ opacity: this.state.active === 'about' ? 1 : 0.5 }}
							href="/about"
							onClick={this.goToAbout}
						>
							about
						</a>
						<a
							id="work-link"
							style={{ opacity: this.state.active === 'work' ? 1 : 0.5 }}
							href="/work"
							onClick={this.goToWork}
						>
							work
						</a>
						<a
							id="contact-link"
							style={{ opacity: this.state.active === 'contact' ? 1 : 0.5 }}
							href="/contact"
							onClick={this.goToContact}
						>
							contact
						</a>
					</div>
				</div>
				<div className="no-grid home-heading">
					<div className="home-heading home-heading-animated">
						<h1>Psst. Mate. Your browser is pretty old.</h1>
						<h2>
							There{"'"}s nothing wrong with that of course, but this website is built
							using new and shiny technologies.
							<br />
							<br />
							Please{' '}
							<a
								href="https://browsehappy.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								update
							</a>{' '}
							your browser to enjoy sweet experience.
						</h2>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
