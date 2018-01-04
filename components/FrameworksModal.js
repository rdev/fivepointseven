import autobind from 'autobind-decorator';
import { TweenMax, Power2, TimelineMax } from 'gsap';
import { sleep } from '../lib/utils';

const frameworks = [
	'react',
	'express.js',
	'next.js',
	'react native',
	'electron',
	'sandstone.js',
	'redux',
	'mobx',
	'graphql',
	'docker',
	'kdm',
	'google cloud platform',
	'amazon web services',
	'sass/stylus',
	'solidity',
];

@autobind
export default class FrameworksModal extends React.Component {
	async closeModal() {
		this.timeline = new TimelineMax({ duration: 1 })
			.add(TweenMax.to('#frameworks-modal', 1, {
				scale: 1.1,
				force3D: true,
				ease: Power2.easeInOut,
			}), 0)
			.add(TweenMax.to('#frameworks-modal', 0.8, {
				opacity: 0,
				force3D: true,
				ease: Power2.easeInOut,
			}), 0.2)
			.add(TweenMax.to('#about-container', 1, {
				opacity: 1,
				scale: 1,
				force3D: true,
				ease: Power2.easeInOut,
			}), 0);

		await sleep(1);
		document.getElementById('frameworks-modal').style.display = 'none';
	}

	render() {
		return (
			<div className="frameworks-modal" id="frameworks-modal">
				<div className="frameworks-modal-left-pane">
					<img src="/static/frameworks-header.svg" alt="" className="frameworks-header" />
					{
						frameworks.map((item) => {
							const path = item.replace(/ /g, '-').replace(/\//g, '-').replace('.js', '');
							return (
								<div>
									<a href={`/frameworks/${path}`}>
										<img src={`/static/frameworks/${path}.svg`} alt="" />
									</a>
									<br />
									<br />
								</div>
							);
						})
					}
					<div className="modal-pane-gradient" />
				</div>
				<div />
				<button className="modal-close" onClick={this.closeModal}>
					<img src="/static/close.svg" alt="" />
				</button>
			</div>
		);
	}
}
