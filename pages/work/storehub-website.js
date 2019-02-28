// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';
import StorehubWebsite from './mdx/storehub-website.md';

const project = portfolioItems.find(item => item.slug === 'storehub-website');

export default () => (
	<CaseStudy project={project}>
		<StorehubWebsite />
	</CaseStudy>
);
