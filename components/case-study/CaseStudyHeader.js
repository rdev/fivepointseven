// @flow
import * as React from 'react';

export default ({ project }: CaseStudyHeader) => (
	<React.Fragment>
		<div
			className="case-study-project-image"
			style={{ backgroundImage: `url('${project.image}')` }}
		/>
		<header style={{ backgroundColor: project.color }} className={project.light ? 'light' : ''}>
			<div>
				<h1>{project.name.toLowerCase()}</h1>
				<span>{project.brief}</span>
			</div>
			<img src="/static/mouse.svg" alt="scroll-down" style={project.light ? { filter: 'invert(1)' } : {}} />
		</header>
	</React.Fragment>
);
