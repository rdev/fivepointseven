import * as log from '../../lib/log';
import initServiceWorker from '../../lib/service-worker';

log.log = jest.fn();

describe('Service Worker', () => {
	test('Not do shit if service workers not supported', () => {
		initServiceWorker();

		expect(log.log).toHaveBeenCalledTimes(1);
	});

	test('Register service worker', () => {
		navigator.serviceWorker = {
			register: jest.fn(),
		};

		initServiceWorker();

		expect(navigator.serviceWorker.register).toHaveBeenCalled();
	});
});
