// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import StorehubDisplay from './mdx/storehub-display.md';
import portfolioItems from '../../lib/portfolio-items';

const project = portfolioItems.find(item => item.slug === 'storehub-display');

export default () => (
	<CaseStudy project={project}>
		<StorehubDisplay />
	</CaseStudy>
);
