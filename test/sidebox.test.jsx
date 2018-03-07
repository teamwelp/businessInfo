import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Sidebox from '../client/dev/sidebox';
import starterData from './starterdata';
import { getTodaysHours, getTodaysHoursContent, RenderHoursToday, isOpen } from '../client/dev/sidebox-date-helpers';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('Sidebox Date Helpers Unit Test', () => {
  Date.now = jest.fn(() => new Date('June 4, 2018 01:00:00').valueOf());
  test('return correct hours for getTodaysHours on Monday', () => {
    expect(getTodaysHours(starterData.hours).open).toBe(9);
    expect(getTodaysHours(starterData.hours).close).toBe(18);
  });
  test('return correct formatted string on Monday', () => {
    const todaysHours = getTodaysHours(starterData.hours);
    expect(getTodaysHoursContent(todaysHours)).toBe('9:00 am - 6:00 pm');
  });
  test('render correct hours on Monday test data', () => {
    const todaysHours = getTodaysHours(starterData.hours);
    const wrapper = shallow(<RenderHoursToday todaysHours={todaysHours} />);
    expect(wrapper.find('span').html()).toBe('<span>Today <b>9:00 am - 6:00 pm</b></span>');
  });
  test('if closed today, renders correct message', () => {
    const todaysHours = false;
    const wrapper = shallow(<RenderHoursToday todaysHours={todaysHours} />);
    expect(wrapper.find('span').html()).toBe('<span><b>Closed today</b></span>');
  });
  test('isOpen() if closed now, return false', () => {
    Date.now = jest.fn(() => new Date('June 4, 2018 01:00:00').valueOf());
    const todaysHours = getTodaysHours(starterData.hours);
    expect(isOpen(todaysHours)).toBe(false);
  });
  test('isOpen() if open, return true', () => {
    Date.now = jest.fn(() => new Date('June 4, 2018 11:00:00').valueOf());
    const todaysHours = getTodaysHours(starterData.hours);
    expect(isOpen(todaysHours)).toBe(true);
  });
});

describe('Render Component', () => {
  Date.now = jest.fn(() => new Date('June 4, 2018 11:00:00').valueOf());
  const sideboxRender = shallow(<Sidebox data={starterData} />);
  const contentBox = sideboxRender.find('.contentBox');
  test('render hours open component', () => {
    expect(sideboxRender.find('.hoursToday').text()).toBe('<RenderHoursToday />');
    expect(sideboxRender.find('.openNow').text()).toBe('Open now');
  });
  test('render full menu', () => {
    expect(sideboxRender.find('.boldLink').first().text()).toBe('Full menu');
  });
  test('render price range', () => {
    expect(contentBox.at(2).text()).toBe('Price Range\xa0\xa0$29-38');
  });
  test('render health inspection', () => {
    expect(sideboxRender.find('.boldLink').last().text()).toBe('Health Inspection');
    expect(sideboxRender.find('.healthtext').text()).toBe('\xa088 out of 100');
  });
  test('snapshot test', () => {
    const newSnap = renderer
      .create(<Sidebox data={starterData} />)
      .toJSON();
    expect(newSnap).toMatchSnapshot();
  });
});
