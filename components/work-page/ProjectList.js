const ProjectList = ({ selectedProject, portfolioItems, selectItem }) => (
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
						selectItem(item);
					}}
				>
					{item.name}
				</a>
				<br />
				<br />
			</div>
		))}
	</div>
);

export default ProjectList;
