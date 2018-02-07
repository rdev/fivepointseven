import Router from 'next/router';
import { addClass, sleep } from '../../lib/utils';

export default class BackButton extends React.Component {
	static async goBack(e) {
		e.preventDefault();

		addClass('case-study', 'fade-out');
		await sleep(0.6);
		Router.push('/work');
	}

	state = {
		scrolledPastHeader: false,
	};

	componentDidMount() {
		Router.prefetch('/work');
		this.scrollspy();
	}

	scrollspy() {
		const threshold = window.innerHeight - 30;

		requestAnimationFrame(() => {
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
