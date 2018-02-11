// @flow

export function sleep(s: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, s * 1000));
}

export function addClass(target: string, classToAdd: string) {
	const el = document.getElementById(target);
	if (el) {
		el.classList.add(classToAdd);
	}
}

export function removeClass(target: string, classToRemove: string) {
	const el = document.getElementById(target);
	if (el) {
		el.classList.remove(classToRemove);
	}
}

export function hexToRgb(hex: string): string {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	const hexColor = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
	return result
		? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
		: '';
}

export function isMobileDevice(): boolean {
	return (
		typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1
	);
}
