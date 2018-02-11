// @flow
import * as React from 'react';
import { log } from '../../lib/log';

// @TODO Make all this animation timing bullshit nicer
export default class ErrorMessage extends React.Component<ErrorProps, ErrorState> {
	state = { visible: false };

	componentWillReceiveProps(nextProps: ErrorProps) {
		if (nextProps.message) {
			this.setState({ visible: true, hiding: false }, this.hideMessage.bind(this));
		}
	}

	hideMessage() {
		setTimeout(() => {
			log("You should've read it by now, imma hide it.");
			this.setState({ hiding: true, visible: false }, () => this.reset());
		}, 6000);
	}

	reset() {
		log('Resetting error message...');
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
