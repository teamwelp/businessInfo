import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import puppeteer from 'puppeteer';
import renderer from 'react-test-renderer';
import starterData from './starterdata';
import Header from '../client/dev/header';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Header data={starterData} />);

describe('Upper Header Component Test', () => {
  test('renders a component', () => {
    expect(wrapper.find('.header')).toHaveLength(1);
  });
  test('renders restaurant name from starter data', () => {
    expect(wrapper.find('.name').text()).toBe('Oleg\'s Burger Palace');
  });
  test('renders restaurant claimedByOwner from starter data', () => {
    expect(wrapper.find('.claimed').text()).toBe('Claimed');
  });
  test('renders restaurant metatags', () => {
    expect(wrapper.find('.metatags').text()).toBe('Soul Food, Bars, Dinner, Brunch');
  });
});

describe('Lower Header Component Test', () => {
  test('renders correct address', () =>  {
    expect(wrapper.find('.addressPhone').first().text()).toBe('301 Mission StreetSan Francisco, CA 94103');
  });
  test('renders correct phone number', () => {
    expect(wrapper.find('.addressPhone').last().text()).toBe('(415) 421-7940');
  });
  test('renders correct link text', () => {
    expect(wrapper.find('.contactLink').first().text()).toBe('http://olegsburgerpalace.com');
  });
  test('renders correct phone text', () => {
    expect(wrapper.find('.contactLink').last().text()).toBe('Send to your Phone');
  });
});


describe('Header Component Snapshot Test', () => {
  test('renders correctly', () => {
    const newSnap = renderer
      .create(<Header data={starterData} />)
      .toJSON();
    expect(newSnap).toMatchSnapshot();
  });
})

describe('Header Component End-to-End Test', () => {
  test('rendering from server', async () => {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/biz/200/');
    await page.waitForSelector('.header__name___uwB32');
    const html = await page.$eval('.header__name___uwB32', e => e.innerHTML);
    expect(html).toBe('Oleg\'s Burger Palace');
  }, 15000);
});
