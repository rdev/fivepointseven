// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';
import StorehubDisplay from './mdx/storehub-display.md';

const project = portfolioItems.find(item => item.slug === 'storehub-display');

export default () => (
	<CaseStudy project={project}>
		<StorehubDisplay />
	</CaseStudy>
);
