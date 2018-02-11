// @flow
import * as React from 'react';
import Router from 'next/router';
import { addClass, sleep } from '../../lib/utils';
import { log } from '../../lib/log';

export default class BackButton extends React.Component<{}, BackButtonState> {
	static async goBack(e: SyntheticEvent<*>) {
		e.preventDefault();
		log('Taking you back...');

		addClass('case-study', 'fade-out');
		await sleep(0.6);
		Router.push('/work');
	}

	state = {
		scrolledPastHeader: false,
	};

	componentDidMount() {
		log("Let's prefetch /work for when you go back and init scrollspy");
		Router.prefetch('/work');
		this.scrollspy();
	}

	componentWillUnmount() {
		cancelAnimationFrame(this.scrollSpyID);
	}

	scrollSpyID: AnimationFrameID;

	scrollspy() {
		const threshold = window.innerHeight - 30;

		this.scrollSpyID = requestAnimationFrame(() => {
			if (window.scrollY > threshold && !this.state.scrolledPastHeader) {
				this.setState({
					scrolledPastHeader: true,
				});
			}
			if (window.scrollY < threshold && this.state.scrolledPastHeader) {
				this.setState({
					scrolledPastHeader: false,
				});
			}

			this.scrollspy();
		});
	}

	render() {
		const className = this.state.scrolledPastHeader
			? 'case-study-back-button past-header'
			: 'case-study-back-button';

		return (
			<a href="/work" onClick={BackButton.goBack} className={className}>
				<svg width="36px" height="68px" viewBox="0 0 36 68">
					<g
						stroke="none"
						strokeWidth="1"
						fill="none"
						fillRule="evenodd"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<polyline
							strokeWidth="4"
							points="34.017582 2.06141368 2.12992569 33.94907 34.0257751 65.8449194"
						/>
					</g>
				</svg>
			</a>
		);
	}
}
