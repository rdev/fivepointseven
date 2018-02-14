import React from 'react';
import Router from 'next/router';
import { mount, shallow } from 'enzyme';
import MainPage from '../../pages/index';
import Keen from '../../lib/keen';

Router.router = {
	push: () => {},
	prefetch: () => {},
	query: {
		nospin: true,
	},
};

Keen.recordEvent = jest.fn();

describe('Index Page', () => {
	test('App renders index page', () => {
		const wrapper = mount(<MainPage />);

		expect(wrapper.find('.home-container')).toHaveLength(1);
		expect(wrapper.find('.home-welcome')).toHaveLength(1);
	});

	test('Initial props', async () => {
		const compareProps = {
			query: {
				test: 'test-value',
			},
			pathname: 'testpath',
		};

		const initialProps = await MainPage.getInitialProps(compareProps);

		expect(initialProps.query.test).toEqual(compareProps.query.test);
		expect(initialProps.pathname).toEqual(compareProps.pathname);
	});

	test('Business card visit track', async () => {
		Router.router = {
			...Router.router,
			query: {
				bc: '',
			},
		};
		shallow(<MainPage />);

		expect(Keen.recordEvent).toHaveBeenCalledWith('bc_pageview');
	});
});
