import Logo from '../Logo';

const HomeWelcome = ({ animated }) => (
	<div className="home-welcome" id="home-welcome">
		<Logo animated={animated} />
		<div
			className={animated ? 'home-heading home-heading-animated' : 'home-heading'}
			id="home-heading"
		>
			<h1>Hello. I{"'"}m Max</h1>
			<h2>full stack javascript developer</h2>
		</div>
	</div>
);

export default HomeWelcome;
