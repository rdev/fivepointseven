// @flow
import * as React from 'react';
import Keen from '../../lib/keen';
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

		Keen.recordEvent('frameworks_modal_open');
	}

	render() {
		const nodeRelease = new Date('2013-03-28');
		const today = new Date();
		const nodeYears = today.getFullYear() - nodeRelease.getFullYear();

		return (
			<p className="about-paragraph scale-fade-in" id="about-paragraph">
				<span>
					Hi! I’m Max, a JavaScript developer specializing in Node, React, React Native
					and Electron. I also do other related things, in fact{' '}
					<button className="inline-link" onClick={AboutParagraph.showFrameworksModal}>
						here’s a list
					</button>{' '}
					of all the tools and frameworks I work with, but those 4 are my main focus.
				</span>
				<br />
				<br />
				<span>
					I specialize in building scalable full stack aplications and have been doing it
					since Node v0.10.2, which is {nodeYears} years at this point. First and foremost
					I like building new exciting stuff. This is partially the motivation behind my
					Open Source work (like my Web Components library or futuristic build system for
					Node web apps).
				</span>
				<br />
				<br />
				<span>
					I can handle full scope of your project from UI to dev work to deployment and
					infrastructure. With probably the exception of database administration. But with
					regards to everything else, let me know what your project is and let’s get it
					done!
				</span>
			</p>
		);
	}
}
