// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';
import Dailywall from './mdx/dailywall.md';

const project = portfolioItems.find(item => item.slug === 'dailywall');

export default () => (
	<CaseStudy project={project}>
		<Dailywall />
	</CaseStudy>
);
