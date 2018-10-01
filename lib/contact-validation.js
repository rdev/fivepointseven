// @noflow
const emailValidator = require('email-validator'); // What? I can be lazy too

module.exports = function contactValidation(body) {
	const { email, message } = body;

	const urlRx = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
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
	
	// I'm not at all interested in your website promotion services.
	// There's no case where anyone with a legit message needs to paste a URL here
	if (urlRx.test(message)) {
		err.push({
			type: 'message',
			message: "I'm afraid I can't let this through.",
		});
	}

	return err;
};
