import Logo from '../components/Logo';
import AboutParagraph from '../components/about-page/AboutParagraph';
import Page from '../components/Page';
import Links from '../components/Links';
import FrameworksModal from '../components/about-page/FrameworksModal';

const AboutPage = () => (
	<Page title="About">
		<div className="about-wrapper" id="about-wrapper">
			<div className="about-container" id="about-container">
				<Logo />
				<AboutParagraph />
				<Links active="about" />
			</div>
		</div>
		<FrameworksModal />
	</Page>
);

export default AboutPage;
