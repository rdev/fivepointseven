import { log } from './log';

export default async function initServiceWorker() {
	// if ('serviceWorker' in navigator) {
	// 	try {
	// 		log("We've got Service Workers around here, yay. Let's use the shit out of them!");
	// 		await navigator.serviceWorker.register('/service-worker.js');
	// 		log('So, I just slapped a service worker in your browser. What does it do?');
	// 		log("Well, it caches every thing in existence on this website.\nNow it'll be loaded pretty much entirely from disk and it will be FAST.");
	// 	} catch (e) {
	// 		console.log(e.message);
	// 	}
	// } else {
	// 	log("You don't have a service worker capability. Sad. It won't be as lightning fast here as it could've been.");
	// }
}
