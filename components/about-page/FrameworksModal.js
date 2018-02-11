// @flow
import * as React from 'react';
import autobind from 'autobind-decorator';
import Keen from '../../lib/keen';
import { sleep, addClass, removeClass } from '../../lib/utils';
import { log } from '../../lib/log';
import frameworks from '../../lib/frameworks-and-tools';

@autobind
export default class FrameworksModal extends React.Component<{}, FrameworksState> {
	static async closeModal() {
		log('Getting rid of the modal and bringing back the paragraph...');
		addClass('frameworks-modal', 'frameworks-modal-out');

		await sleep(0.1);
		addClass('about-container', 'unfold-paragraph');

		await sleep(1);
		log('Killing unnecessary classes...');
		removeClass('frameworks-modal', 'frameworks-modal-in');
		removeClass('frameworks-modal', 'frameworks-modal-out');
		removeClass('about-container', 'fold-paragraph');
		removeClass('about-container', 'unfold-paragraph');
	}

	state = {
		selectedItem: 'react',
	};

	async selectItem(selectedItem: string) {
		log(`Changing the item to ${selectedItem} with some sweet animations!`);
		addClass('framework-info', 'framework-selection-progress');

		await sleep(0.3);
		this.setState({ selectedItem }); // No need to trippledot the only item

		await sleep(0.4);
		removeClass('framework-info', 'framework-selection-progress');

		Keen.recordEvent('framework_selected', {
			name: selectedItem,
		});
	}

	render() {
		return (
			<div className="frameworks-modal" id="frameworks-modal">
				<div className="frameworks-modal-left-pane">
					<h2>the things i know</h2>

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
