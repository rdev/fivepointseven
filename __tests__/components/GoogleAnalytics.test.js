import { shallow } from 'enzyme';
import GoogleAnalytics from '../../components/GoogleAnalytics';

describe('Google Analytics', () => {
	test('Load and intialize Google Analytics', () => {
		const wrapper = shallow(<GoogleAnalytics />);

		expect(wrapper.find('script')).toHaveLength(2);
	});
});
