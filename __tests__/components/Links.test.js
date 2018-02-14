import Router from 'next/router';
import { shallow } from 'enzyme';
import Links from '../../components/Links';
import Keen from '../../lib/keen';

Router.router = {
	push: () => {},
	prefetch: () => {},
	query: {},
};

Keen.recordEvent = jest.fn();

describe('Links component', () => {
	test('Animated reveal class', () => {
		const wrapper = shallow(<Links query={{}} pathname="/" />);

		expect(wrapper.instance().state.linksClass).toBe('links links-animated');
	});

	test('No animation class', () => {
		const wrapper = shallow(<Links query={{ nospin: true }} pathname="/" />);

		expect(wrapper.instance().state.linksClass).toBe('links');
	});
});

describe('Links Transition: About', () => {
	test('From Home', () => {
		Router.router.pathname = '/';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToAbout(e);

		expect(e.preventDefault).toHaveBeenCalled();
		expect(instance.state.active).toBe('about');
		expect(Keen.recordEvent).toHaveBeenCalled();
	});

	test('From Contact', () => {
		Router.router.pathname = '/contact';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToAbout(e);

		expect(e.preventDefault).toHaveBeenCalled();
		expect(instance.state.active).toBe('about');
		expect(Keen.recordEvent).toHaveBeenCalled();
	});

	test('From Work', () => {
		Router.router.pathname = '/work';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToAbout(e);

		expect(e.preventDefault).toHaveBeenCalled();
		expect(instance.state.active).toBe('about');
		expect(Keen.recordEvent).toHaveBeenCalled();
	});

	test('Invalid Call', () => {
		Router.router.pathname = '/invalid';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToAbout(e);
		const current = instance.state.active;

		expect(instance.state.active).toBe(current);
	});
});

describe('Links Transition: Work', () => {
	test('From Home', () => {
		Router.router.pathname = '/';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToWork(e);

		expect(e.preventDefault).toHaveBeenCalled();
		expect(instance.state.active).toBe('work');
		expect(Keen.recordEvent).toHaveBeenCalled();
	});

	test('From Contact', () => {
		Router.router.pathname = '/contact';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToWork(e);

		expect(e.preventDefault).toHaveBeenCalled();
		expect(instance.state.active).toBe('work');
		expect(Keen.recordEvent).toHaveBeenCalled();
	});

	test('From About', () => {
		Router.router.pathname = '/about';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToWork(e);

		expect(e.preventDefault).toHaveBeenCalled();
		expect(instance.state.active).toBe('work');
		expect(Keen.recordEvent).toHaveBeenCalled();
	});

	test('Invalid Call', () => {
		Router.router.pathname = '/invalid';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToWork(e);
		const current = instance.state.active;

		expect(instance.state.active).toBe(current);
	});
});

describe('Links Transition: Contact', () => {
	test('From Home', () => {
		Router.router.pathname = '/';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToContact(e);

		expect(e.preventDefault).toHaveBeenCalled();
		expect(instance.state.active).toBe('contact');
		expect(Keen.recordEvent).toHaveBeenCalled();
	});

	test('From Work', () => {
		Router.router.pathname = '/work';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToContact(e);

		expect(e.preventDefault).toHaveBeenCalled();
		expect(instance.state.active).toBe('contact');
		expect(Keen.recordEvent).toHaveBeenCalled();
	});

	test('From About', () => {
		Router.router.pathname = '/about';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToContact(e);

		expect(e.preventDefault).toHaveBeenCalled();
		expect(instance.state.active).toBe('contact');
		expect(Keen.recordEvent).toHaveBeenCalled();
	});

	test('Invalid Call', () => {
		Router.router.pathname = '/invalid';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToContact(e);
		const current = instance.state.active;

		expect(instance.state.active).toBe(current);
	});
});

describe('Links Transition: Main', () => {
	test('From Contact', () => {
		Router.router.pathname = '/contact';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToMain(e);

		expect(e.preventDefault).toHaveBeenCalled();
		expect(instance.state.active).toBe('hello');
		expect(Keen.recordEvent).toHaveBeenCalled();
	});

	test('From Work', () => {
		Router.router.pathname = '/work';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToMain(e);

		expect(e.preventDefault).toHaveBeenCalled();
		expect(instance.state.active).toBe('hello');
		expect(Keen.recordEvent).toHaveBeenCalled();
	});

	test('From About', () => {
		Router.router.pathname = '/about';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToMain(e);

		expect(e.preventDefault).toHaveBeenCalled();
		expect(instance.state.active).toBe('hello');
		expect(Keen.recordEvent).toHaveBeenCalled();
	});

	test('Invalid Call', () => {
		Router.router.pathname = '/invalid';

		const wrapper = shallow(<Links />);
		const instance = wrapper.instance();
		const e = {
			preventDefault: jest.fn(),
		};

		instance.goToMain(e);
		const current = instance.state.active;

		expect(instance.state.active).toBe(current);
	});
});
