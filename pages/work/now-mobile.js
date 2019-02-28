// @flow
import * as React from 'react';
import CaseStudy from '../../components/case-study/CaseStudy';
import portfolioItems from '../../lib/portfolio-items';
import NowMobile from './mdx/now-mobile.md';

const project = portfolioItems.find(item => item.slug === 'now-mobile');

export default () => (
	<CaseStudy project={project}>
		<NowMobile />
	</CaseStudy>
);
