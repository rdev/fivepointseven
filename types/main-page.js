// @flow

declare type IndexProps = {
	pathname: string,
	query: {
		nospin: boolean,
		noLinksAnimation: boolean,
	},
};

declare type IndexState = {
	disableSpin: boolean,
};

declare type CompassProps = {
	animated?: boolean,
};
