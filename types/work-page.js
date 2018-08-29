declare type Project = {
	name: string,
	color: string,
	client: string,
	slug: string,
	brief: string,
	scopes: string[],
	image: string,
	light?: boolean,
	url?: string,
};

declare type WorkInitialProps = {
	query: InitialPropsQuery,
};

declare type WorkProps = {
	selected: string,
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
