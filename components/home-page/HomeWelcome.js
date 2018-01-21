import Logo from '../Logo';

const HomeWelcome = ({ animated }) => (
	<div className="home-welcome" id="home-welcome">
		<Logo animated={animated} />
		<div className="home-heading home-heading-animated" id="home-heading">
			{/* Is this weird that this is the only line on the website
				that's not fully lowercased? */}
			<h1>Hello. I{"'"}m Max</h1>
			<h2>full stack javascript developer</h2>
		</div>
	</div>
);

export default HomeWelcome;
