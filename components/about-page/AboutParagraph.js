import { sleep, addClass } from '../../lib/utils';

export default class AboutParagraph extends React.Component {
	static async showFrameworksModal(e) {
		e.preventDefault();

		addClass('about-container', 'fold-paragraph');
		await sleep(0.2);
		addClass('frameworks-modal', 'frameworks-modal-in');
	}

	render() {
		return (
			<p className="about-paragraph" id="about-paragraph">
				<span>
					Hi! I’m Max, and I code JavaScript. But you already know that. We both know you
					came here for exposition, so here’s exposition.
				</span>
				<br />
				<span>
					I’m 23 years old, currently based in Kuala Lumpur, Malaysia. I first began
					coding since I was 17 and after trying out a few languages, I’ve decided to
					settle on JavaScript. Front-end didn’t feel like my thing at first, so I started
					working with Node as I found it more exciting. First version of Node I’ve worked
					with was v0.10.2. Man, that was 5 years ago, that’s like an eternity, but feels
					like it was yesterday.
				</span>
				<br />
				<span>
					Anyway, today my field of knowledhe includes Node, React, React Native, Docker
					and all the things that go with it. Question. Do I really need to list all the{' '}
					<a
						className="inline-link"
						href="/about/frameworks"
						onClick={AboutParagraph.showFrameworksModal}
					>
						frameworks
					</a>{' '}
					like people do?
				</span>
			</p>
		);
	}
}
