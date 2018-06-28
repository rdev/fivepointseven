// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import MyPlate from './mdx/myplate.md';
import portfolioItems from '../../lib/portfolio-items';

const project = portfolioItems.find(item => item.slug === 'myplate');

export default () => (
	<CaseStudy project={project}>
		<MyPlate />
	</CaseStudy>
);
