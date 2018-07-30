import * as React from 'react';

declare type Page = {
	title?: string,
	children: React.Node,
	noscriptContent?: string,
};

declare type LinksProps = {
	active: string,
	pathname?: string,
	query?: {
		nospin: boolean,
		noLinksAnimation: boolean,
	},
};

declare type LinksState = {
	active: string,
	linksClass: string,
};

declare type InitialPropsQuery = {
	[string]: string,
};

declare type MTProps = {
	caseStudy?: string,
	project?: Project,
};
