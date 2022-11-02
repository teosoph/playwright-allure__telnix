exports.BasePage = class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.cookies__CloseButton = page.locator('button[aria-label="close and deny"]');
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async close__CookiesMessageBox() {
    if (this.cookies__CloseButton !== null) {
      await this.cookies__CloseButton.click();
    }
  }
};
