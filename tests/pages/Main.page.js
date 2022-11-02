const { BasePage } = require("./Base.page");

exports.MainPage = class MainPage extends BasePage {
  constructor(page, validUserData) {
    super(page, validUserData);
    this.validUserData = validUserData;
    this.url__testSite = "https://telnyx.com";
  }
  async goto() {
    await super.goto(this.url__testSite);
  }

  // TC-001
  get locator__mainMenu() {
    return this.page.locator("header>div>div>div>ul");
  }

  // TC-002
  get locator__input_sighUp() {
    return this.page.locator("input[name='email']");
  }
  async fill_email__input_sighUp() {
    await this.locator__input_sighUp.fill(this.validUserData.email);
  }
  async check_email__input_sighUp() {
    await expect(this.locator__input_sighUp).toHaveValue(this.email);
  }
};
