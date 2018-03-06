const puppeteer = require('puppeteer');

test('test static html', async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  await page.goto('http://127.0.0.1:3000/');
  await page.waitForSelector('#app');
  const html = await page.$eval('#app', e => e.innerHTML);
  expect(html).toBeDefined();
});
