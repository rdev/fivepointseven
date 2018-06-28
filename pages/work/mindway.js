// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import MindWay from './mdx/mindway.md';
import portfolioItems from '../../lib/portfolio-items';

const project = portfolioItems.find(item => item.slug === 'mindway');

export default () => (
	<CaseStudy project={project}>
		<MindWay />
	</CaseStudy>
);
