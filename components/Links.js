import Router from 'next/router';
import { TweenMax, Power2, TimelineMax } from 'gsap';
import autobind from 'autobind-decorator';
import { sleep } from '../lib/utils';

@autobind
export default class Links extends React.Component {
	static async goToAbout(e) {
		// Do fancy stuff if we have javascript
		e.preventDefault();

		document.getElementById('home-heading').classList.add('heading-push-back');
		document.getElementById('compass').classList.add('compass-push-up');
		await sleep(0.6);
		document.getElementById('about-paragraph').classList.add('home-about-fadein');
		await sleep(1.1);

		Router.push('/about');
	}

	render() {
		const { animated } = this.props;
		return (
			<div className={animated ? 'links links-animated' : 'links'} id="links">
				<a
					id="hello-link"
					style={{ opacity: this.props.active === 'hello' ? 1 : 0.5 }}
					href="/"
				>
					hello
				</a>
				<a
					id="about-link"
					style={{ opacity: this.props.active === 'about' ? 1 : 0.5 }}
					href="/about"
					onClick={Links.goToAbout}
				>
					about
				</a>
				<a
					id="work-link"
					style={{ opacity: this.props.active === 'work' ? 1 : 0.5 }}
					href="/work"
				>
					work
				</a>
				<a
					id="contact-link"
					style={{ opacity: this.props.active === 'contact' ? 1 : 0.5 }}
					href="/contact"
				>
					contact
				</a>
			</div>
		);
	}
}
