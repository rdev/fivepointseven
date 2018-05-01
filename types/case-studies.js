import * as React from 'react';

declare type CSProps = {
	project?: Project,
	children?: React.Node,
};

declare type CSState = {
	nightMode: boolean,
};

declare type CaseStudyHeader = {
	project: Project,
};

declare type NMTProps = {
	onClick(): void,
};

declare type NMTState = {
	visible: boolean,
};

declare type BBProps = {
	name: string,
};

declare type BBState = {
	scrolledPastHeader: boolean,
};
