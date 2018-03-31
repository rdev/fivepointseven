// @noflow
const emailValidator = require('email-validator'); // What? I can be lazy too

module.exports = function contactValidation(body) {
	const { email, message } = body;

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

	return err;
};
