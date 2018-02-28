import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/dev/index';

Enzyme.configure({ adapter: new Adapter()} );

test('renders a component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h1')).toHaveLength(1);
});
