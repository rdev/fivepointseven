import * as React from 'react';

declare type Page = {
	title?: string,
	children: React.Node,
	noscriptContent?: string,
};

declare type LinksProps = {
	active: string,
};

declare type LinksState = {
	active: string,
	linksClass: string,
};
