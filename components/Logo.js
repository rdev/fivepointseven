const Logo = ({ animated }) => (
	<img
		src="/static/compass.svg"
		alt="logo"
		draggable={false}
		id="compass"
		className={animated ? 'compass compass-animated' : 'compass'}
	/>
);

export default Logo;
