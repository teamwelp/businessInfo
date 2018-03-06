import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SideHours from '../client/dev/sideHours';
import DayHours from '../client/dev/dayHours';
import starterData from './starterdata';

Enzyme.configure({ adapter: new Adapter() });
const { shallow } = Enzyme;

describe('Sidebar Hours Widget', () => {
  const sideHours = shallow(<SideHours data={starterData} />);
  test('renders Hours content component for each day of week', () => {
    expect(sideHours.find('.hoursTable').children()).toHaveLength(7);
  });
});

describe('Day Hours Component - row of Sidebar Hours', () => {
  const mondayHours = shallow(<DayHours day={starterData.hours.Mon} />);
  test('renders day for Monday', () => {
    expect(mondayHours.find('.day').text()).toBe('Mon');
  });
  test('renders day hours for Monday', () => {
    expect(mondayHours.find('.dayHours').text()).toBe('9:00 am - 6:00 pm');
  });
  test('renders if it is open for Monday', () => {
    expect(mondayHours.find('.isOpen').text()).toBe('Open now');
  });
});
