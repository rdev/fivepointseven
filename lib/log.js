// @flow

const bannerStyle = [
	'line-height: 48px',
	'color: #0dbc79',
	'font-weight: 300',
	'font-size: 14px',
	'font-weight: bold',
].join(';');

const logStyle = ['font-size: 12px'].join(';');
const timeStyle = ['font-size: 12px', 'background: #3a3a3a', 'color: #f0f0f0'].join(';');

export function log(message: string) {
	if (process.env.NODE_ENV !== 'test') {
		const date = new Date();
		const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
		console.log(`\n%c ${time} %c  ${message}\n`, timeStyle, logStyle);
	}
}

export function greeting() {
	if (process.env.NODE_ENV !== 'test') {
		console.log('%cWell, hello there, curious one! Welcome to this cozy console!', bannerStyle);
	}
}
