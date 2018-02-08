import Head from 'next/head';
import stylesheet from '../styles/styles.scss';

export default ({ title, noscriptContent, children }) => (
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
		</Head>
		{children}
	</React.Fragment>
);
