import React from 'react';
import Router from 'next/router';
import { shallow, mount } from 'enzyme';
import WorkPage from '../../pages/work';
import ProjectBrief from '../../components/work-page/ProjectBrief';
import * as utils from '../../lib/utils';
import Keen from '../../lib/keen';
import projects from '../../lib/portfolio-items';

Router.router = {
	push: jest.fn(),
	prefetch: () => {},
};
Keen.recordEvent = jest.fn();

utils.isMobileDevice = jest.fn();
utils.log = jest.fn();

describe('Contact Page', () => {
	test('Initial props', async () => {
		const compareProps = {
			query: {
				selected: 'test',
			},
		};

		const initialProps = await WorkPage.getInitialProps(compareProps);

		expect(initialProps.selected).toBe(compareProps.query.selected);
	});

	test('App renders about page', () => {
		const wrapper = shallow(<WorkPage />);

		expect(wrapper.find('.work-container')).toHaveLength(1);
	});

	test('Select item', async () => {
		utils.isMobileDevice.mockReturnValue(false);
		const wrapper = shallow(<WorkPage />);
		const instance = wrapper.instance();

		await instance.selectItem({
			name: 'test',
		});

		expect(Keen.recordEvent).toHaveBeenCalledWith('portfolio_project_selected', {
			name: 'test',
		});
	});

	test('Render project list', async () => {
		const wrapper = mount(<WorkPage />);

		expect(wrapper.find('.work-box-list')).toHaveLength(1);
	});

	test('Go to project', async () => {
		const wrapper = shallow(<ProjectBrief project={projects[0]} />);
		const instance = wrapper.instance();

		const e = {
			preventDefault: jest.fn(),
		};

		await instance.goToProject(e);
		expect(e.preventDefault).toBeCalled();
		expect(Router.router.push).toHaveBeenCalledWith('/work/my-website');
	});
});
