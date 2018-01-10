import Head from 'next/head';
import Router from 'next/router';
import { sleep } from '../lib/utils';
import { greeting, log } from '../lib/log';
import initServiceWorker from '../lib/service-worker';
import HomeWelcome from '../components/HomeWelcome';
import Links from '../components/Links';
import AboutParagraph from '../components/AboutParagraph';
import stylesheet from '../styles/styles.scss';

export default class MainPage extends React.Component {
	state = {
		animationDone: false,
	};

	async componentDidMount() {
		greeting();
		Router.prefetch('/about');

		// Let's get to service worker goodness
		initServiceWorker();

		this.waitForAnimations();
	}

	async waitForAnimations() {
		await sleep(1);
		this.setState({
			animationDone: true,
		});
	}

	render() {
		return (
			<div>
				<Head>
					<title>Max Rovensky</title>
					<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
					<noscript
						dangerouslySetInnerHTML={{
							// This website is gonna fucking work with javascript off
							__html: `
								<style>
									.compass,
									.home-heading,
									.links {
										transform: rotateY(0deg) scale(1);
										opacity: 1;
									}
								</style>
							`,
						}}
					/>
				</Head>
				<div className="home-container">
					<HomeWelcome animated />
					<Links active="hello" animated={!this.state.animationDone} />
					<AboutParagraph />
				</div>
			</div>
		);
	}
}
