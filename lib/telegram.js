// @noflow
const { stripIndents } = require('common-tags');
const fetch = require('isomorphic-unfetch');
const contactValidation = require('./contact-validation'); // What? I can be lazy too

/**
 * Social redirect handler
 *
 * @description Why? To hide away social links from robots and to stalk peop^U for analytics.
 * @param {any} req - Request
 * @param {any} res - Response
 */
function socialRedirect(req, res) {
	switch (req.params.social) {
		case 'linkedin':
			res.redirect('https://linkedin.com/in/fivepointseven');
			break;
		case 'twitter':
			res.redirect('https://twitter.com/MaxRovensky');
			break;
		case 'github':
			res.redirect('https://github.com/rdev');
			break;
		case 'telegram':
			res.redirect('https://t.me/fivepointseven');
			break;
		case 'email':
			res.redirect('mailto:hey@fivepointseven.comw');
			break;
		default:
			res.redirect('/contact');
			break;
	}
}

/**
 * Contact form handler.
 *
 * @param {any} req - Request
 * @param {any} res - Response
 */
async function contact(req, res) {
	const { email, message } = req.body;

	const contactErrors = contactValidation(req.body);

	if (contactErrors.length > 0) {
		res.status(400).send(contactErrors.map(err => `Error in "${err.type}": ${err.message}\n`));
	} else {
		// Alright, this person seems legit. Let's roll.
		try {
			// Email is so last decade
			const directorRes = await fetch('https://director.sh/api/overseer', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-medium': 'website',
					'x-director-id': process.env.DIRECTOR_ID,
				},
				body: JSON.stringify({ email, message }),
			});

			const { status, error } = await directorRes.json();

			if (status === 'k') {
				res.send('All good, mate!'); // @TODO Ajax/Browser distinction
			} else {
				console.log(error);
				res.status(500).send(stripIndents`
					Some serious shit just went down and your message may have gotten lost.
					But don't worry, I'm totally on top of this.
					It will be fixed faster than you can say "Internal Server Error".
				`);
			}
		} catch (e) {
			console.log(e);
			res.status(500).send(stripIndents`
				Some serious shit just went down and your message may have gotten lost.
				But don't worry, I'm totally on top of this.
				It will be fixed faster than you can say "Internal Server Error".
			`);
		}
	}
}

module.exports = {
	socialRedirect,
	contact,
};
