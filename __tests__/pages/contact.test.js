import React from 'react';
import Router from 'next/router';
import { shallow, mount } from 'enzyme';
import ContactPage from '../../pages/contact';
import ErrorMessage from '../../components/contact-page/ErrorMessage';
import ContactForm from '../../components/contact-page/ContactForm';
import { sleep } from '../../lib/utils';
import Keen from '../../lib/keen';

Router.router = {
	push: () => {},
	prefetch: () => {},
};

Keen.recordEvent = jest.fn();

describe('Contact Page', () => {
	beforeAll(() => {
		window.fetch = jest.fn().mockImplementation(() =>
			Promise.resolve({
				status: 200,
				text: jest.fn(() => Promise.resolve('test error')),
			}));
	});

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

	test('Render contact form component', () => {
		const wrapper = mount(<ContactForm />);

		expect(wrapper.find('form')).toHaveLength(1);
	});

	test('Handle form submit error', () => {
		const wrapper = mount(<ContactForm />);
		const instance = wrapper.instance();

		const e = {
			preventDefault: jest.fn(),
		};

		instance.handleSubmit(e);

		expect(e.preventDefault).toHaveBeenCalled();
	});

	test('Handle successful form submit', () => {
		const wrapper = mount(<ContactForm />);
		const instance = wrapper.instance();

		const e = {
			preventDefault: jest.fn(),
		};

		wrapper.find('input#email').simulate('change', { target: { value: 'test@mail.com' } });
		wrapper.find('textarea').simulate('change', { target: { value: 'Valid message body' } });

		instance.handleSubmit(e);

		expect(e.preventDefault).toHaveBeenCalled();
		expect(Keen.recordEvent).toHaveBeenCalled();
	});

	test('Log social visit', () => {
		ContactForm.logSocialLink('test');

		expect(Keen.recordEvent).toHaveBeenCalledWith('social_link', {
			name: 'test',
		});
	});

	test('Render hidden error message', () => {
		const wrapper = shallow(<ErrorMessage />);

		expect(wrapper.find('span')).toHaveLength(1);
		expect(wrapper.find('span').hasClass('visible')).toBeFalsy();
		expect(wrapper.find('span').hasClass('hiding')).toBeFalsy();
	});

	test("Don't display message without valid props", async () => {
		const wrapper = shallow(<ErrorMessage />);
		const instance = wrapper.instance();
		const previousState = { ...instance.state };

		wrapper.setProps({});
		expect(instance.state).toEqual(previousState);
	});

	test('Display and hide error message', async () => {
		jest.setTimeout(7000);
		const wrapper = shallow(<ErrorMessage />);
		const instance = wrapper.instance();

		wrapper.setProps({ message: 'test message' });

		expect(instance.state.visible).toBeTruthy();
		expect(instance.state.hiding).toBeFalsy();
		expect(wrapper.find('span').hasClass('visible')).toBeTruthy();
		await sleep(6.1);
		expect(instance.state.visible).toBeFalsy();
		expect(instance.state.hiding).toBeTruthy();
		await sleep(0.6);
		expect(instance.state.visible).toBeFalsy();
		expect(instance.state.hiding).toBeFalsy();
	});

	test('Social links', () => {
		ContactForm.logSocialLink = jest.fn();
		const wrapper = shallow(<ContactForm />);

		wrapper.find({ href: '/_/linkedin' }).simulate('click');
		expect(ContactForm.logSocialLink).toBeCalledWith('linkedin');

		wrapper.find({ href: '/_/twitter' }).simulate('click');
		expect(ContactForm.logSocialLink).toBeCalledWith('twitter');

		wrapper.find({ href: '/_/github' }).simulate('click');
		expect(ContactForm.logSocialLink).toBeCalledWith('github');

		wrapper.find({ href: '/_/telegram' }).simulate('click');
		expect(ContactForm.logSocialLink).toBeCalledWith('telegram');

		wrapper.find({ href: '/_/email' }).simulate('click');
		expect(ContactForm.logSocialLink).toBeCalledWith('email');
	});
});
