// @flow
import * as React from 'react';
import Head from 'next/head';
import { log } from '../../lib/log';
import CaseStudyHeader from '../../components/case-study/CaseStudyHeader';
import BackButton from '../../components/case-study/BackButton';
import NightModeToggle from '../../components/case-study/NightModeToggle';
import initServiceWorker from '../../lib/service-worker';
import stylesheet from '../../styles/styles.scss';

export default class CaseStudy extends React.Component<CSProps, CSState> {
	state = {
		nightMode: false,
	};

	componentDidMount() {
		log("Let's get the saved night mode setting from localstorage");
		this.getSavedNightMode();

		// Don't forget the service worker
		initServiceWorker();
	}

	getSavedNightMode() {
		const lsNightMode = localStorage.getItem('nightmode');
		if (lsNightMode) {
			this.setState({
				nightMode: JSON.parse(lsNightMode),
			});
		}
	}

	toggleNightMode() {
		log('Toggling night mode and shamelessly saving it in localstorage');
		this.setState(
			{
				nightMode: !this.state.nightMode,
			},
			() => localStorage.setItem('nightmode', this.state.nightMode.toString()),
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
