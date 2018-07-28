// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import PreviewHunt from './mdx/previewhunt.md';
import portfolioItems from '../../lib/portfolio-items';

const project = portfolioItems.find(item => item.slug === 'previewhunt');

export default () => (
	<CaseStudy project={project}>
		<PreviewHunt />
	</CaseStudy>
);
