// @flow
import * as React from 'react';
import Router from 'next/router';
import HomeWelcome from '../components/home-page/HomeWelcome';
import Page from '../components/Page';
import Links from '../components/Links';
import { log } from '../lib/log';
import Keen from '../lib/keen';

export default class MainPage extends React.Component<IndexProps, IndexState> {
	static async getInitialProps({ pathname, query }: IndexProps) {
		return { pathname, query };
	}

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
			</style>`;

		const { pathname, query } = this.props;

		return (
			<Page noscriptContent={noscriptContent}>
				<div className="home-container">
					<HomeWelcome animated={!this.state.disableSpin} />
					<Links active="hello" pathname={pathname} query={query} />
				</div>
			</Page>
		);
	}
}
