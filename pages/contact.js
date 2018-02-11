// @flow
import * as React from 'react';
import autobind from 'autobind-decorator';
import Page from '../components/Page';
import Links from '../components/Links';
import Logo from '../components/Logo';
import ContactForm from '../components/contact-page/ContactForm';
import { log } from '../lib/log';

@autobind
export default class ContactPage extends React.Component<{}, ContactState> {
	state = { success: false };

	setSuccess(success: boolean) {
		log('Yay, we good!');
		this.setState({ success });
	}

	render() {
		return (
			<Page title="Contact">
				<div className="contact-container" id="contact-container">
					<Logo />
					<ContactForm setSuccess={this.setSuccess} />

					<div
						className={`form-success-checkmark ${
							this.state.success ? 'contact-checkmark-fade-in' : ''
						}`}
					>
						<img src="/static/form-success.svg" alt="form-success" />
					</div>

					<Links active="contact" />
				</div>
			</Page>
		);
	}
}
