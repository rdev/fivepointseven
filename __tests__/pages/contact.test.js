import React from 'react';
import Router from 'next/router';
import { shallow } from 'enzyme';
import ContactPage from '../../pages/contact';

Router.router = {
	push: () => {},
	prefetch: () => {},
};

describe('Contact Page', () => {
	test('App renders about page', () => {
		const wrapper = shallow(<ContactPage />);

		expect(wrapper.find('.contact-container')).toHaveLength(1);
	});

	test('Set success', () => {
		const wrapper = shallow(<ContactPage />);
		const instance = wrapper.instance();

		instance.setSuccess(true);

		expect(instance.state.success).toBeTruthy();
	});
});
