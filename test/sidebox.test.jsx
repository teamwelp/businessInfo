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
    expect(wrapper.find('span').html()).toBe('<span><b>Closed today</b></span>');
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

describe('render component ', () => {
  const sideboxRender = shallow(<Sidebox data={starterData} />);
  const contentBox = sideboxRender.find('.contentBox');
  test('render hours open', () => {
    Date.now = jest.fn(() => new Date('June 4, 2018 11:00:00').valueOf());
    expect(contentBox.first().html()).toBe('<div class="contentBox"><span class="hoursToday"><span>Today <b>9:00 am - 6:00 pm</b></span></span><span class="openNow"><b>Open now</b></span></div>');
  });
  test('render full menu', () => {
    expect(contentBox.at(1).html()).toBe('<div class="contentBox"><a href="https://www.yelp.com/menu/gary-danko-san-francisco" class="menu">Full menu</a></div>');
  });
  test('render price range', () => {
    expect(contentBox.at(2).html()).toBe('<span class="contentBox">Price Range <b>$29-38</b></span>');
  });
  test('render health inspection', () => {
    expect(contentBox.last().html()).toBe('<div class="contentBox"><a class="boldLink" href="https://www.yelp.com/inspections/gary-danko-san-francisco">Health Inspection</a><span class="healthtext">88 out of 100</span></div>');
  });
});
