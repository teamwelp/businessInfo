const puppeteer = require('puppeteer');
const {open, find, close} = require('../database/db-find');

describe('test end-to-end server', async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  test('test static html', async () => {
    await page.goto('http://127.0.0.1:9001/');
    await page.waitForSelector('#app');
    const html = await page.$eval('#app', e => e.innerHTML);
    expect(html).toBeDefined();
  });
  test('test biz info called on basis of url', async () => {
    await page.goto('http://127.0.0.1:9001/biz/300');
    await page.waitForSelector('.header__name___uwB32')
    const text = await page.$eval('.header__name___uwB32', e => e.textContent);
    expect(text).toBe('John\'s Hot Dog Saloon');
  });
});

describe('test database retrieve', () => {
  test('test db find', async () => {
    open();
    await find(300)
      .then((data) => {
        expect(data[0].id).toBe(300);
      });
    close();
  });
});
