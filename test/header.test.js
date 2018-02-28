import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/dev/index';

Enzyme.configure({ adapter: new Adapter() });

describe('Header Component', () => {
  test('renders a component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
  test('renders restaurant name from starter data', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toBe('Oleg\'s Burger Palace');
  });
  test('renders restaurant claimedByOwner from starter data', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h3').text()).toBe('Restaurant Claimed By Owner: true');
  });
  test('renders restaurant metatags', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h2').text()).toBe('Soul Food, Bars, Dinner, Brunch');
  });
});
