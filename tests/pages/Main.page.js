const { BasePage } = require("./Base.page");

exports.MainPage = class MainPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    super(page);
    this.page = page;
    this.url__testSite = "https://telnyx.com";
  }

  async goto() {
    await super.goto(this.url__testSite);
  }
};
