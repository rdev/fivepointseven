// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';
import MyWebsite from './mdx/my-website.md';

const project = portfolioItems.find(item => item.slug === 'my-website');

export default () => (
	<CaseStudy project={project}>
		<MyWebsite />
	</CaseStudy>
);
