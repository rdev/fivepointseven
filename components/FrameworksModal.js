import autobind from 'autobind-decorator';
import { sleep, addClass, removeClass } from '../lib/utils';
import frameworks from '../lib/frameworks-and-tools';

@autobind
export default class FrameworksModal extends React.Component {
	static async closeModal() {
		addClass('frameworks-modal', 'frameworks-modal-out');

		await sleep(0.1);
		addClass('about-container', 'unfold-paragraph');

		await sleep(1);
		removeClass('frameworks-modal', 'frameworks-modal-in');
		removeClass('frameworks-modal', 'frameworks-modal-out');
		removeClass('about-container', 'fold-paragraph');
		removeClass('about-container', 'unfold-paragraph');
	}

	state = {
		selectedItem: 'react',
	};

	async selectItem(selectedItem) {
		addClass('framework-info', 'framework-selection-progress');

		await sleep(0.3);
		this.setState({ selectedItem }); // No need to trippledot the only item

		await sleep(0.4);
		removeClass('framework-info', 'framework-selection-progress');
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
				<button className="modal-close" onClick={FrameworksModal.closeModal}>
					<img src="/static/close.svg" alt="" />
				</button>
			</div>
		);
	}
}
