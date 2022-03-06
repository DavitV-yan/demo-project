const { test, expect } = require("@playwright/test");
const { MainPage } = require("../pages/MainPage");
const { UserDashboardPage, username } = require("../pages/UserDashboardPage");
const {baseTest} =require('./base.spec');

test.describe.parallel("Login tests", () => {

  test("test", async ({ page }) => {
    const mainPage = new MainPage(page);
    const userDashboardPage = new UserDashboardPage(page);
    await mainPage.clickOnSignInBtn();
    await userDashboardPage.fillEmailField();
    await userDashboardPage.fillPasswordField();
    await userDashboardPage.clickOnLoginBtn();
    await expect(page.locator(username)).toHaveText("D.");
    await userDashboardPage.clickOnUserAvatar();
    await userDashboardPage.clickOnLogout();
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(10000);
    await page.close();
  });
});
