import Router from 'next/router';
import { TweenMax, Power2, TimelineMax } from 'gsap';
import autobind from 'autobind-decorator';
import { sleep } from '../lib/utils';

@autobind
export default class Links extends React.Component {
	animate() {
		document.getElementById('about-paragraph').style.display = 'flex';

		this.timeline = new TimelineMax({ duration: 2 })
			.add(TweenMax.to('#home-heading', 0.7, {
				y: -50,
				force3D: true,
				ease: Power2.easeInOut,
			}))
			.add(
				TweenMax.to('#home-heading', 1, {
					scale: 0.8,
					force3D: true,
					ease: Power2.easeOut,
				}),
				0,
			)
			.add(
				TweenMax.to('#home-heading', 0.7, {
					opacity: 0,
					force3D: true,
					ease: Power2.easeOut,
				}),
				0,
			)
			// Move logo up
			.add(
				TweenMax.to('#compass', 1, {
					y: -150,
					force3D: true,
					ease: Power2.easeInOut,
				}),
				0,
			)
			// Reveal paragraph
			.add(
				TweenMax.to('#about-paragraph', 1, {
					scale: 1,
					opacity: 1,
					force3D: true,
					ease: Power2.easeOut,
				}),
				0.7,
			)
			.add(
				TweenMax.to('#work-link', 0.5, {
					opacity: 0.5,
					force3D: true,
					ease: Power2.easeOut,
				}),
				0,
			)
			.add(
				TweenMax.to('#contact-link', 0.5, {
					opacity: 0.5,
					force3D: true,
					ease: Power2.easeOut,
				}),
				0,
			)
			.add(
				TweenMax.to('#hello-link', 0.5, {
					opacity: 0.5,
					force3D: true,
					ease: Power2.easeOut,
				}),
				0,
			)
			.add(
				TweenMax.to('#about-link', 0.5, {
					opacity: 1,
					scale: 1,
					force3D: true,
					ease: Power2.easeOut,
				}),
				0,
			);
	}

	async goToAbout(e) {
		// Do fancy stuff if we have javascript
		e.preventDefault();

		this.animate();
		await sleep(1.7);
		Router.push('/about');
	}

	render() {
		return (
			<div className="links" id="links">
				<a
					id="hello-link"
					style={{ opacity: this.props.active === 'hello' ? 1 : 0.5 }}
					href="/"
				>
					hello
				</a>
				<a
					id="about-link"
					style={{ opacity: this.props.active === 'about' ? 1 : 0.5 }}
					href="/about"
					onClick={this.goToAbout}
				>
					about
				</a>
				<a
					id="work-link"
					style={{ opacity: this.props.active === 'work' ? 1 : 0.5 }}
					href="/work"
				>
					work
				</a>
				<a
					id="contact-link"
					style={{ opacity: this.props.active === 'contact' ? 1 : 0.5 }}
					href="/contact"
				>
					contact
				</a>
			</div>
		);
	}
}
