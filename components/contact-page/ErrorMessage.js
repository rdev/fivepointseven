import { setTimeout } from 'timers';

// @TODO Make all this animation timing bullshit nicer
export default class ErrorMessage extends React.Component {
	state = { visible: false };

	componentWillReceiveProps(nextProps) {
		if (nextProps.message) {
			this.setState({ visible: true, hiding: false }, this.hideMessage.bind(this));
		}
	}

	hideMessage() {
		setTimeout(() => {
			this.setState({ hiding: true, visible: false }, this.reset.bind(this));
		}, 6000);
	}

	reset() {
		setTimeout(() => this.setState({ visible: false, hiding: false }), 600);
	}

	render() {
		let errorClass = 'error-message';

		if (this.state.visible) {
			errorClass = 'error-message visible';
		} else if (this.state.hiding) {
			errorClass = 'error-message hiding';
		}

		return <span className={errorClass}>{this.props.message}</span>;
	}
}
