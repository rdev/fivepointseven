const KeenTracking = require('keen-tracking');

let sessionCookie;

if (KeenTracking.utils.cookie) {
	sessionCookie = KeenTracking.utils.cookie('fivepointcookie');

	if (!sessionCookie.get('visitor_id')) {
		sessionCookie.set('visitor_id', KeenTracking.helpers.getUniqueId());
	}
}

const Keen = new KeenTracking({
	projectId: '5a5ba721c9e77c000104c24c',
	writeKey:
		'46A19AAF0EBF558148E91C0EA6D0A4E7E8DF3144E784EFE184ADFC1DEBFFD1CC5A25530FBB1C8C98019F3AF43563E3C6CC5630AB1204E94BD8D69C0B511A289913D8E528A57157B1C8C57AA82F32006244E8C342CD02AA0D15A6B756ED93540B',
});

Keen.extendEvents(() => ({
	geo: {
		info: {
			/* Enriched */
		},
		ip_address: '${keen.ip}', // eslint-disable-line no-template-curly-in-string
	},
	page: {
		info: {
			/* Enriched */
		},
		title: document.title,
		url: document.location.href,
	},
	referrer: {
		info: {
			/* Enriched */
		},
		url: document.referrer,
	},
	tech: {
		browser: KeenTracking.helpers.getBrowserProfile(),
		info: {
			/* Enriched */
		},
		user_agent: '${keen.user_agent}', // eslint-disable-line no-template-curly-in-string
	},
	time: KeenTracking.helpers.getDatetimeIndex(),
	visitor: {
		visitor_id: KeenTracking.utils.cookie ? sessionCookie.get('visitor_id') : null,
		/* Include additional visitor info here */
	},
	keen: {
		addons: [
			{
				name: 'keen:ip_to_geo',
				input: {
					ip: 'geo.ip_address',
				},
				output: 'geo.info',
			},
			{
				name: 'keen:ua_parser',
				input: {
					ua_string: 'tech.user_agent',
				},
				output: 'tech.info',
			},
			{
				name: 'keen:url_parser',
				input: {
					url: 'page.url',
				},
				output: 'page.info',
			},
			{
				name: 'keen:referrer_parser',
				input: {
					referrer_url: 'referrer.url',
					page_url: 'page.url',
				},
				output: 'referrer.info',
			},
		],
	},
}));

module.exports = Keen;
