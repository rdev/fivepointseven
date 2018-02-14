import * as utils from '../../lib/utils';

describe('Utility Functions', () => {
	test('Async sleep', async () => {
		/* eslint-disable promise/prefer-await-to-then, promise/catch-or-return */
		const resolve = jest.fn();
		await utils.sleep(0.1);
		resolve();

		expect(resolve).toBeCalled();
	});

	test('Add Class', () => {
		const testEl = document.createElement('div');
		testEl.id = 'test-id';
		testEl.classList.add = jest.fn();
		document.body.appendChild(testEl);

		utils.addClass('test-id-nope', 'test-class');
		utils.addClass('test-id', 'test-class');

		expect(testEl.classList.add).toHaveBeenCalledTimes(1);
	});

	test('Remove Class', () => {
		const testEl = document.createElement('div');
		testEl.id = 'test-id-2';
		testEl.classList.remove = jest.fn();
		document.body.appendChild(testEl);

		utils.removeClass('test-id-nope', 'test-class');
		utils.removeClass('test-id-2', 'test-class');

		expect(testEl.classList.remove).toHaveBeenCalledTimes(1);
	});

	test('HEX to RGB', () => {
		const hexShorthand = '#fff';

		expect(utils.hexToRgb(hexShorthand)).toBe('255, 255, 255');
	});

	test('Mobile device detection', async () => {
		expect(utils.isMobileDevice()).toBeFalsy();
	});
});
