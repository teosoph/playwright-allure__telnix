const { test, expect } = require("@playwright/test");
const { MainPage } = require("../pages/Main.page");

test("TC-001 Checking the header menu visibility on the test site ", async ({ page }) => {
  // Go to the test site
  const mainPage = new MainPage(page);
  await mainPage.goto();
  await mainPage.close__CookiesMessageBox();

  // Check if the main menu is displayed
  await expect(mainPage.locator__mainMenu).toBeVisible();
});
