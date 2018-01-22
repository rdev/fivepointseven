import Head from 'next/head';
import Router from 'next/router';
import initServiceWorker from '../lib/service-worker';
import HomeWelcome from '../components/home-page/HomeWelcome';
import Links from '../components/Links';
import stylesheet from '../styles/styles.scss';

export default class MainPage extends React.Component {
	state = {
		disableSpin: false,
	};

	async componentDidMount() {
		this.setSpin();

		// Let's get to service worker goodness
		initServiceWorker();
	}

	setSpin() {
		this.setState({
			disableSpin: Router.query.nospin,
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
					<HomeWelcome animated={!this.state.disableSpin} />
					<Links active="hello" />
				</div>
			</div>
		);
	}
}
