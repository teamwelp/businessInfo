import puppeteer from 'puppeteer';

let browser;
let page;

describe('Google', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
    });
    page = await browser.newPage(); 
    await page.goto('https://google.com');
  }, 15000);
  afterAll(() => {
    browser.close();
  });
  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google');
  }, 15000);
});
