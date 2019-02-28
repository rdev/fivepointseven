// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';
import Convertable from './mdx/convertable.md';

const project = portfolioItems.find(item => item.slug === 'convertable');

export default () => (
	<CaseStudy project={project}>
		<Convertable />
	</CaseStudy>
);
