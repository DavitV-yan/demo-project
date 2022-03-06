// const { test, expect } = require("@playwright/test");

// test.describe.parallel("Check remember me funtion", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto("http://localhost:3000/");
//   });

//   test("Select remember me", async ({ page }) => {
//     await page.locator("text='Login'").click();
//     await page.locator("#userName").fill("davit.vardanyan@betconstruct.com");
//     await page.locator("#password").fill("Test1234");
//     await page.locator("[for='remember_me']").click();
    
//    // expect(rememberMe).value
//     await page.locator("text='sign_in'").click();
//     const localStorage = await page.evaluate(() =>
//     JSON.stringify(window.localStorage)
//   );
//  // console.log(localStorage);
//   });

//   test.afterEach(async ({ page }) => {
//     await page.waitForTimeout(5000);
//     await page.close();
//   });
// });
