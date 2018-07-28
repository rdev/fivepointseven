// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import Dailywall from './mdx/dailywall.md';
import portfolioItems from '../../lib/portfolio-items';

const project = portfolioItems.find(item => item.slug === 'dailywall');

export default () => (
	<CaseStudy project={project}>
		<Dailywall />
	</CaseStudy>
);
