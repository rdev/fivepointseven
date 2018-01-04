export function sleep(s) {
	return new Promise(resolve => setTimeout(resolve, s * 1000));
}
