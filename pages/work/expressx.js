// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';
import ExpressX from './mdx/expressx.md';

const project = portfolioItems.find(item => item.slug === 'expressx');

export default () => (
	<CaseStudy project={project}>
		<ExpressX />
	</CaseStudy>
);
