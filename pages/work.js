// @flow
import * as React from 'react';
import Router from 'next/router';
import autobind from 'autobind-decorator';
import Page from '../components/Page';
import Links from '../components/Links';
import ProjectBrief from '../components/work-page/ProjectBrief';
import ProjectList from '../components/work-page/ProjectList';
import Logo from '../components/Logo';
import portfolioItems from '../lib/portfolio-items';
import Keen from '../lib/keen';
import { sleep, addClass, removeClass, isMobileDevice } from '../lib/utils';
import { log } from '../lib/log';

@autobind
export default class WorkPage extends React.Component<WorkProps, WorkState> {
	static async getInitialProps({ query }: WorkInitialProps) {
		return {
			selected: query.selected,
		};
	}

	state = {
		selectedProject:
			portfolioItems.filter(item => item.name === this.props.selected)[0] ||
			portfolioItems[0],
	};

	async selectItem(selectedProject: Project) {
		if (isMobileDevice()) {
			Router.push(`/work/${selectedProject.slug}`);
		} else {
			log("We're not on mobile, let's do the animation");
			addClass('work-box-project-info', 'framework-selection-progress');
			addClass('work-box-project-image', 'cross-disolve');
			await sleep(0.3);
			this.setState({ selectedProject }); // No need to trippledot the only item

			await sleep(0.4);
			removeClass('work-box-project-info', 'framework-selection-progress');
			removeClass('work-box-project-image', 'cross-disolve');
		}

		Keen.recordEvent('portfolio_project_selected', {
			name: selectedProject.name,
		});
	}

	render() {
		const project = this.state.selectedProject;
		return (
			<Page title="Portfolio">
				<div className="work-container">
					<Logo />
					<div className="work-box" id="work-box">
						<ProjectBrief project={project} />
						<ProjectList
							portfolioItems={portfolioItems}
							selectedProject={project}
							selectItem={this.selectItem}
						/>
					</div>
					<Links active="work" />
				</div>
			</Page>
		);
	}
}
