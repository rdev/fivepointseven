import Head from 'next/head';
import Logo from '../components/Logo';
import AboutParagraph from '../components/AboutParagraph';
import Links from '../components/Links';
import FrameworksModal from '../components/FrameworksModal';
import stylesheet from '../styles/styles.scss';

const AboutPage = () => (
	<div>
		<Head>
			<title>Max Rovensky | About Me</title>
			<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
		</Head>
		<div className="about-wrapper" id="about-wrapper">
			<div className="about-container" id="about-container">
				<Logo />
				<AboutParagraph />
				<Links active="about" />
			</div>
		</div>
		<FrameworksModal />
	</div>
);

export default AboutPage;
