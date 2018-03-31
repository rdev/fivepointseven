// @flow
import * as React from 'react';
import Head from 'next/head';
import autobind from 'autobind-decorator';
import contactValidation from '../../lib/contact-validation';
import { log } from '../../lib/log';
import Keen from '../../lib/keen';
import ErrorMessage from './ErrorMessage';

@autobind
export default class ContactForm extends React.Component<FormProps, FormState> {
	static logSocialLink(name: string) {
		Keen.recordEvent('social_link', {
			name,
		});
	}

	state = { errorTypes: [], errorMessages: {}, submitError: null };

	email: ?HTMLInputElement;
	message: ?HTMLTextAreaElement;

	async handleSubmit(e: SyntheticEvent<*>) {
		e.preventDefault();
		log("Let's validate all your stuff first.");

		const email = this.email ? this.email.value : '';
		const message = this.message ? this.message.value : '';

		const contactErrors = contactValidation({ email, message });

		if (contactErrors.length === 0) {
			log("We good. Let's submit.");
			// @TODO Error handling
			const res = await fetch('/contact', {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({ email, message }),
			});

			const data = await res.text();
			const { status } = res;

			if (status !== 200) {
				log('Something went horribly wrong. Sorry about that.');
				this.setState({
					submitError: data,
				});

				Keen.recordEvent('form_submission', {
					success: true,
				});
			} else {
				log('Got that response from the server. Should be all good.');
				// @FIXME This could be better
				this.setState({
					success: true,
				});
				this.props.setSuccess(true);

				Keen.recordEvent('form_submission', {
					success: true,
				});
			}
		} else {
			log("Psst. Mate. Not gonna work like that. Here's a bunch of error messages");
			const errorMessages = contactErrors.reduce((obj, item) => {
				obj[item.type] = item.message; // eslint-disable-line no-param-reassign
				return obj;
			}, {});

			this.setState({
				errorTypes: contactErrors.map(err => err.type),
				errorMessages,
			});

			Keen.recordEvent('incomplete_form', { email, message });
		}
	}

	render() {
		const { errorTypes, errorMessages } = this.state;

		return (
			<React.Fragment>
				<Head>
					<script src="https://www.google.com/recaptcha/api.js" async defer />
				</Head>
				<form
					className={`contact-form ${this.state.success ? 'contact-form-push-back' : ''}`}
					action="/contact"
					method="POST"
					id="contact-form"
				>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="whatsup@gmail.com"
						className={errorTypes.includes('email') ? 'error' : null}
						ref={(ref) => {
							this.email = ref;
						}}
						required
					/>
					<span className={errorTypes.includes('email') ? 'error' : null}>
						{errorMessages.email}
					</span>
					<textarea
						name="message"
						id="message"
						minLength={10}
						placeholder="let's discuss..."
						className={errorTypes.includes('message') ? 'error' : null}
						ref={(ref) => {
							this.message = ref;
						}}
						required
					/>
					<span className={errorTypes.includes('message') ? 'error' : null}>
						{errorMessages.message}
					</span>
					<button onClick={this.handleSubmit}>shoot</button>

					<ErrorMessage message={this.state.submitError} />
				</form>
				{/* Because I'm responsible and don't want AdBlock to break my website
					I'm not gonna name ↓ this 'social-buttons' */}
				<div className="them-links" id="them-links">
					<a href="/_/linkedin" onClick={() => ContactForm.logSocialLink('linkedin')}>
						<img src="/static/social/linkedin.svg" alt="linkedin" />
					</a>
					<a href="/_/twitter" onClick={() => ContactForm.logSocialLink('twitter')}>
						<img src="/static/social/twitter.svg" alt="twitter" />
					</a>
					<a href="/_/github" onClick={() => ContactForm.logSocialLink('github')}>
						<img src="/static/social/github.svg" alt="github" />
					</a>
					<a href="/_/telegram" onClick={() => ContactForm.logSocialLink('telegram')}>
						<img src="/static/social/telegram.svg" alt="telegram" />
					</a>
					<a href="/_/email" onClick={() => ContactForm.logSocialLink('email')}>
						<img src="/static/social/email.svg" alt="email" />
					</a>
				</div>
			</React.Fragment>
		);
	}
}
