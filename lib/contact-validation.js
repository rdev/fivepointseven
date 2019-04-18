// @noflow
const emailValidator = require('email-validator'); // What? I can be lazy too

module.exports = function contactValidation(body) {
	const { email, message } = body;

	// eslint-disable-next-line no-useless-escape
	const urlRx = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
	// eslint-disable-next-line no-useless-escape, security/detect-unsafe-regex
	const emailRx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;
	const err = [];

	// Invalid email
	if (!emailValidator.validate(email)) {
		err.push({
			type: 'email',
			message: "I don't think I can get back to you using that :(",
		});
	}

	// Really dude? That's like barely two words, come on!
	if (message.length < 10) {
		err.push({
			type: 'message',
			message: "That message is reeeeally short. Are you sure that's it?",
		});
	}

	// I'm not at all interested in your website promotion services,
	// receiving Nigerian prince inheritance, or penetrting zillion dollar industries
	// There's no case where anyone with a legit message needs to put any of these in the form
	if (
		urlRx.test(message) ||
		emailRx.test(message) ||
		message.includes('advertise') ||
		message.includes('million') ||
		message.includes('billion') ||
		message.includes('promoting') ||
		message.includes('promote')
	) {
		err.push({
			type: 'message',
			message: "I'm afraid I can't let this through.",
		});
	}

	// If you found me through Upwork, you should really contact me there
	// 99% of the time when people contact via the form instead of UpWork
	// they want to circumvent UpWork's freelancer protection. Not a fan
	if (
		message.includes('Upwork') ||
		message.includes('UpWork') ||
		message.includes('upwork')
	) {
		err.push({
			type: 'message',
			message: 'If you found me on UpWork, you should contact me there instead 🙏',
		});
	}

	return err;
};
