// @flow
import * as React from 'react';
import Head from 'next/head';
import stylesheet from '../styles/styles.scss';
import GoogleAnalytics from './GoogleAnalytics';
import MetaTags from './MetaTags';

export default ({ title, noscriptContent, children }: Page) => (
	<React.Fragment>
		<Head>
			<title>{title ? `Max Rovensky | ${title}` : 'Max Rovensky'}</title>
			<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
			<noscript
				dangerouslySetInnerHTML={{
					// This website is gonna fucking work with javascript off
					__html: noscriptContent,
				}}
			/>
			<MetaTags />
			<GoogleAnalytics />
		</Head>
		{children}
	</React.Fragment>
);
