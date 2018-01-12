import Head from 'next/head';
import autobind from 'autobind-decorator';
import stylesheet from '../styles/styles.scss';
import Links from '../components/Links';

@autobind
export default class ContactPage extends React.Component {
	render() {
		return (
			<div>
				<Head>
					<title>Max Rovensky | Contact</title>
					<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				</Head>
				<div className="contact-container">
					<form className="contact-form" action="/contact" method="POST">
						<input type="email" name="email" required />
						<input type="text" name="subject" required />
						<input type="text" name="captcha" required />
						<textarea name="message" />
						<button>shoot</button>

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
					</form>
					{/* Because I'm responsible and don't want AdBlock to break my website
						I'm not gonna name ↓ this 'social-buttons' */}
					<Links active="work" />
				</div>
			</div>
		);
	}
}
