// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import ExpressX from './mdx/expressx.md';
import portfolioItems from '../../lib/portfolio-items';

const project = portfolioItems.find(item => item.slug === 'expressx');

export default () => (
	<CaseStudy project={project}>
		<ExpressX />
	</CaseStudy>
);
