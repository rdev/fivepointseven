// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';
import WebComp from './mdx/webcomp.md';

const project = portfolioItems.find(item => item.slug === 'webcomp');

export default () => (
	<CaseStudy project={project}>
		<WebComp />
	</CaseStudy>
);
