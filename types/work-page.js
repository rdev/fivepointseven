declare type Project = {
	name: string,
	color: string,
	client: string,
	slug: string,
	brief: string,
	scopes: string[],
	image: string,
};

declare type WorkState = {
	selectedProject: Project,
};

declare type BriefProps = {
	project: Project,
};

declare type ProjectListProps = {
	selectedProject: Project,
	portfolioItems: Project[],
	selectItem(selectedProject: Project): Promise<void>,
};
