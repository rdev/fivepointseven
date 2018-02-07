export default ({ project }) => (
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
		</header>
	</React.Fragment>
);
