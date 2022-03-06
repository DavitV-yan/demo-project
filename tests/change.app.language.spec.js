const { test, expect } = require("@playwright/test");

test.describe.parallel("Change app language tests", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("http://localhost:3000/");
    });

    test('Change app language to Armenain', async({page}) => {
        await page.locator("[data-testid='selectLabel']").first().click();
        await page.locator("[data-value='arm']").click();
        await expect(page.locator("[href='/sport/Soccer']").first()).toHaveText("Ֆուտբոլ");
    })
    
    test('Change app language to English', async({page}) => {
        await page.locator("[data-testid='selectLabel']").first().click();
        await page.locator("[data-value='eng']").click();
        await expect(page.locator("[href='/sport/Soccer']").first()).toHaveText("Football");
    })

    test('Change app language to Russian', async({page}) => {
        await page.locator("[data-testid='selectLabel']").first().click();
        await page.locator("[data-value='rus']").click();
        await expect(page.locator("[href='/sport/Soccer']").first()).toHaveText("Футбол");
    })

    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(5000);
        await page.close();
      });
    });