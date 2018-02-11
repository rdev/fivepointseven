// @flow
import * as React from 'react';
import { log } from '../../lib/log';

const ProjectList = ({ selectedProject, portfolioItems, selectItem }: ProjectListProps) => (
	<div className="work-box-list">
		<h2>the things i built</h2>
		{portfolioItems.map(item => (
			<div key={item.name}>
				<a
					href={`/work/${item.slug}`}
					className={
						selectedProject.name === item.name ? 'framework selected' : 'framework'
					}
					onClick={(e) => {
						e.preventDefault();
						log('Changing active item...');
						selectItem(item);
					}}
				>
					{item.name.toLowerCase()}
				</a>
				<br />
				<br />
			</div>
		))}
	</div>
);

export default ProjectList;
