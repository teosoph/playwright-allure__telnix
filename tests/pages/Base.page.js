exports.BasePage = class BasePage {
  constructor(page, validUserData) {
    this.page = page;
    this.cookies__CloseButton = page.locator('button[aria-label="close and deny"]');
    this.validUserData = {
      workEmail: "test123test@test.com",
      fullName: "Igor Kirich",
      password: "Test1234567890-",
      firstName: "Igor",
      lastName: "Kirich",
      phoneNumber: "677206363",
      companyWebsite: "https://www.ukr.net",
    };
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
