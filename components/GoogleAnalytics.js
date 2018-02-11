// @flow
import * as React from 'react';

export default () => (
	<React.Fragment>
		<script async src="https://www.googletagmanager.com/gtag/js?id=CI_ENV:GA_ID" />
		<script
			dangerouslySetInnerHTML={{
				// Imma leave Google Analytics here for now
				__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'CI_ENV:GA_ID');
				`,
			}}
		/>
	</React.Fragment>
);
