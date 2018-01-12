const Bot = require('node-telegram-bot-api');
const { stripIndents } = require('common-tags');
const where = require('node-where');
const emailValidator = require('email-validator'); // What? I can be lazy too

const { TELEGRAM_TOKEN, TELEGRAM_ID } = process.env;
const bot = new Bot(TELEGRAM_TOKEN, { polling: true });

// Just in case
bot.on('message', (msg) => {
	bot.sendMessage(
		TELEGRAM_ID,
		stripIndents`
			Psst. This dude just sending me a message:
			@${msg.from.username} (${msg.from.first_name} ${msg.from.last_name})
			Here's the message:
			
			${msg.text}
		`,
	);
});

/**
 * Send city/country and location to my Telegram
 *
 * @param {any} req - Request
 */
function logRedirect(req) {
	const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	where.is(ip, async (err, result) => {
		const {
			country, city, lat, lng,
		} = result.attributes;

		// Let's be civilized
		const capSocial = req.params.social.charAt(0).toUpperCase() + req.params.social.slice(1);

		// Flow controlz
		await bot.sendMessage(
			TELEGRAM_ID,
			stripIndents`
				Yo. Someone from *${city}, ${country}* just visited your *${capSocial}*.
				Here's where it is:
			`,
			{ parse_mode: 'Markdown' },
		);

		// I'm not a stalker, I just may not know where your place is
		bot.sendLocation(TELEGRAM_ID, lat, lng);
	});
}

/**
 * Social redirect handler
 *
 * @description Why? To hide away social links from robots and to stalk peop^U for analytics.
 * @param {any} req - Request
 * @param {any} res - Response
 */
function socialRedirect(req, res) {
	logRedirect(req);

	switch (req.params.social) {
		case 'linkedin':
			res.redirect('https://linkedin.com/in/fivepointseven');
			break;
		case 'twitter':
			res.redirect('https://twitter.com/fivepointdev');
			break;
		case 'github':
			res.redirect('https://github.com/fivepointseven');
			break;
		case 'telegram':
			res.redirect('https://t.me/fivepointseven');
			break;
		case 'medium':
			res.redirect('https://medium.com/@fivepointseven');
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
	const {
		captcha, email, subject, message,
	} = req.body;
	if (!captcha || captcha.toLowerCase() !== 'elon musk') {
		// No captcha

		res.status(400).send("You didn't say it. -_-");
	} else if (!emailValidator.validate(email)) {
		// Invalid email

		res.status(400).send("I don't think I can get back to you using that :(");
	} else if (subject.length < 3) {
		// Spammy subject line(?)

		res.status(400).send("That subject doesn't seem right...");
	} else if (message.length < 10) {
		// Really dude? That's like barely two words, come on!

		res.status(400).send("That message is reeeeally short. Are you sure that's it?");
	} else {
		// Alright, this person seems legit. Let's roll.
		try {
			// Email is so last decade
			await bot.sendMessage(
				TELEGRAM_ID,
				stripIndents`
					🎉 Pew pew! Incoming contact form submission!

					*Email:* ${email}
					*What's up:* ${subject}
					
					*Full Message:* 
					${message}
				`,
				{ parse_mode: 'Markdown' },
			);
			res.send('All good, mate!'); // @TODO Ajax/Browser distinction
		} catch (e) {
			res.status(500).send(stripIndents`
				Some serious shit just went down and your message may have gotten lost. 
				But don't worry, I'm totally on top of this. 
				It will be fixed faster than you say "Internal Server Error".
			`);
		}
	}
}

module.exports = {
	socialRedirect,
	contact,
};
