const { test, expect } = require("@playwright/test");

test.describe("Iframe tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/virtual-sports/1");
  });

  test("click",  ({ page }) => {
     page
      .frameLocator('[title="https://mvs.betcoapps.com"]')
      .locator("text='Virtual Tennis'")
      .click();
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });
});
