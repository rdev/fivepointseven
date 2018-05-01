// @flow

const portfolioItems: Project[] = [
	{
		name: 'My Website',
		color: '#4789F0',
		client: 'myself',
		slug: 'my-website',
		brief:
			'Rebuilding my website pretty much every year, this one is aimed to last a couple. Built from the  ground-up using Next.js, it has all the things that  are meant to impress whomever’s conidering to hire me - sleek design, sexy animations, offline first, React, SSR, all the works.',
		scopes: ['ui', 'ux', 'dev'],
		image: '/static/work/previews/website.svg',
	},
	{
		name: 'StoreHub Website',
		color: '#DB923A',
		client: 'storehub',
		slug: 'storehub-website',
		brief:
			'StoreHub is a Malaysian point of sales company. Company’s primary focus is to transform retail experience and make it better for everyone, and company website needed to refect that and be wow-y for the users.',
		scopes: ['ui', 'dev'],
		image: '/static/work/previews/storehub-website.jpg',
	},
	{
		name: 'StoreHub Display',
		color: '#C46128',
		client: 'storehub',
		slug: 'storehub-display',
		brief:
			'Companion app to StoreHub’s POS to act as a customer-facing display, showing purchase information, personalized user information and custom promotions.',
		scopes: ['dev'],
		image: '/static/work/previews/storehub-cfd.jpg',
	},
	{
		name: 'Convertable',
		color: '#157FE8',
		client: 'myself',
		slug: 'convertable',
		brief:
			'How often do you have to convery currency? Wouldn’t it be cool if you could have currency converter built in to your calculator? Well, that’s exactly what this calculator does.',
		scopes: ['ui', 'dev'],
		image: '/static/work/previews/convertable.jpg',
	},
	{
		name: 'Sandstone.js',
		color: '#C75A50',
		client: 'the world',
		slug: 'sandstone',
		brief:
			"Sandstone.js is a ”batteries included” JavaScript library inspired by React for writing smart reusable Web Components in a modern way. It provides all of the sweet features you're used to in React without the need for actual React.",
		scopes: ['dev'],
		image: '/static/work/previews/sandstone.jpg',
	},
	// {
	// 	name: 'vave',
	// 	color: '#665DE2',
	// 	client: 'myself',
	// 	slug: 'vave',
	// 	brief: 'Ultimate stack goodizer.',
	// 	scopes: ['ux', 'dx', 'dev'],
	// 	image: '/static/work/previews/vave.jpg',
	// },
	{
		name: 'MyPlate',
		color: '#06c288',
		client: 'a hackathon',
		slug: 'myplate',
		brief:
			'First runner-up winner at a Smart City hackathon, MyPlate project used computer vision for license plate recognition and fee deduction directly from the credit card, removing the need for tickets and cards.',
		scopes: ['dev'],
		image: '/static/work/previews/myplate.jpg',
	},
	{
		name: 'MindWay',
		color: '#20ACB7',
		client: 'a hackathon',
		slug: 'mindway',
		brief:
			'First runner-up winner at a Healthcare Hackathon, Mindway was a preventive mood tracker designed to monitor users’ mood swings and take action if there are any signs of depression or mental health issues.',
		scopes: ['dev'],
		image: '/static/work/previews/mindway.jpg',
	},
	{
		name: 'ExpressX',
		color: '#ce4e4e',
		client: 'the world',
		slug: 'expressx',
		brief:
			'Futuristic build system for Node web apps that provides a smooth developer experience for Express.js. It sets up all of the boilerplate for you, does automatic ES6/7/Next transpilation, live reload, autoprefixing, Webpack and more.',
		scopes: ['dx', 'dev'],
		image: '/static/work/previews/expressx.jpg',
	},
];

export default portfolioItems;
