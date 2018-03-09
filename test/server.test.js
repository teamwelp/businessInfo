import puppeteer from 'puppeteer';

let browser;
let page;

describe('Google', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
    });
    page = await browser.newPage(); 
    await page.goto('http://127.0.0.1:9001/biz/200');
  }, 15000);
  afterAll(() => {
    browser.close();
  });
  it('should display "Phone" text on page', async () => {
    await expect(page).toMatch('Phone');
  }, 15000);
});
