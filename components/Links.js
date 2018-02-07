import Router from 'next/router';
import autobind from 'autobind-decorator';
import { sleep, addClass } from '../lib/utils';
import Keen from '../lib/keen';
import { greeting } from '../lib/log';

Router.onAppUpdated = (nextUrl) => {
	// persist the local state
	window.location.href = nextUrl;
};

@autobind
export default class Links extends React.Component {
	state = {
		active: this.props.active,
		linksClass: this.props.active === 'hello' ? 'links hidden' : 'links',
		logoAnimation: false,
	};

	componentDidMount() {
		Router.prefetch('/about');
		Router.prefetch('/work');
		Router.prefetch('/contact');
		this.setLinksClass();

		// This component exists on every page, so let's sneak some global things into it
		greeting();

		const isSafari = !!navigator.userAgent.match(/Version\/[\d.]+.*Safari/);
		const isIPhone = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

		if (isSafari && isIPhone) {
			document.querySelector("div[class*='container']").style.height = '80vh';

			if (Router.pathname === '/about') {
				document.getElementById('frameworks-modal').style.height = '70vh';
			}

			if (Router.pathname === '/work') {
				document.getElementById('work-box').style.height = '62vh';
			}
		}

		Keen.recordEvent('pageviews', {});
	}

	setLinksClass() {
		this.setState({
			...this.state,
			linksClass:
				Router.pathname === '/' && !Router.query.nospin && !Router.query.noLinksAnimation
					? 'links links-animated'
					: 'links',
		});
	}

	async goToAbout(e) {
		e.preventDefault();

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

	async goToWork(e) {
		e.preventDefault();

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
				addClass('compass', 'fade-out');

				await sleep(0.6);

				Router.push('/work');
				break;
			default:
				break;
		}
	}

	async goToContact(e) {
		e.preventDefault();

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

	async goToMain(e) {
		e.preventDefault();

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

				await sleep(1.2);

				Router.push({ pathname: '/', query: { nospin: true } }, { pathname: '/' });
				break;
			default:
				break;
		}
	}

	render() {
		return (
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
		);
	}
}
