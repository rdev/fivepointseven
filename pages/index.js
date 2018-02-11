// @flow
import * as React from 'react';
import Router from 'next/router';
import HomeWelcome from '../components/home-page/HomeWelcome';
import Page from '../components/Page';
import Links from '../components/Links';
import { log } from '../lib/log';
import Keen from '../lib/keen';

export default class MainPage extends React.Component<{}, IndexState> {
	state = {
		disableSpin: false,
	};

	componentDidMount() {
		log("Let's spin the compass (or not)");
		this.setSpin();

		if (Router.query.bc === '') {
			Keen.recordEvent('bc_pageview');
		}
	}

	setSpin() {
		this.setState({
			disableSpin: Router.query.nospin,
		});
	}

	render() {
		const noscriptContent = `
			<style>
				.compass,
				.home-heading,
				.links {
					transform: rotateY(0deg) scale(1);
					opacity: 1;
				}

				.links.hidden {
					display: flex;
				}
			</style>`;

		return (
			<Page noscriptContent={noscriptContent}>
				<div className="home-container">
					<HomeWelcome animated={!this.state.disableSpin} />
					<Links active="hello" />
				</div>
			</Page>
		);
	}
}
