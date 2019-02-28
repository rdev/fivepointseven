// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';
import PreviewHunt from './mdx/previewhunt.md';

const project = portfolioItems.find(item => item.slug === 'previewhunt');

export default () => (
	<CaseStudy project={project}>
		<PreviewHunt />
	</CaseStudy>
);
