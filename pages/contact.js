import autobind from 'autobind-decorator';
import Page from '../components/Page';
import Links from '../components/Links';
import Logo from '../components/Logo';
import ContactForm from '../components/contact-page/ContactForm';

@autobind
export default class ContactPage extends React.Component {
	state = { success: false };

	setSuccess(success) {
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
