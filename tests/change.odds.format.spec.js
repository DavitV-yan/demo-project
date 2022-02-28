const { test, expect } = require("@playwright/test");

test.describe("Change odds format tests", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("http://localhost:3000/sport/Soccer/Spain/545");
    });

    test('Change odds format to Decimal', async({page}) => {
        await page.locator("[data-testid='selectLabel']").last().click();
        await page.locator("[data-value='odds_decimal']").click();
        await expect(page.locator(".marketContainer > div > span").first()).toContainText('.');
    })

    test('Change odds format to Fractional', async({page}) => {
        await page.locator("[data-testid='selectLabel']").last().click();
        await page.locator("[data-value='odds_fractional']").click();
        await expect(page.locator(".marketContainer > div > span").first()).toContainText('/');
    })

    test('Change odds format to American', async({page}) => {
        await page.locator("[data-testid='selectLabel']").last().click();
        await page.locator("[data-value='odds_american']").click();
        await (await expect(page.locator(".marketContainer > div > span").first()).toContainText(/[-+]/));
    })

    test('Change odds format to Hongkong', async({page}) => {
        await page.locator("[data-testid='selectLabel']").last().click();
        await page.locator("[data-value='odds_hongKong']").click();
        await expect(page.locator(".marketContainer > div > span").first()).toContainText('.');
    })

    test('Change odds format to Malay', async({page}) => {
        await page.locator("[data-testid='selectLabel']").last().click();
        await page.locator("[data-value='odds_malay']").click();
        await expect(page.locator(".marketContainer > div > span").first()).toContainText(/[.-]/);
    })

    test('Change odds format to Indo', async({page}) => {
        await page.locator("[data-testid='selectLabel']").last().click();
        await page.locator("[data-value='odds_indo']").click();
        await expect(page.locator(".marketContainer > div > span").first()).toContainText(/[.-]/);
    })


  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000);
    await page.close();
  });
});