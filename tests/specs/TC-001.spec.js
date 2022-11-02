const { test, expect } = require("@playwright/test");
const { MainPage } = require("../pages/Main.page");

test("Checking the header menu visibility on the test site ", async ({ page }) => {
  // go to the test site
  const mainPage = new MainPage(page);
  await mainPage.goto();
  await mainPage.close__CookiesMessageBox();

  // //isDisplayed
  // const mainMenuSelector = '[id="main-menu"]';
  // // const mainMenuSelector = '[id="footer"]';
  // await expect(page.locator(mainMenuSelector)).toBeVisible();

  // //isDisplayedInViewport
  // const box = await page.locator(mainMenuSelector).boundingBox(); // it contains x, y, width, and height only
  // let isVisible = await page.evaluate((mainMenuSelector) => {
  //   let isVisible = false;
  //   let element = document.querySelector(mainMenuSelector);
  //   if (element) {
  //     let rect = element.getBoundingClientRect();
  //     if (rect.top >= 0 && rect.left >= 0) {
  //       const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  //       const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  //       if (rect.right <= vw && rect.bottom <= vh) {
  //         isVisible = true;
  //       }
  //     }
  //   }
  //   return isVisible;
  // }, mainMenuSelector);
  // await expect(isVisible).toBeTruthy();
});
