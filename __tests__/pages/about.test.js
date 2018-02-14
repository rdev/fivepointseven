import React from 'react';
import Router from 'next/router';
import { mount, shallow } from 'enzyme';
import AboutPage from '../../pages/about';
import AboutParagraph from '../../components/about-page/AboutParagraph';
import FrameworksModal from '../../components/about-page/FrameworksModal';
import * as utils from '../../lib/utils';
import * as log from '../../lib/log';
import Keen from '../../lib/keen';

Router.router = {
	push: () => {},
	prefetch: () => {},
};

utils.addClass = jest.fn();
utils.removeClass = jest.fn();
log.log = jest.fn();
Keen.recordEvent = jest.fn();

describe('About Page', () => {
	test('App renders about page', () => {
		const wrapper = mount(<AboutPage />);

		expect(wrapper.find('.about-container')).toHaveLength(1);
		expect(wrapper.find('.about-paragraph')).toHaveLength(1);
	});

	test('Framework modal present on page', () => {
		const wrapper = mount(<AboutPage />);

		expect(wrapper.find('.frameworks-modal')).toHaveLength(1);
	});

	test('Show framework modal', async () => {
		const e = {
			preventDefault: jest.fn(),
		};

		await AboutParagraph.showFrameworksModal(e);

		expect(e.preventDefault).toHaveBeenCalled();
	});

	test('Select framework in modal', async () => {
		const wrapper = shallow(<FrameworksModal />);
		const instance = wrapper.instance();

		await instance.selectItem('electron');

		expect(instance.state.selectedItem).toBe('electron');
		expect(utils.addClass).toHaveBeenCalled();
		expect(utils.removeClass).toHaveBeenCalled();
		expect(Keen.recordEvent).toHaveBeenCalled();
	});

	test('Close frameworks modal', async () => {
		utils.addClass = jest.fn();
		utils.removeClass = jest.fn();

		await FrameworksModal.closeModal();

		expect(utils.addClass).toHaveBeenCalledTimes(2);
		expect(utils.removeClass).toHaveBeenCalledTimes(4);
	});
});
