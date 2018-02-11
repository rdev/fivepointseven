// @flow
import * as React from 'react';

const Logo = ({ animated }: CompassProps) => (
	<img
		src="/static/compass.svg"
		alt="logo"
		draggable={false}
		id="compass"
		className={animated ? 'compass compass-animated' : 'compass'}
	/>
);

export default Logo;
