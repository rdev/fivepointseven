// @flow
import * as React from 'react';

export default ({ caseStudy }: MTProps) => (
	<React.Fragment>
		{/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
		<meta
			name="description"
			content={`${caseStudy ||
				'Full-stack JavaScript web developer specializing in React, React Native and Node.js.'}`}
		/>
		<meta property="og:title" content="Max Rovensky" />
		<meta
			property="og:description"
			content={`${caseStudy ||
				'Full-stack JavaScript web developer specializing in React, React Native and Node.js.'}`}
		/>
		<meta property="og:image" content="/static/preview-img.jpg" />
		<link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/apple-icon-57x57.png" />
		<link rel="apple-touch-icon" sizes="60x60" href="/static/favicons/apple-icon-60x60.png" />
		<link rel="apple-touch-icon" sizes="72x72" href="/static/favicons/apple-icon-72x72.png" />
		<link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-icon-76x76.png" />
		<link
			rel="apple-touch-icon"
			sizes="114x114"
			href="/static/favicons/apple-icon-114x114.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="120x120"
			href="/static/favicons/apple-icon-120x120.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="144x144"
			href="/static/favicons/apple-icon-144x144.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="152x152"
			href="/static/favicons/apple-icon-152x152.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="/static/favicons/apple-icon-180x180.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="192x192"
			href="/static/favicons/android-icon-192x192.png"
		/>
		<link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="96x96" href="/static/favicons/favicon-96x96.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
		<link rel="manifest" href="/static/manifest.json" />
		<meta name="msapplication-TileColor" content="#ffffff" />
		<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
		<link rel="shortcut icon" href="/static/favicons/favicon.ico" type="image/x-icon" />
		<link rel="icon" type="image/png" href="/static/favicons/apple-icon.png" />
	</React.Fragment>
);
