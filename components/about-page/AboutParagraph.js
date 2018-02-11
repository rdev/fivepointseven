// @flow
import * as React from 'react';
import { sleep, addClass } from '../../lib/utils';
import { log } from '../../lib/log';

export default class AboutParagraph extends React.Component<{}, {}> {
	static async showFrameworksModal(e: SyntheticEvent<*>) {
		log("Let's fold the paragraph...");
		e.preventDefault();

		addClass('about-container', 'fold-paragraph');
		await sleep(0.2);
		log("And now here's your modal!");
		addClass('frameworks-modal', 'frameworks-modal-in');
	}

	render() {
		const nodeRelease = new Date('2013-03-28');
		const birthDate = new Date('1994-10-02');
		const today = new Date();

		const nodeYears = today.getFullYear() - nodeRelease.getFullYear();
		const myYears = today.getFullYear() - birthDate.getFullYear(); // This is a lie before October
		return (
			<p className="about-paragraph scale-fade-in" id="about-paragraph">
				<span>
					Hi! You wandered into an exposition section, so here{"'"}s my story. I{"'"}ll
					try and keep it concise because I value your time.
					{/* No, you're doing it because of the user research, you fucking liar. */}
				</span>
				<br />
				<br />
				<span>
					I’m {myYears} years old, first began coding at 17 and after trying out a few
					languages, I’ve decided to settle on JavaScript and started with Node as I found
					it more exciting than the front-end at the time. First version of Node I’ve
					worked with was v0.10.2. Man, that was {nodeYears} years ago, damn!
				</span>
				<br />
				<br />
				<span>
					Anyway, today my field of knowledge includes Node, React, React Native, Docker
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
