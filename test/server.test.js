const puppeteer = require('puppeteer');

describe('test end-to-end server', async () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
    });
    page = await browser.newPage();
    console.log('set up');
  });
  test('test static html', async () => {
    await page.goto('http://127.0.0.1:9001/biz/300');
    await page.waitForSelector('#businessInfoHeader');
    const html = await page.$eval('#businessInfoHeader', e => e.innerHTML);
    expect(html).toBeDefined();
  });
  test('test biz info called on basis of url', async () => {
    await page.goto('http://127.0.0.1:9001/biz/300');
    await page.waitForSelector('.header__name___uwB32')
    const text = await page.$eval('.header__name___uwB32', e => e.textContent);
    expect(text).toBe('John\'s Hot Dog Saloon Unclaimed');
  });
});
