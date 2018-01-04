import Logo from './Logo';

const HomeWelcome = () => (
	<div className="home-welcome" id="home-welcome">
		<Logo />
		<div className="home-heading" id="home-heading">
			<img src="/static/home-header.svg" alt="logo" draggable={false} />
			<img src="/static/home-subheader.svg" alt="logo" draggable={false} />
		</div>
	</div>
);

export default HomeWelcome;
