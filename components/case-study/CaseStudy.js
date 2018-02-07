import Head from 'next/head';
import CaseStudyHeader from '../../components/case-study/CaseStudyHeader';
import BackButton from '../../components/case-study/BackButton';
import NightModeToggle from '../../components/case-study/NightModeToggle';
import stylesheet from '../../styles/styles.scss';

export default class CaseStudy extends React.Component {
	state = {
		nightMode: false,
	};

	componentDidMount() {
		this.getSavedNightMode();
	}

	getSavedNightMode() {
		if (localStorage.getItem('nightmode')) {
			this.setState({
				nightMode: JSON.parse(localStorage.getItem('nightmode')),
			});
		}
	}

	toggleNightMode() {
		this.setState(
			{
				nightMode: !this.state.nightMode,
			},
			() => localStorage.setItem('nightmode', this.state.nightMode),
		);
	}

	render() {
		const { project, children } = this.props;
		const { nightMode } = this.state;

		return (
			<React.Fragment>
				<Head>
					<title>Max Rovensky | {project.name}</title>
					<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				</Head>
				<div className={nightMode ? 'case-study night-mode' : 'case-study'} id="case-study">
					<BackButton />
					<CaseStudyHeader project={project} />
					<main>
						<div>{children}</div>
					</main>
					<NightModeToggle onClick={() => this.toggleNightMode()} />
				</div>
			</React.Fragment>
		);
	}
}
