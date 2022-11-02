const { test, expect } = require("@playwright/test");
const { MainPage } = require("../pages/Main.page");

test("TC-002 Check registration possibility through `Try for free ->` field with valid credentials", async ({ page }) => {
  // Go to the test site
  const mainPage = new MainPage(page);
  await mainPage.goto();
  await mainPage.close__CookiesMessageBox();

  // Check if the main menu is displayed
  await mainPage.fill_email__input_sighUp();
  // await mainPage.check_email__input_sighUp();
  await page.pause(5000);
});
