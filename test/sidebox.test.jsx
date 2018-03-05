import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import puppeteer from 'puppeteer';
import renderer from 'react-test-renderer';
import Sidebox from '../client/dev/sidebox';
import starterData from './starterdata';
import { getTodaysHours, getTodaysHoursContent, RenderHoursToday, isOpen } from '../client/dev/sidebox-date-helpers';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });
Date.now = jest.fn(() => new Date('June 4, 2018 01:00:00').valueOf());

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
    expect(wrapper.find('span').html()).toBe('<span>Today <b>9:00 am - 6:00 pm</b></span>');
  });
  test('if closed today, renders correct message', () => {
    const todaysHours = false;
    const wrapper = shallow(<RenderHoursToday todaysHours={todaysHours} />);
    expect(wrapper.find('span').html()).toBe('<span>Closed today</span>');
  });
  test('isOpen() if closed now, return false', () => {
    const todaysHours = getTodaysHours(starterData.hours);
    expect(isOpen(todaysHours)).toBe(false);
  });
  test('isOpen() if open, return true', () => {
    Date.now = jest.fn(() => new Date('June 4, 2018 11:00:00').valueOf());
    const todaysHours = getTodaysHours(starterData.hours);
    expect(isOpen(todaysHours)).toBe(true);
  });
});
