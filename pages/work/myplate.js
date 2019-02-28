// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';
import MyPlate from './mdx/myplate.md';

const project = portfolioItems.find(item => item.slug === 'myplate');

export default () => (
	<CaseStudy project={project}>
		<MyPlate />
	</CaseStudy>
);
