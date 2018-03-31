import contactValidation from '../../lib/contact-validation';

describe('Contact Validation', () => {
	const body = {
		email: 'invalid',
		message: 'too short',
	};

	let err = [];

	beforeAll(() => {
		err = contactValidation(body);
	});

	test('Invalid email', () => {
		const error = err.filter(item => item.type === 'email')[0];

		expect(error).toBeDefined();
	});

	test('Invalid message', () => {
		const error = err.filter(item => item.type === 'message')[0];

		expect(error).toBeDefined();
	});

	test('All valid', () => {
		const validBody = {
			email: 'test@gmail.com',
			message: 'Valid message body',
		};
		const validErr = contactValidation(validBody);

		expect(validErr).toHaveLength(0);
	});
});
