const { launch } = require("qawolf");
const selectors = require("../selectors/browsing");

describe('browsing', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "http://localhost:3000/" });
  });

  afterAll(() => browser.close());

  it('can click "anozon.me" footer', async () => {
    await browser.click(selectors[0]);
  });

  it('can click "about" link', async () => {
    await browser.click(selectors[1]);
  });

  it('can click "Top" link', async () => {
    await browser.click(selectors[2]);
  });
});