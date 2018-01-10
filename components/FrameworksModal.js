import autobind from 'autobind-decorator';
import { TweenMax, Power2, TimelineMax } from 'gsap';
import 'gsap/ScrollToPlugin';
import { sleep } from '../lib/utils';
import frameworks from '../lib/frameworks-and-tools';

@autobind
export default class FrameworksModal extends React.Component {
	state = {
		selectedItem: 'react',
	};

	async selectItem(selectedItem) {
		// Okay, so what we're doing here is bullshitting the user into thinking
		// they're getting a new element, when in reality we're applying the old
		// motion design trick I love with applying transforms to an element with 0 opacity.
		// Only here we're gonna apply transforms AND change the content while it's hidden
		this.timeline = new TimelineMax({ duration: 1 })
			.add(TweenMax.to('#framework-info', 0.3, {
				scale: 0.8,
				opacity: 0,
				force3D: true,
				ease: Power2.easeIn,
			}))
			.add(TweenMax.to('#framework-info', 0.01, {
				// Good old motion design hidden frame switch trick
				scale: 1.2,
				force3D: true,
			}))
			.add(
				TweenMax.to('#framework-link', 0.3, {
					// Good old motion design hidden frame switch trick
					opacity: 0,
					x: -10,
					force3D: true,
					ease: Power2.easeIn,
				}),
				0,
			);

		await sleep(0.4);

		// No need to trippledot the only item
		this.setState({ selectedItem }, () => {
			this.timeline
				.add(TweenMax.to('#framework-info', 0.4, {
					scale: 1,
					opacity: 1,
					force3D: true,
					ease: Power2.easeOut,
				}))
				.add(
					TweenMax.to('#framework-link', 0.4, {
						opacity: 1,
						x: 0,
						force3D: true,
						ease: Power2.easeOut,
					}),
					0.5,
				);
		});
	}

	async closeModal() {
		this.timeline = new TimelineMax({ duration: 1 })
			.add(
				TweenMax.to('#frameworks-modal', 1, {
					scale: 1.1,
					force3D: true,
					ease: Power2.easeOut,
				}),
				0,
			)
			.add(
				TweenMax.to('#frameworks-modal', 0.8, {
					opacity: 0,
					force3D: true,
					ease: Power2.easeOut,
				}),
				0.2,
			)
			.add(
				TweenMax.to('#about-container', 1, {
					opacity: 1,
					scale: 1,
					force3D: true,
					ease: Power2.easeOut,
				}),
				0,
			);

		await sleep(1);
		document.getElementById('frameworks-modal').style.display = 'none';
	}

	render() {
		return (
			<div className="frameworks-modal" id="frameworks-modal">
				<div className="frameworks-modal-left-pane">
					<h2>frameworks and tools</h2>

					{Object.keys(frameworks).map(item => (
						<div key={item}>
							<a
								href={`/frameworks/${item}`}
								className={
									item === this.state.selectedItem
										? 'framework selected'
										: 'framework'
								}
								onClick={(e) => {
									e.preventDefault();
									this.selectItem(item);
								}}
							>
								{item} {frameworks[item].mine ? <span>i built it</span> : null}
							</a>
							<br />
							<br />
						</div>
					))}

					<div className="modal-pane-gradient" />
				</div>
				<div className="frameworks-modal-right-pane">
					<div className="framework-info" id="framework-info">
						<h2>{this.state.selectedItem}</h2>
						<p>{frameworks[this.state.selectedItem].info}</p>
						<a
							href={frameworks[this.state.selectedItem].link}
							target="_blank"
							id="framework-link"
						>
							link {'>'}
						</a>
					</div>
				</div>
				<button className="modal-close" onClick={this.closeModal}>
					<img src="/static/close.svg" alt="" />
				</button>
			</div>
		);
	}
}
