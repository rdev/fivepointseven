export function sleep(s) {
	return new Promise(resolve => setTimeout(resolve, s * 1000));
}

export function addClass(target, classToAdd) {
	document.getElementById(target).classList.add(classToAdd);
}

export function removeClass(target, classToAdd) {
	document.getElementById(target).classList.remove(classToAdd);
}

export function hexToRgb(hex) {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	const hexColor = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
	return result
		? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
		: null;
}
