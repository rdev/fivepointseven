import Head from 'next/head';
import { TimelineMax } from 'gsap';
import Logo from '../components/Logo';
import AboutParagraph from '../components/AboutParagraph';
import Links from '../components/Links';
import FrameworksModal from '../components/FrameworksModal';
import stylesheet from '../styles/styles.scss';

export default class AboutPage extends React.Component {
	componentDidMount() {
		document.body.classList.add('about-page');
	}

	render() {
		return (
			<div>
				<Head>
					<title>Max Rovensky | About Me</title>
					<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				</Head>
				<div className="about-container" id="about-container">
					<Logo />
					<AboutParagraph />
					<Links active="about" />
				</div>
				<FrameworksModal />
			</div>
		);
	}
}
