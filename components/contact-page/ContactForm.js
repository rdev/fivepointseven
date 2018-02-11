// @flow
import * as React from 'react';
import autobind from 'autobind-decorator';
import contactValidation from '../../lib/contact-validation';
import { log } from '../../lib/log';
import Keen from '../../lib/keen';
import ErrorMessage from './ErrorMessage';

@autobind
export default class ContactForm extends React.Component<FormProps, FormState> {
	state = { errorTypes: [], errorMessages: {}, submitError: null };

	email: ?HTMLInputElement;
	subject: ?HTMLInputElement;
	captcha: ?HTMLInputElement;
	message: ?HTMLTextAreaElement;

	async handleSubmit(e: SyntheticEvent<*>) {
		e.preventDefault();
		log("Let's validate all your stuff first.");

		const email = this.email ? this.email.value : '';
		const subject = this.subject ? this.subject.value : '';
		const captcha = this.captcha ? this.captcha.value : '';
		const message = this.message ? this.message.value : '';

		const contactErrors = contactValidation({
			email,
			subject,
			captcha,
			message,
		});

		if (contactErrors.length === 0) {
			log("We good. Let's submit.");
			// @TODO Error handling
			const res = await fetch('/contact', {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({
					email,
					subject,
					captcha,
					message,
				}),
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
					success: false,
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

			Keen.recordEvent('incomplete_form', {
				email,
				subject,
				captcha,
				message,
			});
		}
	}

	render() {
		const { errorTypes, errorMessages } = this.state;

		return (
			<form
				className={`contact-form ${this.state.success ? 'contact-form-push-back' : ''}`}
				action="/contact"
				method="POST"
				id="contact-form"
			>
				<input
					type="email"
					name="email"
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
				<input
					type="text"
					name="subject"
					placeholder="bottom line"
					className={errorTypes.includes('subject') ? 'error' : null}
					ref={(ref) => {
						this.subject = ref;
					}}
					required
					minLength={3}
				/>
				<span className={errorTypes.includes('subject') ? 'error' : null}>
					{errorMessages.subject}
				</span>
				<input
					type="text"
					name="captcha"
					placeholder="say &quot;elon musk&quot;"
					className={errorTypes.includes('captcha') ? 'error' : null}
					ref={(ref) => {
						this.captcha = ref;
					}}
					required
				/>
				<span className={errorTypes.includes('captcha') ? 'error' : null}>
					{errorMessages.captcha}
				</span>
				<textarea
					name="message"
					minLength={10}
					placeholder="let's talk business..."
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

				{/* Because I'm responsible and don't want AdBlock to break my website
							I'm not gonna name ↓ this 'social-buttons' */}
				<div className="them-links">
					<a href="/_/linkedin">
						<img src="/static/social/linkedin.svg" alt="linkedin" />
					</a>
					<a href="/_/twitter">
						<img src="/static/social/twitter.svg" alt="twitter" />
					</a>
					<a href="/_/github">
						<img src="/static/social/github.svg" alt="github" />
					</a>
					<a href="/_/telegram">
						<img src="/static/social/telegram.svg" alt="telegram" />
					</a>
					<a href="/_/medium">
						<img src="/static/social/medium.svg" alt="medium" />
					</a>
				</div>

				<ErrorMessage message={this.state.submitError} />
			</form>
		);
	}
}
