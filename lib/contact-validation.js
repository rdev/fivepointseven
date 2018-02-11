// @noflow
const emailValidator = require('email-validator'); // What? I can be lazy too

module.exports = function contactValidation(body) {
	const { captcha, email, subject, message } = body;

	const err = [];

	// No captcha
	if (!captcha || captcha.toLowerCase() !== 'elon musk') {
		err.push({
			type: 'captcha',
			message: "You didn't say it. -_-",
		});
	}

	// Invalid email
	if (!emailValidator.validate(email)) {
		err.push({
			type: 'email',
			message: "I don't think I can get back to you using that :(",
		});
	}

	// Spammy subject line(?)
	if (subject.length < 3) {
		err.push({
			type: 'subject',
			message: "That subject doesn't seem right...",
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
