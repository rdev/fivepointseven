import Router from 'next/router';
import autobind from 'autobind-decorator';
import { sleep, addClass, hexToRgb } from '../../lib/utils';

@autobind
export default class ProjectBrief extends React.Component {
	async goToProject(e) {
		e.preventDefault();
		addClass('work-box', 'transitioning');
		await sleep(1.25);

		Router.push(`/work/${this.props.project.slug}`);
	}

	render() {
		const { project } = this.props;
		return (
			<div
				className="work-box-project"
				style={{
					backgroundColor: `rgb(${hexToRgb(project.color)})`,
					backgroundSize: 'cover', // @TODO IMG TAG
				}}
			>
				<div id="work-box-project-info" className="work-box-project-info">
					<div className="brief">
						<h2>
							{project.name}
							<span>for {project.client}</span>
						</h2>
						<p>
							{project.brief}
							<a href={`/work/${project.slug}`} onClick={this.goToProject}>
								take a look {'>'}
							</a>
						</p>
					</div>
					<span className="scopes">{project.scopes.join(' • ')}</span>
				</div>
			</div>
		);
	}
}
