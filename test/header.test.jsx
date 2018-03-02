import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../client/dev/header';
import puppeteer from 'puppeteer';
import starterData from './starterdata';
import renderer from 'react-test-renderer';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('Header Component Unit Test', () => {
  test('renders a component', () => {
    const wrapper = shallow(<Header data={starterData} />);
    expect(wrapper.find('.header')).toHaveLength(1);
  });
  test('renders restaurant name from starter data', () => {
    const wrapper = shallow(<Header data={starterData} />);
    expect(wrapper.find('.name').text()).toBe('Oleg\'s Burger Palace');
  });
  test('renders restaurant claimedByOwner from starter data', () => {
    const wrapper = shallow(<Header data={starterData} />);
    expect(wrapper.find('.claimed').text()).toBe('Claimed');
  });
  test('renders restaurant metatags', () => {
    const wrapper = shallow(<Header data={starterData} />);
    expect(wrapper.find('.metatags').text()).toBe('Soul Food, Bars, Dinner, Brunch');
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
  test('rendering default page from server', async () => {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000/');
    await page.waitForSelector('.header__name___uwB32');
    const html = await page.$eval('.header__name___uwB32', e => e.innerHTML);
    expect(html).toBe('Oleg\'s Burger Palace');
  }, 10000);
});
