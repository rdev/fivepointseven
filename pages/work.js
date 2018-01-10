import Head from 'next/head';
import stylesheet from '../styles/styles.scss';
import Links from '../components/Links';

export default class WorkPage extends React.Component {
	state = {
		selectedProject: null,
	};

	render() {
		return (
			<div>
				<Head>
					<title>Max Rovensky | Portfolio</title>
					<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				</Head>
				<div className="work-container">
					<div className="work-box">
						<div />
						<div />
					</div>
					<Links active="work" />
				</div>
			</div>
		);
	}
}
