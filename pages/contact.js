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
					<form className="contact-form">
						<input type="email" required />
						<input type="text" required />
						<input type="text" required />
						<textarea />
						<button>shoot</button>
					</form>
					<Links active="work" />
				</div>
			</div>
		);
	}
}
