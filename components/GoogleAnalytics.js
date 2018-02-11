// @flow
import * as React from 'react';

export default () => (
	<React.Fragment>
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-109248622-2" />
		<script
			dangerouslySetInnerHTML={{
				// Imma leave Google Analytics here for now
				__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'UA-109248622-2');
				`,
			}}
		/>
	</React.Fragment>
);
