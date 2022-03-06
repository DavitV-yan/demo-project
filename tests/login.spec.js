const { test, expect } = require("@playwright/test");

test.describe.parallel("Login tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("Login with valid credentials", async ({ page }) => {
    await page.locator("text='Login'").click();
    await page.locator("#userName").fill("davit.vardanyan@betconstruct.com");
    await page.locator("#password").fill("Test1234");
    await page.locator("text='sign_in'").click();
    await expect(
      page.locator("[data-testid='balance-currency']")
    ).toContainText("AMD");
  });

  test("Login with invalid username and valid password", async ({ page }) => {
    await page.locator("text='Login'").click();
    await page.locator("#userName").fill("davit.vardanyan@gmail.com");
    await page.locator("#password").fill("Test1234");
    await page.locator("text='sign_in'").click();
    await expect(page.locator(".danger > p")).toContainText(
      "Invalid Username and/or password"
    );
  });

  test("Login with valid username and invalid password", async ({ page }) => {
    await page.locator("text='Login'").click();
    await page.locator("#userName").fill("davit.vardanyan@betconstruct.com");
    await page.locator("#password").fill("Test12345");
    await page.locator("text='sign_in'").click();
    await expect(page.locator(".danger > p")).toContainText(
      "Invalid Username and/or password"
    );
  });
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(10000);
    await page.close();
  });
});
