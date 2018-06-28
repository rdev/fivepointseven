// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import StorehubWebsite from './mdx/storehub-website.md';
import portfolioItems from '../../lib/portfolio-items';

const project = portfolioItems.find(item => item.slug === 'storehub-website');

export default () => (
	<CaseStudy project={project}>
		<StorehubWebsite />
	</CaseStudy>
);
