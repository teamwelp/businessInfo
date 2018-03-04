import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import puppeteer from 'puppeteer';
import renderer from 'react-test-renderer';
import Sidebox from '../client/dev/sidebox';
import starterData from './starterdata';
import { getTodaysHours, getTodaysHoursContent, RenderHoursToday } from '../client/dev/sidebox-date-helpers';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });
Date.now = jest.fn(() => new Date('June 4, 2018').valueOf());

describe('Sidebox Helpers Unit Test', () => {
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
    expect(wrapper.find('span').html()).toBe('<span>Today <em>9:00 am - 6:00 pm</em></span>');
  });
  test('if closed today, renders correct message', () => {
    const newStart = Object.assign(starterData);
    delete newStart.hours.Mon.open;
    const todaysHours = getTodaysHours(newStart.hours);
    const wrapper = shallow(<RenderHoursToday todaysHours={todaysHours} />);
    expect(wrapper.find('span').html()).toBe('<span>Closed today</span>');
  });
});
