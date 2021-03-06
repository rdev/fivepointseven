// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';
import MindWay from './mdx/mindway.md';

const project = portfolioItems.find(item => item.slug === 'mindway');

export default () => (
	<CaseStudy project={project}>
		<MindWay />
	</CaseStudy>
);
