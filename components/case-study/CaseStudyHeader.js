// @flow
import * as React from 'react';

export default ({ project }: CaseStudyHeader) => (
	<React.Fragment>
		<div
			className="case-study-project-image"
			style={{ backgroundImage: `url('${project.image}')` }}
		/>
		<header style={{ backgroundColor: project.color }}>
			<div>
				<h1>{project.name}</h1>
				<span>{project.brief}</span>
			</div>
			<img src="/static/mouse.svg" alt="scroll-down" />
		</header>
	</React.Fragment>
);
