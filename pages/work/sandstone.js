// @flow
import * as React from 'react';
import Sandstone from './mdx/sandstone.md';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';

const project = portfolioItems.find(item => item.slug === 'sandstone');

export default () => (
	<CaseStudy project={project}>
		<Sandstone />
	</CaseStudy>
);
