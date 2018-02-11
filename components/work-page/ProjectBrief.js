// @flow
import * as React from 'react';
import Router from 'next/router';
import autobind from 'autobind-decorator';
import { sleep, addClass, hexToRgb } from '../../lib/utils';
import { log } from '../../lib/log';

@autobind
export default class ProjectBrief extends React.Component<BriefProps, {}> {
	async goToProject(e: SyntheticEvent<*>) {
		e.preventDefault();
		log('Watch this crazy transition!');

		addClass('work-box', 'transitioning');
		addClass('links', 'fade-out');
		await sleep(1.25);

		log("Now we're actually changing the page");
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
					position: 'relative',
				}}
			>
				<div
					className="work-box-project-image"
					id="work-box-project-image"
					style={{
						backgroundImage: `url(${project.image})`,
					}}
				/>
				<div id="work-box-project-info" className="work-box-project-info">
					<div className="brief">
						<h2>
							{project.name.toLowerCase()}
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
