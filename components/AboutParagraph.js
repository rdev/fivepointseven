import autobind from 'autobind-decorator';
import { TweenMax, Power2, TimelineMax } from 'gsap';

@autobind
export default class AboutParagraph extends React.Component {
	showFrameworksModal(e) {
		e.preventDefault();

		document.getElementById('frameworks-modal').style.display = 'grid';

		this.timeline = new TimelineMax({ duration: 1 })
			.add(TweenMax.to('#about-container', 0.7, {
				opacity: 0.5,
				scale: 0.8,
				force3D: true,
				ease: Power2.easeInOut,
			}))
			.add(TweenMax.to('#frameworks-modal', 0.3, {
				opacity: 1,
				force3D: true,
				ease: Power2.easeOut,
			}), 0.4)
			.add(TweenMax.to('#frameworks-modal', 0.6, {
				scale: 1,
				force3D: true,
				ease: Power2.easeOut,
			}), 0.4);
	}

	render() {
		return (
			<p className="about-paragraph" id="about-paragraph">
				<span>
					Hi! I’m Max, and I code JavaScript. But you already know that. We both know you came
					here for exposition, so here’s exposition.
				</span>
				<br />
				<span>
					I’m 23 years old, currently based in Kuala Lumpur, Malaysia.
					I first began coding since I was 17 and after trying out a few languages,
					I’ve decided to settle on JavaScript. Front-end didn’t feel like my thing at first,
					so I started working with Node as I found it more exciting.
					First version of Node I’ve worked with was v0.10.2. Man, that was 5 years ago, that’s
					like an eternity, but feels like it was yesterday.
				</span>
				<br />
				<span>
					Anyway, today my field of knowledhe includes Node, React, React Native, Docker and all
					the things that go with it. Question. Do I really need to list all the <a className="inline-link" href="/about/frameworks" onClick={this.showFrameworksModal}>frameworks</a> like people do?
				</span>
			</p>
		);
	}
}
