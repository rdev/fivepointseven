import Router from 'next/router';
import autobind from 'autobind-decorator';
import { sleep, addClass } from '../lib/utils';

@autobind
export default class Links extends React.Component {
	state = {
		active: this.props.active,
	};

	async goToAbout(e) {
		// Do fancy stuff if we have javascript
		e.preventDefault();

		this.setState({
			active: 'about',
		});

		addClass('home-heading', 'heading-push-back');
		addClass('compass', 'compass-push-up');

		await sleep(0.6);
		addClass('about-paragraph', 'home-about-fadein');

		await sleep(1.1);
		Router.push('/about');
	}

	render() {
		const { animated } = this.props;
		return (
			<div className={animated ? 'links links-animated' : 'links'} id="links">
				<a
					id="hello-link"
					style={{ opacity: this.state.active === 'hello' ? 1 : 0.5 }}
					href="/"
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
				>
					work
				</a>
				<a
					id="contact-link"
					style={{ opacity: this.state.active === 'contact' ? 1 : 0.5 }}
					href="/contact"
				>
					contact
				</a>
			</div>
		);
	}
}
