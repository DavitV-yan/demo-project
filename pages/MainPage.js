const loginBtn = "text='Sign In'";

exports.MainPage = class MainPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async clickOnSignInBtn() {
        await this.page.click(loginBtn);
    }
}
