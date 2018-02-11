// @flow
import * as React from 'react';
import Head from 'next/head';
import stylesheet from '../styles/styles.scss';

const Error = () => (
	<div>
		<Head>
			<title>Max Rovensky | Lost</title>
			<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
		</Head>
		<div className="error-page-message">
			<img src="/static/404.svg" draggable={false} alt="404 | void of space" />
		</div>
	</div>
);

export default Error;
