import Head from 'next/head';
import Router from 'next/router';
import { TweenMax, Power2, TimelineMax } from 'gsap';
import HomeWelcome from '../components/HomeWelcome';
import Links from '../components/Links';
import AboutParagraph from '../components/AboutParagraph';
import stylesheet from '../styles/styles.scss';

export default class MainPage extends React.Component {
	componentDidMount() {
		Router.prefetch('/about');

		// Only do this on home page. I don't want to be too obnoxious with loading animations
		this.timeline = new TimelineMax({ duration: 2 })
			.add(TweenMax.to('#compass', 1, {
				transform: 'rotate(0deg)',
				opacity: 1,
				force3D: true,
				ease: Power2.easeOut,
			}), 0)
			.add(TweenMax.to('#home-heading', 0.6, {
				opacity: 1,
				scale: 1,
				force3D: true,
				ease: Power2.easeOut,
			}), 0)
			.add(TweenMax.to('#links', 1, {
				opacity: 1,
				force3D: true,
				ease: Power2.easeOut,
			}), 0.5);
	}

	render() {
		return (
			<div>
				<Head>
					<title>Max Rovensky</title>
					<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
					<noscript dangerouslySetInnerHTML={
						{
							// This website is gonna fucking work with javascript off
							__html: `
								<style>
									.compass,
									.home-heading,
									.links {
										transform: rotateY(0deg) scale(1);
										opacity: 1;
									}
								</style>
							`,
						}
					}
					/>
				</Head>
				<div className="home-container">
					<HomeWelcome />
					<Links active="hello" />
					<AboutParagraph />
				</div>
			</div>
		);
	}
}
