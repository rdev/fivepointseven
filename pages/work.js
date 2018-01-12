import Head from 'next/head';
import autobind from 'autobind-decorator';
import stylesheet from '../styles/styles.scss';
import Links from '../components/Links';
import ProjectBrief from '../components/work-page/ProjectBrief';
import ProjectList from '../components/work-page/ProjectList';
import portfolioItems from '../lib/portfolio-items';
import { sleep, addClass, removeClass } from '../lib/utils';

@autobind
export default class WorkPage extends React.Component {
	state = {
		selectedProject: portfolioItems[0],
	};

	async selectItem(selectedProject) {
		addClass('work-box-project-info', 'framework-selection-progress');

		await sleep(0.3);
		this.setState({ selectedProject }); // No need to trippledot the only item

		await sleep(0.4);
		removeClass('work-box-project-info', 'framework-selection-progress');
	}

	render() {
		const project = this.state.selectedProject;
		return (
			<div>
				<Head>
					<title>Max Rovensky | Portfolio</title>
					<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				</Head>
				<div className="work-container">
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
			</div>
		);
	}
}
