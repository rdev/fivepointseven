export function sleep(s) {
	return new Promise(resolve => setTimeout(resolve, s * 1000));
}

export function addClass(target, classToAdd) {
	document.getElementById(target).classList.add(classToAdd);
}

export function removeClass(target, classToAdd) {
	document.getElementById(target).classList.remove(classToAdd);
}
