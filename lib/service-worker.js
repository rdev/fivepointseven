// @noflow
import { log } from './log';

export default async function initServiceWorker() {
	if ('serviceWorker' in navigator) {
		try {
			log("We've got Service Workers around here, yay. Let's use the shit out of them!");
			await navigator.serviceWorker.register('/service-worker.js');
		} catch (e) {
			console.log(e.message);
		}
	} else {
		log("You don't have a service worker capability. Sad. It won't be as lightning fast here as it could've been.");
	}
}
