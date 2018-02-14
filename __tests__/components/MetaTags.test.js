import { shallow } from 'enzyme';
import MetaTags from '../../components/MetaTags';

describe('Meta Tags', () => {
	test('App renders index page', () => {
		const wrapper = shallow(<MetaTags />);

		expect(wrapper.find('meta')).toHaveLength(7);
		expect(wrapper.find('link')).toHaveLength(16);
	});
});
